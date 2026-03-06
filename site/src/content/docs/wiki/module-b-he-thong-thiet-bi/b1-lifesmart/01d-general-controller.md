---
title: "B1.01d — Cấu hình General Controller"
description: "Mô tả chi tiết và cách ứng dụng mô-đun rơ-le 3 kênh (General Controller) cho các tải công suất nhỏ, motor rèm và cổng tự động."
module: "b"
level: "2-4"
---

## Mục tiêu
- Biết cách đấu nối điện tiếp điểm khô và cấp nguồn một chiều (DC) an toàn.
- Thiết lập chế độ rơ-le (Jog / Follow) phục vụ đúng hệ thống cổng, rèm và cảm biến ngoại vi.

---

![Đấu nối General Controller](../../../../../assets/images/01d-general-controller/general_ctrl_1.png)
<p class="hero-image-caption">Bảng mạch General Controller xử lý tốt thiết bị 3 trạng thái và cảm biến độc lập.</p>

## 1. Thông số thiết bị (I/O Definition)

General Controller là một hộp thiết bị đặc biệt dành cho dân làm kỹ thuật nhà thông minh. Anh em coi nó như một rơ-le khô (Dry Contact) 3 nhánh kết hợp thêm ngõ vào đón tín hiệu. Mục đích chính là biến mấy đồ điện tự động bình thường (mô-tơ cổng, cửa cuốn, chuông báo) thành đồ thông minh chui tuốt vào ứng dụng LifeSmart.

- **Nguồn cấp nuôi thiết bị:** Nguồn **12V / 24V DC** qua chân tròn tiêu chuẩn (5.5*2.5 mm) hoặc chích dây trực tiếp vào chân domino `DC+ / GND`. Vui lòng chỉ cắm 1 đường, cắm cả 2 chân là khét bảng mạch.
- **Tiếp điểm ngõ vào (Input):** Khung `K1, K2, K3`. Dùng cho tín hiệu mộc nhận từ nút nhấn nút khẩn cấp, cảm biến cháy...
- **Tiếp điểm ngõ ra rơ-le (Output):** Khung `CH1, CH2, CH3` là cụm chốt đóng rơ-le qua chân `COM` / `COM-` / `COM+`.
- **Tải tối đa Output:** Kéo nổi được **3A**. Đồ nặng hơn (máy bơm tưới cây, van từ) thì phải quàng rơ-le trung gian.

## 2. Ứng dụng đấu nối thực tế

Bạn có cực nhiều "bài dọn" cho món này tùy hoàn cảnh thi công.

### 2.1. Đẩy thiết bị báo khói không thông minh vào hệ thống (Chế độ tự do)
Cắm cảm biến khói loại công nghiệp chạy nguồn 12V DC:
- Chích `NC / NO` từ bảng cảm biến vô ngõ `K1`. Nhớ chèn 1 chân GND về ngõ `COM` để nối kín luồng báo động.
- Cứ hễ thiết bị khói nhảy cắt tiếp điểm khô, App sẽ nảy báo động cháy nhà thông qua cài đặt Kịch bản.

### 2.2. Kéo mô-tơ điện một chiều (Motor rèm cuốn DC) / Cổng tự động
- Đấu chốt mô tơ chiều quay trái quay phải vào chân `CH1`, `CH2`.
- Cốt nguồn DC chia sang `COM+` / `COM-` tương ứng để điều hưởng điện. Dạng này cổng bấm 1 cái chạy, 1 cái dừng (Mode Rèm kéo 2 chiều). 

### 2.3. Cắm thiết bị công tắc 3 dây chuẩn rèm (AC Motor)
- Anh em vặn cáp lửa (L), nóng và trung tính (N) đẩy lệnh Tắt - Bật - Dừng.
- Trong ứng dụng LifeSmart sẽ tự mọc lên bản đồ hiển thị rèm.

## 3. Cài đặt chế độ kích rơ-le trên ứng dụng

Quan trọng nhất của việc biến thiết bị chạy rơ-le theo ý muốn là tùy chọn Working Mode bên trong App:

- **Follow (Đảo Trạng Thái):** Kích điểm đầu vào thì điểm đầu ra lật công tắc. Cụ thể: Bấm 1 nhát nhả ra, rơ-le `CH1` đảo mạch; Bấm lại vào K1 nhả ra, `CH1` lại lật lại. Dùng kết nối phím cứng thay công tắc cơ.
- **Jog (Bấm Giữ - Nhả Chạm):** Trạng thái Rơ-le ăn theo nhịp tay của phím bấm. Bấm giữ nút (K1 chạm chập GND) thì `CH1` hít xuống COM+. Nếu nhả nút (K1 tách ra) thì rơ-le tự động nảy buông ra. Cực kỳ ngon để thiết kế nút nhấn khóa từ mở cửa, hoặc còi hụ khẩn cấp đè tay.

Có cả bảng delay chỉnh thông số cắt trễ (Auto close delay time) cho mô-tơ nếu cần chỉnh thời gian kẹp hành trình cửa hẹp (mô-tơ cổng rào). Tùy lúc thi công đo thời gian mô-tơ mở cánh mà nhập số giây vào ứng dụng.

---

## Tài liệu tham khảo
- [General Controller Document (PDF)](https://drive.google.com/file/d/16GgDRu02_inhcNZbczg0vs-mkS9ZyS7b/view?usp=sharing)
