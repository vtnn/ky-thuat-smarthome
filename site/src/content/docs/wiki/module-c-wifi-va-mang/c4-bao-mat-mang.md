---
title: "Bảo mật mạng"
module: "c"
level: "4-6"
tags: ["bảo mật", "mạng", "firmware"]
---

# C4 — Bảo mật mạng (thực dụng, dễ làm)

**Mục tiêu:** giảm rủi ro lộ thiết bị, hạn chế sự cố do cấu hình sai, và dễ bàn giao/bảo trì.

---

## Những việc nên làm (quick wins)
- Đổi password admin mặc định, bật MFA nếu có
- Tắt remote management từ Internet (nếu không cần)
- Update firmware theo chu kỳ (ưu tiên router/AP/switch)
- Backup config sau mỗi lần chỉnh lớn

---

## Phân tách mạng (cốt lõi)
- Tách VLAN: SmartHome / Camera / Private / Guest
- Deny inter-VLAN theo mặc định, mở có kiểm soát

---

## WiFi
- Private: WPA2/WPA3, password đủ mạnh
- Guest: SSID riêng, client isolation
- Tắt WPS

---

## Camera
- Không expose camera trực tiếp ra Internet
- Nếu cần xem từ xa: qua NVR/Cloud chính hãng hoặc VPN

---

## Checklist bàn giao
- [ ] Sơ đồ mạng + bảng IP
- [ ] Tài khoản quản trị + nơi lưu password
- [ ] File backup config
- [ ] Hướng dẫn truy cập từ xa (nếu có)

