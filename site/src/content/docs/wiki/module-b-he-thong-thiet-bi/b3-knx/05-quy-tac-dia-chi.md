---
title: "B3.05 — Quy tắc địa chỉ KNX"
description: "Quy tắc đặt địa chỉ vật lý (Physical Address) và địa chỉ nhóm (Group Address) tại Thạch Anh IT, kèm ví dụ thực tế từ Villa Nha Trang."
module: "b"
level: "4-6"
tags: ["knx", "dia-chi", "group-address", "physical-address", "quy-tac", "ets"]
---

## Mục tiêu

- Hiểu cấu trúc Physical Address (PA) và Group Address (GA) trong KNX
- Nắm được quy tắc đặt địa chỉ tại Thạch Anh IT
- Đọc được bảng GA ví dụ Villa Nha Trang
- Biết cách lưu trữ địa chỉ để bảo trì lâu dài

---

## Khái niệm cơ bản

KNX dùng hai hệ thống địa chỉ hoàn toàn độc lập:

**Physical Address (Địa chỉ vật lý):** Xác định vị trí vật lý của thiết bị trong topology. Mỗi thiết bị có một PA duy nhất. PA dùng để tìm thiết bị khi lập trình, download, debug. Dạng: `Area.Line.Device` — ví dụ `1.1.5`.

**Group Address (Địa chỉ nhóm):** Kênh giao tiếp giữa các Communication Objects. GA không gắn với vị trí vật lý — nó là "địa chỉ chức năng". Khi push button gửi telegram lên GA 0/0/0, tất cả thiết bị có CO liên kết với GA 0/0/0 đều nhận và phản hồi. Dạng 3 cấp: `Main/Middle/Sub` — ví dụ `0/0/0`.

Sự tách biệt này là điểm mạnh của KNX: bạn có thể thay đổi logic (ai điều khiển gì) chỉ bằng cách thay đổi liên kết GA, không cần đổi đấu dây vật lý.

---

## Quy tắc Physical Address

### Cấu trúc

```
Area . Line . Device
  1  .   1  .   5
```

Phạm vi: Area 0–15, Line 0–15, Device 0–255. Địa chỉ đặc biệt: 0.0.0 là địa chỉ "chưa được lập trình" (factory default) — không dùng cho thiết bị thực.

### Quy tắc Area

Area = theo tầng hoặc khu vực chính:

| Area | Ý nghĩa |
|---|---|
| 1 | Tầng 1 (trệt) |
| 2 | Tầng 2 |
| 3 | Tầng 3 hoặc tầng lửng |
| 4 | Sân vườn / ngoại thất |
| 5 | Basement / hầm |

Với công trình 1 tầng: chỉ dùng Area 1. Với villa 3 tầng: Area 1, 2, 3.

### Quy tắc Line

Line trong một Area = theo chức năng hoặc khu vực con:

| Line | Chức năng |
|---|---|
| 1 | Chiếu sáng (Lighting) |
| 2 | Rèm / màn (Blinds/Curtains) |
| 3 | HVAC / Điều hoà |
| 4 | An ninh / sensor |
| 5 | Đa năng / chung |

Ví dụ: Line 1.1 = Tầng 1, Chiếu sáng. Line 1.2 = Tầng 1, Rèm.

**Lưu ý thực tế:** Với dự án quy mô vừa (villa 1–2 tầng, <50 thiết bị), thường chỉ dùng Area 1 và 1–2 Line. Không cần phức tạp hóa nếu không cần thiết.

### Quy tắc Device

Device number trong một Line = theo loại thiết bị:

| Device | Loại thiết bị |
|---|---|
| 1–19 | Push Button (nút bấm) |
| 20–39 | Actuator (relay, blind, dimmer) |
| 40–49 | Binary Input / Sensor |
| 50–59 | DALI Gateway |
| 60–69 | KNX/IP Gateway |
| 70–79 | Logic / Timer modules |
| 255 | PSU (nếu PSU là thiết bị có địa chỉ) |

**Ví dụ mapping trong một line:**

```
1.1.1  — Push Button phòng khách (EAE Rosa, 4 nút)
1.1.2  — Push Button phòng bếp (Vimar 01580, 4 nút)
1.1.3  — Push Button phòng ngủ master (Ekinex EK-ED2-TP)
1.1.4  — Push Button sân vườn (EAE Oria)
1.1.50 — DALI Gateway tầng 1 (Siemens 5WG1141)
1.1.60 — KNX/IP Gateway (Weinzierl 5263)
```

---

## Quy tắc Group Address

### Cấu trúc 3 cấp

```
Main / Middle / Sub
  0  /    0   /  0
```

Phạm vi: Main 0–31, Middle 0–7 (ETS5 style) hoặc 0–255 (free), Sub 0–255.

### Main Group (chức năng KNX)

| Main | Chức năng |
|---|---|
| 0 | Switching (bật/tắt — 1-bit) |
| 1 | Dimming (điều chỉnh độ sáng — relative 4-bit + absolute 1-byte) |
| 2 | Blinds / Curtains (rèm — UP/DOWN, position) |
| 3 | Scenes (kịch bản — 1-byte scene number) |
| 4 | Status Feedback (trạng thái phản hồi) |
| 5 | HVAC / Nhiệt độ |
| 6 | Lux / Cảm biến môi trường |
| 7 | Security / Alarm |

### Middle Group (khu vực / phòng)

| Middle | Khu vực (ví dụ Villa Nha Trang) |
|---|---|
| 0 | Phòng khách (Living Room) |
| 1 | Phòng ngủ Master |
| 2 | Phòng ngủ 2 |
| 3 | Phòng ngủ 3 |
| 4 | Phòng bếp (Kitchen) |
| 5 | Sân vườn (Garden) |
| 6 | Hành lang / Cầu thang |
| 7 | Chung / Toàn nhà |

### Sub Group (điểm điều khiển cụ thể)

Sub xác định từng đèn, từng zone, từng chức năng trong phòng:

| Sub | Ý nghĩa |
|---|---|
| 0 | Đèn tổng (all lights in room) |
| 1 | Đèn chính / downlight |
| 2 | Đèn cạnh giường |
| 3 | Đèn strip / accent |
| 4 | Đèn bàn ăn |
| 5 | Đèn ngoại thất |

---

## Bảng GA ví dụ — Villa Nha Trang

### Group Switching (Main 0)

| Group Address | Tên | Mô tả |
|---|---|---|
| 0/0/0 | PhongKhach - Den tong ON/OFF | Bật/tắt toàn bộ đèn phòng khách |
| 0/0/1 | PhongKhach - Den tran ON/OFF | Đèn trần downlight phòng khách |
| 0/0/2 | PhongKhach - Den strip ON/OFF | Đèn strip trang trí phòng khách |
| 0/1/0 | Master - Den tong ON/OFF | Bật/tắt toàn bộ đèn phòng master |
| 0/1/1 | Master - Den tran ON/OFF | Đèn trần phòng master |
| 0/1/2 | Master - Den can giuong ON/OFF | Đèn cạnh giường phòng master |
| 0/4/0 | Bep - Den tong ON/OFF | Đèn bếp tổng |
| 0/5/0 | SanVuon - Den ON/OFF | Đèn sân vườn |

### Group Dimming (Main 1)

| Group Address | Tên | Mô tả |
|---|---|---|
| 1/0/0 | PhongKhach - Den tong Dim (relative) | Dim lên/xuống 4-bit |
| 1/0/1 | PhongKhach - Den tong Value | Giá trị dim tuyệt đối 0–255 |
| 1/1/0 | Master - Den tong Dim (relative) | Dim lên/xuống phòng master |
| 1/1/1 | Master - Den tong Value | Giá trị dim tuyệt đối |

### Group Scene (Main 3)

| Group Address | Tên | Mô tả |
|---|---|---|
| 3/0/0 | PhongKhach - Scene | Gọi scene phòng khách (1-byte scene number) |
| 3/1/0 | Master - Scene | Gọi scene phòng master |
| 3/7/0 | Toan Nha - Scene | Scene toàn nhà (tắt hết, movie mode...) |

### Group Status Feedback (Main 4)

| Group Address | Tên | Mô tả |
|---|---|---|
| 4/0/0 | PhongKhach - Den tong Status | Trạng thái đèn phòng khách (phản hồi từ actuator) |
| 4/0/1 | PhongKhach - Den tran Status | Trạng thái đèn trần |
| 4/1/0 | Master - Den tong Status | Trạng thái đèn master |

---

## Naming Rules trong ETS

Sử dụng tên nhất quán theo format sau:

**Physical Address — Tên thiết bị:**
`[Loại]_[PhongHayKhuVuc]_[SoThuTu]`

Ví dụ:
- `PB_PhongKhach_1` — Push Button phòng khách số 1
- `DALI_GW_Tang1` — DALI Gateway tầng 1
- `IPGateway_Main` — KNX/IP Gateway chính

**Group Address — Tên GA:**
`[KhuVuc] - [ThietBi/Chuc nang] [DPT type]`

Ví dụ:
- `PhongKhach - Den tong ON/OFF` (DPT 1.001)
- `PhongKhach - Den trang Dim` (DPT 3.007)
- `PhongKhach - Den trang Value` (DPT 5.001)

---

## Lưu trữ địa chỉ

**Nguyên tắc:** Mọi địa chỉ phải được ghi lại bên ngoài ETS. File ETS project có thể bị mất, bị corrupt, hoặc cần mở trên máy khác không cài ETS.

**Cách lưu:**

1. **Spreadsheet (Google Sheets):** Export từ ETS → Reports → hoặc tạo thủ công. Cột gồm: Physical Address, Tên thiết bị, Phòng, Model, Ghi chú.

2. **Bảng dán trong tủ điện:** In bảng GA và PA ra giấy, ép plastic, dán bên trong cửa tủ điện. Kỹ thuật viên bảo hành sau này không cần mở laptop vẫn biết thiết bị nào là gì.

3. **File PDF:** Export bảng ra PDF, lưu cùng folder với file ETS project trên Google Drive.

**Template tối thiểu cần có:**

| PA | Tên | Phòng | Model | Ghi chú |
|---|---|---|---|---|
| 1.1.1 | PB_PhongKhach_1 | Phòng khách | EAE Rosa Crystal 4-nút | Cạnh cửa vào |
| 1.1.50 | DALI_GW_Tang1 | Tủ điện | Siemens 5WG1141 | DALI line 1 |

---

## Lỗi hay gặp về địa chỉ

**Physical Address trùng:** Hai thiết bị có cùng PA trên cùng một line. ETS sẽ cảnh báo, nhưng nếu bỏ qua, khi download cả hai sẽ bị xung đột. Triệu chứng: một trong hai thiết bị reset liên tục hoặc không phản hồi đúng.

**Group Address liên kết sai chiều:** CO "Send" của push button phải liên kết với CO "Receive" của actuator qua cùng một GA. Nếu 2 thiết bị có cùng GA nhưng cùng là "Send", chúng sẽ "nói chuyện" nhưng không ai "nghe".

**Quên liên kết Status GA:** Push button cần nhận trạng thái từ actuator để LED phản hồi đúng. CO "Status Input" của push button phải liên kết với GA trạng thái (Main 4). Nếu quên, đèn bật nhưng LED trên nút không sáng.

**GA không nhất quán giữa kỹ thuật viên:** Người A tạo `0/0/0` cho phòng khách, người B tạo `0/1/0` cho phòng khách trên cùng project. Kết quả: lộn xộn, khó maintain. Dùng template GA cố định cho mọi dự án.
