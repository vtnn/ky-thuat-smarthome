---
title: "Thi công DALI Bus"
module: "b"
level: "2-4"
tags: ["DALI", "bus", "thi công"]
---
# B4.01 — Thi Công DALI Bus

## Cáp DALI
- 2 dây, **không phân cực** (A/B nối đảo vẫn hoạt động).
- Có thể dùng cáp điện thông thường 2×1.5mm².
- ĐẶC BIỆT: **được phép đi chung ống** với dây nguồn 220V.

## Đấu nối
```
[DALI Gateway] ── DA ── [Driver 1] ── DA ── [Driver 2] ── ... ── [Driver N]
              └── DA ──┘           └── DA ──┘
```
Topology: bus, star, tree hoặc kết hợp. **Không vòng kín.**

## Nguồn DALI
- Một số Gateway tích hợp nguồn DALI (≈ 16V).
- Nếu không → cần power supply DALI riêng.

## Checklist
- [ ] Cáp 2 dây đúng tiết diện.
- [ ] Tổng chiều dài ≤ 300m.
- [ ] Driver/Ballast lắp đúng vị trí, gần đèn.
- [ ] Nguồn DALI bus đủ (kiểm tra Gateway có tích hợp không).
