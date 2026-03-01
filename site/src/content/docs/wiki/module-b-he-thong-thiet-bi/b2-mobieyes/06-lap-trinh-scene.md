---
title: "B2.06 — Lập trình Scene MobiEyes"
description: "Cách xây dựng Rule → gọi Macro → Scheduler/Variable cho các kịch bản thực tế."
module: "b"
level: "4-6"
tags: ["MobiEyes", "Macro", "Rule", "Scheduler", "automation"]
---

## Mục tiêu
- Nắm cơ chế **Rule (Trigger) → Macro (Action)** của MobiEyes.
- Viết được các kịch bản phổ biến: công tắc đảo, PIR WC delay off, báo động.

---

## 1. Khái niệm cơ bản

| Khái niệm | Định nghĩa | Ví dụ |
|---|---|---|
| Rule | Theo dõi sự kiện, khi khớp sẽ gọi Macro | Input đổi trạng thái → gọi macro toggle |
| Macro | Tập hợp Action/Delay/Condition | Bật kênh 21-1 → delay → bật 21-2 |
| Scheduler | Hẹn giờ chạy Macro | 23:00 → bật báo động |
| User Variable | Biến trạng thái | `alarm=0/1` |

---

## 2. Kịch bản thực tế

### 2.1. Công tắc đảo (Toggle)
- Rule: nhận event input thay đổi.
- Macro: toggle relay kênh tương ứng.

### 2.2. PIR WC — tự tắt sau 3 phút
- Rule ON → bật đèn.
- Rule OFF → delay 180000ms → tắt đèn.

### 2.3. Scheduler
- 23:00 → gọi macro `bao_dong_on`.
- 05:00 → gọi macro `bao_dong_off`.

### 2.4. Báo động theo biến alarm
- Macro `bao_dong_on` set `alarm=1`.
- Rule mở cửa cổng chỉ chạy khi `alarm=1`.

---

## 3. Lưu ý quan trọng
- Test từng Rule/Macro trước khi ghép kịch bản lớn.
- Đối chiếu bảng mapping để tránh sai kênh board.
- Backup cấu hình sau mỗi lần sửa.
- Delay dùng đơn vị **ms** (1s = 1000ms).
