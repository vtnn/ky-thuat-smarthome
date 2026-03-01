---
title: "B2.07 — Xử lý sự cố MobiEyes"
description: "Hướng dẫn khắc phục App mất kết nối, lỗi đồng bộ công tắc, lỗi nhiễu điện và module không phản hồi."
module: "b"
level: "3-6"
tags: ["MobiEyes", "xử lý sự cố", "troubleshooting"]
---

## Mục tiêu
- Phân loại lỗi nhanh (do mạng, do nguồn hay do đấu nối).
- Khắc phục lỗi "bật App một kiểu, công tắc cơ một kiểu" (lỗi phổ biến nhất).

---

## 1. App mất kết nối / Offline
- Check icon góc trái App: Đỏ = mất mạng.
- Restart modem router → restart LAN Bridge.
- Nếu mới đổi modem (Viettel/FPT): kiểm tra **NAT loopback** và Port Forwarding.

---

## 2. Bật/tắt không đồng bộ với công tắc cơ
- **Nguyên nhân:** Đấu nhầm dây L1/L2 và C trên board DIN-RY8-N.
- **Khắc phục:** Đấu lại chuẩn: Lửa (L) vào L1/L2; dây ra tải vào C (Common).

---

## 3. Hiển thị sai trạng thái trên App
- **Nguyên nhân:** Cấp nhầm dây lửa vào chân N (Max) của bo mạch.
- **Khắc phục:** Dùng bút điện test chân N; nếu sáng đèn là sai, phải đảo lại dây Nguội chuẩn vào đó.

---

## 4. Nhiễu điện / Ngược pha
- **Triệu chứng:** Relay nhảy loạn, input không nhạy, bút điện báo đỏ ở nhiều dây.
- **Khắc phục:**
  - Tách cáp tín hiệu CFLink ra khỏi ống đi chung cáp điện 220V.
  - Check đồng pha tại CB tổng (nếu nhà dùng điện 3 pha).

---

## 5. Module không phản hồi
- Đo output nguồn Meanwell: có đủ 24VDC không?
- LED trên module có sáng/nháy không?
- Check chân bus Tx+/Tx-/G.
- Check Board ID có bị trùng với board khác trên cùng bus không.

---

## 6. Checklist xử lý nhanh
- [ ] Ping IP LAN Bridge.
- [ ] LED module DIN-RY có sáng?
- [ ] Đấu đúng L vào L1/L2 chưa?
- [ ] Chân N bo mạch có bị cấp lửa nhầm không?
- [ ] System Commander quét thấy đủ board không?
