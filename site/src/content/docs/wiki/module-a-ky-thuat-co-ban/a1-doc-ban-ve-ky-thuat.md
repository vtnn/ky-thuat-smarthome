---
title: "Đọc bản vẽ kỹ thuật"
module: "a"
level: "2-6"
tags: ["bản vẽ", "ký hiệu", "tuyến dây", "thi công"]
---

# A1 — Đọc Bản Vẽ Kỹ Thuật

## 1. Phân Loại Bản Vẽ

| Loại bản vẽ | Nội dung | Hệ thống liên quan |
|------------|---------|-------------------|
| Bản vẽ Điện nhẹ | Vị trí công tắc, ổ cắm, hộp module | LifeSmart, MobiEyes, KNX |
| Bản vẽ Camera | Vị trí camera, NVR, Switch PoE, tuyến cáp | Hikvision |
| Bản vẽ Mạng | Sơ đồ mạng, vị trí AP, Switch, tủ mạng | Ruijie, hạ tầng |
| Bản vẽ Smarthome | Sơ đồ hệ thống, kết nối Hub/Controller, bus | LifeSmart, MobiEyes, KNX |
| Bản vẽ DALI | Sơ đồ nhóm đèn, bus DALI, vị trí driver | DALI Dimmer |

---

## 2. Ký Hiệu Thiết Bị

### Ký hiệu điện nhẹ

| Ký hiệu | Thiết bị |
|---------|---------|
| ⊗ | Đèn trần / Đèn downlight |
| ◎ | Đèn tường / Đèn hắt |
| ▢ | Công tắc thông minh |
| ▣ | Ổ cắm |
| △ | Cảm biến (PIR, cửa, môi trường) |
| ◇ | Hub / Controller trung tâm |

### Ký hiệu camera

| Ký hiệu | Thiết bị |
|---------|---------|
| 📹 / ▷ | Camera IP |
| ■ | NVR (đầu ghi) |
| ⬡ | Switch PoE |

### Ký hiệu mạng

| Ký hiệu | Thiết bị |
|---------|---------|
| 〇 | Access Point WiFi |
| ═══ | Đường cáp mạng |
| ─── | Đường cáp bus (KNX/DALI) |

---

## 3. Xác Định Vị Trí Lắp Đặt

### Đọc từ bản vẽ
1. Xác định **tỷ lệ** bản vẽ (thường 1:50 hoặc 1:100).
2. Tìm **ký hiệu thiết bị** trên mặt bằng.
3. Đối chiếu với **bảng thống kê thiết bị** (Bill of Materials).
4. Ghi nhận khoảng cách từ tường/góc tham chiếu → vị trí thiết bị.

### Lưu ý
- So sánh bản vẽ với **thực địa** — có thể có sai lệch (tường thêm, kích thước khác).
- Nếu phát hiện sai lệch → **báo ngay** cho quản lý kỹ thuật, không tự ý thay đổi.
- Đánh dấu vị trí trên tường/trần **trước khi** khoan/đục.

---

## 4. Xác Định Tuyến Dây

### Nguyên tắc kéo dây

| Loại dây | Quy tắc |
|----------|---------|
| Cáp mạng (Cat6/Cat5e) | Tách khỏi cáp điện ≥ 30cm, dùng ống luồn riêng |
| Cáp bus KNX (2×2×0.8) | Tách khỏi cáp điện, ống luồn riêng |
| Cáp DALI (2 dây) | Có thể đi chung ống với dây nguồn 220V |
| Cáp RS485 (MobiEyes) | Tách khỏi cáp điện, topology daisy chain |
| Cáp nguồn (220V) | Đi ống riêng, đúng tiết diện theo tải |

### Đọc tuyến dây trên bản vẽ
1. Xác định **điểm bắt đầu** (tủ điện, tủ mạng).
2. Theo tuyến đến **điểm kết thúc** (thiết bị).
3. Ghi nhận: qua bao nhiêu tường, lên trần hay đi sàn, chiều dài ước tính.
4. Đánh dấu **điểm giao** tuyến dây khác nhau.

---

## 5. Checklist Xác Nhận Trước Thi Công

### Kiểm tra bản vẽ
- [ ] Bản vẽ đã được phê duyệt (có chữ ký / đóng dấu).
- [ ] Phiên bản bản vẽ là mới nhất (kiểm tra ngày / revision).
- [ ] Có đầy đủ bản vẽ: mặt bằng, sơ đồ nguyên lý, chi tiết lắp đặt.

### Đối chiếu thực địa
- [ ] Kiểm tra kích thước phòng thực tế so với bản vẽ.
- [ ] Kiểm tra vị trí hộp âm, ống luồn đã sẵn sàng.
- [ ] Kiểm tra hệ thống điện hiện có (CB, dây N tại hộp công tắc).
- [ ] Xác nhận không có chướng ngại vật tại vị trí lắp đặt.

### Xác nhận với quản lý
- [ ] Xác nhận danh sách thiết bị (đủ số lượng, đúng model).
- [ ] Xác nhận dụng cụ cần thiết đã chuẩn bị.
- [ ] Xác nhận timeline thi công.
- [ ] Ghi nhận số điện thoại liên hệ khách hàng / quản lý.
