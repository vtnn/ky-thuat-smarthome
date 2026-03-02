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

Nếu phần mềm không tìm thấy LAN Bridge: kiểm tra dây mạng, kiểm tra đèn LED trên cổng mạng LAN Bridge có sáng không. Tắt tường lửa (firewall) trên máy tính — đây là nguyên nhân thường gặp nhất khiến phần mềm không quét được.

### 1.2. Gán IP tĩnh

1. Chọn LAN Bridge trong danh sách.
2. Vào mục Network Settings.
3. Gán IP tĩnh (ví dụ: 192.168.10.201).
4. Tắt DHCP.
5. Lưu cấu hình.

Tại sao phải gán IP tĩnh? Vì ứng dụng điều khiển trên điện thoại kết nối trực tiếp đến IP của LAN Bridge. Nếu để DHCP, mỗi lần router khởi động lại có thể cấp IP khác, ứng dụng sẽ mất kết nối và chủ nhà phải cấu hình lại.

Nên chọn IP nằm ngoài dải DHCP của router. Ví dụ router cấp DHCP từ 192.168.10.100 đến 192.168.10.199, thì gán LAN Bridge IP 192.168.10.201 để không bao giờ bị trùng.

### 1.3. Thiết lập thời gian

Vào mục Date/Time trên System Commander, đồng bộ với giờ máy tính. Bước này cực kỳ quan trọng nhưng hay bị bỏ qua.

LAN Bridge có đồng hồ thời gian thực tích hợp. Toàn bộ lịch hẹn giờ (Scheduler) dựa vào đồng hồ này. Nếu giờ sai thì macor hẹn "23:00 bật báo động" sẽ bật lúc 21:00 hoặc 01:00 — chủ nhà sẽ rất khó chịu.

Sau mỗi lần mất điện kéo dài (vài ngày), đồng hồ có thể bị lệch. Nên kiểm tra lại giờ khi bảo trì định kỳ.

---

## 2. Cấu hình module DIN-RY8-N

Phần mềm sử dụng: DIN-RY Config Tool.

### 2.1. Quy trình gán Board ID

Mỗi module DIN-RY8-N trên cùng bus phải có Board ID riêng, không được trùng. Nếu hai board cùng ID, cả hai sẽ nhận cùng lệnh và hệ thống hoạt động sai hoàn toàn.

Quy trình gán ID:

1. Chỉ kết nối một board duy nhất vào bus tại thời điểm gán ID. Rút tất cả board khác ra trước.
2. Mở DIN-RY Config Tool, kết nối qua IP của LAN Bridge.
3. Phần mềm sẽ nhận diện board duy nhất trên bus.
4. Gán Board ID (ví dụ: 21, 22, 23...).
5. Lưu cấu hình, rút board ra.
6. Cắm board tiếp theo vào bus, lặp lại bước 2-5.
7. Sau khi gán xong tất cả board, nối lại toàn bộ bus.
8. Mở System Commander, quét lại — phải thấy đủ tất cả board với ID đúng.

Bước "cô lập" (chỉ cắm 1 board) rất quan trọng. Nếu cắm nhiều board cùng lúc khi tất cả đang mang ID mặc định (thường là 0 hoặc 1), phần mềm không phân biệt được board nào với board nào.

### 2.2. Quy ước đánh số Board ID

Nên đánh số Board ID theo nguyên tắc dễ nhớ:
- Tủ tầng 1: Board 21, 22 (nếu có 2 board).
- Tủ tầng 2: Board 31, 32.
- Tủ tầng 3: Board 41, 42.

Chữ số hàng chục là tầng, hàng đơn vị là thứ tự board trong tủ. Cách đánh này giúp nhìn Board ID là biết ngay board ở tủ nào, tầng nào.

---

## 3. Backup cấu hình

Sau khi cấu hình xong toàn bộ hệ thống, xuất file backup ngay. System Commander cho phép Export ra file `.cfg`.

Đặt tên file theo chuẩn của công ty: **`<ten_du_an-dia_chi>-config-<ngay>.cfg`**
*(Ví dụ: `Villa_Hinh_Thanh-Q2-config-20240302.cfg`)*

Lưu file backup và file mapping (`<ten_du_an-dia_chi>.xlsx`) vào cùng thư mục dự án trên Cloud. Đồng thời gửi bản sao cho quản lý kỹ thuật. Nếu LAN Bridge hỏng và phải thay mới, import file backup vào là khôi phục lại toàn bộ cấu hình, không phải cài lại từ đầu.

Trên thực tế, đã có trường hợp LAN Bridge hỏng sau 2 năm, không ai nhớ cấu hình cũ và không có file backup. Phải ngồi lập trình lại toàn bộ rule, macro, scheduler — mất gần một tuần.
