---
title: "B4.01 — Thi công DALI Bus"
description: "Hướng dẫn thi công bus DALI: lựa chọn cáp, topology, đấu nối driver, checklist và lỗi thường gặp khi lắp đặt thực tế."
module: "b"
level: "2-4"
tags: ["dali", "thi-cong", "wiring", "dali-bus", "cabling", "topology", "driver"]
---

## Mục tiêu

- Chọn đúng tiết diện cáp DALI cho từng chiều dài bus
- Hiểu tại sao DALI được phép đi chung ống với dây 220V và điều kiện đi chung
- Biết các topology hợp lệ (Bus, Star, Tree) và topology cấm (Ring)
- Tính được nguồn bus DALI cần thiết cho số lượng driver
- Đấu nối driver đúng cách: không phân cực, song song, dán nhãn
- Thực hiện checklist trước khi đưa vào vận hành

---

## Cáp sử dụng cho DALI bus

DALI bus dùng **2 dây, không phân cực** — hai đầu dây thường ký hiệu là **DA** và **DA** (hoặc DA+/DA-), nhưng thực tế đấu ngược chiều cũng không sao vì DALI-2 yêu cầu driver phải chịu được cả 2 chiều.

Cáp tiêu chuẩn: dây đôi xoắn, vỏ bọc cách điện mains-rated (cách điện cấp mains, không phải cáp tín hiệu yếu). Tại Việt Nam thường dùng:
- Cáp đôi điện lực thông thường 2×0.75mm² hoặc 2×1.5mm²
- Hoặc cáp tín hiệu có cách điện tương đương mains (quan trọng — xem phần bên dưới)

### Bảng tiết diện cáp vs chiều dài bus tối đa

| Tiết diện cáp | Chiều dài bus tối đa |
|--------------|---------------------|
| 0.5 mm² | 100 m |
| 0.75 mm² | 150 m |
| 1.0 mm² | 200 m |
| 1.5 mm² | 300 m |
| 2.0 mm² | 300 m (giới hạn bởi giao thức, không phải điện trở) |

Giới hạn 300m là giới hạn của giao thức IEC 62386 — không phụ thuộc vào tiết diện cáp nữa. Vì vậy dùng 2.0mm² không kéo dài thêm được quá 300m.

**Khuyến nghị thực tế:** Cho mọi dự án biệt thự, mặc định dùng **2×1.5mm²** để có độ dự phòng và bảo vệ sụt áp. Chỉ dùng 0.75mm² khi chắc chắn bus ngắn hơn 100m.

---

## Lợi thế thi công lớn: DALI đi chung ống với 220V

Đây là điểm kỹ thuật mà nhiều người không biết và hay bỏ qua.

Theo IEC 62386-101 và hướng dẫn DALI Manual gốc:

> "Cáp kết nối giao diện số có thể đi chung với cáp nguồn điện (ví dụ 230V), với điều kiện cách điện của cáp phải đạt mức cách ly kép (2× cách điện cơ bản)."

**Thực tế điều này có nghĩa gì?**

Trong công trình xây dựng ở Việt Nam, việc đi thêm ống gen riêng cho từng loại dây rất tốn công và tốn tiền. Với DALI, miễn là dùng cáp có cách điện đúng chuẩn (tương đương cáp điện 220V thông thường), bạn có thể:
- Luồn cáp DALI chung ống với dây nguồn 220V vào đèn
- Chạy cáp DALI trong cùng máng cáp với dây điện
- Kéo DALI trong bó dây cùng với dây điều khiển khác

So sánh với 0-10V: cáp tín hiệu 0-10V thường là cáp tín hiệu yếu, phải đi ống riêng, tách biệt khỏi dây 220V để tránh nhiễu. Điều này tăng chi phí ống gen và nhân công đáng kể. DALI loại bỏ yêu cầu này.

**Lưu ý bắt buộc:**
- Phải dùng cáp có cách điện mains-rated (không dùng cáp tín hiệu yếu kiểu telephone wire hay UTP Cat5)
- DALI **không phải SELV** — khi làm việc với bus DALI, phải cắt điện cả mạch 220V và nguồn bus DALI
- Tại khoảng cách gần 300m, nên đi cáp riêng để tránh EMI từ dây điện gần đó

---

## Topology hợp lệ

DALI hỗ trợ mọi kết hợp của 3 topology sau:

### Bus / Daisy-chain
Driver mắc nối tiếp theo đường thẳng:
```
Gateway ── Driver 0 ── Driver 1 ── Driver 2 ── Driver 3
```
Đơn giản nhất khi đèn nằm theo một hành lang hoặc một dãy.

### Star (hình sao)
Tất cả driver đấu về một điểm trung tâm (thường là hộp nối tại trần):
```
              Gateway
                │
         ┌──────┼──────┐
         ▼      ▼      ▼
      Driver0 Driver1 Driver2
```
Dùng khi driver phân tán không theo hàng.

### Tree (cây)
Kết hợp bus chính với các nhánh:
```
Gateway ── Driver 0 ── Driver 1
               │
               └── Driver 2 ── Driver 3
```
Phổ biến nhất trong thực tế biệt thự: trục chính chạy theo hành lang, nhánh vào từng phòng.

### KHÔNG được dùng: Ring (vòng tròn)
```
Gateway ── Driver 0 ── Driver 1 ── Driver 2
    ▲                                   │
    └───────────────────────────────────┘  ← SAI!
```
Topology Ring gây xung đột tín hiệu và lỗi địa chỉ nghiêm trọng. Nếu thi công vô tình tạo ra Ring (ví dụ nối nhầm đầu cuối bus về gateway), toàn bộ bus sẽ không hoạt động hoặc hoạt động lỗi ngẫu nhiên.

---

## Nguồn bus DALI

Gateway DALI thường đã tích hợp nguồn bus bên trong, cấp 16V DC cho toàn bộ DALI line. Nếu gateway không có nguồn bus tích hợp, phải lắp thêm **DALI Bus PSU** (thiết bị DIN rail riêng, thường 4W, 250mA).

**Quy tắc vàng: Chỉ 1 nguồn bus duy nhất trên 1 DALI line.**

Nếu đấu 2 nguồn bus trên cùng 1 line:
- Hai nguồn sẽ "đánh nhau" về điện áp
- Bus bất ổn, lệnh bị mất, driver không phản hồi
- Khó debug vì lỗi xảy ra ngẫu nhiên

**Trước khi lắp thêm PSU ngoài, kiểm tra datasheet của gateway xem đã có PSU tích hợp chưa.**

### Tính toán dòng bus

Mỗi driver rút khoảng **2mA** từ bus DALI:
- 10 driver: 10 × 2mA = 20mA
- 32 driver: 32 × 2mA = 64mA
- 64 driver: 64 × 2mA = 128mA

Giới hạn bus là 250mA, nên về lý thuyết 64 driver (128mA) vẫn an toàn. Nhưng nếu có thêm cảm biến, nút bấm DALI-2 trên bus, phải cộng thêm dòng của chúng (thường 1-3mA mỗi thiết bị).

---

## Sơ đồ đấu nối driver

Driver DALI có 4 đầu dây cần đấu:
1. **Live (L)** — 220V vào
2. **Neutral (N)** — 220V vào  
3. **DA** — Bus DALI (đầu 1)
4. **DA** — Bus DALI (đầu 2)

Đầu ra driver nối đến LED (thường là dây dương và dây âm DC cho đèn LED).

Các driver mắc **song song** trên bus DALI:

```
Gateway         Driver 0        Driver 1        Driver 2
  [DA]──────────[DA][DA]────────[DA][DA]────────[DA]
  [DA]──────────[DA][DA]────────[DA][DA]────────[DA]
  [L] ──────────[L]  [L]────────[L]  [L]────────[L]
  [N] ──────────[N]  [N]────────[N]  [N]────────[N]
                 │               │               │
               [LED0]          [LED1]          [LED2]
```

Cả 2 dây DA đều đấu song song — đây là điểm quan trọng để phân biệt với RS-485 hay DMX512 (có thứ tự A/B và termination).

---

## Thi công thực tế — Những điểm cần làm đúng

### 1. Đặt driver gần đèn, không đặt tập trung tại tủ điện

Một lỗi phổ biến: kỹ thuật viên muốn gom toàn bộ driver về tủ điện cho gọn. Điều này gây ra:
- Sụt áp LED: dây DC từ driver đến LED dài, tổn hao điện áp trên dây
- Khó bảo trì: khi 1 đèn hỏng phải mở tủ điện thay vì mở hộp trần
- Tốn thêm dây DC

Cách đúng: driver lắp tại hộp trần ngay gần từng đèn hoặc nhóm đèn. Dây DC ra đèn ngắn (dưới 50cm là lý tưởng). Dây DALI bus và dây 220V vào driver thì có thể dài.

### 2. Dán nhãn driver ngay khi lắp

Tại mỗi driver, dán nhãn ghi:
- Vị trí đèn (ví dụ: "PK - Trần D1")
- Địa chỉ DALI sẽ gán (ví dụ: "Addr: 01") — điền sau khi commissioning

Không dán nhãn khi thi công thì commissioning sẽ mất rất nhiều thời gian để identify từng driver. Ở dự án 30+ driver, không nhãn = mất nửa ngày chỉ để xác định driver nào là đèn nào.

### 3. Để dự phòng dây tại mỗi đầu driver

Để lại ít nhất **20cm dây** tại mỗi đầu đấu của driver — cả phía 220V lẫn phía DALI bus. Lý do:
- Nếu driver hỏng cần thay thế, có đủ dây để cắt-nối lại
- Nếu commissioning cần tháo driver ra test, không bị căng dây
- Chi phí không đáng kể nhưng tiết kiệm nhiều công sửa sau này

### 4. Không đấu nhầm DA vào N hoặc L

Hai dây DA của bus DALI trông giống dây tín hiệu thông thường. Nhưng bus DALI mang điện áp 16V DC — không phải 0V signal. Đấu nhầm DA vào neutral thì gateway sẽ ngắn mạch nguồn bus. Đấu nhầm DA vào Live 220V thì cháy driver.

Khi đi dây, dùng màu cáp khác biệt cho bus DALI (ví dụ cáp xanh lam 2×1.5mm²) và màu khác cho 220V (đỏ-đen). Hoặc dán nhãn đầu cáp trước khi luồn vào ống.

---

## Checklist thi công DALI bus

Dùng checklist này trước khi đóng trần hoặc trước khi mời kỹ thuật viên commissioning đến.

- [ ] Tất cả driver đã được lắp đặt đúng vị trí, gần đèn tương ứng
- [ ] Đấu dây 220V (L, N) vào đúng đầu vào driver (không đảo pha-trung tính)
- [ ] Đấu 2 dây DA bus DALI song song qua tất cả driver
- [ ] Kiểm tra không có điểm nào tạo vòng kín (Ring topology)
- [ ] Cáp DALI là cáp mains-rated (không phải cáp tín hiệu yếu)
- [ ] Dây DC ra đèn đấu đúng cực (+/-)
- [ ] Mỗi driver đã dán nhãn vị trí đèn
- [ ] Để lại tối thiểu 20cm dây dự phòng tại mỗi driver
- [ ] Xác nhận gateway chỉ có 1 nguồn bus duy nhất trên line này
- [ ] Đo điện áp bus DALI: phải đạt 9.5 – 22.5V DC (lý tưởng ~16V) tại tất cả driver
- [ ] Đếm số driver thực tế vs số driver thiết kế — khớp nhau
- [ ] Không có driver nào đấu chung 1 đường với Neutral hoặc Line 220V

---

## Đo điện áp bus và kiểm tra trước commissioning

Trước khi commissioning, đo bằng đồng hồ VOM tại đầu DA của một vài driver (cả gần gateway lẫn xa nhất):

- **~16V DC:** Bình thường, gateway đang cấp nguồn bus tốt
- **0V:** Mất nguồn bus hoàn toàn — kiểm tra gateway, kiểm tra nguồn bus PSU
- **< 9.5V:** Sụt áp quá mức — cáp quá mỏng, đường quá dài, hoặc có driver lỗi đang kéo bus
- **> 22.5V:** Nguồn bus lỗi — hỏng PSU hoặc cấu hình sai
- **Biến thiên không ổn định:** Có thể có 2 PSU trên cùng bus đang xung đột, hoặc có vòng Ring

---

## Lỗi thường gặp khi thi công và cách tránh

**Lỗi 1: Đấu DA vào N (neutral)**
Dấu hiệu: Toàn bộ bus không lên, gateway báo lỗi nguồn bus. Điện áp bus = 0V.
Nguyên nhân: Kỹ thuật viên nhầm dây tín hiệu DA với dây neutral, đặc biệt khi dây 220V và dây DALI cùng màu.
Khắc phục: Kiểm tra từng driver, dùng màu cáp khác biệt hoặc dán nhãn.

**Lỗi 2: Bus quá dài — sụt áp tại driver cuối**
Dấu hiệu: Driver gần gateway phản hồi tốt, driver xa nhất không phản hồi hoặc phản hồi chập chờn.
Nguyên nhân: Cáp 0.75mm² cho đường 200m+.
Khắc phục: Nâng tiết diện cáp, hoặc chia DALI bus thành 2 line riêng.

**Lỗi 3: Topology Ring do nối đầu cuối về gateway**
Dấu hiệu: Bus hoạt động không ổn định, addressing lỗi ngẫu nhiên, driver mất địa chỉ.
Nguyên nhân: Kỹ thuật viên muốn "dự phòng" bằng cách nối 2 đầu bus lại với nhau.
Khắc phục: Cắt điểm nối tạo Ring, để bus dạng cây hở.

**Lỗi 4: 2 nguồn PSU trên cùng 1 line**
Dấu hiệu: Bus điện áp không ổn định, driver phản hồi ngẫu nhiên, không scan được đủ driver.
Nguyên nhân: Gateway đã có PSU tích hợp nhưng vẫn lắp thêm PSU ngoài.
Khắc phục: Tháo PSU ngoài, chỉ dùng 1 nguồn.

**Lỗi 5: Driver lắp xa đèn, dây DC dài**
Dấu hiệu: Đèn sáng yếu hơn thiết kế, chênh lệch độ sáng giữa đèn cùng nhóm.
Nguyên nhân: Sụt áp trên dây DC từ driver đến LED.
Khắc phục: Dự án mới — thiết kế lại vị trí driver. Dự án đã xong — có thể tăng output current của driver trong giới hạn cho phép.
