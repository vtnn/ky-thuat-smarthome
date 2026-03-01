---
title: "B5.04 — Cấu hình SADP Tool"
description: "Quét thiết bị Hikvision trong LAN, kích hoạt, đổi mật khẩu và gán IP tĩnh theo quy hoạch VLAN Camera."
module: "b"
level: "3-5"
tags: ["SADP", "Hikvision", "IP"]
---

## Mục tiêu
- Dùng SADP để quét nhanh camera/NVR trong LAN và gán IP đúng dải.
- Kích hoạt thiết bị mới và đặt mật khẩu chuẩn để tránh mất quyền truy cập.

---

## 1. SADP Tool là gì?
SADP Tool là phần mềm miễn phí của Hikvision để **quét và cấu hình địa chỉ IP** cho camera/NVR trong cùng mạng LAN.

---

## 2. Quy trình sử dụng
1. Cài SADP Tool trên laptop.
2. Kết nối laptop cùng mạng LAN với camera/NVR.
3. Mở SADP → thiết bị sẽ tự hiển thị.
4. Chọn thiết bị → đổi IP theo quy hoạch VLAN Camera.
5. Nhập mật khẩu admin → Apply.

---

## 3. Ví dụ quy hoạch IP (tham khảo)
| Thiết bị | IP | Ghi chú |
|---|---|---|
| NVR | 192.168.20.200 | Đầu ghi |
| CAM-PK-01 | 192.168.20.201 | Phòng khách |
| CAM-HL-02 | 192.168.20.202 | Hành lang |

---

## 4. Lưu ý
- Thiết bị mới chưa kích hoạt: SADP cho phép kích hoạt và đặt mật khẩu lần đầu.
- Mật khẩu cần được ghi nhận vào biên bản bàn giao (hoặc kho mật khẩu nội bộ).
