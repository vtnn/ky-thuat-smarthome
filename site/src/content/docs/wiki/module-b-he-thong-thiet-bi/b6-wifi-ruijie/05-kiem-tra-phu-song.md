---
title: "B6.05 — Kiểm tra phủ sóng WiFi (RSSI)"
description: "Tiêu chuẩn RSSI -65dBm, cách đo bằng ứng dụng và bảng ghi nhận kết quả thực tế."
module: "b"
level: "3-5"
tags: ["WiFi", "phủ sóng", "RSSI"]
---

## Mục tiêu
- Đảm bảo RSSI ≥ **-65 dBm** tại mọi vị trí khách hàng thường xuyên sử dụng.
- Triệt tiêu hoàn toàn vùng chết (Dead zone) trong nhà.

---

## 1. Tiêu chuẩn
- Khu vực sinh hoạt chính: -45 dBm đến -60 dBm (Tốt).
- Khu vực rìa (WC, kho): ≤ -70 dBm (Yếu - cần cân nhắc bổ sung AP).

---

## 2. Cách kiểm tra
1. Dùng app WiFi Analyzer (Android) hoặc WiFi Explorer (Mac/Win).
2. Di chuyển đến từng phòng, đứng ở vị trí góc xa nhất.
3. Ghi nhận thông số RSSI vào bảng nghiệm thu.

---

## 3. Bảng ghi nhận mẫu
| Vị trí | AP gần nhất | RSSI | Đạt? |
|---|---|---|:--:|
| Phòng khách | AP-T1 | -45 dBm | ✅ |
| PN Master | AP-T2 | -62 dBm | ✅ |
| WC Tầng 3 | AP-T2 | -75 dBm | ❌ |
