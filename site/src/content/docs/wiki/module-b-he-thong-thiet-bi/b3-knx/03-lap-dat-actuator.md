---
title: "B3.03 — Lắp đặt Actuator & Binary Input"
description: "Hướng dẫn lắp module KNX trong tủ điện và đấu nối công tắc cơ qua Binary Input."
module: "b"
level: "2-4"
tags: ["KNX", "actuator", "binary input", "lắp đặt"]
---

## Mục tiêu
- Lắp actuator trong tủ điện đúng chuẩn và đấu dây tải theo mapping.
- Đấu Binary Input đúng dạng **dry contact** (không đưa 220V).

---

## 1. Switch Actuator
- Gắn trên rail DIN trong tủ điện.
- Đấu: **L chung** → Common, đầu ra mỗi kênh → tải (đèn/quạt...).
- Bus KNX: đấu vào terminal bus (+/-).
- Khuyến nghị: dùng CB bảo vệ theo nhóm kênh.

---

## 2. Binary Input (Dry Contact)

Dùng để đưa công tắc cơ/cảm biến tiếp điểm vào hệ KNX:
- Dây từ công tắc cơ là **dây tín hiệu**.
- Mỗi channel tương ứng một công tắc/cảm biến.

---

## 3. KNX-DALI Gateway
- Đấu bus KNX (+/-) vào terminal KNX.
- Đấu DALI bus (2 dây) vào terminal DALI.
- Cấu hình trong ETS: mapping Group Address ↔ DALI Group.

---

## 4. Checklist
- [ ] Actuator gắn chắc rail DIN.
- [ ] Bus KNX đấu đúng cực (+/-).
- [ ] Dây tải đúng kênh theo mapping.
- [ ] Binary Input đấu đúng channel.
- [ ] DALI Gateway đấu đủ 2 bus (KNX + DALI).
