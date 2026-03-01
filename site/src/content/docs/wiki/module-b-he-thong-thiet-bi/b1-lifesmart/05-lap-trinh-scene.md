---
title: "B1.05 — Lập trình Scene LifeSmart (AI Builder)"
description: "Hướng dẫn tạo Smart/Scene bằng kéo-thả block, kèm ví dụ thực tế và lưu ý tránh xung đột automation."
module: "b"
level: "4-6"
tags: ["LifeSmart", "scene", "automation", "AI Builder"]
---

## Mục tiêu
- Hiểu cấu trúc **Trigger → Condition → Action** trong AI Builder.
- Tạo được các scene phổ biến: về nhà, đi ngủ, motion WC delay off.

---

## 1. AI Builder là gì?
AI Builder là công cụ lập trình tự động hóa theo kiểu kéo-thả (block), không cần viết code.

Cấu trúc chung:
```
Điều kiện/Trigger → Lệnh (Command) → Thiết bị (Object)
```

---

## 2. Các khối chức năng (Blocks)

### 2.1. Action Block — Điều khiển thiết bị
| Chức năng | Ví dụ |
|---|---|
| Bật/tắt | Bật đèn, tắt quạt |
| RGB | Đổi màu đèn |
| IR | Bật TV, chỉnh nhiệt độ AC |
| Rèm | Mở/đóng rèm |

### 2.2. Function Block — Điều kiện & thời gian
| Chức năng | Ví dụ |
|---|---|
| Calendar | Theo ngày/giờ |
| Timer | Hẹn giờ |
| Delay On/Off | Tắt sau X phút |
| Compare | Nhiệt độ > 28°C |
| Time Limit | Chỉ chạy 08:00–09:00 |

### 2.3. Logic Operator — Toán tử logic
| Toán tử | Ý nghĩa | Ví dụ |
|---|---|---|
| AND | Cả 2 điều kiện đúng | Mở cửa + ban đêm → bật đèn |
| OR | 1 trong 2 điều kiện đúng | Motion hoặc mở cửa → bật đèn |
| NOT | Phủ định | Không có người → tắt |

---

## 3. Tạo scene trong App

1. App → **Smart** → **+** → Add New Smart.
2. Chọn Create Empty → Graphic Edit.
3. Thêm Trigger.
4. Thêm Action.
5. Nối block theo logic.
6. Lưu → Test.

---

## 4. Ví dụ thực tế

### 4.1. Mở cửa → Bật đèn
- Trigger: Guard Sensor = Open
- Action: Đèn phòng khách = ON

### 4.2. Bật AC theo giờ
- Condition: Time Limit 08:00–09:00
- Trigger: Cửa = Closed
- Action: AC = ON 25°C

### 4.3. Đi ngủ (scene tổng hợp)
- Trigger: Manual button "Đi ngủ"
- Actions: Tắt đèn, set AC sleep, bật motion camera, khóa cửa.

### 4.4. WC Motion → Delay Off
- Trigger: Motion = Detected
- Action: WC_Đèn = ON
- Function: Delay Off 180s → OFF

---

## 5. Lưu ý khi lập trình

- Tránh tạo 2 automation xung đột (bật ↔ tắt cùng trigger).
- Test đủ case: ban ngày/ban đêm, có/không người.
- Khách hàng cần confirm kịch bản trước khi khóa cấu hình.
