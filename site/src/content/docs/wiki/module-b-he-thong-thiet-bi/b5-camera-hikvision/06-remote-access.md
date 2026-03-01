---
title: "B5.06 — Remote Access (Hik-Connect)"
description: "Cấu hình xem camera từ xa qua Hik-Connect (P2P Cloud) và lưu ý bảo mật khi bàn giao khách hàng."
module: "b"
level: "3-5"
tags: ["Hik-Connect", "remote", "P2P"]
---

## Mục tiêu
- Cấu hình Hik-Connect để xem từ xa **không cần port forwarding**.
- Bàn giao tài khoản đúng cách để tránh lộ mật khẩu và mất quyền quản trị.

---

## 1. Hik-Connect là gì?
Hik-Connect là dịch vụ Cloud P2P của Hikvision giúp truy cập camera/NVR từ xa thông qua Internet.

---

## 2. Quy trình cấu hình
1. Trên NVR: Configuration → Network → Platform Access → Enable Hik-Connect.
2. Bật verification code (mã xác minh) theo hướng dẫn của hệ thống.
3. Mở App Hik-Connect → quét QR hoặc nhập serial NVR.
4. Đăng nhập tài khoản Hik-Connect → thêm thiết bị.

---

## 3. Chia sẻ cho khách hàng
- Tạo tài khoản Hik-Connect riêng cho khách → chia sẻ thiết bị.
- Hoặc bàn giao tài khoản chính sau quyết toán, tùy quy trình công ty.

---

## 4. Lưu ý bảo mật
- Mật khẩu tài khoản Hik-Connect phải đủ mạnh (≥ 12 ký tự).
- Luôn bật verification code.
- Không dùng chung mật khẩu giữa các công trình.
