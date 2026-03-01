---
title: "B3.06 — Lập trình kịch bản KNX"
description: "Các bước lập trình đèn, dim, rèm, scene và timer trong hệ thống KNX qua phần mềm ETS."
module: "b"
level: "4-6"
tags: ["KNX", "lập trình", "scene", "logic"]
---

## Mục tiêu
- Lập trình được các chức năng cơ bản: nhấn nút bật đèn, nhấn giữ dimming.
- Hiểu cách gọi **Scene** (Ngữ cảnh) bằng scene number.

---

## 1. Nút bấm → Bật/tắt đèn
- Nút bấm Object "Switch" → Kéo vào GA `0/0/1`.
- Actuator Object "Switching" → Kéo vào GA `0/0/1`.
- Kết quả: Nhấn nút gửi telegram 0/1 vào GA `0/0/1`, relay nhận được lệnh thực thi.

---

## 2. Nút bấm → Dim đèn DALI
- Push Button "Dimming" → GA `1/0/1`.
- DALI Gateway Group "Dimming" → GA `1/0/1`.

---

## 3. Lập trình Ngữ cảnh (Scene)
- Tạo Group Address chuyên dụng cho Scene (Main=3).
- Cấu hình phím bấm gửi "Scene Number" khi nhấn giữ.
- Cấu hình các Actuator tham gia vào Scene: khi nhận Scene Number X sẽ chuyển trạng thái Y.

---

## 4. Timer và Logic
Sử dụng các module logic/timer rời của hãng:
- 06:00 → Mở rèm.
- 22:00 → Tắt toàn bộ đèn ngoài nhà.
