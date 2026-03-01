---
title: "B4.02 — Cấu hình Ballast DALI (Commissioning)"
description: "Quy trình quét thiết bị, gán địa chỉ 0–63, gom group 0–15 và test dimming/scene."
module: "b"
level: "4-6"
tags: ["DALI", "ballast", "commissioning"]
---

## Mục tiêu
- Commissioning đúng để mỗi driver có **địa chỉ duy nhất**.
- Gán group/scene có mapping rõ ràng để bàn giao dễ bảo trì.

---

## 1. Quy trình Commissioning chuẩn
1. Kết nối tất cả driver/ballast vào bus DALI.
2. Mở tool commissioning (ETS nếu là KNX-DALI, hoặc tool riêng của gateway).
3. Quét thiết bị (scan).
4. Gán **địa chỉ DALI** (0–63) cho từng ballast/driver.
5. Gom ballast vào **Group** (0–15).
6. Test: gửi lệnh dim từng group và kiểm tra đèn phản hồi.

---

## 2. Lưu ý bắt buộc
- Mỗi driver phải có địa chỉ **duy nhất**.
- Ghi nhận mapping: `Địa chỉ → Driver → Đèn → Vị trí`.
- Backup cấu hình sau commissioning.
