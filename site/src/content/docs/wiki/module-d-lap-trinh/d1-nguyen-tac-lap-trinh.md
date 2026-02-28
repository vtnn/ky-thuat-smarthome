---
title: "Nguyên tắc lập trình"
module: "d"
level: "4-6"
tags: ["lập trình", "logic", "automation"]
---
# D1 — Nguyên Tắc Lập Trình ⭐⭐⭐ TRỌNG TÂM NHẤT

## Logic cơ bản: IF-THEN
```
IF [Trigger] AND [Condition] THEN [Action]
```

## Trigger Types
| Loại | Ví dụ |
|------|-------|
| Manual | Nhấn nút App, nhấn nút vật lý |
| Sensor | Cảm biến chuyển động, cảm biến cửa |
| Time/Schedule | 06:00, 22:00 |
| GPS/Location | Ra khỏi nhà, về nhà |
| State Change | Thiết bị từ ON → OFF |

## Action Types
| Loại | Ví dụ |
|------|-------|
| Device Control | Bật/tắt đèn, dim, mở rèm |
| Scene | Kích hoạt 1 scene khác |
| Notification | Push notification, SMS |
| Delay | Chờ 5 phút rồi thực hiện |

## Tránh Xung Đột Automation
1. Không có 2 scene cùng trigger nhưng action ngược nhau.
2. Kiểm tra dependency: Scene A trigger Scene B trigger Scene A → **LOOP vô hạn!**
3. Dùng `d4-checklist-review-automation.md` trước khi hoàn thành.
