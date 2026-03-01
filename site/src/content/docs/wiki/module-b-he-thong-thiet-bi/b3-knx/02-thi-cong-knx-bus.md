---
title: "B3.02 — Thi công KNX Bus"
description: "Quy chuẩn cáp LIYCY, topology lắp đặt, quy tắc kéo cáp và đấu nối cực tính cho bus KNX."
module: "b"
level: "2-4"
tags: ["KNX", "bus", "thi công", "cáp"]
---

## Mục tiêu
- Kéo đúng loại **cáp bus tiêu chuẩn** (xanh lá) và đảm bảo khoảng cách an toàn.
- Đấu đúng cực tính (+/-) tại mọi terminal để bus không bị treo/ngắn mạch.

---

## 1. Cáp Bus KNX đặc chủng
- **Loại cáp:** LIYCY 2×2×0.8mm (2 cặp dây xoắn, màu xanh lá).
- **Khoảng cách:** Tối đa **1000m** tổng chiều dài mỗi line; tối đa **700m** giữa 2 thiết bị xa nhất.
- **Tải:** Tối đa **64 thiết bị** trên một line đơn.

## 2. Topology đi dây
KNX cực kỳ linh hoạt, hỗ trợ: **Cấu trúc Tuyến (Bus), Sao (Star), Cây (Tree)** hoặc kết hợp.
> 🔴 **Cấm:** Không hỗ trợ cấu trúc **Vòng (Ring)**.

---

## 3. Quy tắc thi công & Đấu nối

1. **Tách nguồn:** Đi riêng ống luồn, tách khỏi cáp điện 220V để chống nhiễu.
2. **Nhãn dán:** Ghi rõ Line và Area trên nhãn (VD: `KNX-L1.A1`).
3. **Đấu nối Terminal:** Bus KNX có 2 dây chính: **Đỏ (+)** và **Đen (-)**. Đấu đúng màu tại terminal chuyên dụng (kẹp rút).
4. **Dự phòng:** Để thừa 30–50cm tại mỗi đầu thiết bị/tủ điện.

---

## 4. Checklist thi công
- [ ] Cáp đúng loại LIYCY (xanh lá).
- [ ] Tách xa cáp điện ít nhất 20–30cm.
- [ ] Đấu đúng cực tính Đỏ (+) và Đen (-) tại 100% thiết bị.
- [ ] Nguồn Bus đã được lắp trên line (Power Supply 29V).
