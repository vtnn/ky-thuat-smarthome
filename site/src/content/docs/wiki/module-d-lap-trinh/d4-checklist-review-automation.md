---
title: "Checklist Review Automation"
module: "d"
level: "4-6"
tags: ["checklist", "review", "automation"]
---
# D4 — Checklist Review Automation

## Trước khi bàn giao, kiểm tra:

### Logic
- [ ] ☑️ Có đúng theo tư vấn ban đầu (đối chiếu với phòng kinh doanh)?
- [ ] ☑️ Có trùng automation (2 scene cùng trigger)?
- [ ] ☑️ Có gây xung đột logic (bật ↔ tắt cùng lúc)?
- [ ] ☑️ Có loop vô hạn (Scene A → Scene B → Scene A)?
- [ ] ☑️ Delay/Timer hoạt động đúng?

### Test
- [ ] ☑️ Có test TẤT CẢ trường hợp (ban ngày, ban đêm, có người, không người)?
- [ ] ☑️ Test scene bằng cả App + nút vật lý?
- [ ] ☑️ Test khi mất Internet (local fallback)?
- [ ] ☑️ Test edge case (bật đèn khi đèn đã bật, tắt khi đã tắt)?

### Khách hàng
- [ ] ☑️ Khách hàng đã confirm danh sách kịch bản?
- [ ] ☑️ Khách hàng đã test thử từ App?
- [ ] ☑️ Hướng dẫn khách cách tạo/sửa scene đơn giản?
