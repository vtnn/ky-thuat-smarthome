---
title: "C4 — Bảo mật mạng thực chiến"
description: "Các bước bảo mật cơ bản cho mô hình smarthome tối giản: password, firmware và phân quyền truy cập."
module: "c"
level: "4-6"
tags: ["bảo mật", "mạng", "firmware"]
---

## Mục tiêu
- Hạn chế tối đa rủi ro lộ thiết bị smarthome/camera.
- Đảm bảo hệ thống an toàn và dễ dàng bàn giao sau khi xong công trình.

---

## 1. Password & MFA
- **Đổi password mặc định:** Router, Switch, NVR và toàn bộ thiết bị IP.
- **Độ mạnh:** Mật khẩu ≥ 12 ký tự, bao gồm chữ hoa, chữ thường và số.
- **MFA:** Bật xác thực 2 lớp (nếu nền tảng hỗ trợ).

---

## 2. Phân tách mạng (Cốt lõi)
- Dùng **VLAN Guest** cho toàn bộ khách đến nhà.
- Tuyệt đối không cho khách truy cập WiFi nội bộ.

---

## 3. WiFi Security
- **Chuẩn:** Dùng WPA2-AES hoặc WPA3.
- **Tắt WPS:** Phải tắt tính năng WPS trên toàn bộ router/AP để tránh bị hack qua mã PIN.

---

## 4. Checklist bàn giao
- [ ] In sơ đồ mạng + bảng IP dán trong tủ mạng.
- [ ] Bàn giao tài khoản quản trị và mật khẩu cho chủ nhà.
- [ ] File backup config cuối cùng sau khi đã cấu hình chuẩn.
