---
title: "B6.04 — Cấu hình SSID & VLAN"
description: "Chuẩn tách SSID theo VLAN (Private/Guest/IoT), cách cấu hình trên Ruijie Cloud và các rule bảo mật bắt buộc cho từng SSID."
module: "b"
level: "4-6"
tags: ["WiFi", "SSID", "VLAN", "bảo mật"]
---

## Mục tiêu
- Tách SSID theo đúng VLAN để đảm bảo bảo mật và ổn định cho IoT.
- Cấu hình đúng các rule cho Guest và IoT — tránh truy cập nội bộ trái phép.
- Hiểu tại sao phải tách VLAN và hậu quả nếu không tách.

---

## 1. Tại sao phải tách SSID/VLAN?

Nếu tất cả thiết bị (điện thoại, laptop, camera, ổ khóa thông minh, loa, máy lạnh) cùng nằm trên 1 mạng duy nhất:
- Khách đến nhà kết nối WiFi có thể thấy và truy cập NAS, máy in, camera.
- Thiết bị IoT kém bảo mật (bóng đèn, ổ cắm) nếu bị hack có thể truy cập toàn bộ mạng nội bộ.
- Quá nhiều thiết bị trên 1 broadcast domain gây chậm — nhất là thiết bị IoT hay gửi broadcast.

Giải pháp: tách thành 3 SSID trên 3 VLAN khác nhau. Router (MikroTik) quản lý traffic giữa các VLAN — chỉ cho phép những gì cần thiết.

---

## 2. Bảng SSID/VLAN chuẩn

| SSID | VLAN ID | Subnet | Dùng cho | Bảo mật |
|---|---:|---|---|---|
| `[TenNha]_Private` | 30 | 192.168.30.0/24 | Điện thoại, laptop gia đình | WPA2/WPA3-PSK, 2.4G + 5G |
| `[TenNha]_Guest` | 40 | 192.168.40.0/24 | WiFi khách, bạn bè | WPA2-PSK + Client Isolation |
| `[TenNha]_IoT` | 10 | 192.168.10.0/24 | Thiết bị smart home | WPA2-PSK, chỉ 2.4GHz |

### Quy tắc đặt tên SSID

- Dùng tên nhà/biệt danh + hậu tố chức năng: `VillaHung_Private`, `VillaHung_Guest`, `VillaHung_IoT`.
- Không dùng ký tự đặc biệt (!, @, #) — một số thiết bị IoT không hỗ trợ.
- Giữ tên ngắn gọn (< 20 ký tự) — hiển thị đầy đủ trên điện thoại.

---

## 3. Cấu hình SSID trên Ruijie Cloud

### SSID Private

1. **Configuration** → **Wi-Fi** → **Add SSID**.
2. SSID Name: `[TenNha]_Private`.
3. Security: **WPA2-PSK/WPA3-SAE** (cho phép thiết bị mới dùng WPA3, thiết bị cũ vẫn dùng WPA2).
4. Password: tối thiểu 12 ký tự, kết hợp chữ hoa, thường, số.
5. Band: **2.4GHz + 5GHz** (dual-band).
6. VLAN: **30**.
7. Band Steering: **Bật** (ưu tiên 5GHz cho thiết bị hỗ trợ).
8. Client Isolation: **Tắt** (các thiết bị trong nhà cần thấy nhau — AirPlay, Chromecast, máy in).

### SSID Guest

1. SSID Name: `[TenNha]_Guest`.
2. Security: **WPA2-PSK** (tương thích tối đa với thiết bị khách).
3. Password: dùng mật khẩu đơn giản hơn Private (để dễ chia sẻ cho khách).
4. Band: **2.4GHz + 5GHz**.
5. VLAN: **40**.
6. **Client Isolation: Bật** — khách không thấy thiết bị của nhau và không truy cập LAN nội bộ.
7. **Rate Limit** (nếu cần): giới hạn download/upload mỗi client (ví dụ: 20Mbps down / 10Mbps up).

### SSID IoT

1. SSID Name: `[TenNha]_IoT`.
2. Security: **WPA2-PSK** (thiết bị IoT phần lớn không hỗ trợ WPA3).
3. Password: mật khẩu mạnh (thiết bị IoT config 1 lần, không cần nhớ).
4. Band: **Chỉ 2.4GHz** — lý do: đèn thông minh, ổ cắm, cảm biến đều chỉ hỗ trợ 2.4GHz. Nếu bật dual-band, một số thiết bị sẽ không tìm thấy SSID.
5. VLAN: **10**.
6. Band Steering: **Tắt** (không ép 5GHz cho IoT).
7. Client Isolation: **Tắt** (thiết bị IoT cần communicate với nhau — ví dụ: gateway LifeSmart cần thấy các sensor).

---

## 4. Cấu hình VLAN trên Router (MikroTik)

SSID/VLAN trên Ruijie Cloud chỉ gán tag VLAN cho traffic. Để hoạt động, Router MikroTik phải:

### Tạo VLAN interface

```
/interface vlan
add name=vlan10-iot interface=ether2 vlan-id=10
add name=vlan30-private interface=ether2 vlan-id=30
add name=vlan40-guest interface=ether2 vlan-id=40
```

### Gán IP cho từng VLAN

```
/ip address
add address=192.168.10.1/24 interface=vlan10-iot
add address=192.168.30.1/24 interface=vlan30-private
add address=192.168.40.1/24 interface=vlan40-guest
```

### DHCP Server cho từng VLAN

```
/ip pool
add name=pool-iot ranges=192.168.10.100-192.168.10.254
add name=pool-private ranges=192.168.30.100-192.168.30.254
add name=pool-guest ranges=192.168.40.100-192.168.40.254

/ip dhcp-server
add name=dhcp-iot interface=vlan10-iot address-pool=pool-iot
add name=dhcp-private interface=vlan30-private address-pool=pool-private
add name=dhcp-guest interface=vlan40-guest address-pool=pool-guest
```

### Firewall rule giữa các VLAN

```
# Guest không được truy cập LAN nội bộ
/ip firewall filter
add chain=forward src-address=192.168.40.0/24 dst-address=192.168.0.0/16 action=drop comment="Guest no LAN access"
add chain=forward src-address=192.168.40.0/24 dst-address=0.0.0.0/0 action=accept comment="Guest Internet OK"

# IoT chỉ được ra Internet, không truy cập subnet quản trị
add chain=forward src-address=192.168.10.0/24 dst-address=192.168.1.0/24 action=drop comment="IoT no mgmt access"
add chain=forward src-address=192.168.10.0/24 dst-address=0.0.0.0/0 action=accept comment="IoT Internet OK"
```

Lưu ý thứ tự rule trong firewall MikroTik: rule drop phải đặt **trước** rule accept.

---

## 5. Trunk port trên Switch PoE

Switch PoE Ruijie cần cấu hình port kết nối với Router là **Trunk** (tagged) để truyền nhiều VLAN trên 1 cáp:

1. Ruijie Cloud → **Devices** → chọn Switch → **Port Configuration**.
2. Port uplink (nối Router): **Trunk**, allowed VLAN = 1, 10, 30, 40.
3. Port nối AP: **Trunk**, allowed VLAN = 1, 10, 30, 40 (AP cần nhận cả 3 VLAN để phát 3 SSID).
4. Port nối thiết bị khác (PC, NVR): **Access**, VLAN tương ứng.

---

## 6. Kiểm tra sau cấu hình

| Kiểm tra | Cách thực hiện | Kỳ vọng |
|---|---|---|
| Client nhận IP đúng VLAN | Kết nối WiFi Private → xem IP | 192.168.30.x |
| Client nhận IP đúng VLAN | Kết nối WiFi Guest → xem IP | 192.168.40.x |
| Client nhận IP đúng VLAN | Kết nối WiFi IoT → xem IP | 192.168.10.x |
| Guest không vào LAN | Từ Guest, ping 192.168.1.1 (router) | Request timed out |
| Guest có Internet | Từ Guest, mở Google.com | Truy cập bình thường |
| IoT có Internet | Thiết bị IoT trên app LifeSmart | Online, hoạt động bình thường |
| Thiết bị IoT thấy nhau | LifeSmart gateway tìm sensor | Phát hiện đầy đủ |

---

## 7. Tình huống thực tế

### Khách hàng không muốn chia VLAN

Một số khách hàng chỉ muốn 1 WiFi duy nhất cho đơn giản. Khi đó:
- Vẫn tạo ít nhất 2 SSID: Private + IoT.
- IoT SSID chỉ bật 2.4GHz, dùng VLAN khác.
- Giải thích: "IoT SSID riêng giúp thiết bị thông minh ổn định hơn vì không bị ảnh hưởng bởi traffic nặng từ điện thoại/laptop."

### Thiết bị IoT không kết nối được

Nguyên nhân phổ biến:
- SSID IoT bật 5GHz → tắt, chỉ bật 2.4GHz.
- Mật khẩu có ký tự đặc biệt → đổi mật khẩu đơn giản hơn.
- Band Steering bật → tắt cho SSID IoT.
- DHCP pool hết IP → mở rộng range.
