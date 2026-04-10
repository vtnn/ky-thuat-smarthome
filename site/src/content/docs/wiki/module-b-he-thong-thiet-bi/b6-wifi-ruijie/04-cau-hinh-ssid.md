---
title: "B6.04 — Cấu hình SSID & VLAN"
description: "Chuẩn tách SSID theo mô hình 2 VLAN của công ty: VLAN 1 nội bộ + VLAN 123 Guest, cách cấu hình trên Ruijie Cloud và MikroTik."
module: "b"
level: "4-6"
tags: ["WiFi", "SSID", "VLAN", "bảo mật", "MikroTik"]
---

## Mục tiêu
- Hiểu mô hình 2 VLAN của công ty và lý do thiết kế.
- Cấu hình đúng SSID trên Ruijie Cloud cho từng VLAN.
- Cấu hình MikroTik phối hợp với AP Ruijie để tách mạng khách.

---

## 1. Mô hình 2 VLAN của công ty

Công ty chỉ dùng **2 VLAN** — đủ an toàn mà không phức tạp khi bàn giao và hỗ trợ từ xa:

| VLAN | Subnet | Dùng cho | Ghi chú |
|---:|---|---|---|
| **1** (default) | 192.168.1.0/24 | Toàn bộ nội bộ: smarthome, camera, NVR, WiFi nhà, IoT | Gateway: 192.168.1.1 |
| **123** | 172.16.20.0/24 | WiFi khách (Guest) — tách hoàn toàn khỏi nội bộ | Gateway: 172.16.20.1 |

### Tại sao chỉ 2 VLAN?

- **Đơn giản**: ít VLAN = ít rule firewall = ít lỗi cấu hình = dễ debug khi có sự cố.
- **Thực tế**: trong nhà ở, thiết bị IoT (LifeSmart, đèn, ổ cắm) cần nằm cùng subnet với điện thoại/gateway để discover và điều khiển. Tách IoT ra VLAN riêng thường gây lỗi kết nối nhiều hơn lợi ích bảo mật.
- **Mục đích chính**: chỉ cần cách ly khách ra khỏi mạng nội bộ — khách không được thấy camera, NVR hay thiết bị smarthome.

### Quy tắc đặt tên SSID

- Dùng tên nhà/biệt danh + hậu tố: `KhanhCD_WiFi`, `KhanhCD_Guest`.
- Không dùng ký tự đặc biệt (!, @, #) — một số thiết bị IoT không hỗ trợ.
- Giữ tên ngắn gọn (< 20 ký tự) — hiển thị đầy đủ trên điện thoại.

---

## 2. Bảng SSID → VLAN

| SSID | VLAN | Band | Bảo mật | Client Isolation | Band Steering |
|---|---:|---|---|---|---|
| `[TenNha]_WiFi` | 1 | 2.4G + 5G | WPA2/WPA3-PSK | Tắt | Bật |
| `[TenNha]_Guest` | 123 | 2.4G + 5G | WPA2-PSK | Bật | Tắt |

Một số dự án có thể thêm SSID IoT riêng (chỉ 2.4GHz, tắt Band Steering) nhưng vẫn nằm trên **VLAN 1** — không tạo thêm VLAN. Lý do: thiết bị IoT cần cùng subnet với gateway LifeSmart để hoạt động.

---

## 3. Cấu hình SSID trên Ruijie Cloud

### SSID WiFi nhà (VLAN 1)

1. **Configuration** → **Wi-Fi** → **Add SSID**.
2. SSID Name: `[TenNha]_WiFi`.
3. Security: **WPA2-PSK/WPA3-SAE** (thiết bị mới dùng WPA3, cũ vẫn dùng WPA2).
4. Password: tối thiểu 12 ký tự, kết hợp chữ hoa, thường, số.
5. Band: **2.4GHz + 5GHz** (dual-band).
6. VLAN: **1** (hoặc không gán — mặc định là untagged = VLAN 1).
7. Band Steering: **Bật** (ưu tiên 5GHz cho thiết bị hỗ trợ).
8. Client Isolation: **Tắt** (thiết bị trong nhà cần thấy nhau — AirPlay, Chromecast, gateway LifeSmart).

### SSID Guest (VLAN 123)

1. SSID Name: `[TenNha]_Guest`.
2. Security: **WPA2-PSK** (tương thích tối đa với thiết bị khách).
3. Password: dùng mật khẩu đơn giản hơn WiFi nhà (để dễ chia sẻ cho khách).
4. Band: **2.4GHz + 5GHz**.
5. VLAN: **123**.
6. **Client Isolation: Bật** — khách không thấy thiết bị của nhau và không truy cập LAN nội bộ.
7. **Rate Limit** (tuỳ dự án): giới hạn download/upload mỗi client (ví dụ: 20Mbps down / 10Mbps up).

### SSID IoT (tuỳ chọn, vẫn VLAN 1)

Nếu dự án có nhiều thiết bị IoT và khách hàng muốn SSID riêng:

1. SSID Name: `[TenNha]_IoT`.
2. Security: **WPA2-PSK**.
3. Band: **Chỉ 2.4GHz** — đèn thông minh, ổ cắm, cảm biến chỉ hỗ trợ 2.4GHz.
4. VLAN: **1** (cùng VLAN nội bộ — không tách riêng).
5. Band Steering: **Tắt**.
6. Client Isolation: **Tắt** (gateway LifeSmart cần thấy sensor).

---

## 4. Cấu hình VLAN trên Router (MikroTik)

SSID Guest trên Ruijie Cloud sẽ tag traffic vào VLAN 123. Router MikroTik cần nhận tag này và xử lý.

Dưới đây là config mẫu dựa trên script thực tế của công ty:

### Tạo Bridge và VLAN

```
/interface bridge
add add-dhcp-option82=yes dhcp-snooping=yes igmp-snooping=yes name=BridgeLAN

/interface bridge port
add bridge=BridgeLAN interface=ether2
add bridge=BridgeLAN interface=ether3
add bridge=BridgeLAN interface=ether4
add bridge=BridgeLAN interface=ether5

/interface vlan
add interface=BridgeLAN name=Home vlan-id=123
```

Giải thích:
- **BridgeLAN** gom ether2-ether5 thành 1 bridge — tất cả thiết bị nội bộ kết nối qua đây.
- **Home** là VLAN interface với ID 123 — traffic tagged 123 từ AP sẽ đi vào interface này.
- ether1 dành cho WAN (PPPoE hoặc DHCP Client từ modem nhà mạng).

### Gán IP cho nội bộ và Guest

```
/ip address
add address=192.168.1.1/24 interface=BridgeLAN network=192.168.1.0
add address=172.16.20.1/24 interface=Home network=172.16.20.0
```

### DHCP Server

```
/ip pool
add name=Day_IP_LAN ranges=192.168.1.70-192.168.1.254
add name=Day_IP_Home ranges=172.16.20.20-172.16.20.254

/ip dhcp-server
add address-pool=Day_IP_LAN disabled=no interface=BridgeLAN lease-time=3h name=DHCP_LAN
add address-pool=Day_IP_Home disabled=no interface=Home name=DHCP_Home

/ip dhcp-server network
add address=192.168.1.0/24 dns-server=8.8.8.8,1.1.1.1 gateway=192.168.1.1
add address=172.16.20.0/24 dns-server=1.1.1.1,8.8.8.8 gateway=172.16.20.1
```

Lưu ý:
- Dải DHCP nội bộ bắt đầu từ .70 — dải .2 đến .69 dành cho IP tĩnh (NVR ở .30, camera từ .31, AP, switch, hub smarthome...).
- Dải Guest bắt đầu từ .20 — đủ rộng cho khách.
- DNS dùng Google (8.8.8.8) và Cloudflare (1.1.1.1).

### NAT (Masquerade)

```
/ip firewall nat
add action=masquerade chain=srcnat out-interface=pppoe-out1
```

Rule masquerade này cho phép cả VLAN 1 và VLAN 123 ra Internet qua WAN. Không cần rule riêng cho từng VLAN vì masquerade áp dụng cho tất cả traffic đi ra interface WAN.

### Firewall — Cách ly Guest

MikroTik mặc định cho phép forward giữa các interface. Cần thêm rule chặn Guest truy cập nội bộ:

```
/ip firewall filter
add chain=forward action=fasttrack-connection connection-state=established,related
add chain=forward action=accept connection-state=established,related
add chain=forward action=drop connection-state=invalid
add chain=forward action=drop src-address=172.16.20.0/24 dst-address=192.168.1.0/24 comment="Guest khong vao noi bo"
```

Thứ tự rule quan trọng:
1. **FastTrack** + **Accept established/related** — tăng tốc traffic đã thiết lập.
2. **Drop invalid** — chặn packet lỗi.
3. **Drop Guest → LAN** — chặn Guest truy cập 192.168.1.0/24.
4. Traffic Guest → Internet không bị chặn vì destination không phải 192.168.1.0/24.

---

## 5. Trunk port trên Switch PoE

Switch PoE Ruijie cần cấu hình port để truyền VLAN 123 cho AP:

1. Ruijie Cloud → **Devices** → chọn Switch → **Port Configuration**.
2. Port uplink (nối Router): **Trunk**, native VLAN = 1, allowed VLAN = 1, 123.
3. Port nối AP: **Trunk**, native VLAN = 1, allowed VLAN = 1, 123 (AP cần nhận cả 2 VLAN để phát 2 SSID).
4. Port nối thiết bị khác (NVR, camera, PC): **Access**, VLAN 1.

Lưu ý: VLAN 1 là native (untagged) nên traffic VLAN 1 đi qua trunk không cần tag — chỉ VLAN 123 được tagged.

---

## 6. Kiểm tra sau cấu hình

| Kiểm tra | Cách thực hiện | Kỳ vọng |
|---|---|---|
| WiFi nhà nhận IP đúng | Kết nối `[TenNha]_WiFi` → xem IP | 192.168.1.x |
| WiFi Guest nhận IP đúng | Kết nối `[TenNha]_Guest` → xem IP | 172.16.20.x |
| Guest không vào nội bộ | Từ Guest, ping 192.168.1.1 | Request timed out |
| Guest có Internet | Từ Guest, mở Google.com | Truy cập bình thường |
| Camera/NVR trên VLAN 1 | NVR tìm camera | Hiện đầy đủ camera |
| IoT trên VLAN 1 | App LifeSmart tìm gateway | Phát hiện và điều khiển bình thường |
| AP phát đủ SSID | Quét WiFi bằng điện thoại | Thấy cả WiFi nhà và Guest |

---

## 7. Tình huống thực tế

### Khách hàng muốn thêm SSID IoT riêng

Vẫn tạo thêm SSID trên Ruijie Cloud nhưng gán vào **VLAN 1** — không tạo thêm VLAN. SSID IoT chỉ khác ở chỗ:
- Chỉ bật 2.4GHz.
- Tắt Band Steering.
- Mật khẩu riêng.

Giải thích cho khách: "SSID IoT riêng giúp thiết bị thông minh ổn định hơn vì không bị Band Steering ép lên 5GHz. Nhưng vẫn cùng mạng nội bộ để gateway điều khiển được."

### Thiết bị IoT không kết nối được

Nguyên nhân phổ biến:
- SSID bật 5GHz → tắt, chỉ bật 2.4GHz cho IoT.
- Mật khẩu có ký tự đặc biệt → đổi mật khẩu chỉ dùng chữ + số.
- Band Steering bật → tắt cho SSID IoT.
- DHCP pool hết IP → mở rộng range trên MikroTik.
- Thiết bị IoT nhận IP VLAN 123 (Guest) thay vì VLAN 1 → kiểm tra SSID IoT đã gán VLAN 1 chưa.

### Guest phàn nàn chậm

- Kiểm tra Rate Limit trên Ruijie Cloud — có thể đang giới hạn quá thấp.
- Kiểm tra số client Guest — nếu quá nhiều thì AP quá tải.
- Kiểm tra WAN bandwidth — Guest và nội bộ chia sẻ cùng đường truyền.
