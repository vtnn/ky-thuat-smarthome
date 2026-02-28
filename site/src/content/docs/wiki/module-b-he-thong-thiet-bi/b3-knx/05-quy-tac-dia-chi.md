---
title: "Quy tắc địa chỉ KNX"
module: "b"
level: "4-6"
tags: ["KNX", "địa chỉ", "group address"]
---
# B3.05 — Quy Tắc Địa Chỉ KNX

## Physical Address: `Area.Line.Device`
- Ví dụ: `1.1.10` = Area 1, Line 1, Device 10.
- Công tắc và Actuator dùng dải số khác nhau (vd: Công tắc 1-19, Actuator 20-39).

## Group Address: `Main/Middle/Sub`
| Main | Chức năng |
|------|-----------|
| 0 | Switching (bật/tắt) |
| 1 | Dimming |
| 2 | Blinds (rèm) |
| 3 | Scenes |
| 4 | Status Feedback |

Ví dụ: `0/0/1` = Switching / Tầng 1 / Đèn trần PK.

## Quy ước công ty
- Push Button: Physical `x.x.1-19`
- Actuator: Physical `x.x.20-39`
- Binary Input: Physical `x.x.40-49`
- DALI Gateway: Physical `x.x.50-59`
