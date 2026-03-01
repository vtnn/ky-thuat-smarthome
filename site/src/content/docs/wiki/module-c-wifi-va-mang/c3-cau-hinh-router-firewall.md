---
title: "C3 — Cấu hình Router & Firewall"
description: "Rule tối giản cho mô hình 2 VLAN: Nội bộ (VLAN 1) và Guest (VLAN riêng) chỉ ra Internet."
module: "c"
level: "4-6"
tags: ["router", "firewall", "NAT", "VPN"]
---

## Mục tiêu
- Đảm bảo Internet ổn định cho nội bộ và Guest.
- Cách ly Guest khỏi toàn bộ hệ thống nội bộ để an toàn.

---

## 1. NAT / Internet
- **VLAN 1 (Nội bộ):** NAT ra Internet.
- **VLAN 40 (Guest):** NAT ra Internet.

---

## 2. Rule Firewall tối thiểu (bắt buộc)

### 2.1. Guest → Nội bộ
- **Deny:** VLAN 40 → VLAN 1 (deny toàn bộ).

### 2.2. Guest → Internet
- **Allow:** VLAN 40 → WAN.

### 2.3. Nội bộ → Guest
- Khuyến nghị: không cần mở (để mặc định deny hoặc allow tuỳ router, nhưng nên deny để sạch).

---

## 3. Remote truy cập từ xa (tuỳ chọn)
Nếu cần truy cập nội bộ từ xa:
- Ưu tiên **VPN (WireGuard/OpenVPN)** thay vì mở port.

---

## 4. Checklist sau cấu hình
- [ ] Nội bộ (VLAN 1) vào Internet OK.
- [ ] Guest (VLAN 40) vào Internet OK.
- [ ] Guest không ping được bất kỳ IP nội bộ nào (192.168.1.x).
