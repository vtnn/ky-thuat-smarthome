---
title: "Giới thiệu KNX"
module: "b"
level: "1-6"
tags: ["KNX", "giới thiệu"]
---
# B3.00 — Giới Thiệu KNX
KNX là tiêu chuẩn quốc tế (ISO 14543-3) cho hệ thống điều khiển tòa nhà thông minh. Phi tập trung, độ tin cậy cao, thiết bị đa hãng tương thích.

## Phạm vi áp dụng tại công ty
- **Nút bấm thông minh (Push Button)** — điều khiển chiếu sáng, rèm, scene.
- **DALI Dimmer (KNX-DALI Gateway)** — điều chỉnh độ sáng đèn DALI.
- **Actuator (Switch/Dimming/Blind)** — đầu ra relay bật/tắt, dim, rèm.
- **Binary Input (Dry Contact)** — kết hợp công tắc cơ vào hệ thống KNX.

## Kiến trúc
```
[KNX/IP Gateway] ← Ethernet
       ↕
[KNX Bus Cable 29V DC]
  ├── Push Button
  ├── Switch Actuator
  ├── KNX-DALI Gateway
  └── Binary Input (công tắc cơ)
```
Xem chi tiết đầy đủ tại các file tiếp theo trong thư mục `b3-knx/`.
