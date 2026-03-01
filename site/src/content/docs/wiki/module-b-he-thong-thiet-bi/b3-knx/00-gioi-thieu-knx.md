---
title: "B3.00 — Giới thiệu hệ thống KNX"
description: "Tiêu chuẩn quốc tế cho điều khiển tòa nhà thông minh, mô hình phi tập trung và khả năng tương thích đa hãng."
module: "b"
level: "1-6"
tags: ["KNX", "giới thiệu", "phi tập trung"]
---

## Mục tiêu
- Hiểu tại sao **KNX là tiêu chuẩn vàng** cho các dự án lớn (biệt thự cao cấp, tòa nhà).
- Nắm bắt mô hình **phi tập trung**: không phụ thuộc vào 1 bộ trung tâm duy nhất.

---

## 1. Tổng quan
KNX là tiêu chuẩn quốc tế (ISO 14543-3) cho hệ thống điều khiển tòa nhà. Điểm mạnh nhất của KNX là tính bền bỉ và khả năng hoạt động liên tục hàng chục năm mà không cần bảo trì lớn.

## 2. Đặc điểm phi tập trung
Khác với hệ Zigbee hay WiFi, KNX không có "Hub" tổng quản lý mọi thứ. Mỗi thiết bị (công tắc, module relay, cảm biến) đều có trí thông minh riêng:
- Nếu 1 thiết bị hỏng, các thiết bị còn lại vẫn chạy bình thường.
- Giao tiếp trực tiếp với nhau qua đường bus cáp chuyên dụng.

---

## 3. Phạm vi áp dụng tại công ty
- **Push Button:** Nút bấm thông minh điều khiển chiếu sáng, rèm, scene.
- **KNX-DALI Gateway:** Cầu nối điều khiển chuyên sâu hệ đèn DALI.
- **Actuator:** Các bộ relay công suất lớn (bật/tắt, dim, điều khiển motor).
- **Binary Input:** Module tích hợp công tắc cơ truyền thống vào hệ KNX.

## 4. Kiến trúc hệ thống cơ bản
Hệ thống vận hành trên một đường bus cáp duy nhất (29V DC) kết nối tất cả thiết bị:
```
[KNX/IP Gateway] ← Kết nối App/Mạng LAN
       ↕
[KNX Bus Cable] — Tuyến cáp xanh lá kết nối thiết bị
  ├── Push Button (Công tắc thông minh)
  ├── Actuator (Bộ relay trong tủ điện)
  ├── DALI Gateway (Điều khiển đèn)
  └── Binary Input (Kết nối công tắc cơ)
```
