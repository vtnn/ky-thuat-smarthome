---
title: "B4.04 — Lập trình Group & Scene DALI"
description: "Cách tạo Group (0–15), Scene (0–15) và tích hợp lệnh DALI vào KNX/MobiEyes/LifeSmart."
module: "b"
level: "4-6"
tags: ["DALI", "group", "scene"]
---

## Mục tiêu
- Biết dùng Group/Scene để điều khiển nhiều đèn đồng bộ.
- Hiểu cách tích hợp DALI vào hệ điều khiển chính (KNX/MobiEyes/LifeSmart).

---

## 1. Group DALI
- Tối đa **16 group** (0–15).
- Một ballast có thể thuộc nhiều group.
- Điều khiển theo group = tất cả ballast trong group phản hồi.

---

## 2. Scene DALI
- Tối đa **16 scene** (0–15).
- Mỗi scene lưu mức dim cho từng ballast (hoặc theo group tùy gateway).
- Recall scene → đưa toàn bộ đèn về mức đã lưu.

### Ví dụ Scene (tham khảo)
| Scene | PK Group 1 | PK Group 2 | PA Group 3 |
|---:|---:|---:|---:|
| 0 (Sáng tối đa) | 100% | 100% | 100% |
| 1 (Xem phim) | 30% | 10% | 0% |
| 2 (Đón khách) | 80% | 60% | 80% |
| 3 (Tắt hết) | 0% | 0% | 0% |

---

## 3. Tích hợp với hệ thống điều khiển
- **KNX:** Push Button gửi Scene Number → KNX-DALI Gateway → recall DALI Scene.
- **MobiEyes:** Controller gửi lệnh dim qua module dimmer/DALI.
- **LifeSmart:** Scene trên App → gửi lệnh đến DALI Gateway.
