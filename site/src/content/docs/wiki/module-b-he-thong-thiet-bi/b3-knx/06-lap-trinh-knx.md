---
title: "Lập trình KNX"
module: "b"
level: "4-6"
tags: ["KNX", "lập trình", "scene", "logic"]
---
# B3.06 — Lập Trình KNX

## 1. Nút bấm → Switch Actuator
Push Button object "Switch" → GA `0/0/1` ← Actuator object "Switching".

## 2. Binary Input (công tắc cơ) → Actuator
Binary Input Ch1 "Switch" → GA `0/0/2` ← Actuator Ch2 "Switching".
Cấu hình chọn đúng: Toggle hoặc Push Button.

## 3. Nút bấm → Dim DALI
Push Button "Dimming" → GA `1/0/1` ← DALI Gateway Group 0 "Dimming".

## 4. Scene
Tạo GA `3/0/1`. Push Button nhấn giữ → gửi Scene Number. Actuator + DALI Gateway nhận Scene → thực hiện.

## 5. Timer
Logic Module / KNX Timer: 06:00 → mở rèm, 22:00 → tắt đèn.

## Bài tập
1. Tạo project: 1 Push Button 4 nút + 1 Switch Actuator 4 kênh + 1 Binary Input 4 kênh + 1 DALI Gateway.
2. Liên kết + test trên Group Monitor.
