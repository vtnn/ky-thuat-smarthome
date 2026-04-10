---
title: "B4.02 — Commissioning DALI (Gán địa chỉ & Cấu hình)"
description: "Quy trình commissioning DALI chuẩn: scan bus, gán địa chỉ, phân group, cấu hình scene và thông số driver. Bao gồm DT8 Tunable White và bảng mapping mẫu."
module: "b"
level: "4-6"
tags: ["dali", "commissioning", "addressing", "masterconfigurator", "ets", "dt6", "dt8", "tunable-white"]
---

## Mục tiêu

- Thực hiện được quy trình commissioning DALI từ đầu đến cuối theo đúng thứ tự
- Phân biệt New Initialisation vs System Extension — khi nào dùng cái nào (và tại sao nhầm là thảm họa)
- Gán địa chỉ driver, phân group, cấu hình scene, set thông số min/max/fade
- Biết cách dùng Tridonic masterCONFIGURATOR và ETS cho từng loại gateway
- Commissioning DT8 Tunable White: các bước bổ sung so với DT6
- Lập bảng mapping địa chỉ chuẩn để bàn giao dự án

---

## Công cụ commissioning

Trước khi bắt đầu, xác định đang dùng gateway nào để chọn đúng tool:

| Hệ thống | Tool commissioning |
|----------|-------------------|
| Standalone DALI (không gateway BMS) | Tridonic masterCONFIGURATOR + USB DALI adapter |
| KNX-DALI Gateway (Siemens 5WG1141, ABB DG/S) | ETS 5/6 cho phần KNX, masterCONFIGURATOR hoặc DALI-Cockpit cho phần DALI driver |
| MobiEyes Dimmer Module DALI | MobiEyes app / phần mềm cấu hình MobiEyes trên máy tính |
| LifeSmart DALI Gateway | LifeSmart app + cổng cấu hình Gateway |

**Tridonic masterCONFIGURATOR** là tool phổ biến nhất cho phần DALI thuần — miễn phí, tải tại tridonic.com. Cần USB DALI adapter (Tridonic USB interface) để kết nối máy tính với bus DALI. Adapter rút khoảng 6mA từ bus, không cần nguồn ngoài.

---

## Quy trình commissioning chuẩn — 9 bước

### Bước 1: Kiểm tra vật lý trước khi kết nối tool

Trước khi mở phần mềm, đảm bảo:
- Tất cả driver đã có điện 220V (đo bằng bút thử điện tại đầu vào từng driver)
- Bus DALI đã có điện: đo tại đầu DA của 1-2 driver, phải thấy 9.5–22.5V DC (~16V)
- Đếm số driver thực tế và ghi ra giấy — sẽ dùng để verify sau khi scan

### Bước 2: Kết nối tool và scan bus

1. Cắm USB DALI adapter vào máy tính
2. Đấu 2 dây của adapter vào bus DALI (bất kỳ điểm nào trên bus, không phân cực)
3. Mở masterCONFIGURATOR → tạo project mới
4. Chọn **Search Devices** (hoặc **Scan Bus**) — phần mềm sẽ gửi lệnh query broadcast và liệt kê tất cả driver đang có địa chỉ
5. Nếu đây là lần đầu (driver mới chưa có địa chỉ), danh sách có thể trống hoặc chỉ hiện một vài driver

### Bước 3: Gán địa chỉ — New Initialisation vs System Extension

Đây là bước quan trọng nhất, và là nơi hay xảy ra lỗi nghiêm trọng nhất.

**New Initialisation (Khởi tạo mới hoàn toàn)**
- Xóa **tất cả** địa chỉ hiện có trên bus, rồi gán địa chỉ mới ngẫu nhiên cho tất cả driver
- Dùng cho: hệ thống hoàn toàn mới, chưa có driver nào đã được commissioning
- **CẢNH BÁO:** Chạy New Initialisation trên hệ thống đã commissioning xong sẽ xóa toàn bộ địa chỉ. Tất cả group, scene sẽ mất. Đây là lỗi không thể "undo" — phải làm lại từ đầu.

**System Extension (Mở rộng hệ thống)**
- Tìm driver chưa có địa chỉ và gán địa chỉ mới, **giữ nguyên địa chỉ của driver đã có**
- Dùng cho: thêm driver mới vào hệ thống đã commissioning, hoặc khi không chắc có driver nào đã có địa chỉ chưa
- An toàn hơn nhiều — không bao giờ động vào driver đã có địa chỉ

**Quy tắc đơn giản:**
- Dự án mới, chưa có gì: dùng New Initialisation
- Thêm driver vào hệ thống đang chạy: luôn dùng System Extension
- Không chắc: dùng System Extension (an toàn hơn)

### Bước 4: Identify — Xác định driver nào là đèn nào

Sau khi gán địa chỉ, phần mềm hiện danh sách driver với địa chỉ 0, 1, 2... nhưng chưa biết driver nào tương ứng với đèn nào trong phòng.

Quy trình identify:
1. Click vào driver trong danh sách → phần mềm gửi lệnh **Identify** (hoặc Quick Test)
2. Driver nhận lệnh sẽ bật tắt đèn 3-5 lần
3. Quan sát thực địa: đèn nào nháy = driver đó
4. Ghi chú trong phần mềm: rename driver theo vị trí (ví dụ "PK_Tran_D01")

Lý tưởng là có 2 người: 1 người ở máy tính click identify, 1 người dưới nhà quan sát và báo lại qua điện thoại. Hoặc dùng tính năng identify từ xa nếu phần mềm hỗ trợ.

### Bước 5: Gán địa chỉ theo thứ tự logic

Sau khi identify xong, thường cần re-address để địa chỉ driver phản ánh đúng layout:
- Địa chỉ 0–9: Phòng khách
- Địa chỉ 10–19: Phòng ăn
- Địa chỉ 20–29: Phòng ngủ Master
- Địa chỉ 30–39: Bếp
- v.v.

Việc sắp xếp địa chỉ theo phòng giúp debug và bảo trì sau này dễ hơn rất nhiều.

### Bước 6: Gán Group (0–15)

Group là cách gom nhiều driver lại để điều khiển đồng thời:
- Một lệnh gửi đến Group 0 sẽ được thực thi đồng loạt bởi tất cả driver thuộc Group 0
- Một driver có thể thuộc nhiều group cùng lúc (driver đèn hắt có thể vừa thuộc Group PK, vừa thuộc Group All-Dim-50)

Ví dụ gán group cho Villa Nha Trang:
```
Group 0: Đèn trần Phòng khách     (driver Addr 0, 1, 2)
Group 1: Đèn hắt trần Phòng khách (driver Addr 3, 4)
Group 2: Đèn bàn ăn Phòng ăn      (driver Addr 10, 11)
Group 3: Đèn chính Phòng Master   (driver Addr 20, 21)
Group 4: Đèn đầu giường Master    (driver Addr 22, 23)
Group 5: Đèn Bếp chính            (driver Addr 30, 31)
```

Trong masterCONFIGURATOR: chọn driver → chọn Group tab → tick vào group muốn gán. Nhớ click Apply để lưu vào driver.

### Bước 7: Cấu hình Scene (0–15)

Scene là tập hợp mức dim cho từng driver, được lưu trong bộ nhớ của từng driver:

1. Điều chỉnh tất cả driver về mức dim mong muốn cho scene đó (dùng slider trong phần mềm)
2. Chọn scene slot muốn lưu (ví dụ Scene 1)
3. Click **Store Scene** — phần mềm gửi lệnh `STORE THE DTR AS SCENE` đến tất cả driver
4. Mỗi driver lưu mức dim hiện tại của nó vào Scene 1 trong bộ nhớ non-volatile

Để kiểm tra scene đã lưu đúng: click **Recall Scene 1** — tất cả đèn về đúng mức đã lưu.

**MASK value (255):** Nếu muốn một driver không tham gia scene (giữ nguyên mức hiện tại khi scene được recall), set scene level của driver đó = 255 (MASK). Hữu ích khi có đèn khách sạn muốn scene "Xem phim" dim đèn phòng khách nhưng không ảnh hưởng đèn hành lang.

### Bước 8: Cấu hình thông số driver

Sau khi xong group và scene, cấu hình các thông số quan trọng cho từng driver (hoặc broadcast):

| Thông số | Giá trị gợi ý | Giải thích |
|----------|--------------|-----------|
| Min Level | 10–20% | Mức thấp nhất driver chấp nhận — thấp hơn sẽ flicker |
| Max Level | 100% | Giới hạn trên (có thể set < 100% để bảo vệ LED dài hạn) |
| Power-on Level | LAST hoặc 100% | Mức dim khi đóng điện 220V — LAST giữ mức cuối cùng |
| System Failure Level | 100% | Mức dim khi mất tín hiệu DALI bus (an toàn: bật full) |
| Fade Time | 0.7s – 2s | Thời gian chuyển tiếp mức dim — dài hơn cho cảm giác mượt hơn |
| Fade Rate | Tốc độ bước dim khi giữ nút | Thường để mặc định |

**Lưu ý Min Level:** Đây là thông số hay bị bỏ qua. Nếu để Min Level = 0, driver sẽ nhận lệnh dim về 1-2% và có thể flicker hoặc tắt đột ngột. Mỗi driver có giới hạn dim vật lý riêng — cần test thực tế và set Min Level cao hơn điểm flicker một chút.

### Bước 9: Backup cấu hình

**Bắt buộc sau khi commissioning xong:**
1. Trong masterCONFIGURATOR: File → Save Project → lưu file .dali hoặc .xml
2. Export Status Report (Excel) — danh sách đầy đủ địa chỉ, group, scene của từng driver
3. In bảng mapping ra giấy, dán bên trong tủ điện (xem B4.03 về quy tắc đặt tên)

Cấu hình DALI được lưu trong bộ nhớ non-volatile của từng driver — mất điện không mất cấu hình. Nhưng khi driver hỏng phải thay thế, cần file backup để re-program driver mới.

---

## Bảng mapping địa chỉ mẫu (Villa Nha Trang)

| Địa chỉ | Driver Model | Đèn | Vị trí | Group | Scene 0 (Full) | Scene 1 (Relax) | Scene 2 (Movie) |
|---------|-------------|-----|--------|-------|---------------|----------------|----------------|
| 00 | Tridonic LCA 17W | Downlight D1 | PK Trần | G0 | 100% | 60% | 10% |
| 01 | Tridonic LCA 17W | Downlight D2 | PK Trần | G0 | 100% | 60% | 10% |
| 02 | Tridonic LCA 17W | Downlight D3 | PK Trần | G0 | 100% | 60% | 10% |
| 03 | Tridonic LCA 45W DT8 | Đèn hắt 1 | PK Hắt | G1 | 80% / 3000K | 30% / 2700K | 5% / 2700K |
| 04 | Tridonic LCA 45W DT8 | Đèn hắt 2 | PK Hắt | G1 | 80% / 3000K | 30% / 2700K | 5% / 2700K |
| 10 | OSRAM OTi 25W | Downlight D1 | PA Bàn ăn | G2 | 100% | 70% | MASK |
| 11 | OSRAM OTi 25W | Downlight D2 | PA Bàn ăn | G2 | 100% | 70% | MASK |
| 20 | Tridonic LCA 17W | Downlight D1 | Master Trần | G3 | 100% | 40% | 0% |
| 21 | Tridonic LCA 17W | Downlight D2 | Master Trần | G3 | 100% | 40% | 0% |
| 22 | Tridonic LCA 45W DT8 | Đèn đọc sách T | Master Đầu giường | G4 | 60% / 4000K | 20% / 2700K | 0% |
| 23 | Tridonic LCA 45W DT8 | Đèn đọc sách P | Master Đầu giường | G4 | 60% / 4000K | 20% / 2700K | 0% |

---

## Commissioning DT8 Tunable White — Các bước bổ sung

Driver DT8 có thêm các thông số màu sắc cần cấu hình sau khi xong phần địa chỉ và group:

**1. Xác nhận Colour Type**

Mở thông số DT8 của driver:
- Colour Type: chọn **Tc (Colour Temperature)** cho Tunable White
- Nếu driver hỗ trợ nhiều mode (Tc, XY, RGBWAF), phải chọn đúng mode trước khi set CCT

**2. Cấu hình dải CCT**

Mỗi driver DT8 có dải CCT nhất định theo spec phần cứng (ví dụ 2700K–6500K). Trong phần mềm:
- Set **Warm White CCT**: thường 2700K hoặc 2200K
- Set **Cool White CCT**: thường 5000K, 5700K hoặc 6500K
- Set **Startup CCT**: nhiệt độ màu khi bật điện lần đầu (gợi ý: 3000K)

**3. Lưu scene với CCT**

Khi lưu scene cho DT8, phải set cả hai giá trị: độ sáng (%) VÀ nhiệt độ màu (K):
- Scene "Nghỉ ngơi": 30% độ sáng, 2700K ấm
- Scene "Làm việc / Đọc sách": 80% độ sáng, 4000K–5000K lạnh hơn
- Scene "Buổi sáng Wake-up": 100% độ sáng, 6500K

**4. Đảm bảo tất cả driver trong cùng group đều là DT8**

Nếu mix DT6 và DT8 trong cùng group, lệnh CCT chỉ ảnh hưởng DT8 — DT6 không hiểu lệnh màu. Kết quả là ánh sáng không đều màu giữa các đèn trong nhóm. Nếu bắt buộc phải mix, phân riêng thành 2 group.

---

## Commissioning với ETS (KNX-DALI Gateway)

Khi dùng Siemens 5WG1141 hoặc ABB DG/S làm gateway, quy trình có 2 lớp:

**Lớp KNX (trong ETS):**
1. Import file .knxprod của gateway vào ETS catalog
2. Kéo gateway vào project, cấu hình các thông số KNX: địa chỉ thiết bị, số DALI group, số scene muốn map sang KNX Group Address
3. Gán Group Address KNX cho từng DALI group/scene
4. Download config KNX xuống gateway

**Lớp DALI (trong ETS hoặc DALI-Cockpit):**
- Một số gateway cho phép commissioning DALI driver trực tiếp từ ETS (có tab DALI riêng trong plugin)
- Một số gateway cần dùng tool riêng (Siemens Symaro Config, DALI-Cockpit) kết nối vào bus DALI
- Quy trình DALI (scan, identify, group, scene) giống như commissioning standalone

**Điểm quan trọng:** Sau khi commissioning DALI xong, đảm bảo mapping giữa DALI Group và KNX Group Address là đúng. Test từng nút bấm KNX để verify scene DALI được trigger đúng.

---

## Tips từ thực địa

**Test từng driver riêng trước khi gom group**

Sau khi gán địa chỉ xong, test dim up/down từng driver một trước khi gán vào group và scene. Phát hiện driver flicker hoặc không phản hồi ở giai đoạn này thì dễ xử lý hơn khi đã gom group.

**Không dùng New Initialisation khi không chắc**

Câu hỏi phải hỏi trước khi chạy New Init: "Có driver nào trên bus này đã được commissioning trước đó không?" Nếu không chắc 100%, dùng System Extension.

**Lưu file backup ngay sau mỗi bước lớn**

Đừng đợi đến cuối mới lưu. Lưu sau khi gán địa chỉ xong, lưu lại sau khi gán group xong, lưu lại sau khi scene xong. Phần mềm crash giữa chừng là có thể mất vài tiếng làm lại.

**Đặt tên driver ngay trong phần mềm**

Ngay khi identify xong, rename driver trong phần mềm theo tên thực tế (ví dụ "PK_Tran_Addr00"). Đừng để tên mặc định "Device 0", "Device 1" — sau 30 driver sẽ không nhớ cái nào là cái gì.

**Kiểm tra power-on behavior cuối cùng**

Sau khi xong tất cả, test thử: tắt CB 220V của nhóm đèn đó, chờ 10 giây, bật lại. Đèn phải lên đúng mức Power-on Level đã cấu hình. Không được có đèn nào lên rồi tắt ngay, hoặc flicker.
