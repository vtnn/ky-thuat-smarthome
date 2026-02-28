---
title: "Danh sách thiết bị MobiEyes"
module: "b"
level: "2-6"
tags: ["MobiEyes", "thiết bị", "DIN-RY8-N", "LAN Bridge", "IR Blaster"]
---

# B2.01 — Danh Sách Thiết Bị MobiEyes

## Bộ Xử Lý Trung Tâm

### LAN Bridge (CF-IP)
| Thông số | Chi tiết |
|---------|---------|
| Chức năng | Bộ xử lý trung tâm, cầu nối Ethernet ↔ CFLink Bus |
| Giao tiếp | TCP/UDP qua Ethernet (RJ45) |
| Tích hợp | Đồng hồ thời gian thực (Real-Time Clock) |
| Scheduler | Lên lịch tự động (hẹn giờ bật/tắt) |
| Cấu hình | Qua phần mềm **System Commander** |
| Firmware | Có thể cập nhật qua mạng |

---

## Bộ Điều Khiển Tải

### DIN-RY8-N (Module Relay + Input)
| Thông số | Chi tiết |
|---------|---------|
| Relay Output | **8 kênh** — bật/tắt thiết bị điện |
| Tải tối đa | **16A / kênh** tại 240VAC |
| Dry Contact Input | **8 kênh** — nhận tín hiệu từ công tắc cơ, cảm biến |
| Giao thức | CFLink (RS485 nâng cao) |
| Lắp đặt | Rail DIN trong tủ điện |
| Cấu hình | Qua phần mềm **DIN-RY Config Tool** |
| Board ID | Gán ID riêng (01, 21, 22, 23...) |

> **Lưu ý:** Mỗi DIN-RY8-N vừa là bộ **điều khiển tải** (8 relay output) vừa là bộ **nhận tín hiệu** (8 dry contact input) — tích hợp 2 trong 1.

---

## Bộ Điều Khiển Hồng Ngoại

### IR Blaster
| Thông số | Chi tiết |
|---------|---------|
| Phạm vi phát | **270 độ** bao phủ |
| Thư viện IR | Hơn **500,000 mã lệnh** tích hợp sẵn |
| Học lệnh | Hỗ trợ học lệnh từ remote gốc |
| Điều khiển | TV, máy lạnh, ampli, đầu phát |
| Kết nối | CFLink Bus, cáp CAT5e/CAT6 từ tủ |

---

## Nguồn Cấp

### Meanwell HDR-60-24
| Thông số | Chi tiết |
|---------|---------|
| Loại | Nguồn xung Meanwell |
| Đầu ra | **24VDC / 2.5A (60W)** |
| Lắp đặt | Rail DIN trong tủ smarthome |
| Cấp cho | Tất cả module trong 1 tủ smarthome |

---

## Thiết Bị Ngoại Vi

| Thiết bị | Kết nối | Ghi chú |
|----------|--------|---------|
| Công tắc 2 chiều (cơ) | Dry Contact Input | 1 sợi CAT5e/CAT6 từ công tắc → tủ |
| Cảm biến chuyển động (PIR) | 2 cặp dây 2×1.5mm² | Cấp nguồn + tín hiệu |
| Công tắc từ (cửa) | Cáp điện thoại 4 lõi | Tiếp điểm đóng/mở |
| Cửa cuốn / Cổng | 1 sợi CAT5e/CAT6 | Điều khiển COM + OP/CL |
| Motor rèm | 2 kênh Relay | 1 mở + 1 đóng |
| Camera IP | Ethernet (PoE) | Tích hợp vào App |
| Còi báo động | 1 kênh Relay | Bật/tắt bằng Macro |
