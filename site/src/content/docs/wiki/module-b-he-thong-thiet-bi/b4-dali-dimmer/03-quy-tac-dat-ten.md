---
title: "B4.03 — Quy tắc đặt tên DALI"
description: "Quy ước đặt tên chuẩn cho DALI Group, Scene, và driver tại Thạch Anh IT. Bảng ví dụ thực tế từ Villa Nha Trang, template mapping dán tủ điện."
module: "b"
level: "3-6"
tags: ["dali", "naming", "group", "scene", "documentation", "villa-nha-trang"]
---

## Mục tiêu

- Nắm quy tắc đặt tên DALI Group chuẩn của công ty
- Biết mã khu vực: PK, PA, PN_Master, BEP, SV, SK và các biến thể
- Áp dụng được quy tắc đặt tên Scene: Scene 0 = Full, Scene 1 = Relax...
- Lập được bảng mapping địa chỉ đầy đủ để dán tủ điện
- Đồng bộ tên DALI với tên KNX GA hoặc tên device MobiEyes/LifeSmart

---

## Tại sao cần quy tắc đặt tên nhất quán?

Một dự án biệt thự có thể có 30–60 DALI driver, 10–16 group, 12–16 scene. Nếu mỗi người đặt tên theo cách riêng, khi kỹ thuật viên khác vào debug hoặc bàn giao dự án cho khách hàng sẽ không đọc được mapping.

Thực tế đã xảy ra: một dự án không có tài liệu naming, khi 1 driver hỏng sau 6 tháng, kỹ thuật viên vào không biết driver đó là đèn nào, phải identify lại từng driver mất nửa ngày.

Naming chuẩn = tài liệu tự mô tả. Nhìn vào "DALI_PK - Group 0" là biết ngay đây là đèn trần phòng khách.

---

## Quy tắc đặt tên DALI Group

### Format chuẩn

```
DALI_[KHU_VUC] - Group [Số]: [Mô tả ngắn]
```

Ví dụ:
- `DALI_PK - Group 0: Đèn trần Phòng khách`
- `DALI_PN_Master - Group 3: Đèn chính Phòng ngủ Master`

### Mã khu vực chuẩn

| Mã | Khu vực | Ghi chú |
|----|---------|---------|
| PK | Phòng khách | Living room |
| PA | Phòng ăn | Dining room |
| BEP | Bếp | Kitchen — dùng BEP thay vì BP để rõ hơn |
| PN_Master | Phòng ngủ Master | Master bedroom |
| PN_01, PN_02 | Phòng ngủ con / khách | Đánh số theo tầng hoặc vị trí |
| SK | Sảnh / Hành lang | Lobby, corridor |
| SV | Sân vườn | Outdoor garden |
| BE | Ban công | Balcony |
| WC | Toilet / Phòng tắm | Bathroom |
| HO | Hồ bơi | Pool area |
| GIA | Gara / Garage | Parking area |

Khi một phòng có nhiều tầng ánh sáng, thêm hậu tố mô tả vào tên group:
- `DALI_PK - Group 0: Trần` → đèn downlight trần
- `DALI_PK - Group 1: Hắt` → đèn strip hắt trần
- `DALI_PK - Group 2: Tranh` → đèn chiếu tranh tường

---

## Bảng ví dụ thực tế (Villa Nha Trang)

### Phòng khách (PK)

| Group | Tên DALI | Địa chỉ driver | Số driver | Loại |
|-------|---------|----------------|-----------|------|
| Group 0 | DALI_PK - Group 0: Đèn trần | Addr 00, 01, 02 | 3 | DT6 downlight |
| Group 1 | DALI_PK - Group 1: Đèn hắt trần | Addr 03, 04 | 2 | DT8 strip WW/CW |

### Phòng ăn (PA)

| Group | Tên DALI | Địa chỉ driver | Số driver | Loại |
|-------|---------|----------------|-----------|------|
| Group 2 | DALI_PA - Group 2: Đèn bàn ăn | Addr 10, 11 | 2 | DT6 pendant |

### Phòng ngủ Master (PN_Master)

| Group | Tên DALI | Địa chỉ driver | Số driver | Loại |
|-------|---------|----------------|-----------|------|
| Group 3 | DALI_PN_Master - Group 3: Đèn chính | Addr 20, 21 | 2 | DT6 downlight |
| Group 4 | DALI_PN_Master - Group 4: Đèn đầu giường | Addr 22, 23 | 2 | DT8 reading |
| Group 5 | DALI_PN_Master - Group 5: Đèn hắt | Addr 24 | 1 | DT8 cove |

### Bếp (BEP)

| Group | Tên DALI | Địa chỉ driver | Số driver | Loại |
|-------|---------|----------------|-----------|------|
| Group 6 | DALI_BEP - Group 6: Đèn trần bếp | Addr 30, 31 | 2 | DT6 downlight |
| Group 7 | DALI_BEP - Group 7: Đèn dưới tủ | Addr 32 | 1 | DT6 strip |

### Sảnh / Hành lang (SK)

| Group | Tên DALI | Địa chỉ driver | Số driver | Loại |
|-------|---------|----------------|-----------|------|
| Group 8 | DALI_SK - Group 8: Sảnh chính | Addr 40, 41 | 2 | DT6 downlight |
| Group 9 | DALI_SK - Group 9: Hành lang tầng 1 | Addr 42, 43, 44 | 3 | DT6 downlight |

---

## Quy tắc đặt tên Scene

Scene được đặt tên theo chức năng, nhất quán toàn dự án:

| Scene | Tên | Ý nghĩa |
|-------|-----|---------|
| Scene 0 | Full / Sáng tối đa | 100% tất cả đèn — dọn dẹp, kiểm tra |
| Scene 1 | Relax / Thư giãn | 40–60%, nhiệt độ màu ấm 2700K |
| Scene 2 | Movie / Xem phim | Dim rất thấp 5–15%, chỉ đèn hắt |
| Scene 3 | Welcome / Đón khách | 80–90%, ánh sáng tươi sáng |
| Scene 4 | Romantic / Lãng mạn | 10–20%, ấm 2700K, chỉ đèn hắt + đầu giường |
| Scene 5 | Sleep / Ngủ | 0% hoặc tắt hết (MASK cho đèn không liên quan) |
| Scene 6 | Morning / Sáng thức | 70%, 5000K–6500K (chỉ dùng với DT8) |
| Scene 7 | Dining / Bữa ăn | 80% đèn bàn ăn, 30% phòng xung quanh |
| Scene 8–15 | Dự phòng | Để trống hoặc dùng theo yêu cầu dự án |

Tên scene trong phần mềm commissioning nên ngắn gọn (giới hạn ký tự), nhưng trong tài liệu bàn giao viết đầy đủ.

---

## Quy tắc đặt tên địa chỉ driver

Format cho driver trong phần mềm (masterCONFIGURATOR, ETS):

```
[KHU_VUC]_[Chức năng]_Addr[XX]
```

Ví dụ:
- `PK_Tran_Addr00` — Driver địa chỉ 00, đèn trần phòng khách
- `PK_Hat_Addr03` — Driver địa chỉ 03, đèn hắt phòng khách
- `Master_DB_Addr22` — Driver địa chỉ 22, đèn đầu giường phòng Master
- `BEP_Tran_Addr30` — Driver địa chỉ 30, đèn trần bếp

---

## Đồng bộ tên với hệ thống điều khiển chính

Naming DALI phải nhất quán với naming bên hệ điều khiển:

**KNX Group Address (GA):**
Khi DALI group được map vào GA KNX, tên GA nên phản ánh tên DALI group:
```
1/2/0 — DALI PK Group 0 — Dim value     (DPT 5.001)
1/2/1 — DALI PK Group 0 — Switch        (DPT 1.001)
1/2/2 — DALI PK Group 0 — Status dim    (DPT 5.001)
1/2/4 — DALI PK Group 1 — Dim value     (DPT 5.001)
```

**MobiEyes device naming:**
Trong MobiEyes app, mỗi DALI group được tạo như một "device" hoặc "channel":
```
Tên device: PK - Trần (Group 0)
Tên device: PK - Hắt (Group 1)
Tên device: PA - Bàn ăn (Group 2)
```

**LifeSmart device naming:**
Tương tự, trong LifeSmart app:
```
PK Đèn trần
PK Đèn hắt
PA Bàn ăn
```

Không đặt tên theo kiểu "Group 0", "Channel 1" trong app — người dùng không hiểu. Đặt tên theo không gian và chức năng.

---

## Template Mapping Document — Dán tại tủ điện

Tài liệu này phải được in ra và dán bên trong cánh tủ điện sau khi commissioning xong. Đây là tài liệu bảo trì, không phải tài liệu bàn giao khách hàng.

```
====================================================
DỰ ÁN: [Tên dự án]        NGÀY: [Ngày commissioning]
KỸ THUẬT VIÊN: [Tên]      GATEWAY: [Model gateway]
====================================================

DALI BUS — DANH SÁCH DRIVER

Addr | Driver Model    | Đèn / Vị trí          | Group | Ghi chú
-----|-----------------|----------------------|-------|--------
 00  | Tridonic LCA17W | PK Downlight D1      | G0    | DT6
 01  | Tridonic LCA17W | PK Downlight D2      | G0    | DT6
 02  | Tridonic LCA17W | PK Downlight D3      | G0    | DT6
 03  | Tridonic LCA45W | PK Hắt trần P1       | G1    | DT8 TW
 04  | Tridonic LCA45W | PK Hắt trần P2       | G1    | DT8 TW
 10  | OSRAM OTi25W    | PA Pendant D1        | G2    | DT6
 11  | OSRAM OTi25W    | PA Pendant D2        | G2    | DT6
 20  | Tridonic LCA17W | Master Downlight D1  | G3    | DT6
 21  | Tridonic LCA17W | Master Downlight D2  | G3    | DT6
 22  | Tridonic LCA45W | Master Đọc sách T    | G4    | DT8 TW
 23  | Tridonic LCA45W | Master Đọc sách P    | G4    | DT8 TW

====================================================
SCENE MAPPING

Scene | Tên          | PK Trần | PK Hắt | PA    | Master | Ghi chú
------|--------------|---------|--------|-------|--------|--------
  0   | Full         | 100%    | 100%   | 100%  | 100%   |
  1   | Relax        |  60%    | 30%    |  70%  |  40%   | 2700K cho DT8
  2   | Movie        |  10%    |  5%    | MASK  |   0%   |
  3   | Welcome      |  90%    | 80%    |  90%  | MASK   |
  4   | Romantic     |   0%    | 20%    | MASK  |  15%   | 2700K cho DT8
  5   | Sleep        |   0%    |  0%    |   0%  |   0%   |

====================================================
BUS DALI
Cáp: 2×1.5mm²  |  Nguồn bus: Tích hợp trong gateway
Tổng số driver: [XX]  |  Điện áp bus: ~16V DC
====================================================
```

---

## Lỗi đặt tên hay gặp

**Dùng số thứ tự không có ngữ nghĩa**
Sai: "Group A", "Group B", "Light 1", "Light 2"
Đúng: "DALI_PK - Group 0: Trần", "PK_Tran_Addr00"

**Đặt tên theo màu sắc hay công suất**
Sai: "60W Warm", "Cool White Strip"
Đúng: tên theo vị trí và chức năng trong không gian

**Không ghi rõ DT6 hay DT8 trong bảng mapping**
Khi debug lỗi màu sắc sau này, biết driver đó là DT6 hay DT8 rất quan trọng. Luôn ghi vào cột "Ghi chú".

**Đặt tên khác nhau giữa phần mềm commissioning và app người dùng**
Ví dụ: phần mềm ghi "PK Hat G1", app ghi "Đèn Gián tiếp Phòng Khách" — kỹ thuật viên sau không biết chúng là một. Giữ core keyword nhất quán.
