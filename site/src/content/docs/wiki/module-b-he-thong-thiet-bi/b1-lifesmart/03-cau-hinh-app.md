---
title: "B1.03 — Cấu hình ứng dụng LifeSmart"
description: "Quy trình thêm Hub, ghép nối thiết bị con, đồng bộ điều hòa và quản lý nhiều Smart Station."
module: "b"
level: "3-5"
tags: ["LifeSmart", "cấu hình", "ứng dụng", "điều hòa", "ghép nối"]
---

## Mục tiêu
- Thêm Smart Station đúng cách và giữ Hub kết nối ổn định.
- Ghép nối thiết bị con nhanh, hạn chế lỗi hết thời gian chờ.

---

## 1. Thêm Smart Station

1. Tải ứng dụng LifeSmart (iOS hoặc Android).
2. Đăng ký tài khoản hoặc đăng nhập.
3. Cấp nguồn cho Smart Station, ưu tiên cắm cáp mạng dây.
4. Trong ứng dụng, chọn thêm thiết bị. Ứng dụng sẽ tự quét mạng nội bộ và tìm ra Hub.
5. Chọn Smart Station vừa tìm thấy, hoàn tất.

---

## 2. Ghép nối thiết bị con

### 2.1. Các bước chung

1. Trong ứng dụng, chọn thêm thiết bị.
2. Chọn đúng loại thiết bị muốn thêm.
3. Trên thiết bị vật lý, nhấn giữ nút ghép nối khoảng 5 giây cho đến khi đèn nhấp nháy (sẵn sàng).
4. Đợi ứng dụng hoàn tất ghép nối.
5. Đặt tên thiết bị theo quy tắc (xem bài 04).

### 2.2. Mấy lỗi hay gặp

Nếu ứng dụng báo hết thời gian chờ, thường là do thiết bị chưa vào đúng chế độ ghép nối. Nhấn giữ nút lại từ đầu.

Khi ghép nối, đặt thiết bị gần Hub (dưới 5m). Ghép xong rồi mới đem ra vị trí lắp đặt thực tế. Nếu ghép nối khi đã gắn xa Hub, tín hiệu yếu dẫn đến ghép hoài không được.

---

## 3. Đồng bộ điều hòa trung tâm

1. Thêm bộ điều khiển điều hòa (HVAC Gateway) vào ứng dụng như thiết bị con bình thường.
2. Vào danh sách thiết bị, chọn HVAC Gateway, vào phần cài đặt.
3. Trượt màn hình từ phải sang trái để bắt đầu đồng bộ nhóm địa chỉ.
4. Chờ 1–10 phút. Trong lúc đang đồng bộ, không thao tác gì trên HVAC Gateway.

---

## 4. Quản lý nhiều Smart Station (Cascade)

Khi nhà lớn cần nhiều Hub, các Hub phải cùng mạng nội bộ (LAN).

1. Vào cài đặt nâng cao, chế độ kỹ thuật, chọn quản lý Cascade.
2. Chọn Hub nguồn (Hub có thiết bị cần chia sẻ).
3. Chọn Hub đích (Hub muốn nhận thiết bị).
4. Chia sẻ. Thiết bị sẽ xuất hiện trên Hub nguồn.

---

## 5. Tích hợp thiết bị hãng khác

Sonos: để Sonos và Smart Station cùng mạng LAN, ứng dụng sẽ tự phát hiện.

Philips Hue: cần Hue Bridge cùng mạng LAN. Thêm Hue Bridge vào ứng dụng rồi chọn bóng đèn muốn điều khiển.

Camera Hikvision: vào trang quản trị web của camera, bật UPnP và Hikvision-CGI. Sau đó thêm camera trong ứng dụng LifeSmart.

---

## 6. Chia sẻ quyền

1. Vào cài đặt, chọn quản lý thành viên.
2. Mời thành viên bằng email hoặc mã QR.
3. Chọn quyền: Quản trị hoặc Thành viên.

Chỉ cấp quyền Quản trị cho người thực sự cần. Nếu chưa bàn giao đầy đủ mà đã cấp quyền Quản trị cho khách hàng, họ có thể vô tình xóa hoặc thay đổi cấu hình mà kỹ thuật đã thiết lập.
