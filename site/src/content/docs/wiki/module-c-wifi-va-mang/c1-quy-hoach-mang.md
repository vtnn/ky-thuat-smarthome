---
title: "C1 — Quy hoạch mạng"
description: "Mô hình mạng 2 VLAN của công ty: VLAN 1 nội bộ + VLAN 123 Guest. IP plan, sơ đồ thiết bị và cách phân bổ dải IP cho từng loại thiết bị."
module: "c"
level: "4-6"
tags: ["mạng", "VLAN", "IP", "MikroTik"]
---

## Mục tiêu
- Nắm mô hình mạng 2 VLAN mà công ty đang áp dụng cho tất cả dự án.
- Biết cách quy hoạch IP cho từng loại thiết bị — tránh trùng lặp và dễ quản lý.
- Hiểu sơ đồ kết nối vật lý giữa modem, router, switch và thiết bị.

---

## 1. Mô hình 2 VLAN

Công ty thiết kế mạng theo mô hình tối giản 2 VLAN — đủ an toàn mà dễ triển khai, bàn giao và hỗ trợ từ xa:

| VLAN | Tên interface | Subnet | Gateway | Dùng cho |
|---:|---|---|---|---|
| **1** (default) | BridgeLAN | 192.168.1.0/24 | 192.168.1.1 | Toàn bộ nội bộ: smarthome, camera, NVR, WiFi nhà, IoT, PC |
| **123** | Home | 172.16.20.0/24 | 172.16.20.1 | WiFi khách (Guest) — tách hoàn toàn khỏi mạng nội bộ |

### Tại sao chỉ 2 VLAN?

Nhiều tài liệu khuyến nghị tách IoT ra VLAN riêng (3 VLAN: Private, IoT, Guest). Nhưng trong thực tế triển khai nhà ở:

- **Thiết bị IoT cần cùng subnet**: Gateway LifeSmart, đèn, ổ cắm, cảm biến phải nằm cùng mạng với điện thoại để discover và điều khiển. Tách ra VLAN riêng thì phải cấu hình mDNS relay, IGMP proxy — phức tạp và hay lỗi.
- **Ít VLAN = ít lỗi**: mỗi VLAN thêm vào là thêm DHCP server, firewall rule, trunk config. Càng nhiều VLAN thì debug càng khó khi có sự cố tại công trình.
- **Mục đích thực tế**: chỉ cần đảm bảo khách đến nhà không truy cập được camera, NVR hay thiết bị smarthome. 1 VLAN Guest là đủ.

---

## 2. Sơ đồ mạng tham chiếu

```
[Modem nhà mạng (VNPT/Viettel/FPT)]
      │ ether1 (PPPoE hoặc DHCP Client)
[MikroTik Router]
      │ ether2-ether5 → BridgeLAN
      │ (VLAN 1 untagged + VLAN 123 tagged)
[Switch PoE Ruijie]
   ├── Port Access (VLAN 1) ─── Camera, NVR, Hub LifeSmart
   ├── Port Trunk (VLAN 1+123) ── AP Ruijie
   │                                ├── SSID [TenNha]_WiFi → VLAN 1
   │                                └── SSID [TenNha]_Guest → VLAN 123
   └── Port Access (VLAN 1) ─── Smart TV, PC
```

### Kết nối vật lý

| Port MikroTik | Kết nối | Ghi chú |
|---|---|---|
| ether1 | Modem nhà mạng (ONT) | WAN — PPPoE hoặc DHCP Client |
| ether2 | Switch PoE Ruijie (uplink) | Trunk: VLAN 1 + VLAN 123 |
| ether3-ether5 | Thiết bị nội bộ (dự phòng) | Bridge, VLAN 1 |

Trong thực tế, hầu hết thiết bị nối qua Switch PoE chứ không nối trực tiếp MikroTik. Ether3-ether5 dùng dự phòng hoặc nối thêm switch tầng khác.

---

## 3. IP Plan

### Dải IP tĩnh (192.168.1.2 – 192.168.1.69)

Dành cho thiết bị hạ tầng — đặt IP tĩnh để dễ quản lý và truy cập từ xa:

| Dải IP | Dùng cho | Ví dụ |
|---|---|---|
| .1 | Gateway MikroTik | 192.168.1.1 |
| .2 – .9 | Switch, AP (quản lý) | Switch: .2, AP-T1: .3, AP-T2: .4 |
| .10 – .19 | Hub smarthome, controller | LifeSmart gateway: .10 |
| .20 – .29 | Dự phòng | |
| .30 | NVR | 192.168.1.30 (cố định) |
| .31 – .69 | Camera | Camera bắt đầu từ .31 trở đi |

### Dải DHCP (192.168.1.70 – 192.168.1.254)

Cấp tự động cho điện thoại, laptop, Smart TV, robot hút bụi và các thiết bị không cần IP tĩnh:

```
/ip pool
add name=Day_IP_LAN ranges=192.168.1.70-192.168.1.254
```

Lease time: 3 giờ — đủ ngắn để IP xoay vòng nhanh khi có thiết bị rời mạng.

### Dải Guest (172.16.20.20 – 172.16.20.254)

```
/ip pool
add name=Day_IP_Home ranges=172.16.20.20-172.16.20.254
```

Dải Guest dùng subnet 172.16.20.0/24 — khác hoàn toàn với 192.168.1.0/24 để dễ nhận biết và viết firewall rule.

---

## 4. Danh sách địa chỉ firewall (Address List)

MikroTik cho phép gom các dải IP vào address-list để dùng trong mangle và firewall rule:

```
/ip firewall address-list
add address=192.168.1.2-192.168.1.69 list=KHONGCANBANGTAI
add address=192.168.1.0/24 list=LAN
add address=khanhcanduoc.thachanhitt.vn list=WAN
```

- **KHONGCANBANGTAI**: thiết bị hạ tầng (camera, NVR, hub) — bỏ qua cân bằng tải nếu có multi-WAN.
- **LAN**: toàn bộ subnet nội bộ — dùng trong mangle rule cho HairpinNAT.
- **WAN**: domain DDNS của công trình — dùng cho HairpinNAT để truy cập NVR bằng domain từ nội bộ.

---

## 5. Mẹo quy hoạch

- **Nhìn IP biết thiết bị**: .30 = NVR, .31+ = camera, .2 = switch. Giữ quy ước này nhất quán giữa các công trình.
- **Ghi chú trên MikroTik**: dùng comment trong DHCP lease hoặc ARP để ghi tên thiết bị.
- **In IP plan dán tủ mạng**: bảng A4 ghi rõ IP → thiết bị → vị trí. Khi kỹ thuật viên khác đến hỗ trợ sẽ hiểu ngay.
- **DDNS riêng cho mỗi công trình**: dùng dịch vụ DDNS của công ty (ddns.thachanhitt.vn) để truy cập từ xa bằng tên miền thay vì IP động.

---

## 6. Checklist quy hoạch

- [ ] Sơ đồ mạng vẽ trên bản vẽ (hoặc file) — ghi rõ port nào nối gì.
- [ ] IP plan hoàn chỉnh: tĩnh cho hạ tầng, DHCP cho client.
- [ ] VLAN 1 cho nội bộ, VLAN 123 cho Guest — không thêm VLAN khác.
- [ ] Domain DDNS đã đăng ký (ddns.thachanhitt.vn).
- [ ] Bảng IP plan in ra dán trong tủ mạng.
