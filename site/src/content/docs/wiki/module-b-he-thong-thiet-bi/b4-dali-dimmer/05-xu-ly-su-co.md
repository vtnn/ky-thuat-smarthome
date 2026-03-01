---
title: "B4.05 — Xử lý sự cố DALI"
description: "Checklist kiểm tra driver, bus voltage 16V, commissioning và triệu chứng đèn nhấp nháy."
module: "b"
level: "3-6"
tags: ["DALI", "troubleshooting"]
---

## Mục tiêu
- Debug nhanh lỗi do phần cứng (driver/nguồn) hay phần mềm (commissioning).
- Có checklist đo kiểm bus trước khi thay thế thiết bị.

---

## 1. Bảng triệu chứng → Cách xử lý

| Triệu chứng | Kiểm tra / Khắc phục |
|---|---|
| Đèn không sáng | Kiểm tra nguồn 220V cấp cho driver; đo bus DALI (~16V). |
| Đèn không dim | Driver có hỗ trợ DALI không? Commissioning đã xong chưa? |
| Nhấp nháy | Kiểm tra driver lỗi hoặc công suất tải không phù hợp. |
| Mất 1 đèn | Check địa chỉ DALI của driver đó; thay driver nếu cần. |
| Mất toàn bộ bus | Kiểm tra nguồn DALI hoặc ngắn mạch đường dây bus. |

---

## 2. Quy trình xử lý lỗi chuẩn
1. Đo bus DALI ≈ **16V DC**. Nếu 0V → đứt dây hoặc hỏng nguồn DALI.
2. Kiểm tra nguồn **220V** tại driver.
3. Dùng commissioning tool scan lại: xem thiết bị đó có phản hồi không.
4. Thử lệnh điều khiển trực tiếp (direct command) bypass group/scene.
5. Nếu driver không phản hồi lệnh direct → Thay driver.
