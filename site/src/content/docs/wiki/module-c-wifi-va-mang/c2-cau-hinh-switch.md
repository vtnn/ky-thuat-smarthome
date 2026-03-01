---
title: "C2 — Cấu hình Switch"
description: "Cách cấu hình port Switch (Managed / PoE) cho mô hình 2 VLAN ổn định."
module: "c"
level: "4-6"
tags: ["switch", "VLAN", "PoE", "QoS"]
---

## Mục tiêu
- Cấu hình port Switch đúng loại: Access cho thiết bị, Trunk cho AP/Uplink.
- Quản lý công suất PoE an toàn cho Camera và Access Point.

---

## 1. Phân bổ Port theo VLAN

### 1.1. Port Uplink (Nối lên Router)
- **Cấu hình:** Trunk (cho phép VLAN 1 và VLAN 40).
- **Lưu ý:** VLAN 1 thường là native (untagged).

### 1.2. Port Access (Nội bộ)
- Dành cho: Camera, NVR, Smarthome Hub, Smart TV...
- **Cấu hình:** Access VLAN 1.

### 1.3. Port xuống Access Point (AP)
- **Cấu hình:** Trunk (cho phép VLAN 1 và VLAN 40).
- SSID Private sẽ map vào VLAN 1.
- SSID Guest sẽ map vào VLAN 40.

---

## 2. Quản lý nguồn PoE
- Đảm bảo **PoE Budget** tổng của Switch lớn hơn tổng công suất thiết bị.
- Ưu tiên PoE cho AP WiFi 6 (cần công suất cao hơn).

---

## 3. Checklist sau cấu hình
- [ ] Laptop cắm vào port VLAN 1 nhận đúng dải IP 192.168.1.x.
- [ ] AP nhận nguồn PoE và phát đủ 2 SSID.
- [ ] NVR thấy được tất cả camera trong cùng VLAN 1.
