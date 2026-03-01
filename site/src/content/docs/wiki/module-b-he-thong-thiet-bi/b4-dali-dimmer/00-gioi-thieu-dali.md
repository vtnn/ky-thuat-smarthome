---
title: "B4.00 — Giới thiệu DALI Dimmer"
description: "Tổng quan DALI (IEC 62386), thông số bus 2 dây và cách tích hợp DALI vào LifeSmart/MobiEyes/KNX."
module: "b"
level: "2-6"
tags: ["DALI", "dimmer", "chiếu sáng"]
---

## Mục tiêu
- Hiểu bản chất DALI: **2 dây, không phân cực**, địa chỉ hoá từng driver/ballast.
- Nắm các giới hạn quan trọng: **64 thiết bị**, **16 group**, **16 scene**, bus ~16V.

---

## 1. DALI là gì?
DALI (Digital Addressable Lighting Interface) là tiêu chuẩn quốc tế điều khiển chiếu sáng. Mỗi driver/ballast được gán địa chỉ (0–63) và có thể được gom vào group/scene để điều khiển đồng bộ.

---

## 2. Áp dụng tại công ty (3 hệ thống)

| Hệ thống | Kết nối DALI qua |
|---|---|
| LifeSmart | DALI Gateway riêng |
| MobiEyes | Dimmer Module + DALI |
| KNX | KNX-DALI Gateway |

---

## 3. Kiến trúc tổng quát
```
[Hệ thống điều khiển] → [DALI Gateway/Module]
                              ↕ (DALI Bus - 2 dây)
                    [Driver 1] [Driver 2] ... [Driver 64]
                       ↓          ↓
                    [LED 1]    [LED 2]
```

---

## 4. Thông số DALI Bus

| Thông số | Giá trị |
|---|---|
| Điện áp bus | ≈ 16V DC |
| Số thiết bị tối đa | 64 driver/ballast |
| Số nhóm | 16 (0–15) |
| Số scene | 16 (0–15) |
| Chiều dài bus tối đa | 300m |
| Đi chung ống 220V | ✅ Có (theo IEC 62386) |
