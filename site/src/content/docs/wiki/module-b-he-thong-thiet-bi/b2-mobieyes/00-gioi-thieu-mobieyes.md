---
title: "B2.00 — Giới thiệu hệ thống MobiEyes"
description: "Tổng quan về hệ thống MobiEyes có dây, công nghệ CFLink (Úc) và kiến trúc Peer-to-Peer bền bỉ."
module: "b"
level: "1-6"
tags: ["MobiEyes", "CFLink", "RS485", "CommandFusion", "giới thiệu"]
---

## Mục tiêu
- Hiểu rõ bản chất hệ thống **có dây CFLink** và tại sao nó phù hợp cho biệt thự/penthouse.
- Nắm bắt ưu điểm của mô hình **Peer-to-Peer** (phân tán) so với hệ thống tập trung.

---

## 1. Tổng quan
MobiEyes Smart Home là hệ thống nhà thông minh cao cấp sử dụng công nghệ **CFLink** độc quyền từ CommandFusion (Úc), chạy trên nền vật lý RS485 nâng cao. Đây là giải pháp "nồi đồng cối đá" dành cho các công trình yêu cầu độ ổn định tuyệt đối.

## 2. Đặc điểm nổi bật

| Ưu điểm | Chi tiết |
|---|---|
| **Độ bền cao** | Thiết kế chuẩn công nghiệp, chịu được sai dây và sụt áp trong thi công. |
| **Peer-to-Peer** | Một thiết bị lỗi không làm sập toàn hệ thống (tính phân tán cao). |
| **Chế độ Manual** | Khi bo mạch mất nguồn, công tắc cơ vẫn có thể bật/tắt relay bypass. |
| **Không phụ thuộc WiFi** | Truyền thông hoàn toàn bằng dây cáp, không lo nhiễu sóng hay rớt mạng LAN. |

## 3. Kiến trúc hệ thống CFLink
Hệ thống kết nối theo mô hình **Daisy Chain** (Nối tiếp):
- **Tủ mạng chính** → LAN Bridge (CF-IP).
- **LAN Bridge** → Kết nối các Module DIN-RY8-N qua cáp CFLink Bus (CAT6 + dây nguồn 24V).

---

## 4. So sánh nhanh

| Tiêu chí | MobiEyes (Có dây) | LifeSmart (Không dây) |
|---|---|---|
| **Độ ổn định** | Cực cao (Dây cáp) | Cao (Sóng CoSS) |
| **Thi công** | Phức tạp (Đục tường) | Dễ dàng (Retrofit) |
| **Chế độ Manual** | ✅ Hỗ trợ tốt | ❌ Phụ thuộc Hub |
| **Phù hợp** | Biệt thự, dự án xây mới | Căn hộ, nhà phố |
