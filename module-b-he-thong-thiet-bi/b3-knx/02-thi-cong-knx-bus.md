---
title: "Thi công KNX Bus"
module: "b"
level: "2-4"
tags: ["KNX", "bus", "thi công", "cáp"]
---
# B3.02 — Thi Công KNX Bus

## Cáp Bus KNX
- **LIYCY 2×2×0.8mm** — 2 cặp dây xoắn, màu xanh lá.
- Tối đa **1000m** tổng chiều dài mỗi line, **700m** giữa 2 thiết bị xa nhất.
- Tối đa **64 thiết bị** trên 1 line.

## Topology
KNX bus hỗ trợ: bus (tuyến), star (sao), tree (cây), hoặc kết hợp. **Không hỗ trợ ring (vòng).**

## Quy tắc kéo cáp
- Tách khỏi cáp điện 220V — dùng ống luồn riêng.
- Nhãn dán 2 đầu: `KNX-[Area].[Line]-[From]-[To]`.
- Dự phòng 30-50cm tại mỗi đầu.
- Nối shield về GND tại 1 điểm.

## Đấu nối Terminal
Bus cable có 2 dây chính: **Đỏ (+)** và **Đen (-)** — đấu đúng cực tại terminal thiết bị.

## Checklist
- [ ] Cáp đúng loại LIYCY 2×2×0.8.
- [ ] Tách khỏi cáp điện.
- [ ] Nhãn dán 2 đầu.
- [ ] Đấu đúng cực (+/-).
- [ ] Tổng chiều dài ≤ 1000m.
- [ ] Nguồn bus đã lắp trên mỗi line.
