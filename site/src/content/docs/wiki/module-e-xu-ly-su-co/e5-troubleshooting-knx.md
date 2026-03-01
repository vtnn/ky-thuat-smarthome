---
title: "E5 — Troubleshooting KNX"
description: "Mục lục xử lý sự cố KNX: kiểm tra điện áp bus, kết nối ETS, Group Address và DALI commissioning."
module: "e"
level: "3-6"
tags: ["KNX", "troubleshooting"]
---

## Mục tiêu
- Phân loại lỗi KNX theo tầng: Vật lý (Bus) -> Giao tiếp (ETS) -> Logic (Group Address).
- Sử dụng công cụ Group Monitor để bắt đúng "bệnh" của hệ thống.

---

## Danh mục xử lý sự cố KNX

Anh/em nhấn vào từng mục dưới đây để xem hướng dẫn chi tiết:

### 1. Sự cố hạ tầng Bus
- [Bus mất tín hiệu hoặc thiết bị không phản hồi](/wiki/module-b-he-thong-thiet-bi/b3-knx/07-xu-ly-su-co/#1-b%E1%BA%A3ng-tri%E1%BB%87u-ch%E1%BB%A9ng--c%C3%A1ch-ki%E1%BB%83m-tra) (Kiểm tra điện áp 21–29V DC)

### 2. Sự cố phần mềm và Lập trình
- [ETS không kết nối được với Gateway](/wiki/module-b-he-thong-thiet-bi/b3-knx/07-xu-ly-su-co/#1-b%E1%BA%A3ng-tri%E1%BB%87u-ch%E1%BB%A9ng--c%C3%A1ch-ki%E1%BB%83m-tra)
- [Lỗi không bật đèn khi nhấn nút (Group Address)](/wiki/module-b-he-thong-thiet-bi/b3-knx/07-xu-ly-su-co/#1-b%E1%BA%A3ng-tri%E1%BB%87u-ch%E1%BB%A9ng--c%C3%A1ch-ki%E1%BB%83m-tra)

### 3. Sự cố tích hợp (Binary Input / DALI)
- [Binary Input không phản hồi lệnh](/wiki/module-b-he-thong-thiet-bi/b3-knx/07-xu-ly-su-co/#1-b%E1%BA%A3ng-tri%E1%BB%87u-ch%E1%BB%A9ng--c%C3%A1ch-ki%E1%BB%83m-tra)
- [Lỗi điều khiển đèn DALI qua KNX](/wiki/module-b-he-thong-thiet-bi/b3-knx/07-xu-ly-su-co/#1-b%E1%BA%A3ng-tri%E1%BB%87u-ch%E1%BB%A9ng--c%C3%A1ch-ki%E1%BB%83m-tra)

---

## Checklist đo kiểm nhanh
[Xem Checklist xử lý nhanh KNX](/wiki/module-b-he-thong-thiet-bi/b3-knx/07-xu-ly-su-co/#2-checklist-x%E1%BB%AD-l%C3%BD-nhanh)
