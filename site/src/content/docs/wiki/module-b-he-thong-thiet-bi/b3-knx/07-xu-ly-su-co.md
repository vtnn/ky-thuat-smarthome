---
title: "B3.07 — Xử lý sự cố KNX"
description: "Checklist kiểm tra bus voltage, ETS connection, Group Address và DALI commissioning khi hệ thống không phản hồi."
module: "b"
level: "3-6"
tags: ["KNX", "troubleshooting"]
---

## Mục tiêu
- Debug nhanh: lỗi do bus, do ETS kết nối hay do Group Address.
- Có checklist đo đạc cơ bản trước khi escalation.

---

## 1. Bảng triệu chứng → cách kiểm tra

| Triệu chứng | Kiểm tra |
|---|---|
| Thiết bị không phản hồi | Điện áp bus 21–29V DC, Physical Address |
| ETS không kết nối | IP Gateway, subnet, firewall |
| Nhấn nút không bật đèn | Group Monitor → telegram, đúng GA/relay |
| Binary Input không chạy | Đấu dây, channel, cấu hình toggle/push |
| DALI không dim | Gateway online, DALI commissioning, bus 16V |
| Bus mất tín hiệu | Cáp đứt/ngắn mạch, quá tải nguồn |

---

## 2. Checklist xử lý nhanh
- [ ] Đo điện áp bus: 21–29V DC.
- [ ] Mở Group Monitor: nhấn nút → có telegram?
- [ ] Kiểm tra Group Address đúng chuẩn và đã link object 2 chiều.
- [ ] Kiểm tra IP Gateway cùng subnet và không bị firewall chặn.
- [ ] Nếu có DALI: đo bus ~16V DC và kiểm tra đã commissioning ballast.
