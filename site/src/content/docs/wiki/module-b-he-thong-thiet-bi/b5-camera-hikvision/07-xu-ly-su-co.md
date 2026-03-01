---
title: "B5.07 — Xử lý sự cố Camera"
description: "Checklist kiểm tra khi camera offline, hình ảnh bị mờ ban đêm hoặc NVR không ghi hình."
module: "b"
level: "3-6"
tags: ["camera", "troubleshooting"]
---

## Mục tiêu
- Debug nhanh các lỗi phổ biến: mất hình, offline, không lưu trữ.
- Biết cách dùng SADP Tool để chẩn đoán lỗi mạng nội bộ.

---

## 1. Bảng triệu chứng và Cách xử lý

| Triệu chứng | Kiểm tra / Khắc phục |
|---|---|
| Camera Offline | Đo nguồn PoE tại port; check cáp; ping IP camera. |
| Hình đen ban đêm | Check hồng ngoại (IR LEDs); dọn vật cản sát ống kính. |
| Hình mờ/nhiễu | Vệ sinh ống kính; check đấu nối jack RJ45. |
| NVR không ghi | Check trạng thái HDD trong menu Storage; format lại HDD. |
| Không xem từ xa | Check Internet; check trạng thái Hik-Connect (Online/Offline). |

---

## 2. Checklist xử lý nhanh
- [ ] LED tại port PoE của Switch có sáng không?
- [ ] Laptop cùng LAN có Ping được IP camera/NVR không?
- [ ] SADP Tool có quét thấy thiết bị không?
- [ ] HDD trong NVR trạng thái có báo "Normal" không?
- [ ] Tín hiệu Internet đến NVR có ổn định không?
