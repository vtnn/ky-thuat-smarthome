---
title: "Thi công lắp đặt LifeSmart"
module: "b"
level: "2-4"
tags: ["LifeSmart", "thi công", "lắp đặt", "HVAC", "Nature"]
---

# B1.02 — Thi Công Lắp Đặt LifeSmart

## 1. An Toàn Điện

> ⚠️ **BẮT BUỘC:** Việc lắp đặt các thiết bị điện nguồn 220V (công tắc, màn hình Nature) phải do **thợ điện chuyên nghiệp** thực hiện sau khi đã **ngắt hoàn toàn nguồn điện**.

- Ngắt CB trước khi thao tác.
- Dùng bút thử điện kiểm tra không còn điện.
- **Sử dụng băng dính điện** bọc các đầu ốc vít để chống chập mạch với đế âm kim loại.

---

## 2. Lắp Đặt Smart Station (Hub)

1. Đặt Hub ở vị trí **trung tâm** ngôi nhà, trên cao (kệ/tường).
2. Cấp nguồn qua adapter đi kèm.
3. Kết nối **cáp mạng Ethernet** (khuyến cáo — ổn định hơn WiFi).
4. Mở LifeSmart App → Thêm thiết bị → Quét mạng cục bộ.
5. Chờ Smart Station xuất hiện → hoàn tất.

> **Cascade:** Nếu nhà rộng, cần 2 Smart Station — đặt mỗi cái 1 khu vực, cùng mạng LAN. Gộp qua Engineering Mode.

---

## 3. Lắp Đặt Công Tắc / Màn Hình Nature

### Sơ đồ đấu dây

```
Từ CB/MCB:
  ├── Dây L (Lửa) ────→ [L in] trên công tắc / Nature
  ├── Dây N (Nguội) ──→ [N] trên công tắc / Nature
  └── Dây Load ←──────── [L1 / L2 / L3 out] → tải (đèn)

Dây N chung nối từ tải về nguồn.
```

### Quy trình
1. **Ngắt CB** → kiểm tra không điện bằng bút thử.
2. Chụp hình sơ đồ dây cũ trước khi tháo (BẮT BUỘC).
3. Đấu dây:
   - **L in:** Dây lửa từ CB.
   - **N:** Dây trung tính.
   - **L1/L2/L3:** Dây ra tải (đèn, quạt...).
4. **Bọc băng dính điện** các đầu ốc vít — tránh chập với đế âm kim loại.
5. Gắn vào hộp âm tường, siết ốc.
6. Đóng CB, test bằng nút vật lý.
7. Ghép nối với Smart Station qua App.

> ⚠️ **Nếu hộp công tắc cũ không có dây N** → phải kéo thêm dây N từ hộp nối gần nhất.

---

## 4. Lắp Đặt HVAC Gateway / Bộ Điều Khiển Điều Hòa Trung Tâm

### ⚠️ CẢNH BÁO QUAN TRỌNG

> 🔴 **Nguồn điện yêu cầu: DC 12V**
> 
> **CẮM NHẦM nguồn 220V vào chân tín hiệu SẼ LÀM CHÁY BO MẠCH** bên trong thiết bị. Kiểm tra kỹ trước khi cấp nguồn!

### Dây tín hiệu (giữa Gateway và điều hòa)

| Yêu cầu | Chi tiết |
|---------|---------|
| Loại cáp | **Cáp xoắn đôi có chống nhiễu (2-core STP)** — BẮT BUỘC |
| Tiết diện | **> 0.75mm²** |
| Chiều dài tối đa | **< 100m** |
| Đi cáp | **KHÔNG đi chung** với đường điện nguồn 220V |
| Khoảng cách tối thiểu | ≥ 30cm so với cáp điện (hoặc ≥ 15cm + ống gen sắt có nối đất) |

### Quy trình
1. Kéo cáp STP từ vị trí HVAC Gateway đến cục nóng/dàn lạnh.
2. Cấp nguồn **DC 12V** cho Gateway (kiểm tra kỹ cực +/–).
3. Đấu dây tín hiệu vào terminal điều hòa (theo sơ đồ hãng).
4. Ghép nối HVAC Gateway với Smart Station qua App.
5. Đồng bộ dàn lạnh (xem `03-cau-hinh-app.md`).

---

## 5. Lắp Đặt Cảm Biến

### Cảm biến cửa (Guard Sensor)
- Gắn thân cảm biến trên **khung cửa**, nam châm trên **cánh cửa**.
- Khoảng cách 2 phần ≤ 15mm khi cửa đóng.
- **Không gắn trên cửa/cửa sổ bằng kim loại** → giảm sóng không dây.

### Cảm biến chuyển động (Motion / Radar)
- Góc phòng, chiều cao 2.2 – 2.5m.
- Hướng vào khu vực cần giám sát.
- Tránh hướng vào nguồn nhiệt (bếp, máy lạnh).

### Cảm biến tràn nước (Water Leak Sensor)
- Thân thiết bị: **gắn lên tường**, chiều cao **< 170cm** (để cáp đầu dò tới sàn).
- Đầu dò ngập nước: **đặt chạm mặt sàn** (cách sàn 1-5mm).
- ❌ **KHÔNG chống nước** — tuyệt đối không dùng ngoài trời.
- ❌ **KHÔNG gắn trên bề mặt kim loại** → giảm sóng.

### Cảm biến môi trường (CUBE Env)
- Tường phòng, cao 1.2 – 1.5m.
- Tránh nắng trực tiếp, gần nguồn nhiệt.

---

## 6. Lắp Đặt Motor Rèm

1. Gắn motor vào ray rèm theo hướng dẫn hãng (QuickLink / DOOYA / Tubular).
2. Kết nối nguồn cho motor.
3. Ghép nối motor / Curtain Controller với Smart Station qua App.
4. Cấu hình Travel Set (hành trình mở/đóng).
5. Test mở / đóng / dừng từ App.

---

## 7. Lắp Đặt IR Blaster (SPOT / SPOT Mini)

- Đặt trong tầm nhìn thẳng với thiết bị cần điều khiển (TV, máy lạnh).
- Tránh vật cản giữa SPOT và thiết bị.
- Cấp nguồn USB.
- Ghép nối với Smart Station → học lệnh IR trong App.
