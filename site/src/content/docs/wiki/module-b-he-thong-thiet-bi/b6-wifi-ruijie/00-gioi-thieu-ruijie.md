---
title: "B6.00 — Giới thiệu WiFi Ruijie"
description: "Tổng quan hệ WiFi phủ sóng dùng AP Ruijie, Switch PoE và Controller (Cloud/Local) quản lý tập trung."
module: "b"
level: "1-6"
tags: ["Ruijie", "WiFi", "AP"]
---

## Mục tiêu
- Hiểu kiến trúc triển khai WiFi phủ sóng toàn nhà: Router → Switch PoE → AP.
- Nắm vai trò của Controller: quản lý SSID/VLAN/firmware tập trung.

---

## 1. Ruijie dùng để làm gì?
Ruijie là hệ thiết bị mạng được dùng phổ biến trong smarthome để triển khai WiFi ổn định: Access Point, Switch PoE và Controller.

---

## 2. Kiến trúc hệ thống
```
[Internet/Modem] → [Router] → [Switch PoE Ruijie]
                                    ├── [AP #1 - Tầng 1]
                                    ├── [AP #2 - Tầng 2]
                                    └── [AP #3 - Sân vườn]
                   [Ruijie Cloud Controller] (quản lý tập trung)
```

---

## 3. Nguyên tắc triển khai
- AP càng đặt trung tâm vùng phủ sóng càng tốt.
- Ưu tiên đi dây Cat6 + PoE, tránh dùng mesh nếu không cần.
- Tách SSID/VLAN cho IoT và Guest để bảo mật.
