---
title: "Cấu hình SADP Tool"
module: "b"
level: "3-5"
tags: ["SADP", "Hikvision", "IP"]
---
# B5.04 — Cấu Hình SADP Tool

## SADP Tool là gì?
Phần mềm miễn phí của Hikvision để **quét và cấu hình IP** cho camera/NVR trong mạng LAN.

## Sử dụng
1. Cài SADP Tool trên laptop (tải từ Hikvision).
2. Kết nối laptop cùng mạng LAN với camera.
3. Mở SADP → tự động quét → danh sách camera hiển thị.
4. Chọn camera → đổi IP (theo quy hoạch VLAN Camera).
5. Nhập mật khẩu admin → Apply.

## Gán IP theo VLAN Camera
| Camera | IP | Ghi chú |
|--------|-----|---------|
| CAM-PK-01 | 192.168.20.201 | Phòng khách |
| CAM-HL-02 | 192.168.20.202 | Hành lang |
| CAM-SK-03 | 192.168.20.203 | Sân khách |
| NVR | 192.168.20.200 | Đầu ghi |

## Lưu ý
- Camera mới chưa kích hoạt → SADP cho phép kích hoạt + đặt mật khẩu lần đầu.
- **Ghi nhận mật khẩu** vào biên bản bàn giao.
