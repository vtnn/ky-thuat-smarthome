---
title: "B5.00 — Giới thiệu Camera Hikvision"
description: "Tổng quan các dòng Camera IP (Thân, Dome, PTZ), độ phân giải và sơ đồ hệ thống kết nối NVR."
module: "b"
level: "1-6"
tags: ["Hikvision", "camera", "giới thiệu"]
---

## Mục tiêu
- Phân biệt nhanh các dòng **Camera Thân, Dome, PTZ** để chọn đúng vị trí lắp đặt.
- Hiểu kiến trúc hệ thống: Camera IP → Switch PoE → NVR (Đầu ghi).

---

## 1. Phân loại Camera sử dụng

| Loại | Đặc điểm hình dáng | Ứng dụng phổ biến |
|---|---|---|
| **Thân (Bullet)** | Hình trụ, cứng cáp. | Lắp ngoài trời, bãi xe, hàng rào. |
| **Dome (Vòm)** | Hình cầu, gọn gàng. | Lắp trong nhà, sảnh, hành lang. |
| **PTZ** | Xoay/Quét/Zoom linh hoạt. | Quan sát khu vực rộng (sân vườn, ngã tư). |

## 2. Thông số kỹ thuật cơ bản
- **Độ phân giải:** 2MP (Full HD), 4MP (2K - chuẩn tại công ty), 8MP (4K).
- **Phần mềm:**
    - **SADP Tool:** Dùng quét địa chỉ IP trong mạng nội bộ.
    - **Hik-Connect:** App xem trực tiếp và quản lý qua điện thoại.

---

## 3. Kiến trúc hệ thống cơ bản
```
[Camera IP] ──PoE──→ [Switch PoE] ──→ [NVR] ──→ [Màn hình]
                                       ↓
                                  [Hik-Connect Cloud]
                                       ↓
                                  [App điện thoại]
```
- **Lợi ích:** PoE giúp cấp nguồn và tín hiệu trên duy nhất 1 sợi cáp mạng Cat6.
