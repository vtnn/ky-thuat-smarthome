---
title: "Tiêu chuẩn thi công"
module: "a"
level: "2-6"
tags: ["tiêu chuẩn", "thi công", "lắp đặt", "hoàn thiện"]
---

# A4 — Tiêu Chuẩn Thi Công

## 1. Chiều Cao Lắp Thiết Bị

| Thiết bị | Chiều cao (từ sàn) | Ghi chú |
|----------|-------------------|---------|
| Công tắc thông minh | 1.2m – 1.4m | Ngang tay khi đứng |
| Ổ cắm | 0.3m – 0.4m | Sát sàn, trên chân tường |
| Ổ cắm bàn bếp | 1.1m – 1.2m | Trên mặt bếp |
| Bảng điều khiển (Panel) | 1.3m – 1.5m | Ngang tầm mắt |
| Camera trong nhà (Dome) | 2.5m – 3.0m | Gắn trần hoặc tường |
| Camera ngoài trời (Thân) | 3.0m – 4.0m | Tránh tầm tay với |
| Access Point WiFi | 2.5m – 3.0m | Gắn trần, trung tâm vùng phủ sóng |
| Cảm biến PIR | 2.2m – 2.5m | Góc phòng, hướng xuống |
| Cảm biến cửa | Cạnh khung cửa | Phần thân trên khung, nam châm trên cánh |
| Hub / Controller | 1.0m – 1.5m | Trong tủ hoặc trên kệ, giữa nhà |
| Tủ điện | 1.5m – 1.8m | Tâm tủ ngang tầm mắt |

---

## 2. Khoảng Cách Tối Thiểu

| Quy tắc | Khoảng cách |
|---------|-------------|
| Cáp mạng ↔ Cáp điện (song song) | ≥ 30cm |
| Cáp mạng giao nhau với cáp điện | Vuông góc 90° |
| Camera ↔ Đèn chiếu sáng trực tiếp | ≥ 1m (tránh lóa) |
| AP WiFi ↔ AP WiFi | 8m – 12m (tùy công suất) |
| Hub LifeSmart ↔ Thiết bị xa nhất | ≤ 30m (qua tường) |
| KNX Bus — 2 thiết bị xa nhất | ≤ 700m |
| DALI Bus — tổng chiều dài | ≤ 300m |
| RS485 (MobiEyes) — tổng | ≤ 500m (thực tế) |

---

## 3. Quy Chuẩn Kéo Dây

### Tránh nguồn / tránh nhiễu
- Cáp mạng (Cat6) và cáp bus (KNX) **KHÔNG đi chung ống** với cáp điện 220V.
- Cáp DALI **được phép** đi chung ống với cáp nguồn (theo tiêu chuẩn IEC 62386).
- Cáp RS485 (MobiEyes) **tách khỏi** cáp điện, dùng cáp xoắn đôi có chống nhiễu.

### Quy tắc đi dây
1. **Đi theo tuyến thẳng** — tránh bẻ góc nhọn (bán kính uốn ≥ 4 lần đường kính cáp).
2. **Gom dây gọn gàng** — dùng thít nhựa mỗi 30-50cm.
3. **Nhãn dán 2 đầu** — ghi rõ điểm đầu/cuối trên mỗi sợi cáp.
4. **Dự phòng dây** — để thừa 30-50cm tại mỗi đầu (phục vụ sửa chữa).
5. **Không kéo căng** — dây phải có độ chùng vừa đủ.

### Quy tắc trong tủ điện/tủ mạng
- Dây vào từ **dưới lên**, gom gọn bằng nẹp/ống.
- Dây ra thiết bị **có nhãn** rõ ràng.
- Có **sơ đồ đấu nối dán trong tủ**.
- Dây thừa cuộn gọn, không để lung tung.

---

## 4. Tiêu Chuẩn Hoàn Thiện

### Thẩm mỹ
- [ ] Thiết bị gắn **thẳng hàng**, không lệch.
- [ ] Mặt công tắc/ổ cắm ép sát tường, không hở khe.
- [ ] Camera gắn chắc, không lung lay.
- [ ] AP WiFi gắn gọn trên trần, cáp không lộ.
- [ ] Dây chạy nổi có nẹp/ống, thẳng hàng.

### Gọn gàng
- [ ] Trong tủ: dây gom gọn, có nhãn, có sơ đồ.
- [ ] Không có dây thừa bên ngoài tủ.
- [ ] Không có debris/vật liệu thừa tại vị trí lắp đặt.
- [ ] Khu vực thi công dọn dẹp sạch sẽ khi hoàn thành.

### Kỹ thuật
- [ ] Mối nối điện chắc chắn (domino hoặc wago, KHÔNG nối xoắn + băng keo).
- [ ] Cáp mạng bấm đúng chuẩn T568B, test 8/8.
- [ ] Ốc vít siết chặt, không lỏng.
- [ ] Không có dây điện hở (cách điện đầy đủ).

---

## 📝 Bài Tập Thực Hành

1. Đo và đánh dấu vị trí lắp 3 công tắc trong 1 phòng theo chiều cao chuẩn.
2. Kéo 1 tuyến cáp mạng từ tủ mạng đến vị trí camera — đúng quy chuẩn (tách cáp điện, nhãn 2 đầu).
3. Bấm 2 đầu cáp mạng Cat6 chuẩn T568B → test 8/8.
4. Tổ chức 1 tủ điện mẫu: gom dây, nhãn, sơ đồ.
