---
title: "D2 — Quy tắc đặt tên thiết bị (Tất cả hệ thống)"
description: "Chuẩn naming cho LifeSmart, MobiEyes, KNX, DALI để dễ tìm, dễ debug và bàn giao."
module: "d"
level: "3-6"
tags: ["đặt tên", "quy tắc", "tất cả hệ"]
---

## Mục tiêu
- Đặt tên nhất quán để kỹ thuật viên nào tiếp nhận cũng hiểu.
- Giúp tìm thiết bị nhanh trong App/ETS/Controller và tránh nhầm lẫn khi lập trình scene.

---

## 1. Naming theo từng hệ

### 1.1. LifeSmart
Format: `[KHU_VUC]_[TEN_DEN]`  
Ví dụ: `PK_DenTran`, `PN_Master_DenNgu`

Xem chi tiết: [B1.04 — Quy tắc đặt tên LifeSmart](/wiki/module-b-he-thong-thiet-bi/b1-lifesmart/04-quy-tac-dat-ten/)

### 1.2. MobiEyes
Format mapping vật lý: `[Board]-[Kenh] = [Chuc_nang]`  
Ví dụ: `21-1 = DenTran_PK`

Xem chi tiết: [B2.04 — Quy tắc đặt tên MobiEyes](/wiki/module-b-he-thong-thiet-bi/b2-mobieyes/04-quy-tac-dat-ten/)

### 1.3. KNX
Format Physical Address: `Area.Line.Device`  
Ví dụ: `1.1.10` (Push Button), `1.1.20` (Actuator)

Xem chi tiết: [B3.05 — Quy tắc địa chỉ KNX](/wiki/module-b-he-thong-thiet-bi/b3-knx/05-quy-tac-dia-chi/)

### 1.4. DALI
Format: `[DALI_KHU_VUC] - Group [Số]`  
Ví dụ: `DALI_PK - Group 1`

Xem chi tiết: [B4.03 — Quy tắc đặt tên DALI](/wiki/module-b-he-thong-thiet-bi/b4-dali-dimmer/03-quy-tac-dat-ten/)

---

## 2. Nguyên tắc chung
- Đặt tên **TRƯỚC** khi cấu hình.
- Một dự án nên có **1 người** phụ trách naming.
- Tránh ký tự đặc biệt, ưu tiên `_`.
- Luôn có tiền tố khu vực để khi xem danh sách "All devices" không bị rối.
