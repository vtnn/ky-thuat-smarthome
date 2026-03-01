---
title: "A2 — Dụng cụ và thiết bị"
description: "Danh mục dụng cụ thi công và thiết bị đo kiểm chuẩn cho kỹ thuật viên."
module: "a"
level: "1-6"
tags: ["dụng cụ", "thiết bị đo", "bảo dưỡng"]
---

## Mục tiêu
- Nắm danh mục **dụng cụ bắt buộc** phải trang bị khi đi công trình.
- Sử dụng thành thạo **thiết bị đo** để đảm bảo an toàn và tính chính xác trước khi vận hành.

---

## 1. Danh mục dụng cụ cơ bản

Dưới đây là các dụng cụ thiết yếu mà mỗi kỹ thuật viên cần trang bị khi đi công trình:

| Dụng cụ | Công dụng | Ghi chú |
|:---|:---|:---|
| Tuốc-nơ-vít dẹt + bake | Tháo/lắp ốc vít | Bộ nhiều size, có đầu nam châm |
| Kìm cắt | Cắt dây điện, thít nhựa | Loại cách điện 1000V |
| Kìm tuốt dây | Tuốt vỏ dây điện | Điều chỉnh đúng tiết diện dây |
| Kìm bấm mạng (RJ45) | Bấm đầu RJ45 | Chuẩn Cat5e/Cat6 |
| Máy khoan pin | Khoan bê tông, gỗ, bắt vít | Kèm bộ mũi khoan đa năng |
| Búa | Đóng tắc kê, đóng nở | Loại búa nhỏ (300g) |
| Thước cuộn (5m) | Đo đạc khoảng cách | Lấy dấu trước khi thi công |
| Đèn pin / Đèn đội đầu | Làm việc trong tủ, trần | Đảm bảo sạc đầy pin |
| Dây rút (thít nhựa) | Gom dây, cố định cáp | Nhiều kích cỡ |
| Băng keo điện | Cách điện mối nối | Quấn tối thiểu 3 lớp |
| Ống luồn / Nẹp điện | Bảo vệ và đi dây | Theo đúng kích thước thiết kế |

---

## 2. Các thiết bị đo kiểm chuyên dụng

Việc sử dụng thành thạo thiết bị đo giúp đảm bảo an toàn và tính chính xác của hệ thống trước khi vận hành.

### 2.1. Đồng hồ vạn năng (Multimeter)
- **Chức năng:** Đo điện áp (AC/DC), đo dòng điện, điện trở và thông mạch.
- **Cách sử dụng:**
    - Đo AC 220V: Chuyển về thang ACV → cắm que đo vào nguồn điện.
    - Đo thông mạch: Chuyển về thang Ohm/Buzzer → chạm 2 đầu dây (có tiếng kêu là thông).
    - Đo DC: Dùng cho adapter, pin hoặc nguồn PoE.
- **Lưu ý:** Tuyệt đối không đo dòng AC khi đang để thang đo DC (nguy cơ hỏng thiết bị).

### 2.2. Bút thử điện
- **Chức năng:** Kiểm tra nhanh sự hiện diện của dây pha (L).
- **Cách sử dụng:** Chạm đầu bút vào terminal hoặc lõi dây; nếu đèn sáng tức là có điện.
- **Lưu ý:** Luôn kiểm tra bút trên nguồn sống đã biết trước khi sử dụng.

### 2.3. Thiết bị test cáp mạng (Cable Tester)
- **Chức năng:** Kiểm tra sơ đồ đấu nối 8 sợi cáp mạng.
- **Cách sử dụng:** Cắm 2 đầu cáp vào bộ Master và Remote. Quan sát 8 đèn led.
- **Kết quả:** Nếu 8 đèn sáng xanh tuần tự từ 1 đến 8 là đạt chuẩn T568B.

### 2.4. Thiết bị test mạng nâng cao (Network Tester)
- **Chức năng:** Kiểm tra tốc độ thực tế, PoE load, cấu hình VLAN và lệnh Ping.
- **Ứng dụng:** Sử dụng trong giai đoạn nghiệm thu hệ thống mạng và xử lý sự cố phức tạp.

---

## 3. Hướng dẫn sử dụng an toàn

1. **Kiểm tra thiết bị:** Luôn kiểm tra tình trạng dụng cụ (vỏ cách điện, pin máy đo) trước khi làm việc.
2. **Tay khô:** Không cầm nắm thiết bị đo kiểm khi tay đang ướt hoặc đứng trên bề mặt ẩm.
3. **Cách điện:** Luôn ngắt nguồn điện 220V trước khi dùng các dụng cụ cầm tay tiếp xúc trực tiếp với lõi đồng.
4. **Bảo hộ:** Đeo kính bảo hộ khi khoan cắt để tránh bụi và vật liệu văng vào mắt.

---

## 4. Quy trình bảo dưỡng dụng cụ

| Thiết bị | Nội dung bảo dưỡng | Tần suất |
|:---|:---|:---|
| Đồng hồ vạn năng | Kiểm tra pin và vệ sinh que đo | Khi có cảnh báo pin yếu |
| Kìm các loại | Tra dầu, vệ sinh lưỡi cắt | Hàng tháng |
| Máy khoan pin | Vệ sinh bụi, kiểm tra đầu kẹp | Sau mỗi đợt công trình |
| Máy test cáp | Thay pin dự phòng | Khi đèn báo mờ |

- **Bảo quản:** Cất dụng cụ vào túi hoặc hộp đồ nghề chuyên dụng, tránh để ẩm ướt hoặc va đập mạnh.
- **Xử lý hư hỏng:** Khi dụng cụ có dấu hiệu hỏng hóc hoặc sai số, cần báo ngay cho quản lý, không tự ý sửa chữa các máy đo chính xác.
