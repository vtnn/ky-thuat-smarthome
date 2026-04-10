---
title: "B5.06 — Remote Access (Hik-Connect)"
description: "Cấu hình Hik-Connect P2P để xem camera từ xa, quy trình bàn giao tài khoản cho khách hàng và các lưu ý bảo mật quan trọng."
module: "b"
level: "3-5"
tags: ["Hik-Connect", "remote", "P2P", "bảo mật"]
---

## Mục tiêu
- Cấu hình Hik-Connect để khách hàng xem camera từ xa mà không cần port forwarding.
- Nắm quy trình bàn giao tài khoản đúng cách, tránh mất quyền quản trị.
- Hiểu các nguyên tắc bảo mật khi cho phép truy cập từ xa.

---

## 1. Hik-Connect là gì?

Hik-Connect là dịch vụ Cloud P2P của Hikvision, cho phép xem camera từ xa thông qua Internet mà không cần cấu hình port forwarding trên router. Đây là phương pháp truy cập từ xa được khuyến nghị cho các dự án nhà ở, vì:

- **Đơn giản**: Không cần hiểu về port forwarding, NAT, DDNS.
- **Bảo mật hơn**: Không mở port trực tiếp ra Internet — giảm nguy cơ bị tấn công.
- **Ổn định**: Hoạt động ổn định với mọi loại kết nối Internet (cáp quang, 4G, WiFi).

### Hạn chế

- Phụ thuộc vào server Hik-Connect. Nếu server bảo trì hoặc gặp sự cố, không xem từ xa được (ghi hình tại NVR vẫn bình thường).
- Chất lượng xem từ xa phụ thuộc vào tốc độ upload Internet tại nơi đặt NVR.
- Playback (xem lại) từ xa chậm hơn xem trực tiếp, đặc biệt với đường truyền upload thấp.

---

## 2. Điều kiện cần

Trước khi cấu hình Hik-Connect, đảm bảo:

1. **NVR có kết nối Internet**: Cáp mạng từ port LAN của NVR đến Router/Modem. NVR phải ping được DNS server (8.8.8.8).
2. **DNS Server đúng**: Vào Configuration → Network → TCP/IP → đảm bảo DNS đã cấu hình. DNS cần phân giải được `dev.hik-connect.com`.
3. **Firmware NVR đủ mới**: Các bản firmware cũ có thể gặp lỗi kết nối Hik-Connect. Cập nhật firmware trước khi cấu hình.

---

## 3. Cấu hình Hik-Connect trên NVR

### Bước 1: Bật Hik-Connect
Trên giao diện NVR (qua màn hình hoặc web):
1. Configuration → Network → Platform Access.
2. Chọn **Type**: Hik-Connect.
3. Tick **Enable**.
4. Đồng ý điều khoản dịch vụ.

### Bước 2: Thiết lập Verification Code
Hik-Connect yêu cầu một mã xác minh (verification code) để bảo vệ luồng video:
1. Nhập verification code (6-12 ký tự, kết hợp chữ và số).
2. Mã này sẽ cần khi thêm NVR vào app Hik-Connect trên điện thoại.
3. **Ghi nhận verification code** vào biên bản bàn giao — mất mã này phải vào NVR trực tiếp để xem lại.

### Bước 3: Kiểm tra trạng thái
Sau khi bật và Apply:
- **Status: Online** → thành công, NVR đã kết nối được server Hik-Connect.
- **Status: Offline** → kiểm tra: NVR có Internet không? DNS đúng chưa? Firewall trên router có chặn không?

---

## 4. Thêm thiết bị vào App Hik-Connect

### Trên điện thoại (iOS/Android)

1. Tải app **Hik-Connect** từ App Store hoặc Google Play.
2. Đăng ký tài khoản Hik-Connect (dùng email hoặc số điện thoại).
3. Đăng nhập → nhấn dấu **+** → chọn "Scan QR Code" hoặc "Manual Adding".
4. **Quét QR Code**: Mã QR có trên nhãn NVR (mặt sau/dưới) hoặc trong menu Platform Access.
5. Nhập verification code đã thiết lập ở bước 2.
6. NVR xuất hiện trong danh sách → nhấn vào để xem live view.

### Trên PC (iVMS-4200)

1. Tải và cài iVMS-4200 từ trang Hikvision.
2. Vào Device Management → Cloud P2P Device.
3. Đăng nhập tài khoản Hik-Connect.
4. Nhập serial NVR và verification code → Add.

---

## 5. Bàn giao cho khách hàng

Đây là bước quan trọng nhất và hay bị bỏ qua. Nếu bàn giao không đúng, khách hàng sẽ gọi hỗ trợ liên tục hoặc bị mất quyền truy cập.

### Phương án 1: Tạo tài khoản riêng cho khách (Khuyến nghị)

1. Dùng email/SĐT của khách hàng để đăng ký tài khoản Hik-Connect mới.
2. Đăng nhập tài khoản khách → thêm NVR bằng serial + verification code.
3. Khách giữ tài khoản này, tự quản lý.

Ưu điểm: Khách có toàn quyền, công ty không giữ thông tin đăng nhập của khách.

### Phương án 2: Chia sẻ thiết bị từ tài khoản công ty

1. Công ty giữ tài khoản Hik-Connect chính (NVR đã được thêm vào tài khoản này).
2. Trong app → chọn thiết bị → Share → nhập email/SĐT của khách.
3. Khách nhận lời mời, thêm thiết bị vào tài khoản cá nhân.

Ưu điểm: Công ty vẫn giữ quyền quản trị, tiện cho bảo trì sau này.

### Thông tin cần bàn giao

Dù chọn phương án nào, đảm bảo khách hàng nhận được:

- [ ] Tài khoản Hik-Connect (email + mật khẩu)
- [ ] Mật khẩu Admin NVR
- [ ] Verification code của NVR
- [ ] Hướng dẫn cơ bản: cách xem live, cách xem lại (playback)
- [ ] Số hotline hỗ trợ kỹ thuật

---

## 6. Lưu ý bảo mật

| Nguyên tắc | Lý do |
|---|---|
| Mật khẩu NVR ≥ 12 ký tự, kết hợp chữ hoa/thường/số/ký tự đặc biệt | Mật khẩu yếu dễ bị brute force |
| Luôn bật verification code trên Hik-Connect | Nếu tắt, ai có serial NVR đều có thể xem được |
| Không dùng chung mật khẩu giữa các công trình | Nếu 1 công trình bị lộ, tất cả công trình khác vẫn an toàn |
| Không mở port forwarding (80, 554, 8000) ra Internet | Các port này dễ bị scan và tấn công. Hik-Connect P2P đã đủ dùng |
| Cập nhật firmware NVR định kỳ | Hikvision liên tục vá lỗi bảo mật qua firmware update |
| Tách VLAN Camera riêng, không chung với WiFi khách | Camera trong VLAN riêng không bị truy cập từ thiết bị WiFi thông thường |

### Sự cố bảo mật thực tế

Đã từng có trường hợp camera Hikvision firmware cũ bị khai thác lỗ hổng, cho phép truy cập từ xa mà không cần mật khẩu. Bài học: luôn cập nhật firmware và không bao giờ mở port trực tiếp ra Internet nếu không cần thiết.
