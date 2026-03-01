---
title: "B4.03 — Quy tắc đặt tên DALI"
description: "Quy ước đặt tên cho module DALI và từng Group theo khu vực và chức năng."
module: "b"
level: "3-6"
tags: ["DALI", "đặt tên"]
---

## Mục tiêu
- Thống nhất tên Group để khi gọi Scene (Xem phim, Ăn tối...) kỹ thuật viên nhận diện nhanh.
- Tránh trùng lặp tên giữa các module DALI khác nhau trong công trình.

---

## 1. Format đặt tên
```
[DALI_KHU_VUC] - Group [Số]
```

## 2. Ví dụ thực tế

| Tên Group | Chức năng chi tiết |
|---|---|
| **DALI_PK - Group 1** | Đèn trần Phòng khách |
| **DALI_PK - Group 2** | Đèn hắt trần Phòng khách |
| **DALI_PA - Group 3** | Đèn bàn ăn |
| **DALI_PN_Master - Group 4** | Đèn ngủ |

---

## 3. Lưu ý
- Ghi rõ nội dung các ballast trong từng Group vào bảng mapping.
- Dán bảng mapping ngay tại tủ điện/tủ điều khiển.
- Sử dụng đúng viết tắt khu vực đồng bộ với hệ điều khiển chính.
