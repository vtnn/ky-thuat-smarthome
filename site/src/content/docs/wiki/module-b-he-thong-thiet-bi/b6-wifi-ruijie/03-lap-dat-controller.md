---
title: "B6.03 — Cấu hình Ruijie Controller"
description: "Hướng dẫn đăng ký Ruijie Cloud, thêm AP bằng Serial/MAC và đẩy cấu hình SSID tập trung."
module: "b"
level: "4-6"
tags: ["Ruijie", "controller"]
---

## Mục tiêu
- Sử dụng Ruijie Cloud để quản lý dự án tập trung.
- Add nhanh AP và cấu hình dự án chuẩn cho khách hàng.

---

## 1. Cloud Controller
- Quản lý tất cả AP/Switch của công trình qua 1 giao diện duy nhất.
- Hỗ trợ: monitor client, cấu hình VLAN, firmware update.

---

## 2. Quy trình cấu hình
1. Đăng ký/Đăng nhập tài khoản Ruijie Cloud.
2. Tạo Project mới → quét Serial Number hoặc MAC của AP/Switch.
3. Tạo SSID/Mật khẩu cho từng VLAN.
4. **Deploy:** Đẩy cấu hình xuống thiết bị trong LAN.

---

## 3. Checklist cấu hình
- [ ] Account khách hàng đã được gán quyền viewer/member.
- [ ] Firmware AP đã update bản ổn định nhất.
- [ ] Tính năng Roaming được kích hoạt.
