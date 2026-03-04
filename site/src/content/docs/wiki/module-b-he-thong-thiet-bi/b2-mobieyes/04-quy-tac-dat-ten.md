---
title: "B2.04 — Quy tắc đặt tên MobiEyes"
description: "Chuẩn mapping Board-Kênh, cách đặt tên Macro/Rule và nguyên tắc dán bảng mapping trong tủ."
module: "b"
level: "3-6"
tags: ["MobiEyes", "đặt tên", "mapping", "naming"]
---

## Mục tiêu
- Đặt tên nhất quán để đội thi công và đội lập trình nhìn vào hiểu ngay.
- Có bảng mapping trước khi đấu dây để tránh sai kênh.

---

## 1. Định danh thiết bị vật lý (Board-Kênh)

Mỗi kênh relay hoặc ngõ vào trên module DIN-RY8-N được gọi bằng cặp số: Board ID và số kênh, cách nhau bằng dấu gạch ngang.

Format: `[Board ID]-[Kênh]`

| Ví dụ | Ý nghĩa |
|---|---|
| 21-1 | Board số 21, relay kênh 1 |
| 21-8 | Board số 21, relay kênh 8 |
| 23-2 | Board số 23, ngõ vào kênh 2 |

Board ID do kỹ thuật viên gán khi cấu hình (xem bài B2.05). Thường gán số theo thứ tự tủ: tủ 1 là board 21, tủ 2 là board 22... Không gán từ số 1 vì dễ nhầm với số kênh.

---

## 2. Bảng mapping

Bảng mapping là linh hồn của dự án MobiEyes. Để tối giản và dễ đọc cho kỹ thuật viên hiện trường, ta quy chuẩn bảng mapping về 2 cột duy nhất. Tên thiết bị và khu vực được viết tắt và gộp chung.

### 2.1. Mapping relay (ngõ ra)

| Board-Kênh | Tên thiết bị - Khu vực |
|---|---|
| 21-1 | Đèn trần PK |
| 21-2 | Đèn LED hắt PK |
| 21-3 | Quạt trần PK |
| 21-4 | Rèm mở PK |
| 21-5 | Rèm đóng PK |
| 21-6 | Đèn trần PN 1 |
| 21-7 | Đèn ngủ PN 1 |
| 21-8 | Còi báo động (toàn nhà) |

### 2.2. Mapping Dry Contact (ngõ vào)

| Board-Kênh | Tên thiết bị - Khu vực |
|---|---|
| 23-1 | CT Đèn trần PK |
| 23-2 | CT Đèn LED hắt PK |
| 23-3 | CB Chuyển động HL 1 |
| 23-4 | Cửa chính |
| 23-5 | Cửa cổng |

---

## 3. Đặt tên macro

Macro là tập hợp các hành động chạy theo thứ tự. Tên macro phải mô tả chức năng, không dấu, dùng dấu gạch dưới ngăn cách.

Một số ví dụ:
- `baoDong_on`, `baoDong_off` — bật/tắt chế độ giám sát.
- `tiepkhach` — kịch bản tiếp khách (bật đèn trần, đèn LED hắt, mở rèm).
- `di_ngu` — kịch bản đi ngủ (tắt hết đèn, đóng rèm, bật giám sát).
- `rem_pk_mo`, `rem_pk_dong` — mở/đóng rèm phòng khách.

Tên macro nên ngắn nhưng đủ rõ. Sau vài tháng quay lại bảo trì, nếu thấy macro tên `m1`, `m2`, `test3` thì không biết bắt đầu từ đâu.

---

## 4. Đặt tên rule

Rule là điều kiện kích hoạt: khi sự kiện nào đó xảy ra thì gọi macro tương ứng. Tên rule nên mô tả sự kiện kích hoạt:

- `dao_den_led` — công tắc đảo đèn LED.
- `bao_dong_cua_cong` — cửa cổng mở thì kích hoạt giám sát.
- `wc_pir_bat`, `wc_pir_tat` — cảm biến chuyển động nhà vệ sinh bật/tắt đèn.

---

## 5. Quy tắc chung

Lập bảng mapping trước khi đấu dây. Đấu dây theo bảng, không phải đấu xong rồi mới lập bảng. Làm ngược lại thì khi đấu sai một kênh, cả bảng phải sửa theo và dễ lộn xộn.

In bảng mapping ra giấy và dán bên trong cửa tủ. Bắt buộc. Khi bảo trì sau này, mở tủ ra là thấy ngay kênh nào điều khiển gì, không cần mở máy tính tìm file.

Để thuận tiện cho việc lưu trữ và chia sẻ, công ty cung cấp sẵn mẫu bảng mapping trên Google Sheets. Bạn chỉ cần nhân bản (duplicate) và cập nhật thông tin theo dự án:

[Mẫu Mapping MobiEyes - Google Sheets](https://docs.google.com/spreadsheets/d/1jDPGmwbRIDvApFc0gygo3p_zRyDM4jVRPqu-UFzGlvI)

Mỗi dự án phải có file mapping riêng, đặt tên theo format: `<ten_du_an-dia_chi>`. Lưu vào thư mục dự án trên cloud để mọi người cùng truy cập khi cần.
