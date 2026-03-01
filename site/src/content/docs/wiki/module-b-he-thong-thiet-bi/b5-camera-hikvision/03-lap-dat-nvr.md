---
title: "B5.03 — Lắp đặt NVR (Đầu ghi hình)"
description: "Vị trí đặt NVR, sơ đồ kết nối cáp và hướng dẫn lắp đặt, format HDD đúng chuẩn."
module: "b"
level: "2-4"
tags: ["NVR", "Hikvision", "lắp đặt"]
---

## Mục tiêu
- Lắp đặt NVR tại vị trí tối ưu về nhiệt độ và kết nối mạng.
- Thực hiện đúng quy trình lắp HDD và format để đảm bảo ghi hình không lỗi.

---

## 1. Vị trí đặt NVR
- Ưu tiên đặt trong tủ mạng (Rack) hoặc kệ riêng có thông gió tốt.
- Vị trí gần Switch trung tâm hoặc Router để tối ưu đường truyền data.

---

## 2. Sơ đồ kết nối
```
[Camera] ──Cat6──→ [Switch PoE] ──→ [NVR] ──→ [Màn hình HDMI/VGA]
                                     ↓
                               [Router/Internet]
```

---

## 3. Quy trình lắp HDD
1. Tắt nguồn NVR hoàn toàn.
2. Mở nắp vỏ, gắn HDD vào khay và siết ốc cố định.
3. Cắm cáp SATA (tín hiệu) và cáp nguồn từ bo mạch vào HDD.
4. Đóng nắp, khởi động NVR.
5. **Bắt buộc:** Vào Menu → Storage → Format (Initialize) HDD lần đầu.

---

## 4. Cấu hình cơ bản
- **Mật khẩu:** Đổi mật khẩu Admin ngay sau khi kích hoạt.
- **Mạng:** Gán IP tĩnh cho NVR để tránh mất kết nối với camera IP.
- **Thêm Camera:** Quét tự động trong mạng LAN hoặc nhập IP thủ công từ SADP Tool.
