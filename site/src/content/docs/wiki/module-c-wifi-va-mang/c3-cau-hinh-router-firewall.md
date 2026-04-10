---
title: "C3 — Cấu hình Router & Firewall (MikroTik)"
description: "Script cấu hình MikroTik hoàn chỉnh: PPPoE, Bridge, VLAN 123, DHCP, NAT, Firewall, HairpinNAT, port forwarding và DDNS."
module: "c"
level: "4-6"
tags: ["router", "firewall", "NAT", "MikroTik", "PPPoE", "DDNS"]
---

## Mục tiêu
- Cấu hình MikroTik từ đầu cho một công trình mới dựa trên script mẫu của công ty.
- Hiểu từng đoạn config: WAN, Bridge, VLAN, DHCP, NAT, Firewall.
- Biết cách tuỳ biến cho từng dự án (thay tên miền DDNS, thay thông tin PPPoE).

---

## 1. Tổng quan script cấu hình

Script chia thành 2 phần — copy-paste lần lượt vào Terminal MikroTik (Winbox hoặc WebFig):

- **Phần 1**: Tạo kết nối WAN + Bridge — chạy trước, đợi MikroTik kết nối Internet.
- **Phần 2**: DHCP, NAT, Firewall, DDNS — chạy sau khi đã có Internet.

Lý do chia 2 phần: PPPoE cần kết nối thành công trước thì DDNS và các service khác mới hoạt động.

---

## 2. Phần 1 — WAN + Bridge + VLAN

```
/interface bridge
add add-dhcp-option82=yes dhcp-snooping=yes igmp-snooping=yes name=BridgeLAN

/interface pppoe-client
add add-default-route=yes default-route-distance=1 disabled=no interface=ether1 max-mtu=1500 password=[PASSWORD_NHA_MANG] user=[USERNAME_NHA_MANG]

/interface vlan
add interface=BridgeLAN name=Home vlan-id=123

/interface bridge port
add bridge=BridgeLAN interface=ether2
add bridge=BridgeLAN interface=ether3
add bridge=BridgeLAN interface=ether4
add bridge=BridgeLAN interface=ether5
```

### Giải thích

| Dòng | Ý nghĩa |
|---|---|
| `add name=BridgeLAN` | Tạo bridge gom ether2-5 thành 1 mạng LAN |
| `dhcp-snooping=yes` | Chống DHCP giả mạo — bảo mật cơ bản |
| `igmp-snooping=yes` | Tối ưu multicast (camera RTSP, IPTV) |
| `pppoe-client` | Kết nối WAN qua PPPoE (VNPT, Viettel, FPT) |
| `interface=ether1` | Port 1 dành riêng cho WAN |
| `vlan-id=123` | Tạo VLAN interface cho Guest trên bridge |

### Thay đổi cho từng dự án

- **username / password PPPoE**: lấy từ nhà mạng (hợp đồng hoặc gọi tổng đài).
- Nếu nhà mạng cấp IP tĩnh (không PPPoE): thay bằng `/ip address add address=x.x.x.x/24 interface=ether1` + default route.
- Nếu dùng modem bridge: giữ nguyên PPPoE. Nếu modem NAT: đổi sang DHCP Client trên ether1.

---

## 3. Phần 2 — DHCP, IP, DNS

Chạy sau khi PPPoE đã kết nối thành công (kiểm tra: Interfaces → pppoe-out1 → status = connected).

```
/ip address
add address=192.168.1.1/24 interface=BridgeLAN network=192.168.1.0
add address=172.16.20.1/24 interface=Home network=172.16.20.0

/ip pool
add name=Day_IP_LAN ranges=192.168.1.70-192.168.1.254
add name=Day_IP_Home ranges=172.16.20.20-172.16.20.254

/ip dhcp-server
add address-pool=Day_IP_LAN disabled=no interface=BridgeLAN lease-time=3h name=DHCP_LAN
add address-pool=Day_IP_Home disabled=no interface=Home name=DHCP_Home

/ip dhcp-server network
add address=192.168.1.0/24 dns-server=8.8.8.8,1.1.1.1 gateway=192.168.1.1
add address=172.16.20.0/24 dns-server=1.1.1.1,8.8.8.8 gateway=172.16.20.1

/ip dns
set servers=8.8.8.8,1.1.1.1
```

### Chi tiết

- DHCP nội bộ: 192.168.1.70 – .254 (dải .2 – .69 dành IP tĩnh cho camera, NVR, AP).
- DHCP Guest: 172.16.20.20 – .254.
- DNS: Google (8.8.8.8) + Cloudflare (1.1.1.1) — nhanh và ổn định tại Việt Nam.
- Lease time 3 giờ cho nội bộ — đủ ngắn để IP xoay vòng.

---

## 4. NAT & HairpinNAT

```
/ip firewall address-list
add address=192.168.1.2-192.168.1.69 list=KHONGCANBANGTAI
add address=[DOMAIN].thachanhitt.vn list=WAN
add address=192.168.1.0/24 list=LAN

/ip firewall mangle
add action=accept chain=prerouting comment="BO QUA CAN BANG TAI" src-address-list=KHONGCANBANGTAI
add action=accept chain=prerouting dst-address-list=LAN src-address-list=LAN
add action=mark-connection chain=prerouting comment=HairpinNAT dst-address-list=WAN new-connection-mark=HairpinNAT passthrough=yes src-address-list=LAN

/ip firewall nat
add action=masquerade chain=srcnat connection-mark=HairpinNAT
add action=masquerade chain=srcnat out-interface=pppoe-out1
```

### HairpinNAT là gì?

Khi bạn truy cập NVR bằng domain DDNS (ví dụ: `khanhcanduoc.thachanhitt.vn`) từ bên ngoài — hoạt động bình thường. Nhưng từ bên trong mạng nội bộ, domain này resolve về IP WAN, mà MikroTik mặc định không xử lý NAT cho traffic nội bộ → nội bộ → lỗi kết nối.

HairpinNAT giải quyết bằng cách: khi traffic từ LAN đi đến domain WAN, MikroTik sẽ masquerade (NAT) traffic đó để nó quay lại đúng thiết bị nội bộ.

### Thay đổi cho từng dự án

- Thay `[DOMAIN].thachanhitt.vn` bằng domain DDNS thật của công trình.
- Address-list `KHONGCANBANGTAI` gom các IP tĩnh — thiết bị này bỏ qua cân bằng tải (nếu có multi-WAN).

---

## 5. Port Forwarding (dst-nat)

Cho phép truy cập NVR từ bên ngoài Internet:

```
/ip firewall nat
add action=dst-nat chain=dstnat comment="Camera - Web" dst-address-type=local dst-port=81 in-interface-list=all protocol=tcp to-addresses=192.168.1.30 to-ports=81
add action=dst-nat chain=dstnat comment="Camera - SDK" dst-address-type=local dst-port=8100 in-interface-list=all protocol=tcp to-addresses=192.168.1.30 to-ports=8100
add action=dst-nat chain=dstnat comment="Camera - App" dst-address-type=local dst-port=8000 in-interface-list=all protocol=tcp to-addresses=192.168.1.30 to-ports=8100
add action=dst-nat chain=dstnat comment="Camera - RTSP" dst-address-type=local dst-port=8554 in-interface-list=all protocol=tcp to-addresses=192.168.1.30 to-ports=554
```

### Bảng port

| Port bên ngoài | Port bên trong | Dịch vụ | Ghi chú |
|---:|---:|---|---|
| 81 | 81 | Web NVR | Truy cập giao diện web NVR |
| 8100 | 8100 | SDK/App | Hik-Connect, iVMS-4200 |
| 8000 | 8100 | App (legacy) | Một số app cũ dùng port 8000 |
| 8554 | 554 | RTSP | Luồng video trực tiếp |

Công ty không dùng port mặc định (80/8000/554) để hạn chế scan tự động từ bot.

### Thay đổi cho từng dự án

- NVR luôn ở IP 192.168.1.30 — giữ cố định.
- Nếu công trình có thêm thiết bị cần truy cập từ xa: thêm rule dst-nat tương tự.

---

## 6. Firewall Filter

```
/ip firewall filter
add chain=forward action=fasttrack-connection connection-state=established,related
add chain=forward action=accept connection-state=established,related
add chain=forward action=drop connection-state=invalid
```

### Giải thích

| Rule | Ý nghĩa |
|---|---|
| FastTrack established/related | Tăng tốc traffic đã thiết lập — giảm CPU MikroTik |
| Accept established/related | Cho phép traffic thuộc kết nối đã có |
| Drop invalid | Chặn packet lỗi/không hợp lệ |

### Cách ly Guest

Thêm rule chặn Guest truy cập nội bộ:

```
/ip firewall filter
add chain=forward action=drop src-address=172.16.20.0/24 dst-address=192.168.1.0/24 comment="Guest khong vao noi bo"
```

Rule này đặt SAU 3 rule trên. Thứ tự rule trong MikroTik rất quan trọng — packet match rule đầu tiên sẽ được xử lý ngay.

Traffic Guest → Internet không bị chặn vì destination không phải 192.168.1.0/24 → không match rule drop → được forward bình thường qua masquerade.

---

## 7. DDNS

Công ty dùng dịch vụ DDNS riêng tại `ddns.thachanhitt.vn` (DynDNS type). Ngoài ra, MikroTik Cloud cũng hỗ trợ DDNS miễn phí:

```
/ip cloud
set ddns-enabled=yes ddns-update-interval=5m
```

DDNS MikroTik Cloud tạo domain dạng `xxxxxx.sn.mynetname.net` — dùng làm backup nếu DDNS công ty gặp sự cố.

### DDNS trên NVR Hikvision

Cấu hình DDNS trực tiếp trên NVR (chi tiết ở module B5):
- Loại: DynDNS
- Server: ddns.thachanhitt.vn
- Domain: [tencongTrinh].thachanhitt.vn
- Username/Password: theo tài khoản công ty

---

## 8. Hardening (Tắt service không cần)

```
/ip service
set telnet disabled=yes
set ftp disabled=yes
set www disabled=yes
set ssh disabled=yes
set api disabled=yes
set api-ssl disabled=yes

/system clock
set time-zone-name=Asia/Bangkok
```

Tắt tất cả service quản lý qua IP trừ **Winbox** (port 8291) — giảm bề mặt tấn công. Nếu cần truy cập web: bật lại `www` tạm thời rồi tắt sau khi xong.

Time zone: Asia/Bangkok (UTC+7) — cùng múi giờ Việt Nam.

---

## 9. Checklist sau cấu hình

- [ ] PPPoE kết nối thành công (Interface → pppoe-out1 → connected).
- [ ] PC nội bộ nhận IP 192.168.1.x, ra Internet OK.
- [ ] Guest nhận IP 172.16.20.x, ra Internet OK.
- [ ] Guest ping 192.168.1.1 → timeout (bị chặn).
- [ ] Truy cập NVR bằng domain DDNS từ 4G: [domain]:81 → hiện web NVR.
- [ ] HairpinNAT: truy cập domain DDNS từ nội bộ → vẫn vào được NVR.
- [ ] Tất cả service đã tắt trừ Winbox.
- [ ] Time zone = Asia/Bangkok.
