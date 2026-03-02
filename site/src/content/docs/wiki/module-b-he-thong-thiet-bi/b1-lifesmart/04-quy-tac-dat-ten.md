---
title: "B1.04 — Quy tắc đặt tên thiết bị LifeSmart"
description: "Chuẩn định danh thiết bị và từng nút bấm để dễ quản lý, tìm kiếm và tạo kịch bản tự động."
module: "b"
level: "3-6"
tags: ["LifeSmart", "đặt tên", "quy tắc"]
---

## Mục tiêu
- Biết cách đặt tên chuẩn để kỹ thuật viên nào nhìn vào cũng hiểu.
- Giữ tên nhất quán trên toàn hệ thống, đặc biệt khi đặt tên cho từng nút bấm.

---

## 1. Quy tắc chung

Tên thiết bị trước, khu vực viết tắt sau. Tên thiết bị viết tiếng Việt có dấu, khu vực viết tắt không dấu.

```
[TÊN THIẾT BỊ] [KHU VỰC]
```

Ví dụ: `Đèn Trần PK`, `Điều Hòa PN1`, `Quạt Trần PK`.

Khi mở danh sách toàn bộ thiết bị trên ứng dụng, tên viết theo kiểu này sẽ dễ đọc hơn vì thấy ngay thiết bị gì, sau đó mới biết ở đâu.

---

## 2. Viết tắt khu vực

| Viết tắt | Ý nghĩa |
|---|---|
| PK | Phòng khách |
| PA | Phòng ăn |
| Bếp | Bếp |
| PN | Phòng ngủ |
| PN1 | Phòng ngủ 1 |
| HL | Hành lang |
| ST | Sân thượng |
| BC | Ban công |
| WC | Nhà vệ sinh |
| PB | Phòng bé |
| PT | Phòng thờ |

Nếu dự án có nhiều phòng ngủ thì đánh số: PN1, PN2, PN3. Tương tự cho WC: WC1, WC2.

---

## 3. Đặt tên từng nút bấm

Nhiều thiết bị (như công tắc 3 nút) cần đặt tên cả thiết bị chính lẫn từng nút con:

| Cấp | Ví dụ |
|---|---|
| Thiết bị chính | `Cửa chính PK` |
| Nút L1 | `Đèn Chùm PK` |
| Nút L2 | `Đèn Hắt PK` |
| Nút L3 | `Quạt Trần PK` |

Bước này hay bị bỏ qua. Nếu không đặt tên nút con, khi tạo kịch bản tự động sẽ chỉ thấy "L1", "L2", "L3" — không biết nút nào điều khiển cái gì.

### Công tắc đảo

Nếu có 2 công tắc cùng điều khiển 1 đèn (công tắc đảo), công tắc thứ 2 thêm dấu `.` ở cuối tên để phân biệt.

| Công tắc | Tên | Ghi chú |
|---|---|---|
| Công tắc chính | `Đèn Trần PK` | Line đèn chính |
| Công tắc đảo | `Đèn Trần PK.` | Nút đảo đèn |

Khi nhìn vào danh sách thiết bị, thấy tên có dấu chấm là biết ngay đó là công tắc đảo chứ không phải thiết bị bị trùng tên.

---

## 4. Lưu ý

1. Lên danh sách tên trước trên giấy hoặc file, rồi mới nhập vào ứng dụng. Đặt tên bừa rồi sửa sau rất mất thời gian vì phải sửa cả trong các kịch bản tự động.
2. Một dự án nên do một người phụ trách đặt tên. Hai người đặt tên theo quy ước khác nhau thì sau này không ai hiểu được.
3. Khu vực luôn đặt ở cuối để khi sắp xếp danh sách theo tên, các thiết bị cùng loại sẽ nằm gần nhau (ví dụ tất cả "Đèn Trần" sẽ được nhóm lại).
