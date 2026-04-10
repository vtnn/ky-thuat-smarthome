---
title: "B6.02 — Thi công WiFi"
description: "Quy trình khảo sát phủ sóng (site survey), chọn vị trí AP, kéo cáp Cat6 PoE và lắp đặt AP Ruijie đúng chuẩn."
module: "b"
level: "2-4"
tags: ["WiFi", "site survey", "AP", "thi công", "Cat6"]
---

## Mục tiêu
- Hoàn thành site survey để tính đúng số lượng AP (tránh thiếu gây vùng chết, thừa gây lãng phí).
- Kéo cáp và lắp AP đúng kỹ thuật để WiFi ổn định, roaming mượt.
- Biết xử lý các tình huống thi công thực tế: tường bê tông dày, trần thạch cao, nhà đang ở.

---

## 1. Site Survey (Khảo sát hiện trường)

Site survey là bước quan trọng nhất — quyết định vị trí và số lượng AP. Làm sai bước này thì dù AP tốt cũng không cứu được.

### Bước 1: Thu thập thông tin

- Lấy bản vẽ mặt bằng (nếu có) hoặc đo diện tích từng tầng.
- Xác định vật liệu tường: bê tông (suy hao mạnh), gạch (suy hao trung bình), thạch cao (suy hao nhẹ).
- Ghi nhận vị trí tủ mạng / nơi đặt Switch PoE.
- Hỏi khách hàng: khu vực nào dùng WiFi nhiều nhất? Có cần phủ sóng sân vườn không?

### Bước 2: Ước tính số lượng AP

Quy tắc ngón tay cái (chưa tính outdoor):

| Diện tích sàn/tầng | Vật liệu tường | Số AP khuyến nghị |
|---|---|---|
| < 60m² | Thạch cao, kính | 1 AP |
| 60-100m² | Gạch thường | 1-2 AP |
| 60-100m² | Bê tông dày | 2 AP |
| 100-150m² | Bê tông dày | 2-3 AP |
| > 150m² | Bất kỳ | Tính riêng theo zone |

Mỗi AP Ceiling (RG-RAP2260G) phủ bán kính khoảng 15-20m trong nhà ở thực tế (không phải con số lý thuyết 50m của nhà sản xuất). Tường bê tông 20cm có thể giảm phạm vi xuống còn 8-12m.

### Bước 3: Đánh dấu vị trí AP trên bản vẽ

- AP trần: đặt ở trung tâm vùng cần phủ sóng, cách trần 0-15cm.
- AP tường (wall-mount): đặt ở độ cao 1.2-1.5m, gần vị trí sử dụng.
- AP outdoor: gắn cột hoặc tường ngoài, hướng anten về vùng cần phủ.
- Giữa 2 AP liền kề nên chồng lấn (overlap) khoảng 15-20% vùng phủ sóng để roaming mượt.

### Bước 4: Vẽ tuyến cáp

- Từ mỗi AP vẽ đường cáp về tủ mạng (nơi đặt Switch PoE).
- Đo chiều dài từng tuyến — mỗi tuyến Cat6 PoE tối đa 100m (tính cả patch cord 2 đầu).
- Ghi chú tuyến nào cần đi trong ống PVC, tuyến nào đi trần (trần thạch cao).

---

## 2. Kéo cáp

### Quy chuẩn cáp

- **Loại cáp**: Cat6 UTP (hoặc Cat6 FTP nếu môi trường nhiễu điện từ).
- **Đầu bấm**: RJ45 Cat6 — bấm đúng chuẩn T568B (cam-trắng cam, lục-trắng lục, xanh-trắng xanh, nâu-trắng nâu).
- **Test dây**: Bắt buộc test 8/8 sợi bằng cable tester trước khi bấm AP. Nếu chỉ lên 4/8 sợi, Ruijie sẽ negotiate xuống 100Mbps và tốc độ WiFi sẽ rất thấp (< 10Mbps).

### Nhãn cáp

Đánh nhãn ngay khi kéo, không đợi sau:

```
Mẫu nhãn: AP-[Tầng]-[Vị trí]
Ví dụ: AP-T1-PK (Tầng 1 Phòng khách)
        AP-T2-HL (Tầng 2 Hành lang)
        AP-OD-SV (Outdoor Sân vườn)
```

### Lưu ý thực tế

- Để thừa khoảng 30-50cm cáp tại vị trí AP (dự phòng dịch chuyển vị trí sau này).
- Cáp đi trong ống PVC ≥ 20mm, không gấp cáp góc nhọn < 90°.
- Tránh đi cáp song song với dây điện lực trong cùng ống — gây nhiễu.
- Nếu cáp đi qua sàn bê tông giữa tầng: xuyên sàn bằng ống PVC, trám kín sau khi kéo.

---

## 3. Lắp đặt AP

### AP gắn trần (Ceiling)

1. Xác định vị trí trên trần thạch cao, đánh dấu.
2. Khoét lỗ tròn hoặc vuông theo bracket đi kèm (thường 65mm hoặc 110mm).
3. Gắn bracket lên trần bằng vít (nếu trần bê tông) hoặc kẹp T-bar (nếu trần la phông).
4. Luồn cáp qua lỗ, bấm RJ45 và cắm vào AP.
5. Xoay AP vào bracket cho đến khi "click" vào khớp.
6. Kiểm tra LED: xanh = hoạt động bình thường, đỏ = lỗi kết nối.

### AP gắn tường (Wall-mount)

1. Tháo mặt ổ cắm mạng cũ (nếu thay thế).
2. Gắn đế AP vào hộp âm tường 86mm.
3. Kết nối cáp uplink vào port WAN (phía sau AP).
4. Lắp AP vào đế, đảm bảo các port LAN phía dưới không bị che.

### AP ngoài trời (Outdoor)

1. Gắn bracket lên cột (dùng đai sắt thay vì dây rút nhựa — bền hơn nắng mưa).
2. Đường kính cột phù hợp: 70-140mm cho RG-RAP6262.
3. Luồn cáp mạng qua ống PVC kín nước đến vị trí AP.
4. Kết nối cáp RJ45 (có boot chống nước) hoặc cáp quang vào cổng SFP.
5. AP RG-RAP6262 đã IP68 — không cần thêm hộp bảo vệ bên ngoài.

---

## 4. Đi dây nguồn PoE

Tất cả AP Ruijie/Reyee nhận nguồn PoE từ Switch PoE qua cáp Cat6. Không cần adapter nguồn riêng (trừ khi không dùng Switch PoE thì dùng PoE Injector).

Kiểm tra sau khi cắm:
- LED trên AP sáng trong 30-60 giây sau khi cắm cáp → PoE hoạt động.
- Nếu LED không sáng: kiểm tra port Switch có bật PoE, kiểm tra cáp test 8/8.
- Kiểm tra công suất tiêu thụ trên Switch (qua Ruijie Cloud) — so sánh với budget tổng.

---

## 5. Checklist thi công

| Hạng mục | Kiểm tra |
|---|---|
| Site survey | Bản vẽ vị trí AP có chữ ký xác nhận của khách hàng |
| Cáp | Tất cả tuyến test 8/8, nhãn rõ ràng |
| AP Ceiling | Gắn chắc vào bracket, không rung khi gõ nhẹ |
| AP Wall | Khít hộp âm tường, port LAN không bị che |
| AP Outdoor | Đai sắt siết chặt, cáp có boot chống nước |
| PoE | LED AP sáng xanh sau khi cắm cáp |
| Dự phòng cáp | Thừa 30-50cm tại mỗi đầu AP |
| Dọn dẹp | Cáp thừa cuộn gọn trong trần, không để treo |
