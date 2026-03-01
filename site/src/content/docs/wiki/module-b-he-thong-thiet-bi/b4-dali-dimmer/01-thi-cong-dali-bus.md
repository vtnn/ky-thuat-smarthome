---
title: "B4.01 — Thi công DALI Bus"
description: "Quy chuẩn cáp, topology đi dây và nguyên tắc 'không phân cực' khi thi công bus DALI."
module: "b"
level: "2-4"
tags: ["DALI", "bus", "thi công"]
---

## Mục tiêu
- Biết chọn cáp và kéo bus đúng cách để tránh sụt áp tín hiệu.
- Tận dụng khả năng **đi chung ống 220V** để tiết kiệm hạ tầng nếu thiết kế cho phép.

---

## 1. Cáp sử dụng
- **Loại cáp:** 2 dây (có thể dùng 2×1.5mm²).
- **Phân cực:** 2 dây bus (DA/DA) **không phân cực** — không lo đấu nhầm cực (+/-).
- **Hạ tầng:** DALI là bus duy nhất cho phép đi chung ống với dây nguồn 220V (theo chuẩn IEC 62386).

---

## 2. Topology và Đấu nối

- **Mô hình:** Tuyến (Bus), Sao (Star), Cây (Tree) hoặc kết hợp.
- **Cấm:** Tuyệt đối **không nối vòng kín (Ring)**.
- **Sơ đồ:** Các driver mắc song song vào đường DA/DA.

---

## 3. Checklist thi công
- [ ] Cáp 2 dây đúng tiết diện; tổng chiều dài ≤ 300m.
- [ ] Driver/Ballast lắp đúng vị trí, ưu tiên gần đèn.
- [ ] Đảm bảo nguồn DALI bus (≈16V) có trên đường dây.
- [ ] Kiểm tra ngắn mạch trước khi bật nguồn tổng.
