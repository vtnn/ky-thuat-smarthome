---
title: "D5 — Tích hợp hệ thống đa thiết bị"
description: "Hướng dẫn tích hợp Camera vào Smarthome, điều khiển Voice (Google/Alexa) và các bên thứ 3."
module: "d"
level: "5-6"
tags: ["tích hợp", "voice", "API"]
---

## Mục tiêu
- Kết nối luồng dữ liệu giữa camera, điều hòa và hệ thống smarthome.
- Cấu hình điều khiển bằng giọng nói mượt mà.

---

## 1. Smarthome + Camera
- Trigger: Motion Sensor phát hiện chuyển động → Camera snapshot / bật recording.
- Xem camera trực tiếp trên màn hình Nature hoặc LifeSmart App.

---

## 2. Smarthome + Điều hòa
- **IR Blaster:** Học lệnh từ remote gốc (cho LifeSmart/MobiEyes).
- **Modbus/KNX Gateway:** Điều khiển trực tiếp vào bo mạch dàn lạnh (chuyên sâu).

---

## 3. Voice Control (Giọng nói)
- **Nền tảng:** Google Home, Amazon Alexa.
- **Quy trình:** Liên kết tài khoản hãng (LifeSmart/MobiEyes) → Discover Devices.
- **Lưu ý:** Đặt tên thiết bị tiếng Việt không dấu hoặc tiếng Anh để AI nhận diện tốt hơn.

---

## 4. Bên thứ 3 (Nâng cao)
- **Home Assistant:** Tích hợp KNX, MQTT, Camera RTSP vào giao diện dashboard tùy biến.
- **IFTTT:** Kết nối liên thông dịch vụ Cloud (nếu cần).
