---
title: "B5.05 — Cấu hình ghi hình Camera"
description: "Cấu hình Main/Sub Stream, cách tính dung lượng HDD chính xác, chế độ ghi hình và RTSP URL cho tích hợp hệ thống."
module: "b"
level: "3-5"
tags: ["NVR", "ghi hình", "recording", "RTSP", "H.265+"]
---

## Mục tiêu
- Cấu hình luồng stream phù hợp để cân bằng chất lượng, băng thông và lưu trữ.
- Tính toán chính xác dung lượng HDD cần thiết theo yêu cầu khách hàng.
- Biết khi nào dùng ghi liên tục, khi nào dùng ghi theo chuyển động.
- Lấy RTSP URL để tích hợp camera vào Home Assistant hoặc LifeSmart.

---

## 1. Luồng dữ liệu (Stream)

Mỗi camera Hikvision truyền đồng thời nhiều luồng video với chất lượng khác nhau, phục vụ các mục đích khác nhau:

| Luồng | Ứng dụng | Độ phân giải | Bitrate gợi ý | Khi nào dùng |
|---|---|---|---|---|
| **Main Stream** | Ghi hình vào HDD | 2688x1520 (4MP) | 4 – 6 Mbps | Luôn bật, đây là luồng ghi hình chính |
| **Sub Stream** | Xem qua App/Web từ xa | 640x480 | 512Kbps – 1Mbps | Khi xem trên điện thoại qua 4G, mạng yếu |
| **Third Stream** | Tích hợp hệ thống | 1920x1080 | 1 – 2 Mbps | Cho Home Assistant, LifeSmart, phần mềm thứ 3 |

### Tại sao cần Sub Stream?

Main Stream 4MP ở 6Mbps × 8 camera = 48Mbps. Nếu 2-3 người cùng xem trên điện thoại qua Internet, băng thông upload của nhà mạng (thường chỉ 10-20Mbps) sẽ không đủ → hình giật, lag.

Sub Stream chỉ chiếm 512Kbps-1Mbps mỗi camera, cho phép nhiều người xem đồng thời mà không ảnh hưởng chất lượng ghi hình trên NVR.

### Cấu hình Stream trên NVR

Vào Configuration → Video/Audio → từng kênh camera:
- **Main Stream**: H.265+, 4MP, Bitrate type "Variable", Max Bitrate 4096-6144 Kbps
- **Sub Stream**: H.265, VGA (640x480), Max Bitrate 512-1024 Kbps
- **Video Quality**: Medium hoặc Higher cho Main, Lower cho Sub

Codec H.265+ (có dấu +) tiết kiệm ~50% dung lượng so với H.265 thường nhờ thuật toán nén thông minh hơn. Luôn bật H.265+ nếu camera và NVR đều hỗ trợ.

---

## 2. Tính dung lượng HDD

### Công thức ước tính

```
Dung lượng (GB) = Số camera × Bitrate (Mbps) × 86400 (giây/ngày) × Số ngày lưu / 8 / 1024
```

### Bảng tính nhanh (H.265+, Main Stream 4Mbps, ghi 24/7)

| Số camera | 15 ngày | 30 ngày | 60 ngày |
|---:|---:|---:|---:|
| 4 | ~830 GB | ~1.6 TB | ~3.2 TB |
| 8 | ~1.6 TB | ~3.2 TB | ~6.5 TB |
| 16 | ~3.2 TB | ~6.5 TB | ~13 TB |

Lưu ý: Con số thực tế với H.265+ thường thấp hơn 20-30% so với tính toán lý thuyết, vì H.265+ nén hiệu quả hơn khi cảnh ít thay đổi. Tuy nhiên, luôn tính theo worst case để đảm bảo.

### Công cụ tính của Hikvision

Hikvision cung cấp công cụ tính trực tuyến miễn phí tại [tools.hikvision.com/calculatorTool](https://tools.hikvision.com/calculatorTool/). Nhập số camera, codec, độ phân giải, bitrate → ra ngày lưu trữ hoặc dung lượng HDD cần thiết. Dùng tool này khi trình bày với khách hàng sẽ chuyên nghiệp hơn tính tay.

---

## 3. Chế độ ghi hình

Vào Configuration → Recording Schedule → từng kênh camera:

| Chế độ | Cách hoạt động | Ưu điểm | Nhược điểm |
|---|---|---|---|
| **Continuous** | Ghi liên tục 24/7 | Không bỏ sót sự kiện nào | Tốn HDD nhiều nhất |
| **Motion Detection** | Chỉ ghi khi phát hiện chuyển động | Tiết kiệm 50-70% HDD | Có thể bỏ sót nếu sensitivity thấp |
| **Event** | Ghi khi có cảnh báo AI (hàng rào ảo, vượt vạch) | Chỉ ghi đúng sự kiện quan trọng | Cần camera dòng AcuSense |

### Khuyến nghị của công ty

- **Khu vực quan trọng** (cổng, cửa chính, bãi xe): Ghi liên tục 24/7 (Continuous).
- **Khu vực phụ** (hành lang, sân vườn, phòng kho): Ghi theo chuyển động (Motion Detection) — tiết kiệm HDD mà vẫn đủ dữ liệu khi cần xem lại.
- **Pre-record**: Bật 5-10 giây pre-record cho chế độ Motion. Khi có chuyển động, NVR lưu thêm 5-10 giây trước đó — tránh mất đoạn đầu sự kiện.

---

## 4. Cấu hình Motion Detection

Nếu dùng chế độ Motion Detection, cần cấu hình đúng để tránh báo giả hoặc bỏ sót:

1. Vào Configuration → Event → Motion Detection → chọn kênh camera.
2. **Vùng phát hiện (Area)**: Vẽ vùng cần giám sát trên hình preview. Loại bỏ khu vực hay thay đổi (cây lá, đường xe cộ ở xa) để giảm báo giả.
3. **Sensitivity**: Khuyến nghị 60-80%. Quá cao sẽ báo giả nhiều (côn trùng, ánh sáng thay đổi). Quá thấp sẽ bỏ sót người đi nhanh.
4. **Schedule**: Thiết lập lịch giám sát (ví dụ: chỉ bật motion detection ban đêm 22:00 - 06:00).

---

## 5. RTSP URL (Dành cho tích hợp)

Khi cần đưa luồng camera vào Home Assistant, LifeSmart, VLC hoặc phần mềm bên thứ 3:

| Luồng | URL |
|---|---|
| Main Stream | `rtsp://[user]:[pass]@[IP]:554/Streaming/Channels/[kênh]01` |
| Sub Stream | `rtsp://[user]:[pass]@[IP]:554/Streaming/Channels/[kênh]02` |

### Ví dụ cụ thể

- Camera IP `192.168.20.201`, user `admin`, pass `Abc@12345`:
  - Main: `rtsp://admin:Abc@12345@192.168.20.201:554/Streaming/Channels/101`
  - Sub: `rtsp://admin:Abc@12345@192.168.20.201:554/Streaming/Channels/102`

- NVR IP `192.168.20.200`, kênh 1:
  - Main: `rtsp://admin:Abc@12345@192.168.20.200:554/Streaming/Channels/101`
  - Kênh 2 Sub: `rtsp://admin:Abc@12345@192.168.20.200:554/Streaming/Channels/202`

Quy tắc: `Channels/[kênh][luồng]` — kênh 1 = 1, kênh 2 = 2; luồng main = 01, sub = 02.

Khi tích hợp vào LifeSmart hoặc Home Assistant, ưu tiên dùng Sub Stream để không ảnh hưởng băng thông ghi hình chính.

---

## Tài liệu tham khảo
- [Hikvision Network & Storage Calculator](https://tools.hikvision.com/calculatorTool/)
