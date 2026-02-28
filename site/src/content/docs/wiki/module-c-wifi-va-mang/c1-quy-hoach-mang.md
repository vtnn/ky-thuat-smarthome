---
title: "Quy hoạch mạng"
module: "c"
level: "4-6"
tags: ["mạng", "VLAN", "IP"]
---

# C1 — Quy hoạch mạng (trọng tâm)

**Mục tiêu:** dựng được một kiến trúc mạng *ổn định, dễ quản lý, dễ mở rộng* cho SmartHome + Camera + WiFi.

**Nguyên tắc cốt lõi:** tách mạng theo chức năng (VLAN) để giảm rủi ro và dễ khoanh vùng khi có sự cố.

---

## VLAN khuyến nghị (chuẩn nội bộ)

| VLAN | Subnet | Dùng cho | Gợi ý cấu hình |
|------|--------|---------|----------------|
| 10 | 192.168.10.0/24 | SmartHome (Hub/Controller/Module/Gateway) | Chỉ mở những luồng thật sự cần |
| 20 | 192.168.20.0/24 | Camera (NVR/Camera IP) | Ưu tiên *không* ra Internet trực tiếp |
| 30 | 192.168.30.0/24 | WiFi nội bộ gia đình | Internet + truy cập nội bộ theo rule |
| 40 | 192.168.40.0/24 | WiFi khách | Client isolation, chỉ Internet |

> Nếu hệ nhỏ (căn hộ) có thể tối giản VLAN, nhưng vẫn nên giữ nguyên tinh thần: **SmartHome / Camera tách khỏi mạng người dùng**.

---

## Quy định cách ly (để an toàn & dễ vận hành)

- SmartHome (**VLAN 10**) **không** chung mạng với người dùng (**VLAN 30/40**).
- Camera (**VLAN 20**) **không** ra Internet trực tiếp (tránh lộ thiết bị/giảm bề mặt tấn công).
- Mạng chính (**VLAN 30**) *có thể* xem camera (**VLAN 20**) theo rule rõ ràng.
- Guest (**VLAN 40**) **không** truy cập bất kỳ VLAN nội bộ nào.

---

## Sơ đồ mạng tham chiếu

```
[ISP Modem/ONT]
      │
[Router/Firewall]
      │
[Managed PoE Switch]
   ├── VLAN 10 (SmartHome) ── Hub, Controller, Module
   ├── VLAN 20 (Camera) ───── NVR, Camera IP
   ├── VLAN 30 (WiFi Private) ─ AP → SSID Private
   └── VLAN 40 (WiFi Guest) ── AP → SSID Guest
```

---

## IP planning template (gợi ý)

| Thiết bị | VLAN | IP | Ghi chú |
|----------|------|-----|---------|
| Router/Firewall | - | 192.168.1.1 | Gateway |
| Switch (mgmt) | - | 192.168.1.2 | Quản lý |
| Hub LifeSmart | 10 | 192.168.10.200 | |
| Controller MobiEyes | 10 | 192.168.10.201 | |
| KNX/IP Gateway | 10 | 192.168.10.202 | |
| NVR | 20 | 192.168.20.200 | |
| Camera #1-#N | 20 | 192.168.20.201-250 | |
| AP #1 | 30 | 192.168.30.10 | Tầng 1 |
| AP #2 | 30 | 192.168.30.11 | Tầng 2 |

### Mẹo nhỏ khi triển khai
- Dành một dải IP cho **static** (VD: .200–.250) để nhìn là biết ngay thiết bị hạ tầng.
- Ghi chú “tầng/khu vực” ngay trong bảng IP để bàn giao dễ.

