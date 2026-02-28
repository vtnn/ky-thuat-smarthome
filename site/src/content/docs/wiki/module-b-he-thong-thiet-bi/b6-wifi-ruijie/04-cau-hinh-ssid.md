---
title: "Cấu hình SSID"
module: "b"
level: "4-6"
tags: ["WiFi", "SSID", "VLAN"]
---
# B6.04 — Cấu Hình SSID

## SSID theo VLAN

| SSID | VLAN | Dùng cho | Bảo mật |
|------|------|---------|---------|
| [TenNha]_Private | VLAN 30 | WiFi gia đình | WPA2/WPA3 |
| [TenNha]_Guest | VLAN 40 | WiFi khách | WPA2 + Client Isolation |
| [TenNha]_IoT | VLAN 10 | Thiết bị IoT (ẩn SSID) | WPA2 |

## Quy tắc
- **Tách SSID** cho IoT (2.4GHz only).
- **Ẩn SSID** IoT — không hiển thị cho người dùng.
- **Client Isolation** cho Guest — khách không thấy nhau + không truy cập nội bộ.
- Mật khẩu WiFi ≥ 12 ký tự.
