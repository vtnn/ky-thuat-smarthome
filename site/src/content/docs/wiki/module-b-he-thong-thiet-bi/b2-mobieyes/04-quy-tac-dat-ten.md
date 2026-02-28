---
title: "Quy tắc đặt tên MobiEyes"
module: "b"
level: "3-6"
tags: ["MobiEyes", "đặt tên", "mapping", "naming"]
---

# B2.04 — Quy Tắc Đặt Tên MobiEyes

## 1. Định Danh Thiết Bị Vật Lý

### Format: `[Board]-[Kênh]`

| Cú pháp | Ý nghĩa |
|---------|---------|
| `21-1` | Board 21, kênh Relay 1 |
| `21-8` | Board 21, kênh Relay 8 |
| `23-2` | Board 23, Dry Contact Input kênh 2 |

### Ví dụ mapping Relay

| Board-Kênh | Thiết bị | Khu vực |
|-----------|----------|---------|
| 21-1 | Đèn Trần | Phòng khách |
| 21-2 | Đèn LED hắt | Phòng khách |
| 21-3 | Đèn Tường | Phòng khách |
| 21-4 | Quạt | Phòng khách |
| 21-5 | Đèn Trần | Phòng ăn |
| 21-6 | Đèn WC | WC chung |
| 21-7 | Đèn Cầu thang | Hành lang |
| 21-8 | Còi báo động | Toàn nhà |

### Ví dụ mapping Dry Contact Input

| Board-Kênh | Thiết bị | Khu vực |
|-----------|----------|---------|
| 23-1 | Công tắc đảo Đèn Trần | Phòng khách |
| 23-2 | Công tắc đảo Đèn LED | Phòng khách |
| 23-3 | Cảm biến PIR | Hành lang T1 |
| 23-4 | Công tắc từ | Cửa chính |
| 23-5 | Công tắc từ | Cổng |

---

## 2. Đặt Tên Macro & Rule

### Format Macro
Đặt tên bám sát **chức năng**:

| Tên Macro | Chức năng |
|-----------|-----------|
| `baoDong_ON` | Bật còi báo động |
| `baoDong_OFF` | Tắt còi báo động |
| `Den_ngoai_nha_on` | Bật tất cả đèn ngoài nhà |
| `Den_ngoai_nha_off` | Tắt tất cả đèn ngoài nhà |
| `tiepkhach` | Kịch bản đón khách |
| `di_ngu` | Kịch bản đi ngủ |
| `rem_PK_mo` | Mở rèm phòng khách |
| `rem_PK_dong` | Đóng rèm phòng khách |

### Format Rule
Đặt tên mô tả **sự kiện kích hoạt**:

| Tên Rule | Chức năng |
|----------|-----------|
| `daoDenLed` | Toggle đèn LED khi bấm công tắc |
| `baoDongCuaCong` | Báo động khi mở cửa cổng |
| `camBienWC_bat` | Bật đèn WC khi phát hiện người |
| `camBienWC_tat` | Tắt đèn WC khi hết người |

---

## 3. Quy Tắc Chung

- Lập bảng mapping **TRƯỚC khi đấu dây** — đây là tài liệu quan trọng nhất.
- In bảng mapping **dán bên trong cửa** tủ smarthome.
- Tên Macro/Rule dùng **không dấu, không khoảng trắng**, phân cách bằng `_`.
- Đặt tên **nhất quán** trong toàn bộ dự án.
- Mỗi dự án 1 file mapping riêng: `mapping_[ten_du_an].xlsx` hoặc `.md`.
