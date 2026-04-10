---
title: "B3.04 — Phần mềm ETS (Engineering Tool Software)"
description: "Hướng dẫn sử dụng ETS từ đầu đến cuối: cài đặt, import catalog, tạo project, gán địa chỉ vật lý, tạo Group Address, download và debug."
module: "b"
level: "4-6"
tags: ["ets", "knx", "lap-trinh", "group-address", "physical-address", "phan-mem"]
---

## Mục tiêu

- Biết ETS là gì, phiên bản hiện tại, các loại license
- Thực hiện được workflow đầy đủ: tạo project → thêm thiết bị → cấu hình → download
- Hiểu sự khác biệt giữa Physical Address và Group Address
- Biết cách dùng Group Monitor để debug
- Biết cách import .knxprod và .etsapp từ Google Drive

---

## ETS là gì

ETS (Engineering Tool Software) là phần mềm lập trình KNX duy nhất được công nhận bởi KNX Association. Tất cả thiết bị KNX — dù của hãng nào — đều phải lập trình qua ETS.

ETS không phải "ứng dụng điều khiển" (không dùng hàng ngày để bật/tắt đèn). ETS là công cụ kỹ sư, dùng để:
- Khai báo topology (Area, Line, Device)
- Gán địa chỉ vật lý cho thiết bị
- Cấu hình tham số (parameters)
- Tạo Group Address và liên kết Communication Objects
- Download cấu hình xuống thiết bị
- Debug qua Group Monitor và Bus Monitor

Sau khi commissioning xong, ETS thường không cần mở lại trừ khi có thay đổi cấu hình.

---

## Phiên bản và License

**Phiên bản hiện tại:** ETS6 (được dùng từ 2021, thay thế ETS5).

**Các loại license ETS6:**

| Loại | Giá | Giới hạn | Dùng cho |
|---|---|---|---|
| Demo | Miễn phí | 5 thiết bị/project | Học tập, test nhỏ |
| Lite | ~€300/năm | 20 thiết bị/project | Dự án nhỏ, freelancer |
| Professional | ~€1.000/năm | Không giới hạn | Dự án lớn, công ty |
| Home | ~€60 (mua đứt) | 64 thiết bị | DIY, nhà ở cá nhân |

Tại Thạch Anh IT: dùng license Professional vì dự án thường vượt 20 thiết bị.

Tải ETS tại: [my.knx.org](https://my.knx.org) — cần đăng ký tài khoản KNX Association.

---

## Cài đặt và Import Catalog

### Cài đặt ETS6

1. Tải installer từ my.knx.org
2. Cài đặt như phần mềm Windows thông thường
3. Mở ETS6, đăng nhập tài khoản KNX Association
4. License được activate online — cần internet lần đầu

### Import .knxprod (Product Database)

Mỗi thiết bị KNX có file `.knxprod` do nhà sản xuất cung cấp. File này chứa định nghĩa Communication Objects, Parameters và Application Program của thiết bị.

**Các file .knxprod của Thạch Anh IT (trên Google Drive):**

| File | Thiết bị |
|---|---|
| `MDT_KP_BE_02_Glass_Push_Button_II_Smart_V30.knxprod` | MDT Glass Push Button II Smart |
| `MDT_KP_BE_01_Glass_Push_Button_II_Light_V13c.knxprod` | MDT Glass Push Button II Light |
| `BE-GT20x.01 Glass Push Button II Smart.knxprod` | MDT Glass Push Button II Smart (BE-GT2 series) |
| `BE-GT2Tx.01 Glass Push Button II Smart with Temperature sensor.knxprod` | MDT GPII Smart + Temperature |

**Để import:**
1. Trong ETS6: Catalogs → Import
2. Chọn file .knxprod từ máy tính (download từ Google Drive trước)
3. ETS import và thêm vào thư viện product catalog
4. Sau đó có thể thêm vào project bất kỳ lúc nào

Với EAE, Vimar, Ekinex: tải .knxprod từ website nhà sản xuất hoặc KNX online catalog tại [catalog.knx.org](https://catalog.knx.org).

---

## Import ETS App (.etsapp)

ETS App là extension nâng cao cho ETS, cung cấp giao diện cấu hình đẹp hơn (thường visual/graphical) thay vì chỉ list parameters.

**File trên Google Drive:**
- `MDT_DCA_BE_01_Push_Button_II_Smart_v4_5_1_0.etsapp` — ETS App cho MDT Push Button II Smart (phiên bản mới nhất)
- `MDT_DCA_BE_01_Push_Button_II_Smart_v4_1_0_0.etsapp` — phiên bản cũ hơn

**Để import ETS App:**
1. ETS6: Settings → Apps → Import App
2. Chọn file .etsapp
3. Sau đó khi cấu hình thiết bị MDT, ETS sẽ mở giao diện app thay vì standard parameter dialog

Lưu ý: ETS App chỉ chạy trong ETS, không phải standalone app.

---

## Workflow Tạo Project

### Bước 1: Tạo project mới

ETS6 → Projects → Create Project:
- Project name: ví dụ "Villa Nha Trang 2024"
- KNX medium: TP (Twisted Pair) — loại phổ biến nhất
- Address style: 3-level (Area.Line.Device) — chọn cái này

### Bước 2: Xây dựng Topology

Tab Topology → thêm:
- **Area 1** (hoặc đặt tên "Tầng 1" / "Main Area")
- **Line 1.1** (hoặc "Chiếu sáng Tầng 1")
- **Line 1.2** (nếu có thêm line)

Mỗi Line trong ETS tương ứng với một đoạn bus vật lý thực tế.

### Bước 3: Thêm thiết bị vào Line

Trong Line 1.1 → Add Device:
- Tìm thiết bị trong Catalog (ví dụ: "EAE Rosa Switch")
- Kéo thả vào Line hoặc click Add
- ETS tự gán địa chỉ vật lý tạm thời (1.1.1, 1.1.2...)

### Bước 4: Đặt địa chỉ vật lý (Physical Address)

Double-click vào thiết bị → Individual Address:
- Nhập địa chỉ theo quy tắc của công ty (xem B3.05)
- Ví dụ: Push Button phòng khách = 1.1.1

### Bước 5: Cấu hình tham số (Parameters)

Click vào thiết bị → Parameters (hoặc Edit):
- Cấu hình từng nút: chức năng, short press / long press
- Ví dụ: Button 1 = Switch (on/off), Button 2 = Dimming (dim up/down)
- Đặt LED feedback theo từng nút
- Đặt cảm biến nhiệt độ gửi chu kỳ bao nhiêu phút

### Bước 6: Tạo Group Address

Tab Group Addresses → New → tạo cấu trúc 3 cấp:
```
0 Switching (Main group)
└── 0 Phòng khách (Middle group)
    ├── 0 Đèn tổng ON/OFF (Sub group) — GA: 0/0/0
    ├── 1 Đèn cạnh sofa ON/OFF       — GA: 0/0/1
    └── 2 Đèn trần ON/OFF            — GA: 0/0/2
```

Xem B3.05 cho quy tắc đặt tên và số Group Address đầy đủ.

### Bước 7: Liên kết Communication Objects với Group Address

Mỗi thiết bị có danh sách Communication Objects (CO). Ví dụ:
- Push Button → CO "Switch Button 1": gửi 1-bit on/off
- DALI Gateway → CO "Channel 1 Switch": nhận 1-bit on/off

Để liên kết: kéo Group Address vào CO, hoặc chọn CO → Assign Group Address. Hai CO được liên kết cùng GA sẽ "nói chuyện" với nhau — đây là cơ chế cốt lõi của KNX.

### Bước 8: Download xuống thiết bị

#### Kết nối ETS với bus

ETS → Connections → chọn KNX/IP Gateway đã tìm thấy trên mạng. Nếu dùng USB Interface: chọn port COM tương ứng.

#### Programming Mode (nạp Physical Address)

Trước khi download lần đầu, thiết bị mới chưa có physical address:
1. Ấn nút Programming Button trên thiết bị (LED đỏ sáng)
2. Trong ETS → chọn thiết bị → Download Individual Address
3. ETS gửi địa chỉ xuống, LED tắt = thành công

#### Full Download vs Partial Download

| Loại | Thời gian | Khi nào dùng |
|---|---|---|
| Full Download | 30–120 giây | Thiết bị mới, lần đầu, hoặc thay đổi nhiều |
| Partial Download (Parameters only) | 5–15 giây | Chỉ thay đổi tham số nhỏ |
| Partial Download (Group Address only) | 3–10 giây | Chỉ thay đổi liên kết GA |

Download toàn bộ: chọn tất cả thiết bị → Download → Full Download (Application + Parameters + Group Addresses).

---

## Group Monitor — Debug

Group Monitor là công cụ debug quan trọng nhất trong ETS. Nó hiển thị realtime tất cả telegram đang chạy trên bus KNX.

**Cách mở:** ETS → Diagnostics → Group Monitor

**Cách dùng:**
1. Bấm nút công tắc trên tường
2. Group Monitor hiển thị ngay: GA, giá trị, thiết bị gửi
3. Nếu không thấy telegram: nút chưa được download đúng, hoặc bus không kết nối
4. Nếu thấy telegram nhưng đèn không bật: actuator không nhận hoặc GA sai

**Ví dụ telegram trong Group Monitor:**
```
Time         GA      DPT    Value   Source        Dest
10:35:01.234 0/0/0   1.001  On      1.1.1         0/0/0
10:35:01.250 4/0/0   1.001  On      0/0/0         4/0/0  (feedback)
```

Cột Source là physical address của thiết bị gửi (1.1.1 = push button). Cột Dest là Group Address đích.

---

## Bus Monitor

Bus Monitor khác Group Monitor: nó hiển thị **raw telegram** ở mức bit, bao gồm cả telegram lỗi, telegram không decode được. Dùng khi nghi ngờ vấn đề phần cứng (ngắn mạch, nhiễu).

Cách mở: ETS → Diagnostics → Bus Monitor

---

## Individual Address Scan

Scan để tìm tất cả thiết bị đang có trên bus:
ETS → Diagnostics → Individual Address → Scan

Kết quả liệt kê physical address của tất cả thiết bị đang "sống" trên bus. So sánh với danh sách trong project — thiết bị nào không xuất hiện tức là không có trên bus (mất điện, hỏng, hoặc chưa nạp địa chỉ).

---

## Backup Project

**Bắt buộc backup thường xuyên.** Mất file ETS project = phải lập trình lại từ đầu.

ETS6 → Projects → Export:
- Chọn project
- Export ra file `.knxproj`
- Lưu lên Google Drive hoặc NAS

**Tần suất backup:** Sau mỗi buổi làm việc, sau khi hoàn thành từng phòng/zone.

---

## Quy tắc đặt tên trong ETS

Đặt tên nhất quán giúp bảo trì sau này nhanh hơn rất nhiều. Gợi ý:

**Tên thiết bị:**
- `PB_PhongKhach_1` (Push Button phòng khách, số 1)
- `DALI_GW_Tang1` (DALI Gateway tầng 1)
- `PSU_Tang1` (Power Supply tầng 1)

**Tên Group Address:**
- `0/0/0 [Switch] PhongKhach - Den tong ON/OFF`
- `1/0/0 [Dim] PhongKhach - Den tong Dimming`
- `4/0/0 [Status] PhongKhach - Den tong Feedback`

Tên tiếng Việt không dấu trong ETS hoạt động tốt, nhưng tên có dấu đôi khi gây lỗi export CSV — dùng không dấu để an toàn.

---

## Checklist ETS Commissioning

- [ ] Đã import .knxprod của tất cả thiết bị vào catalog
- [ ] Topology đúng: Area → Line → Device
- [ ] Physical Address cho từng thiết bị đã gán và ghi vào spreadsheet
- [ ] Tất cả thiết bị đã được download Physical Address (programming mode)
- [ ] Parameters đã cấu hình đúng cho từng nút
- [ ] Group Address tạo đúng 3-level, đặt tên rõ ràng
- [ ] CO đã liên kết đúng GA (kiểm tra bằng Group Monitor)
- [ ] Full Download thành công cho tất cả thiết bị (không có lỗi đỏ)
- [ ] Test từng nút: bấm → thấy telegram trong Group Monitor → tải phản hồi đúng
- [ ] Backup project ra .knxproj và upload Google Drive
