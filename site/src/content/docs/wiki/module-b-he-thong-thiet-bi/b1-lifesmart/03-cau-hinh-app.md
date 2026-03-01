---
title: "B1.03 — Cấu hình App LifeSmart"
description: "Quy trình thêm Hub, ghép nối thiết bị con, đồng bộ HVAC và quản lý nhiều Smart Station (Cascade)."
module: "b"
level: "3-5"
tags: ["LifeSmart", "cấu hình", "App", "HVAC", "pairing"]
---

## Mục tiêu
- Thêm **Smart Station** đúng cách và đảm bảo Hub online ổn định.
- Ghép nối thiết bị con (pairing) nhanh, hạn chế lỗi time-out.

---

## 1. Thêm Smart Station
1. Tải **LifeSmart App** (iOS / Android).
2. Đăng ký tài khoản hoặc đăng nhập.
3. Cấp nguồn Smart Station + ưu tiên cắm cáp mạng Ethernet.
4. Trong App → **+** → **Add Device** → App tự quét mạng cục bộ.
5. Chọn Smart Station → hoàn tất.

---

## 2. Thêm thiết bị con (Sub-devices)

### 2.1. Quy trình chung
1. App → **+** → **Add Device**.
2. Chọn loại thiết bị tương ứng.
3. Đưa thiết bị vào **Pairing**:
   - Nhấn giữ nút Pairing/Set khoảng 5 giây.
   - Đèn nhấp nháy = sẵn sàng.
4. Đợi App ghép nối hoàn tất.
5. Đặt tên thiết bị theo quy tắc (xem `04-quy-tac-dat-ten.md`).

### 2.2. Lưu ý nhanh
- Nếu App báo **time-out** → làm lại thao tác nhấn giữ nút vật lý.
- Đặt thiết bị **gần Smart Station** (< 5m) trong lúc pairing.
- Pairing xong mới đem thiết bị ra vị trí lắp đặt.

---

## 3. Đồng bộ HVAC (Điều hòa trung tâm)

1. Thêm HVAC Gateway vào App như thiết bị con.
2. All Devices → chọn HVAC Gateway → **Settings**.
3. **Trượt màn hình từ phải sang trái** để đồng bộ nhóm địa chỉ.
4. Chờ đồng bộ 1–10 phút.

> ⚠️ Không thao tác trên HVAC Gateway trong lúc đang đồng bộ.

---

## 4. Quản lý nhiều Smart Station (Cascade Management)

1. Đảm bảo các Smart Station cùng **mạng LAN**.
2. Advanced Settings → Engineering Mode → Smart Station Cascade Management.
3. Chọn Smart Station nguồn.
4. Chọn Smart Station đích.
5. Share → thiết bị xuất hiện trên cả 2 Hub.

---

## 5. Tích hợp thiết bị bên thứ 3

### 5.1. Sonos
- Sonos cùng mạng LAN → App tự phát hiện qua UPnP.

### 5.2. Philips Hue
- Cần Hue Bridge cùng mạng → add Hue Bridge trong App → phát hiện bóng.

### 5.3. Camera Hikvision
- Trên web camera: bật UPnP + Hikvision-CGI → sau đó add trong App.

---

## 6. Chia sẻ quyền

1. App → Cài đặt → Quản lý thành viên.
2. Mời thành viên bằng email / QR.
3. Chọn quyền: Quản trị hoặc Thành viên.

> Khuyến nghị: chỉ cấp quyền phù hợp cho khách hàng; tránh chia sẻ Admin nếu chưa bàn giao đầy đủ.
