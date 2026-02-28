---
title: "Quy tắc đặt tên thiết bị"
module: "d"
level: "3-6"
tags: ["đặt tên", "quy tắc", "tất cả hệ"]
---
# D2 — Quy Tắc Đặt Tên Thiết Bị (Tất Cả Hệ Thống)

## 📌 LifeSmart: `[KHU_VUC]_[TEN_DEN]`
- `PK_DenTran`, `PK_DenLed`, `PN_Master_DenNgu`
- Đặt theo cụm công tắc (khu vực trước → sau)
- Chi tiết: `module-b/b1-lifesmart/04-quy-tac-dat-ten.md`

## 📌 MobiEyes: `[Module]-[Kenh] = [Chuc_nang]`
- `21-1 = Den Tran PK`, `21-2 = Den Led PK`
- Module phải mapping đúng vị trí tủ
- Chi tiết: `module-b/b2-mobieyes/04-quy-tac-dat-ten.md`

## 📌 KNX: `Area.Line.Device`
- `1.1.10` = Push Button PK, `1.1.20` = Actuator PK
- Công tắc và actuator tách dải số riêng
- Chi tiết: `module-b/b3-knx/05-quy-tac-dia-chi.md`

## 📌 DALI: `[DALI_KHU_VUC] - Group [Số]`
- `DALI_PK - Group 1 (Đèn Trần 3-4-5-6)`
- `DALI_PK - Group 2 (Đèn Hắt)`
- Ghi rõ module DALI + số ballast trong group
- Chi tiết: `module-b/b4-dali-dimmer/03-quy-tac-dat-ten.md`

## Nguyên tắc chung
- Đặt tên **TRƯỚC** khi cấu hình.
- **NHẤT QUÁN** trong toàn bộ dự án.
- **Không dùng** ký tự đặc biệt, dấu tiếng Việt.
- **Một người** chịu trách nhiệm naming cho mỗi dự án.
