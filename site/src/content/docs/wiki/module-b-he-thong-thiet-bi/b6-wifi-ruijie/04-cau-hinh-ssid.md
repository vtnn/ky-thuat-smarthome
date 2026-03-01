---
title: "B6.04 — Cấu hình SSID & VLAN"
description: "Chuẩn tách SSID theo VLAN (Private/Guest/IoT) và các rule bảo mật bắt buộc."
module: "b"
level: "4-6"
tags: ["WiFi", "SSID", "VLAN"]
---

## Mục tiêu
- Tách SSID theo đúng VLAN để đảm bảo bảo mật và ổn định cho IoT.
- Thiết lập rule Guest và IoT để tránh truy cập nội bộ trái phép.

---

## 1. SSID theo VLAN (khuyến nghị)

| SSID | VLAN | Dùng cho | Bảo mật |
|---|---:|---|---|
| `[TenNha]_Private` | 30 | WiFi gia đình | WPA2/WPA3 |
| `[TenNha]_Guest` | 40 | WiFi khách | WPA2 + Client Isolation |
| `[TenNha]_IoT` | 10 | Thiết bị IoT | WPA2 (2.4GHz only) |

---

## 2. Quy tắc bắt buộc
- **IoT SSID:** chỉ bật 2.4GHz để tương thích thiết bị.
- **Guest:** bật Client Isolation (khách không thấy nhau và không vào LAN nội bộ).
- **Mật khẩu:** tối thiểu 12 ký tự.
- **Tách mạng:** IoT không được phép truy cập subnet quản trị/tủ mạng.
