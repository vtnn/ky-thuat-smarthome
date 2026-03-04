---
title: "B2.05 — Cấu hình Controller MobiEyes"
description: "Hướng dẫn dùng System Commander cấu hình LAN Bridge và dùng DIN-RY Config Tool gán ID cho module."
module: "b"
level: "4-6"
tags: ["MobiEyes", "LAN Bridge", "System Commander", "DIN-RY Config Tool"]
---

## Mục tiêu
- Gán IP tĩnh cho LAN Bridge và thiết lập thời gian thực chính xác.
- Gán Board ID duy nhất cho từng module DIN-RY8-N trên bus.

---

## 1. Cấu hình LAN Bridge (CF-IP)

Phần mềm sử dụng: System Commander (cài trên máy tính Windows).

### 1.1. Kết nối

Cắm máy tính và LAN Bridge vào cùng mạng nội bộ (qua switch hoặc router). Mở System Commander, phần mềm sẽ tự quét mạng và hiển thị danh sách LAN Bridge tìm được.

Nếu phần mềm không tìm thấy LAN Bridge: kiểm tra dây mạng, kiểm tra đèn LED trên cổng mạng LAN Bridge có sáng không. Tắt tường lửa trên máy tính — đây là nguyên nhân thường gặp nhất khiến phần mềm không quét được.

### 1.2. Gán IP tĩnh

Nên gán IP tĩnh nằm ngoài dải DHCP của router để tránh xung đột IP.

Lớp mạng DHCP thông thường nằm từ `.100` đến `.200`. IP tĩnh khuyến nghị đặt là `192.168.1.65` (hoặc `.6x` tùy dự án).

Tại sao phải gán IP tĩnh? Vì ứng dụng trên điện thoại kết nối trực tiếp đến IP của LAN Bridge. Nếu để DHCP, mỗi lần router khởi động lại có thể cấp IP khác, ứng dụng sẽ mất kết nối.

### 1.3. Thiết lập thời gian

Vào mục Date/Time trên System Commander, đồng bộ với giờ máy tính. Toàn bộ lịch hẹn giờ dựa vào đồng hồ này. Nếu giờ sai thì macro hẹn giờ sẽ chạy không đúng yêu cầu của chủ nhà.

---

## 2. Cấu hình module DIN-RY8-N

Mỗi module DIN-RY8-N trên cùng bus phải có Board ID riêng, không được trùng.

### 2.1. Quy trình gán Board ID

Có 2 cách để gán Board ID và cấu hình module.

Cách 1 — gán thủ công bằng nút bấm trực tiếp. Dùng trong trường hợp không muốn cắm cáp USB hoặc cần xử lý nhanh tại tủ:
1. Bấm nút Setup trên module.
2. Bấm các nút Lên/Xuống để chọn số hàng chục.
3. Bấm Setup để chuyển sang hàng đơn vị, tiếp tục bấm Lên/Xuống để chọn số.
4. Bấm Setup lần nữa để lưu lại.

Cách 2 — dùng phần mềm DIN-RY Config Tool (khuyên dùng). Dùng để gán ID và cập nhật phần mềm điều khiển mới nhất:
1. Cắm cáp USB riêng vào từng bo (không cắm chung bus khi cấu hình cách này).
2. Dùng DIN-RY Config Tool để đặt ID.
3. Kiểm tra và cập nhật phần mềm điều khiển bản mới nhất cho board.

Sau khi đã gán ID và cập nhật cho từng board xong, ta cắm toàn bộ dây tín hiệu hệ thống vào bus. Sử dụng System Commander hoặc LAN Bridge để kết nối và quét lại toàn bộ bus xem đã hiển thị đầy đủ các Board ID và thiết bị chưa.

### 2.2. Quy ước đánh số Board ID

Để dễ quản lý, ta quy ước đánh số theo tầng:

- Tầng 1: bắt đầu từ 11, 12, 13...
- Tầng 2: bắt đầu từ 21, 22, 23...
- Tầng 3: bắt đầu từ 31, 32, 33...

Cách đánh này giúp nhìn vào Board ID là biết ngay thiết bị đó thuộc tầng nào.

---

## 3. Sao lưu cấu hình

Sau khi hoàn tất, bắt buộc phải sao lưu cấu hình. Có 2 loại cần lưu:

1. Sao lưu LAN Bridge: dùng System Commander để xuất cấu hình (Rule, Macro, hẹn giờ).
2. Sao lưu module: dùng DIN-RY Config để lưu cấu hình riêng từng bo.

Lưu file theo chuẩn: `<ten_du_an-dia_chi>-config-<ngay>.cfg`. Nếu hệ thống gặp sự cố hoặc thay mới thiết bị, chỉ cần nhập lại file sao lưu là xong, không phải lập trình lại từ đầu.
