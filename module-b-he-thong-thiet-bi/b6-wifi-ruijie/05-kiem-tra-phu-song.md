---
title: "Kiểm tra phủ sóng"
module: "b"
level: "3-5"
tags: ["WiFi", "phủ sóng", "RSSI"]
---
# B6.05 — Kiểm Tra Phủ Sóng

## Tiêu chuẩn
- RSSI ≥ **-65 dBm** tại mọi vị trí sử dụng.
- Không có vùng chết (dead zone) trong khu vực sinh hoạt.

## Kiểm tra
1. Dùng App WiFi Analyzer hoặc Ruijie Controller.
2. Đi khắp nhà, ghi nhận RSSI tại mỗi phòng.
3. Nếu < -65 dBm → cần thêm AP hoặc chỉnh vị trí.

## Bảng ghi nhận

| Vị trí | AP kết nối | RSSI (dBm) | Đạt? |
|--------|-----------|-----------|------|
| Phòng khách | AP-T1-PK | -45 | ✅ |
| Phòng ngủ 2 | AP-T2-PN | -62 | ✅ |
| WC tầng 3 | AP-T2-PN | -72 | ❌ |
