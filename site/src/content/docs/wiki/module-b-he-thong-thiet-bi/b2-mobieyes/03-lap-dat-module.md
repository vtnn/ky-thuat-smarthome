---
title: "B2.03 — Lắp đặt và đấu nối Module"
description: "Hướng dẫn xác định dây L/N/Load, đấu relay DIN-RY8-N và đấu Dry Contact Input đúng chuẩn."
module: "b"
level: "2-4"
tags: ["MobiEyes", "DIN-RY8-N", "đấu nối", "relay", "dry contact"]
---

## Mục tiêu
- Đấu đúng dây **L/N/Load** để relay hoạt động đồng bộ với trạng thái trên App.
- Đấu đúng **Dry Contact Input** (tuyệt đối không đưa 220V vào input).

---

## 1. Kiểm tra và xác định dây

Trước khi đấu nối phải xác định chính xác:
- **L (Lửa):** bút thử sáng.
- **N (Nguội):** bút thử không sáng.
- **Load:** dây ra tải (đèn/quạt/rèm...).

---

## 2. Đấu nối Relay (Output)

### 2.1. Nguyên tắc
1. Dây **L** đấu vào chân **L1** (kênh 1–4) hoặc **L2** (kênh 5–8).
2. Dây **ra tải** đấu vào chân **C (Common)** của kênh tương ứng.
3. Dây **N** cấp riêng cho bo mạch theo đúng chân hãng.

> Lưu ý: Không đấu nhầm L1/L2 với C.

---

## 3. Đấu nối ngõ vào Dry Contact (Input)

- Chân **[–]** là COM chung cho toàn bộ input.
- Chân **[1]..[8]** là từng kênh.
- Tín hiệu từ công tắc/cảm biến là **tiếp điểm khô** (không phải nguồn 220V).

---

## 4. Rèm / Cửa cuốn / Cổng

- **Rèm:** cần 2 kênh relay (Mở + Đóng) trên cùng board.
- **Cổng/cửa cuốn:** kéo CAT6 về tủ, đấu theo COM/OP/CL (tùy motor) hoặc theo thiết kế.

---

## 5. Checklist đấu nối

- [ ] Xác định đúng L/N/Load.
- [ ] L vào L1/L2; Load vào C đúng kênh.
- [ ] Input đấu đúng [–] và [số kênh], không đưa 220V vào.
- [ ] Nguồn 24VDC đúng cực; CFLink Bus Tx+/Tx-/G đúng.
- [ ] Có bảng mapping dán trong tủ và test từng kênh trước khi đóng.
