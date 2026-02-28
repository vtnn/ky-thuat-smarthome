---
title: "Lập trình Group DALI"
module: "b"
level: "4-6"
tags: ["DALI", "group", "scene"]
---
# B4.04 — Lập Trình Group & Scene DALI

## Group
- Tối đa 16 group (0-15).
- Mỗi ballast có thể thuộc nhiều group.
- Gửi lệnh cho group = tất cả ballast trong group phản hồi.

## Scene DALI
- Tối đa 16 scene (0-15).
- Mỗi scene lưu mức dim cho từng ballast/group.
- Recall scene → tất cả đèn chuyển về mức đã lưu.

### Ví dụ Scene
| Scene | DALI_PK Group 1 | DALI_PK Group 2 | DALI_PA Group 3 |
|-------|-----------------|-----------------|-----------------|
| Scene 0: Sáng tối đa | 100% | 100% | 100% |
| Scene 1: Xem phim | 30% | 10% | 0% |
| Scene 2: Đón khách | 80% | 60% | 80% |
| Scene 3: Tắt hết | 0% | 0% | 0% |

## Kết hợp với hệ thống điều khiển
- **KNX:** Push Button gửi Scene Number → KNX-DALI Gateway → recall DALI Scene.
- **MobiEyes:** Controller gửi lệnh dim qua Dimmer Module/DALI.
- **LifeSmart:** Scene trên App → lệnh đến DALI Gateway.
