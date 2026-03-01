---
title: "B5.05 — Cấu hình ghi hình Camera"
description: "Phân bổ Main/Sub Stream, cách tính dung lượng HDD và lựa chọn chế độ ghi hình (Liên tục/Chuyển động)."
module: "b"
level: "3-5"
tags: ["NVR", "ghi hình", "recording"]
---

## Mục tiêu
- Cấu hình luồng Stream phù hợp để tối ưu hoá băng thông và lưu trữ.
- Biết cách tính toán dung lượng HDD để đáp ứng nhu cầu lưu trữ của khách hàng.

---

## 1. Luồng dữ liệu (Stream)

| Luồng | Ứng dụng | Bitrate gợi ý | Đặc điểm |
|---|---|---|---|
| **Main Stream** | Ghi hình vào HDD | 4–6 Mbps | Chất lượng cao nhất, rõ nét. |
| **Sub Stream** | Xem qua App/Web | 512Kbps – 1Mbps | Giúp xem mượt khi mạng yếu. |

---

## 2. Tính dung lượng HDD

Công thức ước tính (GB):
`HDD = (Số camera) × (Bitrate Mbps) × 86400 (giây) × (Số ngày) / 8 / 1024`

*Ví dụ: 8 camera 4MP ghi 30 ngày cần khoảng ~3TB đến 4TB.*

---

## 3. Chế độ ghi hình
- **Continuous:** Ghi liên tục 24/7 (An toàn nhất, tốn HDD).
- **Motion Detection:** Chỉ ghi khi phát hiện chuyển động (Tiết kiệm HDD).
- **Event:** Ghi khi có cảnh báo (hàng rào ảo, vượt vạch).

---

## 4. RTSP URL (Dành cho tích hợp)
- Main Stream: `rtsp://[user]:[pass]@[IP]:554/Streaming/Channels/101`
- Sub Stream: `rtsp://[user]:[pass]@[IP]:554/Streaming/Channels/102`
