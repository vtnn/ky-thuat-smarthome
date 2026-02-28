---
title: "Template sơ đồ mạng"
module: "templates"
tags: ["template", "VLAN", "mạng"]
---
# Template Sơ Đồ Mạng
**Dự án:** _________________ **Ngày:** _______________

## VLAN Planning
| VLAN ID | Subnet | Mục đích | SSID (nếu WiFi) |
|---------|--------|---------|-----------------|
| 10 | 192.168.10.0/24 | Smarthome | (ẩn) |
| 20 | 192.168.20.0/24 | Camera | - |
| 30 | 192.168.30.0/24 | WiFi Private | [Tên]_Private |
| 40 | 192.168.40.0/24 | WiFi Guest | [Tên]_Guest |

## IP Assignment
| Thiết bị | VLAN | IP | MAC | Ghi chú |
|----------|------|-----|-----|---------|
| Router | - | | | Gateway |
| Switch | - | | | |
| Hub/Controller | 10 | | | |
| NVR | 20 | | | |
| Camera 1 | 20 | | | |
| AP 1 | 30 | | | |

## Sơ Đồ
_(Vẽ sơ đồ kết nối vật lý tại đây)_
