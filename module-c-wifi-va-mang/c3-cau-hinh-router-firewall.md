---
title: "Cấu hình Router/Firewall"
module: "c"
level: "4-6"
tags: ["router", "firewall", "NAT", "VPN"]
---
# C3 — Cấu Hình Router & Firewall
## NAT cho Camera
- Port forwarding NVR (nếu không dùng Hik-Connect): port ngoài → IP NVR:80/8000.
- Khuyến cáo: dùng Hik-Connect (P2P) thay vì port forwarding.

## Firewall Rules
- Cho phép VLAN 30 → VLAN 20 (xem camera).
- Chặn VLAN 10, 20 → Internet (trừ khi cần Cloud).
- Chặn VLAN 40 → tất cả nội bộ.

## VPN (nếu có)
- Cấu hình VPN server trên Router cho kỹ thuật viên truy cập từ xa.
