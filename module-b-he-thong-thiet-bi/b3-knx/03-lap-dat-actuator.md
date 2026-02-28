---
title: "Lắp đặt Actuator KNX"
module: "b"
level: "2-4"
tags: ["KNX", "actuator", "binary input", "lắp đặt"]
---
# B3.03 — Lắp Đặt Actuator & Binary Input

## Switch Actuator
- Gắn trên rail DIN trong tủ điện.
- Đấu: L chung → C (common), đầu ra mỗi kênh → tải (đèn/quạt).
- Bus KNX: Đấu vào terminal bus (+/-).
- CB bảo vệ riêng cho mỗi nhóm kênh.

## Binary Input (Dry Contact + Công tắc cơ)
```
[Công tắc cơ] ──→ [Channel] Binary Input
                   [COM]     Binary Input
```
- Dây từ công tắc cơ là dây tín hiệu (KHÔNG phải 220V).
- Mỗi channel = 1 công tắc hoặc 1 cảm biến tiếp điểm.

## KNX-DALI Gateway
- Đấu bus KNX (+/-) vào terminal KNX.
- Đấu DALI bus (2 dây) vào terminal DALI out.
- Cấu hình trong ETS: mapping KNX Group Address ↔ DALI Group.

## Checklist
- [ ] Actuator gắn chắc rail DIN.
- [ ] Bus KNX đấu đúng cực.
- [ ] Dây tải đúng kênh theo mapping.
- [ ] Binary Input đấu đúng channel.
- [ ] DALI Gateway đấu cả 2 bus (KNX + DALI).
