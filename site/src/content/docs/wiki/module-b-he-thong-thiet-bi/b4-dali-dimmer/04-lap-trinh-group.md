---
title: "B4.04 — Lập trình Group & Scene DALI"
description: "Deep dive về Group và Scene DALI: cách hoạt động, lập trình scene multi-room, Tunable White DT8, tích hợp với KNX/MobiEyes/LifeSmart, và workflow lập trình step-by-step."
module: "b"
level: "4-6"
tags: ["dali", "group", "scene", "tunable-white", "dt8", "knx", "mobieyes", "lifesmart", "programming"]
---

## Mục tiêu

- Hiểu cơ chế hoạt động của Group DALI: tại sao broadcast hiệu quả hơn lệnh đơn lẻ
- Hiểu cách Scene lưu trữ trong driver, và ý nghĩa của giá trị MASK
- Lập trình được bảng scene chi tiết multi-room cho dự án biệt thự
- Cấu hình scene Tunable White DT8: kết hợp độ sáng và CCT
- Biết cách map DALI Group/Scene sang lệnh điều khiển từ KNX, MobiEyes, LifeSmart
- Thực hiện workflow lập trình scene step-by-step không bỏ sót bước

---

## Group DALI — Cơ chế hoạt động

### Group là gì về mặt kỹ thuật

Một **DALI Group** là một tập hợp driver được gán cùng membership. Khi controller gửi lệnh đến Group N, tất cả driver có membership Group N sẽ thực thi lệnh đó đồng thời.

Về mặt giao thức: lệnh Group được gửi dưới dạng broadcast có điều kiện — chỉ driver nào có membership tương ứng mới phản hồi. Không có delay giữa các driver trong cùng group — tất cả nhận lệnh cùng một telegram DALI.

Membership được lưu trong **bộ nhớ non-volatile của từng driver** (không phải trong gateway hay controller). Điều này có nghĩa:
- Mất điện gateway → group vẫn còn trong driver
- Đổi gateway khác → driver vẫn biết mình thuộc group nào
- Tuy nhiên: driver hỏng phải thay → phải re-program lại group cho driver mới

### Một driver có thể thuộc nhiều group

Đây là tính năng quan trọng ít người tận dụng:

```
Driver "PK_Hat_Addr03" thuộc:
  - Group 1 (PK Hắt — điều khiển riêng vùng hắt phòng khách)
  - Group 15 (All Room Dim — dim tất cả toàn nhà về 20% khi "Night mode")
```

Khi Group 1 nhận lệnh dim 50%, chỉ đèn hắt phòng khách phản ứng.
Khi Group 15 nhận lệnh dim 20%, cả đèn hắt lẫn tất cả driver khác trong Group 15 đều về 20%.

Điều này cho phép thiết kế scene phức tạp mà không cần gửi lệnh riêng cho từng driver.

### Giới hạn 16 groups — Cách tận dụng tối đa

16 group (Group 0–15) nghe có vẻ ít, nhưng đủ cho biệt thự thông thường nếu thiết kế tốt:
- Group 0–9: Phân theo khu vực và loại đèn (như bảng ví dụ)
- Group 10–12: Group tổng hợp (tất cả đèn trong nhà, tất cả hành lang)
- Group 13–15: Dự phòng cho yêu cầu đặc biệt

Nếu dự án lớn hơn 16 group, cần 2 DALI line riêng (mỗi line có 16 group độc lập).

---

## Scene DALI — Cơ chế hoạt động

### Scene lưu trong driver, không lưu trong controller

Đây là điểm khác biệt căn bản của DALI so với nhiều hệ thống khác:

Khi bạn store Scene 1 trong masterCONFIGURATOR:
1. Phần mềm đọc mức dim hiện tại của từng driver
2. Ghi giá trị đó vào Scene 1 trong bộ nhớ non-volatile của **từng driver riêng lẻ**
3. Phần mềm chỉ làm trung gian — không lưu scene trong phần mềm để "phát lại"

Khi controller recall Scene 1:
1. Controller broadcast lệnh `GO_TO_SCENE 1` trên bus
2. Mỗi driver nghe lệnh, tự đọc mức Scene 1 từ bộ nhớ của nó
3. Driver fade về mức đó theo fade time đã cấu hình

Kết quả: phòng khách có 5 driver, mỗi driver biết mức riêng của nó cho Scene 1. Không cần controller biết mức cụ thể của từng driver.

### MASK value (255) — "Đừng thay đổi tôi"

MASK là giá trị đặc biệt (255) trong scene:

Khi driver X có Scene 1 = 255 (MASK):
- Scene 1 được recall → driver X **giữ nguyên mức dim hiện tại**, không thay đổi
- Tất cả driver khác trong cùng Scene 1 sẽ về mức đã lưu

Ứng dụng thực tế:
- Scene "Xem phim" muốn tắt đèn phòng khách nhưng giữ nguyên đèn bảo vệ hành lang: set đèn hành lang MASK cho scene đó
- Scene "Welcome" chỉ bật đèn sảnh và phòng khách: đèn bếp và phòng ngủ set MASK
- Khi recall "Welcome", đèn bếp không thay đổi (khách đang nấu ăn thì sao)

### Fade time per driver

Mỗi driver có fade time riêng — tính năng ít được khai thác nhưng tạo hiệu ứng đẹp:

```
Scene "Romantic":
  - Đèn trần PK: fade 3s → 10%
  - Đèn hắt PK:  fade 5s → 25%  (fade chậm hơn, tạo cảm giác ánh sáng "rơi xuống" dần)
  - Đèn bàn ăn: fade 2s → 15%
```

Mỗi đèn về đúng mức của nó, nhưng thời gian chuyển tiếp khác nhau tạo cảm giác ánh sáng sống động hơn.

---

## Bảng Scene mẫu chi tiết — Villa Nha Trang

Ghi chú: DT8 ghi thêm CCT sau độ sáng (ví dụ: `30% / 2700K`). MASK = driver không tham gia scene.

| Scene | Tên | PK Trần (G0) DT6 | PK Hắt (G1) DT8 | PA Bàn ăn (G2) DT6 | Master Trần (G3) DT6 | Master Đầu giường (G4) DT8 | Bếp (G6) DT6 | Sảnh (G8) DT6 |
|-------|-----|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| 0 | Sáng tối đa | 100% | 100% / 4000K | 100% | 100% | 100% / 4000K | 100% | 100% |
| 1 | Thư giãn | 60% | 40% / 2700K | 70% | 50% | 30% / 2700K | MASK | 40% |
| 2 | Xem phim | 5% | 10% / 2700K | MASK | 0% | 0% | MASK | 15% |
| 3 | Đón khách | 90% | 80% / 3500K | 90% | MASK | MASK | MASK | 100% |
| 4 | Lãng mạn | 0% | 15% / 2700K | 20% | 0% | 15% / 2200K | 0% | 10% |
| 5 | Ngủ / Tắt hết | 0% | 0% | 0% | 0% | 0% | 0% | 5% |
| 6 | Sáng thức dậy | 80% | 50% / 5000K | MASK | 70% | 70% / 5000K | MASK | MASK |
| 7 | Bữa ăn | 30% | MASK | 100% | MASK | MASK | 60% | 50% |

Lưu ý về bảng này:
- Scene 2 (Xem phim): Bếp MASK vì có thể đang dùng bếp, không muốn tắt
- Scene 3 (Đón khách): Phòng ngủ MASK vì không liên quan đến khách
- Scene 5 (Tắt hết): Sảnh giữ 5% để không tối đen hoàn toàn — an toàn đi lại ban đêm
- Scene 6 (Sáng thức): Chỉ ảnh hưởng phòng ngủ và phòng khách, bếp và PA MASK

---

## Tunable White DT8 — Lập trình Scene màu sắc

### Nguyên lý hoạt động của DT8

Driver DT8 điều khiển 2 kênh LED bên trong (Warm White và Cool White). Khi nhận lệnh CCT, driver tự tính toán tỷ lệ công suất giữa 2 kênh để đạt nhiệt độ màu mong muốn:
- 2700K ấm → WW nhiều, CW ít
- 5000K lạnh → WW ít, CW nhiều
- 3500K trung gian → cân bằng WW và CW

Controller chỉ cần gửi 1 số (CCT) — driver làm toàn bộ phần tính toán còn lại.

### Set scene cho DT8

Trong masterCONFIGURATOR, khi lưu scene cho driver DT8, có 2 giá trị cần set:

**Phương pháp 1: Set thủ công trong phần mềm**
1. Chọn driver DT8 trong danh sách
2. Chuyển sang tab DT8 / Colour
3. Set giá trị CCT mong muốn (ví dụ: 2700K)
4. Set mức dim (ví dụ: 30%)
5. Lưu scene

**Phương pháp 2: Điều chỉnh thực tế rồi store**
1. Dùng slider CCT và Dim trên giao diện để chỉnh thực tế đến khi đúng mức mong muốn
2. Quan sát đèn thực tế — mắt người thường đánh giá tốt hơn con số
3. Store scene khi đã hài lòng

### Bảng scene CCT mẫu cho DT8 phòng ngủ

| Scene | Tên | Độ sáng | CCT | Cảm giác |
|-------|-----|---------|-----|----------|
| 0 | Full | 100% | 4000K | Sáng làm việc |
| 1 | Nghỉ ngơi | 30% | 2700K | Ấm áp, thư giãn |
| 4 | Lãng mạn | 15% | 2200K | Rất ấm, ánh nến |
| 6 | Wake-up | 80% | 5500K | Tươi tỉnh buổi sáng |
| 5 | Sleep | 0% | — | Tắt hoàn toàn |

### Lưu ý về DT8 và min CCT range

Mỗi driver DT8 có dải CCT theo phần cứng của nó. Tridonic LCA DT8 thường là 2700K–6500K. Nếu bạn set scene 2200K cho driver có dải tối thiểu 2700K, driver sẽ đặt về 2700K (giới hạn cứng) — không báo lỗi nhưng màu sẽ không đạt như mong muốn.

Luôn kiểm tra datasheet driver để biết dải CCT thực tế trước khi cam kết với khách hàng.

---

## Tích hợp Group & Scene với hệ thống điều khiển

### KNX: Push Button → GA → KNX-DALI Gateway → DALI Scene

Trong KNX, mỗi DALI scene được map vào một Group Address (GA):

```
Nút bấm "Thư giãn" (1 nút 8 phím, phím 2)
    │
    ▼ Gửi giá trị 1 (scene number) lên GA 1/3/5
    │
KNX-DALI Gateway
    │ Nhận GA 1/3/5 = 1
    ▼
    Gửi lệnh DALI: GO_TO_SCENE 1 (broadcast tất cả hoặc theo group được config)
    │
    ▼
Tất cả driver recall Scene 1 với mức đã lưu
```

Cấu hình trong ETS:
- Parameter gateway: "Scene trigger GA" → gán GA nhận scene number
- Hoặc: map từng scene DALI vào 1 GA bit (1 GA = 1 scene call)
- Chọn cách nào tùy theo số lượng scene và số GA khả dụng

### MobiEyes: Controller → Dimmer Module DALI → DALI command

MobiEyes Dimmer Module DALI (MobiEyes_Dimmer_Dali.pdf) nhận lệnh từ MobiEyes controller qua giao thức nội bộ và chuyển thành lệnh DALI:

```
MobiEyes App / Touch Panel
    │ Tap "Scene Thư giãn"
    ▼
MobiEyes Controller (qua LAN/Wi-Fi)
    │
MobiEyes Dimmer Module DALI
    │ Gửi DALI GO_TO_SCENE 1
    ▼
DALI Bus → Tất cả driver recall Scene 1
```

Trong cấu hình MobiEyes: tạo "Scene" trong app, gán các kênh DALI group với mức dim tương ứng. Có thể scene MobiEyes điều khiển đồng thời cả DALI và thiết bị khác (điều hòa, rèm).

### LifeSmart: App/Automation → Gateway → DALI

LifeSmart DALI Gateway nhận lệnh từ LifeSmart cloud/local và map sang DALI group/scene tương ứng:

```
LifeSmart App (hoặc Automation trigger)
    │
LifeSmart Cloud / Local Hub
    │
LifeSmart DALI Gateway
    │ Chuyển thành lệnh DALI
    ▼
DALI Bus → Driver thực thi
```

LS174 Dimmer Switch và LS180 Dimmer Controller có thể trực tiếp trigger DALI scene qua LifeSmart ecosystem mà không cần app — hữu ích cho bật/tắt nhanh tại chỗ.

---

## Workflow lập trình scene step-by-step

Dùng checklist này để không bỏ sót bước:

**Chuẩn bị:**
- [ ] Commissioning xong: tất cả driver đã có địa chỉ, đã identify đúng vị trí
- [ ] Bảng scene design đã có (ai, ở đâu, mức dim bao nhiêu, CCT bao nhiêu)
- [ ] Xác nhận driver nào là DT6, driver nào là DT8

**Lập trình từng scene:**
- [ ] Scene 0 — Full: Set tất cả driver = 100% (và 4000K cho DT8), store scene 0
- [ ] Test recall scene 0: tất cả đèn về 100%
- [ ] Scene 1 — Relax: Chỉnh từng group về mức thiết kế, set MASK cho group không tham gia, store scene 1
- [ ] Test recall scene 1: verify mức dim và CCT của từng group
- [ ] Scene 2 — Movie: Chỉnh, store, test
- [ ] ... Lặp lại cho tất cả scene

**Kiểm tra sau khi xong:**
- [ ] Test recall từng scene 3 lần liên tiếp — kết quả phải ổn định, không có driver nào về sai mức
- [ ] Test chuyển từ scene cao xuống scene thấp: fade phải mượt, không giật
- [ ] Test chuyển từ scene thấp lên scene cao: tương tự
- [ ] Test scene "Tắt hết" (Scene 5): tất cả driver phải về 0%
- [ ] Test recall scene từ touch panel / app (không chỉ từ phần mềm commissioning)

**Backup:**
- [ ] Save project file trong masterCONFIGURATOR
- [ ] Export Status Report (Excel)
- [ ] In bảng mapping, dán tủ điện

---

## Lưu ý từ thực địa về lập trình scene

**Điều chỉnh scene dưới ánh sáng thực tế, không chỉ theo số**

Mức 30% trên màn hình không phải lúc nào cũng "trông" đúng tại phòng thực tế. Ánh sáng tự nhiên bên ngoài, màu tường, vật liệu ảnh hưởng nhiều. Luôn test scene trong điều kiện ánh sáng gần giống với điều kiện sử dụng thực (tối, rèm kéo, v.v.).

**Khách hàng thường muốn scene sáng hơn sau khi dùng thực tế**

"Relax" bạn set 40% có thể khách thấy tối quá, yêu cầu up lên 55%. Đây là chuyện bình thường. Thiết kế scene ban đầu nên để dự phòng để chỉnh sau. Đừng cam kết số cụ thể với khách trước khi họ trải nghiệm thực tế.

**Lưu scene sau mỗi phòng, không đợi xong hết**

Nếu phần mềm crash hoặc mất kết nối giữa chừng, bạn mất tất cả chưa lưu. Store scene sau mỗi phòng xong và save project file ngay.

**Đừng để fade time quá dài cho scene nhanh**

Scene "Tắt hết" hoặc "Emergency" không nên có fade time 5 giây — người dùng bấm tắt mà đèn tắt từ từ trong 5s sẽ khó chịu. Set fade time ngắn (0.5s hoặc tức thì) cho scene off/emergency.
