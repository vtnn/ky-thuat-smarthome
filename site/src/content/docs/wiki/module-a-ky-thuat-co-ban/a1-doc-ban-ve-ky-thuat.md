---
title: "A1 — Đọc bản vẽ kỹ thuật"
description: "Cách đọc và ưu tiên các loại bản vẽ để thi công đúng ngay từ đầu."
module: "a"
level: "2-6"
tags: ["bản vẽ", "sơ đồ nguyên lý", "smarthome", "camera", "wifi", "điện nhẹ"]
---

## Mục tiêu
- Biết **đọc đúng thứ tự** các loại bản vẽ để tránh làm sai từ hạ tầng.
- Biết **tách phần nào là nguyên lý** (logic/kết nối) và phần nào là **mặt bằng vị trí** (thi công).

---

## 1. Thứ tự ưu tiên khi đọc bản vẽ

Nguyên tắc: **Đọc “Nguyên lý” trước, “Mặt bằng bố trí” sau.**

| Thứ tự | Loại bản vẽ | Công dụng |
|:---:|---|---|
| **1** | **Bản vẽ nguyên lý** | Hiểu **tổng thể hệ thống**: kết nối giữa các thiết bị, nguồn cấp, luồng tín hiệu/mạng. |
| **2** | **Bản vẽ Smarthome** | Xác định **vị trí thiết bị** và cách đi dây tín hiệu (Bus) theo từng khu vực. |
| **3** | **Bản vẽ Camera & WiFi** | Xác định **vị trí Camera, NVR, Switch PoE** và vùng phủ sóng của các AP. |
| **4** | **Bản vẽ Điện nhẹ** | Chốt **hạ tầng điểm chờ**: công tắc, ổ cắm, hộp âm và đường ống thô. |

---

## 2. Quy trình đọc bản vẽ nhanh (5 bước)

1. **Xác nhận phiên bản:** Luôn kiểm tra ngày phát hành và đảm bảo đang dùng bản vẽ mới nhất (Revision cuối).
2. **Đọc sơ đồ nguyên lý:** Hiểu điểm tập trung (tủ điện/tủ mạng) và cách các thiết bị trung tâm liên kết với nhau.
3. **Đọc mặt bằng theo luồng thi công:** Xem bản vẽ theo thứ tự từ tầng thấp đến tầng cao hoặc khu vực ưu tiên.
4. **Đối chiếu danh mục thiết bị (BOM):** Kiểm tra model và số lượng thực tế có khớp với ký hiệu trên bản vẽ không.
5. **Chốt điểm thi công:** Đánh dấu vị trí chính xác trên thực địa; nếu phát hiện vướng nội thất thì báo quản lý trước khi đục.

---

## 3. Nguyên tắc đi dây cơ bản

- **Cáp mạng (Cat6/Cat5e):** Đi riêng ống, cách xa cáp điện động lực ít nhất 30cm để tránh nhiễu.
- **Bus KNX / RS485:** Đi riêng ống; tuân thủ đúng topology thiết kế (Line, Daisy-chain...).
- **Cáp DALI:** Có thể đi chung ống với dây nguồn 220V nếu dây có chuẩn cách điện tương ứng.

---

## 4. Link tham khảo

- Bản vẽ nguyên lý: **[Đang cập nhật]**
- Bản vẽ Smarthome: **[Đang cập nhật]**
- Bản vẽ Camera & WiFi: **[Đang cập nhật]**
- Bản vẽ điện nhẹ: **[Đang cập nhật]**

---

## 5. Checklist xác nhận trước thi công

- [ ] Bản vẽ đúng **revision mới nhất**.
- [ ] Đã đọc hiểu **sơ đồ nguyên lý** và luồng tín hiệu chính.
- [ ] Đã đối chiếu **thực địa** (vị trí tường, trần, chướng ngại vật).
- [ ] Đã báo cáo quản lý các điểm **sai lệch hoặc xung đột** bản vẽ.
