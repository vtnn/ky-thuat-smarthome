---
title: "B3.05 — Quy tắc địa chỉ KNX"
description: "Quy ước Physical Address và Group Address theo chuẩn công ty để dự án dễ quản lý và debug."
module: "b"
level: "4-6"
tags: ["KNX", "địa chỉ", "group address"]
---

## Mục tiêu
- Đặt Physical Address có quy tắc để dễ tìm thiết bị trong ETS.
- Đặt Group Address theo chuẩn để đội thi công/lập trình cùng hiểu.

---

## 1. Physical Address
Format: `Area.Line.Device`

Ví dụ: `1.1.10` = Area 1, Line 1, Device 10.

Quy ước gợi ý theo loại thiết bị:
- Push Button: `x.x.1–19`
- Actuator: `x.x.20–39`
- Binary Input: `x.x.40–49`
- DALI Gateway: `x.x.50–59`

---

## 2. Group Address
Format 3 cấp: `Main / Middle / Sub`

| Main | Chức năng |
|---:|---|
| 0 | Switching |
| 1 | Dimming |
| 2 | Blinds |
| 3 | Scenes |
| 4 | Status Feedback |

Ví dụ: `0/0/1` = Switching / Tầng 1 / Đèn trần phòng khách.
