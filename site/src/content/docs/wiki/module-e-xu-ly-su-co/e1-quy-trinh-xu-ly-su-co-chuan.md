---
title: "E1 — Quy trình xử lý sự cố chuẩn"
description: "Flow 6 bước để khoanh vùng lỗi nhanh: triệu chứng → phân loại → mạng → nguồn → cấu hình → automation."
module: "e"
level: "3-6"
tags: ["xử lý sự cố", "quy trình"]
---

## Mục tiêu
- Có một quy trình thống nhất để kỹ thuật viên nào cũng xử lý sự cố theo cùng 1 cách.
- Khoanh vùng nguyên nhân nhanh để tránh mò mẫm và tránh làm phát sinh lỗi mới.

---

## 1. Flow xử lý (6 bước)

```
[1. Xác định lỗi] → [2. Phân loại] → [3. Kiểm tra mạng]
→ [4. Kiểm tra nguồn] → [5. Kiểm tra cấu hình] → [6. Kiểm tra automation]
```

---

## 2. Chi tiết từng bước

### 2.1. Xác định lỗi
- Triệu chứng cụ thể là gì? (offline, không dim, không ghi hình...)
- Xảy ra từ khi nào?
- Trước đó có thay đổi gì? (mất điện, đổi modem, update firmware, thi công thêm...)

### 2.2. Phân loại lỗi
Chọn 1 nhóm chính để đi đúng hướng:
- Mạng / Internet
- Nguồn / PoE / Pin
- Cấu hình / Mapping
- Lập trình / Automation
- Phần cứng
- Thi công / Đấu nối

### 2.3. Kiểm tra mạng
- Ping IP thiết bị (cùng VLAN/LAN).
- Kiểm tra IP/Gateway/DNS.
- Kiểm tra VLAN/Port switch (nếu có).

### 2.4. Kiểm tra nguồn
- CB có nhảy không?
- PoE port có sáng?
- Adapter có cấp đúng điện áp?
- Bus (KNX/DALI/RS485) có điện áp đúng?

### 2.5. Kiểm tra cấu hình
- IP có đúng quy hoạch?
- Mapping có đúng (kênh relay/GA/group)?
- Firmware có tương thích?

### 2.6. Kiểm tra automation
- Trigger/Condition có đúng?
- Có bị trùng automation?
- Có loop vô hạn không?

---

## 3. Escalation (khi quá 30 phút chưa ra)
1. Ghi nhận chi tiết: triệu chứng, các bước đã kiểm tra, kết quả đo.
2. Chụp ảnh/video (tủ, wiring, log, màn hình lỗi).
3. Báo cáo quản lý kỹ thuật để phối hợp xử lý.
