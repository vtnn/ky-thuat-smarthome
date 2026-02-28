---
title: "Cấu hình ghi hình"
module: "b"
level: "3-5"
tags: ["NVR", "ghi hình", "recording"]
---
# B5.05 — Cấu Hình Ghi Hình

## Stream
| Stream | Dùng cho | Bitrate | Ghi chú |
|--------|---------|---------|---------|
| Main Stream | Ghi hình NVR | 4-6 Mbps | Chất lượng cao |
| Sub Stream | Xem App/Web | 512 Kbps – 1 Mbps | Tiết kiệm bandwidth |

## Tính dung lượng HDD
```
HDD (GB) = Số camera × Bitrate (Mbps) × 3600 × 24 × Số ngày / 8 / 1024
Ví dụ: 8 camera × 4Mbps × 86400 × 30 / 8 / 1024 ≈ 3.16 TB → dùng HDD 4TB
```

## Chế độ ghi
- **Continuous:** Ghi liên tục 24/7.
- **Motion Detection:** Chỉ ghi khi có chuyển động (tiết kiệm HDD).
- **Event:** Ghi khi có alarm input.
- Khuyến cáo: Continuous cho camera quan trọng, Motion cho camera phụ.

## RTSP URL
```
Main: rtsp://admin:pass@IP:554/Streaming/Channels/101
Sub:  rtsp://admin:pass@IP:554/Streaming/Channels/102
```
