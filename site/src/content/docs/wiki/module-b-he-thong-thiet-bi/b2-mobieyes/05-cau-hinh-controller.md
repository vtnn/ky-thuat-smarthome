---
title: "B2.05 — Cấu hình Controller MobiEyes"
description: "Hướng dẫn dùng System Commander cấu hình LAN Bridge và dùng DIN-RY Config Tool gán ID cho module."
module: "b"
level: "4-6"
tags: ["MobiEyes", "LAN Bridge", "System Commander", "DIN-RY Config Tool"]
---

## Mục tiêu
- Chốt **IP tĩnh** cho LAN Bridge và thiết lập thời gian thực chính xác.
- Gán **Board ID** duy nhất cho từng module DIN-RY8-N.

---

## 1. Cấu hình LAN Bridge (CF-IP)
Sử dụng phần mềm: **System Commander**.

### 1.1. Các bước chính
1. Scan mạng để phát hiện LAN Bridge.
2. Gán **IP Address tĩnh** (VD: `192.168.10.201`).
3. Tắt DHCP.
4. **Set Date/Time:** cực kỳ quan trọng để các lệnh Scheduler (hẹn giờ) chạy đúng.

---

## 2. Cấu hình module DIN-RY8-N
Sử dụng phần mềm: **DIN-RY Config Tool**.

### 2.1. Quy trình gán Board ID
1. **Cô lập:** Chỉ kết nối 1 bo vào bus tại mỗi thời điểm khi đang gán ID.
2. Connect qua IP của LAN Bridge.
3. Gán ID duy nhất (VD: 21, 22, 23...).
4. Lưu và ngắt bo, lặp lại cho bo tiếp theo.
5. Sau khi xong, nối lại toàn bộ bus và scan lại trên System Commander.

---

## 3. Backup cấu hình

- Luôn xuất file backup cấu hình (`.cfg`) sau khi xong.
- Lưu trữ vào thư mục dự án với format: `config_<ten_du_an>_<ngay>.cfg`.
