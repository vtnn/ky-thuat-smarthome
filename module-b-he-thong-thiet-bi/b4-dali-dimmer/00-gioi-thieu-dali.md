---
title: "Giới thiệu DALI"
module: "b"
level: "2-6"
tags: ["DALI", "dimmer", "chiếu sáng"]
---
# B4.00 — Giới Thiệu DALI Dimmer

## DALI là gì?
DALI (Digital Addressable Lighting Interface) — giao thức tiêu chuẩn quốc tế cho điều khiển chiếu sáng. 2 dây, không phân cực, tối đa 64 ballast/driver, 16 nhóm, 16 scene.

## Áp dụng cho cả 3 hệ thống
| Hệ thống | Kết nối DALI qua |
|----------|------------------|
| LifeSmart | DALI Gateway riêng |
| MobiEyes | Dimmer Module + DALI |
| KNX | KNX-DALI Gateway |

## Kiến trúc
```
[Hệ thống điều khiển] → [DALI Gateway/Module]
                              ↕ (DALI Bus - 2 dây)
                    [Driver 1] [Driver 2] ... [Driver 64]
                       ↓          ↓
                    [LED 1]    [LED 2]
```

## Thông số DALI Bus
| Thông số | Giá trị |
|---------|---------|
| Điện áp bus | ≈ 16V DC |
| Số thiết bị tối đa | 64 driver/ballast |
| Số nhóm | 16 |
| Số scene | 16 |
| Chiều dài bus tối đa | 300m |
| Có thể đi chung ống 220V | ✅ Có (IEC 62386) |
