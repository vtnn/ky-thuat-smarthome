---
title: "B5.02 — Thi công và Lắp đặt Camera"
description: "Quy chuẩn vị trí, độ cao, góc quay, kéo cáp Cat6 PoE và checklist nghiệm thu thi công camera Hikvision."
module: "b"
level: "2-4"
tags: ["camera", "thi công", "vị trí", "cáp", "PoE"]
---

## Mục tiêu
- Lắp camera đúng vị trí, đúng độ cao và góc quay tối ưu cho từng khu vực.
- Kéo cáp Cat6 đúng chuẩn PoE, đảm bảo truyền tín hiệu ổn định.
- Biết các lỗi thi công thường gặp và cách phòng tránh.

---

## 1. Vị trí và Độ cao lắp đặt

### 1.1. Nguyên tắc chung

Hikvision khuyến nghị chiều cao lắp camera từ 2.5m đến 6m, góc nghiêng từ 25° đến 60°. Tuy nhiên, trong thực tế công trình nhà ở, phạm vi thường hẹp hơn:

| Khu vực | Loại camera | Độ cao | Góc nghiêng | Lưu ý |
|---|---|---|---|---|
| Trong nhà (sảnh, hành lang) | Dome | 2.5m – 3.0m | 30° – 45° | Gắn tại góc phòng để bao quát rộng nhất |
| Ngoài trời (cổng, bãi xe) | Bullet | 3.0m – 4.0m | 25° – 45° | Cao hơn tầm tay với, tránh phá hoại |
| Cổng ra vào / Cửa chính | Bullet WDR | 3.0m – 3.5m | 30° – 40° | Chọn vị trí TRÁNH hướng thẳng mặt trời, đèn pha xe |
| Hành lang dài | Dome | 2.5m – 3.0m | 15° – 30° | Lắp dọc hành lang, tận dụng góc nhìn dài |

### 1.2. Tại sao vị trí quan trọng hơn độ phân giải

Camera 4MP lắp sai vị trí sẽ cho kết quả tệ hơn camera 2MP lắp đúng. Những lỗi vị trí thường gặp:

- **Hướng thẳng vào nguồn sáng mạnh**: Cổng quay ra hướng Tây, đèn pha xe chiếu thẳng → hình trắng xóa dù camera có WDR.
- **Quá cao hoặc quá nghiêng**: Lắp camera ở 5m nhìn xuống sàn → chỉ thấy đỉnh đầu, không nhận dạng được khuôn mặt.
- **Gần vật phản chiếu**: Tường trắng, kính, mái tôn sáng ở gần ống kính → hồng ngoại bị phản xạ, hình đêm lóa trắng.

---

## 2. Kéo cáp và Đấu nối

### 2.1. Loại cáp

Bắt buộc dùng **Cat6 lõi đồng nguyên chất** (solid copper). Cáp Cat5e vẫn chạy được nhưng không khuyến khích cho dự án mới. Tuyệt đối tránh cáp CCA (Copper Clad Aluminum — lõi nhôm bọc đồng) vì:
- Điện trở cao hơn, gây sụt áp trên đường truyền PoE → camera xa dễ bị mất nguồn.
- Giòn, dễ gãy khi uốn cong nhiều lần trong ống luồn.
- Tuổi thọ ngắn hơn, oxy hóa nhanh trong môi trường ẩm.

### 2.2. Quy tắc kéo cáp

1. **Chiều dài tối đa**: 100m mỗi tuyến cáp (tính từ Switch/NVR đến camera). Nếu vượt quá, cần thêm Switch PoE trung gian.
2. **Bán kính uốn cong**: Tối thiểu gấp 4 lần đường kính cáp. Uốn gập quá sẽ làm đứt sợi đồng bên trong.
3. **Bảo vệ ngoài trời**: Dùng ống luồn HDPE hoặc nẹp nhựa chống UV khi kéo cáp lộ thiên. Cáp Cat6 không có vỏ chống UV sẽ giòn và nứt sau 1-2 năm phơi nắng.
4. **Hộp kỹ thuật (Junction Box)**: Tất cả điểm đấu nối ngoài trời phải nằm trong hộp kỹ thuật chống nước. Jack RJ45 trần để ngoài trời sẽ bị oxy hóa, mất tiếp xúc.
5. **Nhãn dán**: Ghi rõ ký hiệu tại cả 2 đầu cáp, ví dụ: `CAM-PK-01` (Phòng khách), `CAM-Cong-02` (Cổng). Không nhãn = không ai biết đầu nào nối đâu khi cần sửa.

### 2.3. Bấm jack RJ45

Sử dụng chuẩn **T568B** (chuẩn mặc định tại công ty). Thứ tự dây:

```
Pin 1: Trắng Cam
Pin 2: Cam
Pin 3: Trắng Xanh lá
Pin 4: Xanh dương
Pin 5: Trắng Xanh dương
Pin 6: Xanh lá
Pin 7: Trắng Nâu
Pin 8: Nâu
```

Sau khi bấm xong, luôn test bằng máy đo cáp mạng. Kiểm tra đủ 8 sợi thông và đúng thứ tự. Chỉ cần 1 sợi đứt hoặc sai thứ tự, PoE sẽ không cấp nguồn đúng hoặc camera mất kết nối ngắt quãng.

Bắt buộc lắp **chụp nhựa bảo vệ** (boot) cho mọi jack RJ45 — đặc biệt ở đầu camera. Chụp giúp khóa chốt jack, tránh tuột khi rung lắc.

---

## 3. Lỗi thi công thường gặp

| Lỗi | Hậu quả | Cách tránh |
|---|---|---|
| Cáp CCA thay vì đồng nguyên chất | Camera xa bị offline do sụt áp PoE | Kiểm tra nhãn cáp trước khi mua, test bằng nam châm (CCA không hút nam châm) |
| Bấm jack thiếu sợi | Mất PoE hoặc mất kết nối ngắt quãng | Luôn test bằng máy đo sau khi bấm |
| Camera hướng thẳng vào đèn/nắng | Hình trắng xóa vào buổi chiều | Khảo sát hướng nắng lúc chiều trước khi chốt vị trí |
| Hồng ngoại bị phản xạ tường | Hình đêm lóa trắng 1 góc | Kiểm tra ban đêm ngay sau lắp, xoay camera nếu cần |
| Không có hộp kỹ thuật ngoài trời | Jack bị oxy hóa, mất tiếp xúc sau vài tháng | Bắt buộc dùng junction box IP66 cho mọi đầu nối ngoài trời |

---

## 4. Checklist nghiệm thu thi công

- [ ] Camera được gắn chắc chắn, không rung lắc khi dùng tay lắc nhẹ
- [ ] Góc quay đúng như bản vẽ, bao quát hết khu vực cần giám sát
- [ ] Kiểm tra hình ảnh ban ngày: rõ nét, màu sắc tự nhiên, không bị ngược sáng
- [ ] Kiểm tra hình ảnh ban đêm: hồng ngoại sáng đều, không lóa trắng do phản chiếu
- [ ] Jack RJ45 bấm chuẩn T568B, test đủ 8 sợi, có chụp bảo vệ
- [ ] Cáp mạng có nhãn dán rõ ràng tại cả 2 đầu
- [ ] Hộp kỹ thuật ngoài trời kín, nắp đậy chặt
- [ ] Cáp không bị gập gãy, uốn cong quá mức tại các góc
