---
title: "Cấu hình Switch"
module: "c"
level: "4-6"
tags: ["switch", "VLAN", "PoE", "QoS"]
---
# C2 — Cấu Hình Switch
## VLAN
- Tạo VLAN 10, 20, 30, 40 trên Switch.
- Gán Access port cho từng VLAN (camera → VLAN 20, AP → VLAN 30).
- Trunk port cho uplink đến Router (mang tất cả VLAN).

## PoE Settings
- Bật PoE cho port camera và AP.
- Kiểm tra tổng budget PoE: mỗi camera ~12W, AP ~15W.

## QoS
- Ưu tiên traffic camera (VLAN 20) để tránh mất gói video.
- Giới hạn bandwidth Guest (VLAN 40).
