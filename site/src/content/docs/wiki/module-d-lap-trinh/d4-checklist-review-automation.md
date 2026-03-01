---
title: "D4 — Checklist Review Automation"
description: "Checklist bắt buộc trước khi bàn giao: kiểm tra logic, test thực tế và xác nhận với khách hàng."
module: "d"
level: "4-6"
tags: ["checklist", "review", "automation"]
---

## Mục tiêu
- Đảm bảo automation chạy đúng, không xung đột và không tạo vòng lặp.
- Giảm lỗi phát sinh sau bàn giao.

---

## 1. Checklist Logic
- [ ] Đúng theo tư vấn ban đầu (đối chiếu phòng kinh doanh).
- [ ] Không trùng automation (2 scene cùng trigger).
- [ ] Không xung đột (bật ↔ tắt cùng lúc).
- [ ] Không có loop vô hạn (Scene A → Scene B → Scene A).
- [ ] Delay/Timer hoạt động đúng.

---

## 2. Checklist Test thực tế
- [ ] Test ban ngày + ban đêm.
- [ ] Test có người + không người.
- [ ] Test bằng App + nút vật lý.
- [ ] Test khi mất Internet (Local control vẫn chạy).
- [ ] Test edge case: bật khi đã bật, tắt khi đã tắt.

---

## 3. Checklist Khách hàng
- [ ] Khách hàng đã confirm danh sách kịch bản.
- [ ] Khách hàng đã test thử trên App.
- [ ] Khách hàng được hướng dẫn cách bật/tắt và chỉnh sửa cơ bản.
