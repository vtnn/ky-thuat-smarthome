---
title: "B1.01c — Hướng dẫn HVAC Gateway"
description: "Cách triển khai và cấu hình bộ chuyển đổi điều hòa trung tâm (HVAC Gateway) với hệ thống LifeSmart."
module: "b"
level: "3-6"
---

## Mục tiêu
- Hiểu cấu trúc và thông số bộ chuyển đổi điều hoà trung tâm (HVAC Gateway).
- Đấu nối đúng dây tín hiệu với dàn lạnh/dàn nóng và cấp nguồn 12V một chiều an toàn.
- Biết cách tìm kiếm thiết bị điều hòa (Sync) trên ứng dụng LifeSmart.

---

![Hình ảnh thực tế HVAC Gateway](../../../../../assets/images/01c-hvac-gateway/image18.png)
<p class="hero-image-caption">Bảng cổng kết nối và màn hình hiển thị trực quan của bộ chuyển đổi điều hoà trung tâm.</p>

## 1. Thông số cốt lõi

HVAC Gateway giúp đưa dàn lạnh trung tâm của các hãng (Daikin, Toshiba, Hitachi, Mitsubishi, Panasonic...) vào chung hệ sinh thái LifeSmart.

Các thông số phần cứng anh em kỹ thuật cần lưu ý:

- Nguồn nuôi bắt buộc 12V một chiều. Đừng bao giờ cắm nhầm 24V hay 220V — cắm sai là đứt cầu chì luôn, có trường hợp cháy cả bo mạch.
- Dây kết nối điều hòa: dùng cáp tín hiệu 2 lõi xoắn có bọc chống nhiễu, tiết diện lớn hơn 0.75mm². Tránh để song song với dây cấp điện xoay chiều (L), khoảng cách cách ly khuyến cáo ít nhất 30cm để không rớt tín hiệu.
- Các cổng ra tín hiệu: có cụm cổng dữ liệu điều hoà (AIR CON Terminals).

## 2. Cấu hình chọn hãng điều hòa qua Bluetooth

Các phiên bản HVAC Gateway đời mới nhất không sử dụng chân gạt phần cứng nữa mà đã chuyển sang cấu hình hoàn toàn qua kết nối Bluetooth.

Cách lấy mã cấu hình trên điện thoại:

1. Lần đầu cắm điện, trên màn hình LCD của Gateway sẽ hiện một mã QR.
2. Dùng điện thoại (qua WeChat) quét mã QR này — hoặc tìm tài khoản Official Account tên "迈斯" (hoặc "迈斯maisi") để vào mục cấu hình qua Bluetooth.
3. Kết nối Bluetooth với thiết bị Gateway. Khi kết nối thành công, đèn Bluetooth (ST1) trên board sẽ sáng xanh lá cố định.
4. Trên giao diện điện thoại, chọn khai báo tên hãng điều hoà cần kết nối (Daikin, Mitsubishi, Toshiba, Panasonic...).

Ngoài ra, thao tác vật lý trên nút nhấn board mạch chỉ dùng cho 2 trường hợp khẩn cấp:

- Nút SET: bấm giữ 5 giây để khôi phục cài đặt gốc (khi màn hình đang hiện ở trang Reset).
- Phím lên/xuống: chuyển xem các tab thông báo số lượng máy quét được, hoặc nhấn tổ hợp lên + xuống để khởi động lại Gateway.

## 3. Luồng cấu hình lên ứng dụng

Sau khi cấp nguồn 12V một chiều, thiết bị sẽ khởi động:

1. Chờ trên màn hình hiển thị chạy số đếm ngược. Nó cho 20 giây hiển thị chế độ Reset — đừng bấm gì, cứ đợi để nó tự nhảy.
2. Màn hình báo "Searching HVAC ...". Gateway sẽ tự quét tìm thiết bị dàn lạnh. Quá trình này tốn chừng 2 đến 5 phút.
3. Nếu quét xong, số lượng điều hòa tìm thấy sẽ hiển thị. Đèn HBS trên board sẽ nhấp nháy (báo đã bắt được nhịp tín hiệu máy lạnh). Đèn STA tối là tín hiệu bình thường.
4. Mở ứng dụng LifeSmart → bấm "+" → thêm thiết bị, chọn loại HVAC Gateway.
5. Trong cài đặt HVAC trên ứng dụng → mục đồng bộ địa chỉ, chọn các nhóm dàn lạnh để đưa về màn hình hiển thị dưới dạng điều khiển máy lạnh riêng biệt. Lúc này nhớ đặt lại tên từng máy lạnh theo phòng.

Khi gặp lỗi: màn hình Gateway có sẵn chỗ hiển thị mã lỗi. Thấy mã lỗi thì chụp lại và gửi thẳng cho kỹ thuật bên mảng cơ điện lạnh. Đây là cách nhanh nhất chứng minh lỗi thuộc về hệ điều hoà hay nằm ở hệ thống thông minh.

---

## Tài liệu tham khảo
- [Hướng dẫn cấu hình HVAC Gateway (Google Docs)](https://docs.google.com/document/d/10UfKaA0388Ols9M_CQSKtDEeTa9tBNiP/edit)
- [Hướng dẫn sử dụng AC Gateway 2024 (PDF)](/wiki/assets/pdf/AC%20Gateway%20Manual%202024.pdf)
