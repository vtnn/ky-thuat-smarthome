---
title: "Lắp đặt NVR"
module: "b"
level: "2-4"
tags: ["NVR", "Hikvision", "lắp đặt"]
---
# B5.03 — Lắp Đặt NVR

## Vị trí đặt NVR
- Trong tủ mạng hoặc kệ riêng, thông gió.
- Gần Switch PoE / Router.

## Kết nối
```
[Camera] ──Cat6──→ [Switch PoE] ──→ [NVR] ──→ [Màn hình HDMI/VGA]
                                     ↓
                               [Router/Internet]
```
Hoặc dùng NVR có PoE tích hợp: Camera cắm trực tiếp vào NVR.

## Lắp HDD
1. Tắt NVR, mở nắp.
2. Gắn HDD (WD Purple) vào khay, siết ốc.
3. Cắm cáp SATA + nguồn.
4. Đóng nắp, khởi động → NVR tự nhận HDD.
5. Format HDD trong menu NVR (bắt buộc lần đầu).

## Cấu hình cơ bản
- Đổi mật khẩu admin (BẮT BUỘC).
- Gán IP tĩnh cho NVR.
- Thêm camera: tự động quét hoặc nhập IP thủ công.
