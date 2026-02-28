---
title: "Lập trình Scene MobiEyes"
module: "b"
level: "4-6"
tags: ["MobiEyes", "Macro", "Rule", "Scheduler", "automation"]
---

# B2.06 — Lập Trình Macro, Rule, Scheduler & Ngữ Cảnh

## 1. Khái Niệm Cơ Bản

| Khái niệm | Định nghĩa | Ví dụ |
|-----------|------------|-------|
| **Rule** | Bộ mồi (trigger) — theo dõi sự kiện, khi khớp sẽ gọi Macro | Khi công tắc PK bật → gọi Macro toggle đèn |
| **Macro** | Tập hợp các Action + Delay + Condition | Bật kênh 21-1, delay 500ms, bật kênh 21-2 |
| **Scheduler** | Hẹn giờ chạy Macro tự động | 23:00 mỗi ngày → gọi Macro bật báo động |
| **User Variable** | Biến trạng thái lưu trữ | `alarm=0` hoặc `alarm=1` |

### Cơ chế hoạt động

```
[Sự kiện xảy ra] → [Rule kiểm tra Search String] → [Gọi Macro] → [Thực thi Actions]
```

Rule theo dõi chuỗi sự kiện (Search String) từ bus CFLink. Khi khớp, Rule gọi Macro tương ứng. Macro thực hiện danh sách Action theo thứ tự.

### Search String
- Rule dùng **Search String** để nhận dạng sự kiện từ bus.
- Ví dụ: `*RRY.CHA\xF4MM|P02:*` — chuỗi khi input thay đổi trạng thái.
- Mỗi thiết bị, kênh có chuỗi riêng — xem tài liệu CommandFusion.

---

## 2. Kịch Bản Thực Tế

### 📘 Kịch bản 1: Công Tắc Đảo (Toggle)

**Yêu cầu:** Bấm công tắc cơ trên tường → toggle đèn (bật↔tắt).

```
Rule: daoDenLed
  Search String: [Chuỗi khi Input 23-1 thay đổi]
  Action: Gọi Macro "toggle_den_PK"

Macro: toggle_den_PK
  Action 1: Toggle kênh 21-1 (Relay — chế độ Toggle)
```

> **Toggle mode:** Relay sẽ tự đảo trạng thái — nếu đang OFF → ON, nếu đang ON → OFF.

---

### 📘 Kịch bản 2: Cảm Biến WC / Cầu Thang

**Yêu cầu:** Bật đèn khi có người chuyển động. Tự tắt sau 3 phút không có chuyển động.

```
Rule: camBien_WC_bat
  Search String: [Chuỗi khi Input cảm biến PIR = ON]
  Action: Gọi Macro "den_WC_on"

Macro: den_WC_on
  Action 1: Bật kênh 21-6 (Đèn WC) → ON

Rule: camBien_WC_tat
  Search String: [Chuỗi khi Input cảm biến PIR = OFF]
  Action: Gọi Macro "den_WC_off_delay"

Macro: den_WC_off_delay
  Action 1: Delay 180000 ms (3 phút)
  Action 2: Tắt kênh 21-6 (Đèn WC) → OFF
```

> **Delay(ms):** Đơn vị mili giây. 180,000 ms = 3 phút.

---

### 📘 Kịch bản 3: Hẹn Giờ (Scheduler)

**Yêu cầu:** Bật báo động 23h-5h mỗi ngày. Tưới cây 60 giây mỗi sáng.

**Cấu hình trên LAN Bridge (System Commander):**

```
Scheduler 1: Báo động ban đêm
  Schedule Type: Daily
  Start Time: 23:00
  Action: Gọi Macro "baoDong_ON"

Scheduler 2: Tắt báo động
  Schedule Type: Daily
  Start Time: 05:00
  Action: Gọi Macro "baoDong_OFF"

Scheduler 3: Tưới cây
  Schedule Type: Daily
  Start Time: 06:30
  Action: Gọi Macro "tuoi_cay_60s"

Macro: tuoi_cay_60s
  Action 1: Bật kênh 24-7 (Valve tưới) → ON
  Action 2: Delay 60000 ms (60 giây)
  Action 3: Tắt kênh 24-7 → OFF
```

> **Lưu ý:** Scheduler chạy trên LAN Bridge dựa vào đồng hồ real-time clock. Phải cấu hình Date/Time chính xác.

---

### 📘 Kịch bản 4: An Ninh / Báo Động

**Yêu cầu:** Khi chế độ báo động bật (alarm=1), mở cửa cổng sẽ hú còi.

```
Khởi tạo:
  User Variable: alarm = 0 (mặc định tắt)

Macro: baoDong_ON
  Action 1: Set alarm = 1

Macro: baoDong_OFF
  Action 1: Set alarm = 0
  Action 2: Tắt kênh 21-8 (Còi) → OFF

Rule: baoDongCuaCong
  Search String: [Chuỗi khi Input cửa cổng (P01:0) thay đổi]
  Condition: alarm = 1
  Action: Gọi Macro "hu_coi"

Macro: hu_coi
  Action 1: Bật kênh 21-8 (Còi) → ON
  Action 2: (Có thể thêm: gửi thông báo, bật đèn ngoài nhà)
```

> **User Variable:** Biến `alarm` lưu trạng thái. Condition kiểm tra biến trước khi thực thi — nếu `alarm=0` (chế độ tắt), Rule sẽ không kích hoạt Macro.

---

### 📘 Kịch bản 5: Ngữ Cảnh Tổng Hợp — "Tiếp Khách"

**Yêu cầu:** Nhấn nút "Tiếp khách" → bật nhiều đèn + mở rèm.

```
Macro: tiepkhach
  Action 1: Bật kênh 24-4 (Đèn Trần PK) → ON
  Action 2: Bật kênh 24-5 (Đèn Hắt PK) → ON
  Action 3: Bật kênh 24-6 (Đèn Tường PK) → ON
  Action 4: Gọi Macro "rem_PK_mo" (Mở rèm phòng khách)
  Action 5: Bật IR (Máy lạnh 24°C)
```

---

## 3. Lưu Ý Quan Trọng

- **Test từng Rule/Macro** trước khi gom vào kịch bản lớn.
- **Đối chiếu bảng mapping** khi lập trình (tránh sai kênh board).
- **Backup cấu hình** sau mỗi lần thêm/sửa Rule/Macro.
- **Delay:** Tính bằng mili giây (ms). 1 giây = 1000 ms.
- **Condition:** Luôn kiểm tra lại điều kiện — tránh Macro chạy sai ngữ cảnh.
- **Scheduler** chỉ chạy khi LAN Bridge có nguồn + thời gian đúng.
