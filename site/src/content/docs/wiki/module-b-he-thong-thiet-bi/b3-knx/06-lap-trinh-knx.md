---
title: "B3.06 — Lập trình kịch bản KNX"
description: "Lập trình KNX thực tế: switching, dimming qua DALI, scene, short/long press, timer, tích hợp MobiEyes và status feedback."
module: "b"
level: "4-6"
tags: ["knx", "lap-trinh", "scene", "dimming", "dali", "mobieyes", "ets"]
---

## Mục tiêu

- Lập trình được mạch switching cơ bản: push button → actuator
- Lập trình dimming qua DALI Gateway
- Tạo và gọi scene KNX
- Cấu hình short press / long press trên push button
- Hiểu cách tích hợp KNX với MobiEyes

---

## Khái niệm nền tảng

Mọi logic trong KNX đều hoạt động theo một nguyên lý: **Communication Object (CO) ↔ Group Address (GA) ↔ Communication Object**.

Push button có CO "Switch" — khi nhấn, CO này gửi giá trị (0 hoặc 1) lên một GA. Actuator có CO "Switching" — khi nhận giá trị từ GA đó, nó đóng hay ngắt relay.

Cấu hình trong ETS chỉ là: chọn CO nào, liên kết với GA nào, với tham số gì. Không có lập trình logic phức tạp theo nghĩa truyền thống — chỉ là khai báo liên kết.

---

## 1. Lập trình Switching cơ bản

### Mạch đơn giản nhất: 1 nút bật/tắt 1 đèn

**Bước 1:** Trong ETS, tạo Group Address:
```
0/0/0  PhongKhach - Den tran ON/OFF   (DPT 1.001 — 1-bit)
```

**Bước 2:** Push Button → Communication Objects:
- Tìm CO "Switch Button 1" (hoặc tên tương đương tuỳ hãng)
- Kéo GA `0/0/0` vào CO này
- Đặt cờ "C, W" (Communication + Write) = CO này gửi lên bus

**Bước 3:** DALI Gateway → Communication Objects:
- Tìm CO "Channel 1 Switch" (hoặc "Output 1 ON/OFF")
- Kéo GA `0/0/0` vào CO này
- Đặt cờ "C, W, U" (Communication + Write + Update)

**Kết quả:** Nhấn nút → Push button gửi "1" lên GA 0/0/0 → DALI Gateway nhận → bật đèn channel 1.

Nhấn lại → gửi "0" → tắt. (Cấu hình Toggle trong ETS push button parameter.)

### Toggle mode vs. Separate On/Off

Có hai cách cấu hình push button với 1 nút:

**Toggle (khuyến nghị):** Mỗi lần nhấn = đảo trạng thái. CO gửi giá trị ngược với trạng thái hiện tại. Cần liên kết GA status feedback vào push button để nó biết trạng thái hiện tại.

**Separate On/Off:** Nếu có 2 nút, 1 nút chỉ bật (gửi "1"), 1 nút chỉ tắt (gửi "0"). Không cần status feedback nhưng tốn nhiều nút.

---

## 2. Lập trình Dimming qua DALI Gateway

### Hai loại telegram dimming

**Relative dimming (4-bit, DPT 3.007):** Lệnh "dim up" hoặc "dim down" kèm tốc độ. Áp dụng khi nhấn và giữ.

**Absolute dimming (1-byte, DPT 5.001):** Đặt giá trị cụ thể từ 0 đến 255 (0% đến 100%). Áp dụng cho scene hoặc khi muốn đặt mức sáng chính xác.

### Cấu hình push button 1 nút dim

Với 1 nút, cấu hình Long Press / Short Press:

| Hành động | Chức năng |
|---|---|
| Short press | Toggle ON/OFF (bật tắt) |
| Long press giữ | Dimming lên (hoặc xuống) — dim tiếp tục khi đang giữ |
| Nhả nút (sau long press) | Stop dimming |

Trong ETS, cấu hình:
- Short Press: CO "Switch Button 1" → GA 0/0/0 (1-bit toggle)
- Long Press: CO "Dim Button 1" → GA 1/0/0 (4-bit dim)
- Direction alternates: Dim up → release → dim down → release (xen kẽ)

Cấu hình này chuẩn KNX — 1 nút vừa bật/tắt vừa dim, thường dùng trong phòng ngủ.

### Liên kết DALI Gateway cho dimming

DALI Gateway có CO riêng cho từng chức năng:

| CO | DPT | Mô tả |
|---|---|---|
| Channel X Switch | 1.001 | ON/OFF kênh X |
| Channel X Relative Dimming | 3.007 | Dim lên/xuống tương đối |
| Channel X Absolute Value | 5.001 | Đặt giá trị 0–255 |
| Channel X Status | 1.001 | Trạng thái ON/OFF (feedback) |
| Channel X Brightness Status | 5.001 | Giá trị độ sáng hiện tại (feedback) |

Liên kết CO Switch với GA switching, CO Relative Dimming với GA dimming. Hai GA khác nhau, cùng một kênh vật lý DALI.

---

## 3. Lập trình Scene (Kịch bản)

### Khái niệm Scene trong KNX

Scene KNX là một lệnh gọi tập hợp trạng thái: bật/tắt và mức sáng cụ thể cho nhiều đèn cùng lúc. Mỗi scene có số từ 1 đến 64.

Cách hoạt động: Push button gửi "scene number" (ví dụ: 3) lên GA scene. Tất cả actuator/DALI Gateway nhận GA đó và thực hiện mức sáng đã lưu cho scene 3 của kênh mình.

### Cấu hình scene trong ETS

**Bước 1:** Tạo GA scene:
```
3/0/0  PhongKhach - Scene Recall   (DPT 18.001 — Scene number)
```

**Bước 2:** Trong DALI Gateway parameters → Scene:
- Bật scene X cho kênh Y
- Đặt mức sáng (0–255) cho scene X

**Bước 3:** Liên kết CO "Scene Input" của DALI Gateway với GA 3/0/0

**Bước 4:** Trong Push Button parameters:
- Short press → Scene Recall → chọn scene number → liên kết GA 3/0/0

### Ví dụ bảng scene phòng khách — Villa Nha Trang

| Tên Scene | Scene No | Đèn trần (0–100%) | Đèn strip (0–100%) | Đèn cạnh sofa (0–100%) |
|---|---|---|---|---|
| Sáng tối đa | 1 | 100% | 100% | 100% |
| Xem phim | 2 | 10% | 30% | 20% |
| Đón khách | 3 | 70% | 80% | 60% |
| Đọc sách | 4 | 50% | 0% | 100% |
| Tắt hết | 5 | 0% | 0% | 0% |

Scene 5 (tắt hết) thường dùng cho nút "ALL OFF" — nhấn một lần tắt toàn phòng.

### Lưu scene từ trạng thái hiện tại

Tính năng "Scene Store": nhấn và giữ nút trong ETS để lưu trạng thái hiện tại vào scene. CO "Scene Store" khác với "Scene Recall" — một cái đọc, một cái ghi.

Thực tế: hiếm khi dùng scene store trong nhà dân vì khách hàng thường không cần thay đổi scene sau commissioning. Nhưng khách sạn và văn phòng hay yêu cầu.

---

## 4. Cấu hình Long Press / Short Press

Hầu hết push button KNX hỗ trợ nhiều kiểu nhấn trên mỗi nút:

| Kiểu nhấn | Thời gian | Chức năng thường dùng |
|---|---|---|
| Short press (<0.4s) | Nhanh | Toggle ON/OFF, scene recall |
| Long press (>0.4s) | Giữ | Dimming, blind up/down |
| Double press | 2 nhấn liên tiếp | Scene đặc biệt, toàn nhà OFF |
| Triple press (EAE Rosa) | 3 nhấn | Chức năng cấp 3 |

**Cấu hình trong ETS:**

EAE Rosa — parameter "Button X Short press function" và "Button X Long press function":
- Short press: Switching (toggle 1-bit)
- Long press: Dimming (4-bit relative)

Vimar 01580 — tab "Button":
- Short press → Switch object
- Long press → Dim object
- Double press → Second function object

Ekinex EK-ED2-TP — parameter group "Pushbutton X":
- Press type: Short / Long / Both
- Short press action: Toggle
- Long press action: Dimming
- Long press timeout: thời gian (ms) để phân biệt short và long

**Quy tắc thực tế:** Không configure quá nhiều kiểu nhấn trên 1 nút — khó nhớ, dễ nhấn nhầm. Short = bật/tắt, long = dim là đủ cho đa số phòng.

---

## 5. Timer và Scheduler

KNX không có built-in timer phức tạp trong thiết bị thường. Có 3 cách làm timer:

**Cách 1: Staircase function trong Actuator**
Switch Actuator có chức năng "Staircase" — sau khi nhận lệnh ON, tự tắt sau N giây. Không cần module thêm. Dùng cho đèn hành lang, WC.

**Cách 2: Logic Module trong Binary Input / Push Button**
MDT và một số hãng tích hợp logic module ngay trong thiết bị. Có thể làm timer, delay ON/OFF đơn giản. Nhưng giới hạn độ phức tạp.

**Cách 3: MobiEyes Controller**
Với Thạch Anh IT, logic phức tạp (schedule theo giờ, logic điều kiện, automation) đều thực hiện trong MobiEyes. KNX push button gửi telegram → MobiEyes nhận → MobiEyes thực thi logic → MobiEyes gửi lệnh ngược lại KNX bus qua GA.

---

## 6. Tích hợp KNX với MobiEyes

### Kiến trúc tích hợp

```
Nhấn nút KNX Push Button
        ↓
KNX Telegram → GA 0/0/0 (trên bus)
        ↓
KNX/IP Gateway → KNXnet/IP Tunneling → LAN
        ↓
MobiEyes Controller (subscribe GA 0/0/0)
        ↓
MobiEyes xử lý logic (scene, timer, điều kiện)
        ↓
MobiEyes gửi lệnh: GA 3/0/0 Scene "Xem phim"
        ↓
DALI Gateway nhận → thực thi dim level cho từng đèn
```

### Cấu hình phía KNX

Về phía KNX, không cần làm gì đặc biệt — MobiEyes đăng ký (subscribe) Group Address cần thiết qua KNXnet/IP tunneling. MobiEyes cũng có thể gửi telegram đến bất kỳ GA nào.

Điều cần đảm bảo:
- KNX/IP Gateway phải trong cùng subnet với MobiEyes
- IP Gateway phải còn tunneling slot trống (Weinzierl 5263 có 5 slot)
- MobiEyes cấu hình đúng IP và tunneling port của Gateway

### Ví dụ thực tế: Push button KNX gọi scene MobiEyes

1. Push button nhấn nút "Xem phim" → gửi scene number 2 lên GA 3/0/0
2. MobiEyes lắng nghe GA 3/0/0, nhận value "2"
3. MobiEyes kích hoạt scene nội bộ của mình: "Living Room - Movie"
4. Trong scene MobiEyes: gửi dim value xuống DALI Gateway qua GA 1/0/0 (đèn trần 10%), GA 1/0/1 (đèn strip 30%)
5. Đồng thời MobiEyes điều khiển rèm qua module riêng, điều hoà theo setpoint đã cài

Kết quả: 1 nút bấm kích hoạt toàn bộ cảnh phòng, bao gồm cả thiết bị không phải KNX.

---

## 7. Status Feedback và LED Indicator

### Tại sao cần status feedback

Nếu đèn được bật từ nhiều nguồn (nút ở cửa vào, MobiEyes app, nút ở đầu giường), LED trên nút phải phản ánh trạng thái thực tế — không phải trạng thái của lần nhấn cuối cùng.

Ví dụ: Bật đèn phòng khách từ app MobiEyes. LED trên push button phòng khách phải sáng lên tương ứng. Nếu không có feedback, LED vẫn tắt — lần nhấn tiếp theo sẽ gửi "1" (bật) thay vì "0" (tắt), gây logic sai.

### Cấu hình feedback

**Bước 1:** DALI Gateway CO "Channel 1 Status" → liên kết GA `4/0/0` (1-bit, Read/Transmit)

**Bước 2:** Push Button CO "LED Button 1 Status Input" → liên kết cùng GA `4/0/0`

**Kết quả:** Khi đèn bật (từ bất kỳ nguồn nào), DALI Gateway gửi "1" lên GA 4/0/0 → push button nhận → LED sáng.

### Màu LED trên push button

EAE Rosa, Vimar 01580/01585, Ekinex EK-ED2-TP đều hỗ trợ cấu hình màu LED:

- LED xanh lá: Đèn đang bật
- LED đỏ: Đèn đang tắt (hoặc tắt = tối hoàn toàn)
- LED xanh nhạt: Navigation (luôn sáng mờ để định hướng trong bóng tối)

Cấu hình trong ETS parameter của push button: "LED function" hoặc "LED status object".

---

## 8. Tunable White qua DALI DT8 (sơ lược)

DALI DT8 là device type cho đèn tunable white (điều chỉnh nhiệt độ màu sắc) và RGBW.

KNX-DALI Gateway hỗ trợ DT8: ngoài CO dimming thông thường, còn có CO "Colour Temperature" (DPT 5.001 hoặc 7.600) để gửi giá trị Kelvin (2700K–6500K).

Ví dụ sáng sáng = cool white (6000K), buổi tối = warm white (2700K). Tunable White thường được tự động hoá theo giờ trong ngày qua MobiEyes (Human Centric Lighting).

Chi tiết về DALI DT8 và Tunable White được viết trong Module B4 — DALI nâng cao.
