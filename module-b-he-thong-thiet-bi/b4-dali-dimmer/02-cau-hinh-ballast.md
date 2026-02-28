---
title: "Cấu hình Ballast DALI"
module: "b"
level: "4-6"
tags: ["DALI", "ballast", "commissioning"]
---
# B4.02 — Cấu Hình Ballast (Commissioning)

## Commissioning DALI
1. Kết nối tất cả driver/ballast vào bus DALI.
2. Dùng phần mềm (ETS cho KNX-DALI, hoặc tool riêng) để quét thiết bị.
3. Gán **địa chỉ DALI** (0-63) cho mỗi driver.
4. Gán vào **Group** (0-15).
5. Test: gửi lệnh dim từng group.

## Lưu ý
- Mỗi driver phải có địa chỉ **duy nhất**.
- Ghi nhận: địa chỉ → driver → đèn → vị trí.
- Backup cấu hình sau commissioning.
