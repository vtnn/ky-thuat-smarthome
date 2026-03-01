---
title: "B3.04 — Phần mềm ETS (Engineering Tool Software)"
description: "Hướng dẫn cơ bản dùng ETS: tạo project, nhập catalog, gán địa chỉ vật lý và Group Address."
module: "b"
level: "4-6"
tags: ["KNX", "ETS", "lập trình"]
---

## Mục tiêu
- Biết quy trình lập trình hệ KNX từ bước tạo dự án đến bước Download cấu hình.
- Nắm bắt cơ chế **Communication Objects** và liên kết chúng với Group Address.

---

## 1. Cấu hình dự án (Project Setup)

1. Tải và cài đặt ETS từ **my.knx.org**.
2. **New Project:** Đặt tên theo cú pháp `[Công trình] - [Năm]`.
3. **Import Catalog:** Tải file `.knxprod` của hãng về và import vào ETS.

---

## 2. Gán địa chỉ vật lý (Physical Address)

- Kéo thiết bị từ Catalog vào Topology.
- ETS tự gán địa chỉ (VD: `1.1.1`).
- Nhấn nút **Programming Button** trên thiết bị thật khi ETS yêu cầu download địa chỉ.

---

## 3. Tạo Group Address (GA)

Quy ước GA 3 cấp: `Main / Middle / Sub`. Ví dụ:
- `0/0/1`: Switching (Main=0) / Tầng 1 / Đèn khách.
- `1/0/1`: Dimming (Main=1).

---

## 4. Liên kết Object & Download

1. Kéo Communication Object của phím bấm thả vào Group Address tương ứng.
2. Kéo Communication Object của relay/dimmer thả vào GA đó.
3. **Download:** Chọn Full Download (lần đầu) hoặc Partial Download (sau khi sửa đổi).

---

## 5. Group Monitor
Dùng công cụ này để debug: xem telegram chạy trên bus theo thời gian thực (real-time).
