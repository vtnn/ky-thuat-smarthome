---
title: "B2.06 — Lập trình Scene MobiEyes"
description: "Cách xây dựng Rule, Macro, Scheduler và User Variable cho các kịch bản thực tế."
module: "b"
level: "4-6"
tags: ["MobiEyes", "Macro", "Rule", "Scheduler", "automation"]
---

## Mục tiêu
- Nắm cơ chế Rule (điều kiện kích hoạt) gọi Macro (tập hợp hành động) của MobiEyes.
- Viết được các kịch bản phổ biến: công tắc đảo, cảm biến chuyển động nhà vệ sinh, báo động.

---

## 1. Bốn khái niệm cơ bản

Toàn bộ lập trình MobiEyes xoay quanh bốn khái niệm. Nắm vững bốn cái này thì viết được mọi kịch bản.

| Khái niệm | Là gì | Ví dụ |
|---|---|---|
| Rule | Theo dõi một sự kiện. Khi sự kiện xảy ra thì gọi Macro | Input kênh 23-1 đổi trạng thái → gọi macro toggle đèn |
| Macro | Tập hợp hành động chạy theo thứ tự | Bật relay 21-1 → chờ 1s → bật relay 21-2 |
| Scheduler | Hẹn giờ tự động gọi Macro | 23:00 hàng ngày → gọi macro bật báo động |
| User Variable | Biến trạng thái do người lập trình tự tạo | alarm = 0 (tắt) hoặc alarm = 1 (bật) |

Rule là "tai mắt" — lắng nghe sự kiện. Macro là "tay chân" — thực hiện hành động. Scheduler là "đồng hồ" — kích hoạt tự động theo giờ. User Variable là "trí nhớ" — lưu trạng thái để các rule khác kiểm tra.

---

## 2. Kịch bản thực tế

### 2.1. Công tắc đảo (Toggle)

Đây là kịch bản cơ bản nhất. Nhấn công tắc trên tường thì đèn bật, nhấn lần nữa thì đèn tắt.

Cách lập trình:
- Rule: theo dõi input kênh tương ứng (ví dụ 23-1). Khi input thay đổi trạng thái (từ đóng sang mở hoặc ngược lại) thì gọi macro.
- Macro: toggle relay kênh tương ứng (ví dụ 21-1). Toggle nghĩa là nếu relay đang bật thì tắt, đang tắt thì bật.

Đơn giản vậy thôi, nhưng nhớ kiểm tra bảng mapping để chắc chắn input 23-1 ứng với đúng công tắc phòng khách, và relay 21-1 ứng với đúng đèn trần phòng khách. Sai kênh là nhấn công tắc phòng khách mà đèn phòng ngủ sáng.

### 2.2. Cảm biến chuyển động nhà vệ sinh — tự tắt sau 3 phút

Kịch bản này rất phổ biến: bước vào nhà vệ sinh thì đèn tự sáng, ra khỏi 3 phút thì đèn tự tắt.

Cách lập trình:
- Rule ON: cảm biến chuyển động phát hiện có người → gọi macro bật đèn WC.
- Rule OFF: cảm biến không còn phát hiện chuyển động → gọi macro tắt đèn WC.
- Macro tắt: **delay 180** (3 phút) → tắt relay đèn WC.

**Lưu ý quan trọng về đơn vị:** Trong phần mềm **DIN-RY Config**, đơn vị của Delay là **Giây (s)**. Do đó, để chờ 3 phút, ta nhập giá trị **180**. Nhập 180000 sẽ khiến hệ thống treo lệnh chờ cực lâu.

### 2.3. Hẹn giờ (Scheduler)

Scheduler chạy dựa vào đồng hồ trên LAN Bridge. Nếu giờ chưa đồng bộ (bài B2.05 mục 1.3) thì kịch bản hẹn giờ sẽ chạy sai.

Ví dụ phổ biến:
- 23:00 hàng ngày → gọi macro `bao_dong_on` (bật chế độ giám sát).
- 05:00 sáng hôm sau → gọi macro `bao_dong_off` (tắt chế độ giám sát).
- 18:00 → gọi macro `chieu_toi` (bật đèn sân, đèn hành lang).

### 2.4. Báo động kết hợp biến trạng thái

Kịch bản nâng cao: chỉ báo động khi hệ thống đang ở chế độ giám sát (Arm). Ban ngày chủ nhà đi ra đi vào, cảm biến cửa kích hoạt liên tục nhưng không muốn còi kêu.

**Cách lập trình:**
1. **Tạo User Variable:** Tên là `alarm` (giá trị 0 = Off, 1 = On).
2. **Macro `bao_dong`:** 
   - Sử dụng lệnh kiểm tra điều kiện kết hợp hành động: **Nếu `Variable alarm == 1` thì chạy lệnh `Pulse` kênh còi 30 giây.**
3. **Rule cửa cổng:** 
   - Sự kiện kích hoạt: Khi công tắc từ cửa cổng chuyển sang trạng thái **Mở (Open)**.
   - Hành động: Gọi macro `bao_dong`.

**Nguyên lý hoạt động:** Khi cửa mở, Rule gọi Macro `bao_dong`. Macro này chỉ chứa duy nhất một dòng lệnh thông minh: Nó kiểm tra biến `alarm`, nếu đang bật (`alarm = 1`) thì nó tự động kích hoạt lệnh `Pulse` cho còi hú đúng 30 giây rồi tự tắt. Nếu `alarm = 0`, lệnh này không thực hiện gì cả. Cách làm này cực kỳ tối ưu, giúp macro gọn nhẹ và logic thực thi nhanh.

---

## 3. Lưu ý khi lập trình

Test từng Rule/Macro riêng lẻ trước khi ghép thành kịch bản lớn. Nếu ghép cả chục rule rồi mới test, khi có lỗi sẽ không biết lỗi ở bước nào.

Luôn đối chiếu bảng mapping khi viết rule/macro. Nhầm Board-Kênh thì kịch bản chạy sai mà debug rất mất thời gian vì logic đúng, chỉ sai kênh.

Backup cấu hình sau mỗi lần chỉnh sửa lớn. Nếu lập trình sai và hệ thống rối loạn, có thể import lại bản backup trước đó.

**Bảng quy đổi Delay (Đơn vị: Giây):**
- 30 giây = 30
- 1 phút = 60
- 3 phút = 180
- 5 phút = 300
- 10 phút = 600
