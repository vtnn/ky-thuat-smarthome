---
title: "B1.02 — Thi công lắp đặt LifeSmart"
description: "Quy trình đấu nối dây, lắp đặt thiết bị trung tâm, công tắc và các cảnh báo về nguồn điều hòa."
module: "b"
level: "2-4"
tags: ["LifeSmart", "thi công", "lắp đặt", "HVAC", "Nature"]
---

## Mục tiêu
- Biết đấu nối dây đúng chuẩn cho công tắc có dây N và màn hình Nature.
- Thuộc các cảnh báo về nguồn điện, đặc biệt bộ điều khiển điều hòa trung tâm (cắm nhầm 220V sẽ cháy bo).

---

## 1. An toàn điện

Lắp đặt thiết bị 220V phải do thợ điện chuyên nghiệp thực hiện.

- Ngắt CB trước khi thao tác.
- Dùng bút thử điện kiểm tra xem còn điện không.
- Bọc băng keo điện các đầu ốc vít để chống chập với đế âm kim loại. Lỗi này hay xảy ra với đế âm inox — ốc vít chạm đế là chập ngay.

---

## 2. Lắp bộ điều khiển trung tâm

1. Đặt ở vị trí trung tâm ngôi nhà, ưu tiên nơi cao để sóng CoSS phủ đều các phòng.
2. Cắm cáp mạng dây (LAN) thay vì dùng WiFi. WiFi bị mất kết nối thường xuyên hơn, nhất là lúc công trình đang thi công và hay bị cúp điện.
3. Mở ứng dụng LifeSmart, chọn thêm thiết bị, ứng dụng sẽ tự tìm Hub trong mạng nội bộ.

---

## 3. Lắp công tắc và màn hình Nature

### 3.1. Sơ đồ đấu dây

- L in: dây lửa từ CB.
- N: dây trung tính (nguội).
- L1/L2/L3: dây ra tải (đèn, quạt...).

Nếu hộp công tắc cũ không có dây N thì phải kéo thêm dây N từ tủ điện (hoặc đèn gần nhất).

### 3.2. Trình tự lắp

1. Chụp hình sơ đồ dây cũ trước khi tháo. Nếu cần đấu lại về trạng thái cũ thì có hình để đối chiếu.
2. Đấu dây theo sơ đồ ở mục 3.1.
3. Bọc băng keo điện đầu ốc vít. (nếu đế âm kim loại)
4. Gắn thiết bị vào đế âm, siết ốc nhẹ tay. Siết mạnh quá sẽ làm hỏng đế công tắc. (Không nên sử dụng máy bắt vít)

---

## 4. Lắp bộ điều khiển điều hòa trung tâm (HVAC Gateway)

Nguồn điện yêu cầu: 12V một chiều. Cắm nhầm 220V vào chân tín hiệu sẽ cháy bo mạch ngay lập tức. Đây là lỗi đã xảy ra nhiều lần trên thực tế, kiểm tra kỹ nguồn cấp trước khi bật CB.

### Cáp tín hiệu

Dùng cáp xoắn đôi có chống nhiễu, tiết diện tối thiểu 0.75mm². Không đi chung ống với đường điện 220V.

---

## 5. Lắp cảm biến

Cảm biến cửa (Door Sensor): khoảng cách giữa thân và nam châm không quá 15mm. Nếu khe hở lớn hơn, cảm biến không nhận được tín hiệu đóng/mở. Tránh gắn trên cửa kim loại vì kim loại làm lệch từ trường.

Cảm biến chuyển động (Motion Sensor): gắn ở độ cao 2.2 – 2.5m. Không hướng thẳng vào nguồn nhiệt (bếp, cửa gió điều hòa) vì sẽ bị kích hoạt giả.

Cảm biến tràn nước (Water Leak): đầu dò đặt chạm mặt sàn, thân gắn lên tường. Chỉ dùng trong nhà.

---

## 6. Lắp motor rèm và SPOT

Motor rèm kéo: lắp vào ray trước, sau đó kết nối nguồn và cấu hình hành trình trên ứng dụng.

SPOT (điều khiển hồng ngoại): đặt trong tầm nhìn thẳng với thiết bị cần điều khiển (TV, máy lạnh). Nếu bị vật cản che thì hồng ngoại không truyền tới được.
