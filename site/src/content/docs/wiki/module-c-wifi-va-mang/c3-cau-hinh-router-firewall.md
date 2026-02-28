---
title: "Cấu hình router & firewall"
module: "c"
level: "4-6"
tags: ["router", "firewall", "NAT", "VPN"]
---

# C3 — Cấu hình router & firewall (theo chuẩn tách VLAN)

**Mục tiêu:** Internet ổn định, nội bộ an toàn, và có rule rõ ràng cho SmartHome/Camera/WiFi.

---

## Nguyên tắc thiết kế rule
- Mặc định **deny inter-VLAN**, chỉ mở những luồng cần thiết
- Camera (VLAN 20) **không** ra Internet trực tiếp
- Guest (VLAN 40) chỉ Internet

---

## NAT / Internet
- VLAN 30 (Private): NAT ra Internet
- VLAN 40 (Guest): NAT ra Internet + bật client isolation (ở AP)
- VLAN 10/20: tuỳ nhu cầu, nhưng **khuyến nghị không NAT** nếu không bắt buộc

---

## Rule mẫu (tham chiếu)

### Private (VLAN 30) → Camera (VLAN 20)
- Allow từ VLAN 30 đến NVR/Camera các port cần thiết (VD: 80/443/554/8000 tuỳ hệ)

### Private (VLAN 30) → SmartHome (VLAN 10)
- Allow đến Hub/Controller port cần thiết (tuỳ hãng)

### Guest (VLAN 40)
- Deny đến VLAN 10/20/30
- Allow ra Internet

---

## VPN / Remote (tuỳ chọn)
- Nếu cần truy cập nội bộ từ xa: ưu tiên VPN (WireGuard/OpenVPN) thay vì mở port

---

## Kiểm tra sau cấu hình
- [ ] Private vào Internet OK
- [ ] Guest vào Internet OK, không nhìn thấy LAN
- [ ] Private xem camera OK
- [ ] SmartHome ổn định (không bị block các luồng cần thiết)

