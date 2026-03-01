---
title: "B2.04 — Quy tắc đặt tên MobiEyes"
description: "Chuẩn mapping Board-Kênh, cách đặt tên Macro/Rule và nguyên tắc dán bảng mapping trong tủ."
module: "b"
level: "3-6"
tags: ["MobiEyes", "đặt tên", "mapping", "naming"]
---

## Mục tiêu
- Đặt tên nhất quán để đội thi công và đội lập trình nhìn vào hiểu ngay.
- Đảm bảo có **bảng mapping** trước khi đấu dây để tránh sai kênh.

---

## 1. Định danh thiết bị vật lý (Board-Kênh)

Format chuẩn: `[Board]-[Kênh]`

| Ví dụ | Ý nghĩa |
|---|---|
| `21-1` | Board 21, Relay kênh 1 |
| `21-8` | Board 21, Relay kênh 8 |
| `23-2` | Board 23, Input kênh 2 |

---

## 2. Ví dụ mapping (tham khảo)

### 2.1. Relay
| Board-Kênh | Thiết bị | Khu vực |
|---|---|---|
| 21-1 | Đèn trần | Phòng khách |
| 21-2 | Đèn LED hắt | Phòng khách |
| 21-8 | Còi báo động | Toàn nhà |

### 2.2. Dry Contact Input
| Board-Kênh | Thiết bị | Khu vực |
|---|---|---|
| 23-3 | PIR | Hành lang T1 |
| 23-4 | Công tắc từ | Cửa chính |

---

## 3. Đặt tên Macro và Rule

### 3.1. Macro
Đặt tên bám sát chức năng, không dấu, dùng `_`:
- `baoDong_on`, `baoDong_off`
- `tiepkhach`, `di_ngu`
- `rem_pk_mo`, `rem_pk_dong`

### 3.2. Rule
Đặt tên mô tả sự kiện kích hoạt:
- `dao_den_led`
- `bao_dong_cua_cong`
- `wc_pir_bat`, `wc_pir_tat`

---

## 4. Quy tắc chung

1. Lập bảng mapping **trước khi đấu dây**.
2. In/dán bảng mapping **bên trong cửa tủ** (bắt buộc).
3. Một dự án một file mapping riêng (`mapping_<ten_du_an>.xlsx/.md`).
