---
title: "C1 — Quy hoạch mạng"
description: "Mô hình mạng tối giản 2 VLAN: VLAN 1 nội bộ + VLAN Guest, kèm IP plan và rule cách ly cơ bản."
module: "c"
level: "4-6"
tags: ["mạng", "VLAN", "IP"]
---

## Mục tiêu
- Dựng kiến trúc mạng **dễ thi công, dễ bàn giao** nhưng vẫn đủ an toàn.
- Tách mạng khách khỏi mạng nội bộ để tránh rủi ro và giảm sự cố.

---

## 1. Nguyên tắc thiết kế (Mô hình 2 VLAN)
Hệ thống mạng được quy hoạch theo mô hình tối giản để đảm bảo tính ổn định và dễ vận hành:
- **VLAN 1 (Default / Nội bộ):** Gom chung **Smarthome + Camera + Nội bộ gia đình**.
- **VLAN Guest (Riêng):** Chỉ dành cho khách, không truy cập vào tài nguyên nội bộ.

> Mục tiêu: Giảm độ phức tạp, ưu tiên vận hành ổn định và dễ dàng hỗ trợ kỹ thuật từ xa.

---

## 2. VLAN khuyến nghị

| VLAN | Subnet | Dùng cho |
|---:|---|---|
| **1** | 192.168.1.0/24 | Nội bộ (Smarthome + Camera + Gia đình) |
| **40** | 192.168.40.0/24 | WiFi khách (Guest) |

---

## 3. Rule cách ly tối thiểu (bắt buộc)

- **Guest (VLAN 40) → VLAN 1:** Deny toàn bộ.
- **Guest (VLAN 40) → Internet:** Allow.
- **VLAN 1 → Internet:** Allow (theo nhu cầu công trình).

Nếu AP hỗ trợ: bật thêm **Client Isolation** cho SSID Guest.

---

## 4. Sơ đồ mạng tham chiếu

```
[ISP Modem/ONT]
      │
[Router/Firewall]
      │ (VLAN 1 untag + VLAN 40 tag)
[Managed PoE Switch]
   ├── VLAN 1 (Nội bộ) ── Hub/Controller/Camera/NVR/AP (SSID Private)
   └── VLAN 40 (Guest) ── AP (SSID Guest)
```

---

## 5. IP planning template (gợi ý)

| Thiết bị | VLAN | IP | Ghi chú |
|---|---:|---|---|
| Router/Firewall | 1 | 192.168.1.1 | Gateway |
| Switch (mgmt) | 1 | 192.168.1.2 | Quản lý |
| NVR | 1 | 192.168.1.200 | IP tĩnh |
| Camera #1-#N | 1 | 192.168.1.201-250 | IP tĩnh |
| Hub/Controller | 1 | 192.168.1.150-199 | IP tĩnh |
| AP #1 | 1 | 192.168.1.10 | IP tĩnh (khuyến nghị) |

Mẹo:
- Dành dải `.150–.250` cho **static** để nhìn là biết thiết bị hạ tầng.
