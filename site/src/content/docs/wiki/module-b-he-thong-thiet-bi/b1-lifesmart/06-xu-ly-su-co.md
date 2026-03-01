---
title: "B1.06 — Xử lý sự cố LifeSmart"
description: "Bảng mã lỗi, nguyên nhân và các bước khắc phục cho Hub, thiết bị Offline, HVAC và DEFED."
module: "b"
level: "3-6"
tags: ["LifeSmart", "xử lý sự cố", "troubleshooting", "DEFED", "HVAC"]
---

## Mục tiêu
- Biết tra cứu nhanh nguyên nhân dựa trên triệu chứng (offline, pairing, alarm).
- Thực hiện được quy trình **thay thế thiết bị hỏng** mà không làm mất automation.

---

## 1. Bảng tra cứu nhanh

| Triệu chứng | Nguyên nhân chính |
|---|---|
| **Hub mất kết nối** | Lỗi Ethernet/WiFi, Router mất mạng. |
| **Thiết bị Offline** | Pin yếu, xa Hub, mất nguồn 220V. |
| **Lỗi Pairing** | Đưa vào mode ghép nối sai, xa Hub. |
| **DEFED Đèn vàng/đỏ** | Có alarm hoặc Hub offline. |
| **HVAC nháy đèn** | Sai cáp tín hiệu hoặc mã lỗi bo điều hòa. |

---

## 2. Hub và Thiết bị Offline

- **Khắc phục Hub:** Restart router → Restart Hub (rút nguồn 10s) → Kiểm tra port LAN.
- **Khắc phục Thiết bị:**
    - Pin: Thay pin mới (chờ 5s xả tụ rồi mới lắp pin mới).
    - Điện: Check CB/nguồn.
    - Sóng: Dời Hub ra vị trí thoáng hơn hoặc thêm Cascade Hub.

---

## 3. Hệ thống an ninh DEFED

- 🟢 **Xanh:** Bình thường.
- 🟡 **Vàng:** Cảnh báo (có sensor kích hoạt khi đang Disarm) hoặc Hub Offline.
- 🔴 **Đỏ:** Báo động (có sensor kích hoạt khi đang Arm).

---

## 4. HVAC Gateway & Lỗi mã

- **HBS nhấp nháy:** Đang giao tiếp tốt (Bình thường).
- **STA nháy nhanh:** Lỗi tín hiệu cáp. Kiểm tra lại cáp xoắn đôi STP và đấu nối terminal.
- **LCD hiện mã:** Chụp ảnh mã số gửi hỗ trợ kỹ thuật hãng.

---

## 5. Quy trình thay thế thiết bị hỏng

> ⚠️ KHÔNG xóa thiết bị cũ rồi thêm mới (sẽ mất sạch Scene/Automation).

1. App → Chọn thiết bị hỏng → **Device Info → Replace Device**.
2. Ghép nối thiết bị mới cùng model.
3. Restart Hub.
4. Kiểm tra Scene vẫn hoạt động bình thường.

---

## 6. Quy trình Escalation
Nếu không xử lý được sau 30 phút:
1. Chụp ảnh/video hiện trạng.
2. Ghi nhận bước đã thử và kết quả đo kiểm.
3. Liên hệ quản lý kỹ thuật hoặc support LifeSmart.
