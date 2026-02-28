---
title: "Cấu hình switch"
module: "c"
level: "4-6"
tags: ["switch", "VLAN", "PoE", "QoS"]
---

# C2 — Cấu hình switch (Managed / PoE)

**Mục tiêu:** cấu hình switch đúng chuẩn để chạy VLAN ổn định, cấp PoE an toàn và dễ bảo trì.

---

## Checklist trước khi cấu hình
- Xác định model switch (Ruijie / Mikrotik / UniFi /…)
- Có sơ đồ port: uplink/router, trunk đến AP, port camera, port smarthome
- Chốt VLAN ID + subnet theo tài liệu **C1 — Quy hoạch mạng**

---

## Cấu hình VLAN theo tư duy “port-based”

### 1) Uplink lên Router/Firewall
- Port uplink để **TRUNK** (tag nhiều VLAN)
- Native/untag VLAN: tuỳ thiết kế (khuyến nghị tránh native nếu không cần)

### 2) Port xuống Access Point
- Port xuống AP thường để **TRUNK** (tag VLAN 30 + 40)
- Nếu AP tách SSID theo VLAN: map SSID Private/Guest tương ứng

### 3) Port cho Camera / NVR
- Port camera: **ACCESS VLAN 20**
- Port NVR: **ACCESS VLAN 20**

### 4) Port cho SmartHome
- Hub/Controller/Gateway: **ACCESS VLAN 10**

---

## PoE: cấu hình để “không cháy, không sập”
- Bật PoE đúng port cần dùng (AP/Camera)
- Kiểm tra **PoE budget** tổng (đặc biệt khi nhiều AP WiFi 6)
- Đặt priority PoE (nếu switch hỗ trợ): AP/NVR ưu tiên cao

---

## QoS (tuỳ chọn)
- Nếu có voice/video quan trọng: ưu tiên traffic tương ứng
- Với hệ nhà phố/villa thường: QoS chỉ cần ở mức cơ bản

---

## Kiểm tra sau cấu hình
- [ ] Các VLAN lên được (ping gateway từng VLAN)
- [ ] AP phát đúng SSID + đúng VLAN
- [ ] Camera lên hình nội bộ (VLAN 20)
- [ ] Thiết bị SmartHome ổn định (VLAN 10)

