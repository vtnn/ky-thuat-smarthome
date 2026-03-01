---
title: "D1 — Nguyên tắc lập trình Automation"
description: "Logic cơ bản IF-THEN, phân loại Trigger/Action và các quy tắc tránh xung đột kịch bản."
module: "d"
level: "4-6"
tags: ["lập trình", "logic", "automation"]
---

## Mục tiêu
- Nắm vững cấu trúc **IF [Trigger] AND [Condition] THEN [Action]**.
- Biết cách thiết kế automation thông minh, tránh tạo vòng lặp vô hạn hoặc xung đột lệnh.

---

## 1. Logic vận hành cơ bản
Mọi kịch bản tự động hoá đều tuân theo sơ đồ khối:
```
IF (Điều kiện kích hoạt) + (Điều kiện lọc) THEN (Hành động thực thi)
```

---

## 2. Các loại Trigger (Bộ mồi) phổ biến

| Loại Trigger | Ví dụ thực tế |
|---|---|
| **Manual** | Nhấn nút trên App, nhấn phím kịch bản gắn tường. |
| **Sensor** | Cảm biến chuyển động (PIR) thấy người, cảm biến cửa mở. |
| **Time/Schedule** | Đúng 06:00 sáng, 22:00 đêm. |
| **State Change** | Khi đèn phòng khách được bật → tự động bật đèn hắt. |
| **Location** | Khi chủ nhà về đến bán kính 100m (GPS). |

---

## 3. Các loại Action (Hành động)

- **Device Control:** Bật/tắt, Dim sáng, Mở/đóng rèm.
- **Scene Trigger:** Kích hoạt một kịch bản khác chồng lên.
- **Notification:** Gửi thông báo Push đến điện thoại, hú còi báo động.
- **Delay:** Chờ X phút rồi mới thực hiện hành động tiếp theo.

---

## 4. Nguyên tắc tránh xung đột (Bắt buộc)
1. **Không trùng lập:** Tránh 2 kịch bản cùng 1 Trigger nhưng Action ngược nhau (VD: Cùng mở cửa mà 1 cái bật đèn, 1 cái tắt đèn).
2. **Kiểm tra Dependency:** Tránh vòng lặp (Scene A → B → A).
3. **Local First:** Ưu tiên các automation chạy nội bộ (không phụ thuộc Cloud) để đảm bảo tốc độ và độ tin cậy.
