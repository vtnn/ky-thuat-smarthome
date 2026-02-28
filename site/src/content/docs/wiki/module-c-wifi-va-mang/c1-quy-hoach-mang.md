---
title: "Quy hoạch mạng"
module: "c"
level: "4-6"
tags: ["mạng", "VLAN", "IP"]
---
# C1 — Quy Hoạch Mạng ⭐ TRỌNG TÂM

## VLAN Bắt Buộc

| VLAN | Subnet | Dùng cho | Quy tắc |
|------|--------|---------|---------|
| VLAN 10 | 192.168.10.0/24 | Hệ thống Smarthome (Hub, Controller, module) | Không chung mạng với người dùng |
| VLAN 20 | 192.168.20.0/24 | Camera (NVR, camera IP) | Không ra Internet trực tiếp |
| VLAN 30 | 192.168.30.0/24 | WiFi nội bộ gia đình | Truy cập Internet + xem camera |
| VLAN 40 | 192.168.40.0/24 | WiFi khách | Client isolation, chỉ Internet |

## Quy Định Cách Ly
- ❌ Smarthome (VLAN 10) KHÔNG chung mạng với người dùng (VLAN 30/40).
- ❌ Camera (VLAN 20) KHÔNG ra Internet trực tiếp.
- ✅ Mạng chính (VLAN 30) CÓ THỂ xem camera (VLAN 20).
- ❌ Guest (VLAN 40) KHÔNG truy cập bất kỳ VLAN nội bộ nào.

## Sơ Đồ Mạng Chuẩn
```
[ISP Modem/ONT]
      │
[Router/Firewall]
      │
[Switch PoE Quản lý]
   ├── VLAN 10 (SmartHome) ── Hub, Controller, Module
   ├── VLAN 20 (Camera) ── NVR, Camera IP
   ├── VLAN 30 (WiFi Private) ── AP → SSID Private
   └── VLAN 40 (WiFi Guest) ── AP → SSID Guest
```

## IP Planning Template

| Thiết bị | VLAN | IP | Ghi chú |
|----------|------|-----|---------|
| Router | - | 192.168.1.1 | Gateway |
| Switch | - | 192.168.1.2 | Quản lý |
| Hub LifeSmart | 10 | 192.168.10.200 | |
| Controller MobiEyes | 10 | 192.168.10.201 | |
| KNX/IP Gateway | 10 | 192.168.10.202 | |
| NVR | 20 | 192.168.20.200 | |
| Camera #1-#N | 20 | 192.168.20.201-250 | |
| AP #1 | 30 | 192.168.30.10 | Tầng 1 |
| AP #2 | 30 | 192.168.30.11 | Tầng 2 |
