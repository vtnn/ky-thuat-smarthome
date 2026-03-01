---
title: "D3 — Lập trình kịch bản (Ví dụ thực tế)"
description: "Tổng hợp các kịch bản smarthome phổ biến: Về nhà, Ra khỏi nhà, Xem phim, Chống trộm, Đi ngủ."
module: "d"
level: "4-6"
tags: ["kịch bản", "scene", "ví dụ"]
---

## Mục tiêu
- Thành thạo các bước thiết lập kịch bản đa thiết bị (Scene).
- Hiểu cách phối hợp giữa cảm biến, thời gian và thiết bị đầu cuối.

---

## 1. Kịch bản "Về Nhà"
- **Trigger:** Cảm biến cửa chính = OPEN.
- **Condition:** Thời gian sau 18:00 (Ban đêm).
- **Actions:** Bật đèn sảnh, bật đèn phòng khách, mở rèm, bật AC nếu nhiệt độ > 28°C.

## 2. Kịch bản "Ra Khỏi Nhà" (Away)
- **Trigger:** Nhấn nút Away (manual) hoặc không có chuyển động toàn nhà > 30p.
- **Actions:** Tắt tất cả đèn/AC, đóng rèm, kích hoạt báo động, bật camera ghi hình.

## 3. Kịch bản "Xem Phim"
- **Trigger:** Nhấn nút trên App.
- **Actions:** Dim đèn trần 30%, tắt đèn hắt, đóng rèm vải, bật TV/Loa.

## 4. Kịch bản "An Ninh / Chống Trộm"
- **Condition:** Chế độ an ninh đang BẬT (ARM).
- **Trigger:** PIR sân vườn phát hiện người.
- **Actions:** Bật đèn sân vườn 100%, hú còi báo động, gửi thông báo kèm ảnh camera về điện thoại.

## 5. Kịch bản "Đi Ngủ"
- **Trigger:** Đúng 23:00 hoặc nhấn phím đầu giường.
- **Actions:** Tắt toàn bộ đèn ngoài phòng ngủ, khoá cửa cổng, set AC chế độ Sleep, bật an ninh vòng ngoài.

---

## 6. Lưu ý vận hành
- Mọi kịch bản phải được **khách hàng xác nhận** trước khi bàn giao.
- Test thực tế kịch bản ít nhất 3 lần để đảm bảo không lỗi.
- Hướng dẫn khách cách bật/tắt kịch bản trên giao diện chính của App.
