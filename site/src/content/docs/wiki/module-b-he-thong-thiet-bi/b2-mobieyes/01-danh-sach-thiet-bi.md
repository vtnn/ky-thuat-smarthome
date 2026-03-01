---
title: "B2.01 — Danh sách thiết bị MobiEyes"
description: "Danh mục thiết bị chính: LAN Bridge (CF-IP), DIN-RY8-N, IR Blaster, nguồn Meanwell và ngoại vi."
module: "b"
level: "2-6"
tags: ["MobiEyes", "thiết bị", "DIN-RY8-N", "LAN Bridge", "IR Blaster"]
---

## Mục tiêu
- Biết đâu là **thiết bị trung tâm** và đâu là **module điều khiển tải**.
- Nắm nhanh thông số quan trọng để tránh cấp sai nguồn/đấu sai chức năng.

---

## 1. Bộ xử lý trung tâm

### 1.1. LAN Bridge (CF-IP)
| Thông số | Chi tiết |
|---|---|
| Chức năng | Cầu nối Ethernet ↔ CFLink Bus |
| Giao tiếp | TCP/UDP qua Ethernet (RJ45) |
| Tích hợp | Real-Time Clock + Scheduler |
| Cấu hình | System Commander |

---

## 2. Bộ điều khiển tải

### 2.1. DIN-RY8-N (Relay + Input)
| Thông số | Chi tiết |
|---|---|
| Relay Output | 8 kênh |
| Tải tối đa | 16A/kênh tại 240VAC |
| Dry Contact Input | 8 kênh |
| Lắp đặt | Rail DIN trong tủ |
| Cấu hình | DIN-RY Config Tool |

> Lưu ý: DIN-RY8-N là "2 trong 1": vừa điều khiển tải, vừa nhận tín hiệu công tắc/cảm biến.

---

## 3. Điều khiển hồng ngoại

### 3.1. IR Blaster
| Thông số | Chi tiết |
|---|---|
| Phạm vi phát | 270° |
| Thư viện | > 500,000 mã IR |
| Kết nối | CFLink Bus |

---

## 4. Nguồn cấp

### 4.1. Meanwell HDR-60-24
| Thông số | Chi tiết |
|---|---|
| Đầu ra | 24VDC / 2.5A (60W) |
| Lắp đặt | Rail DIN |
| Cấp cho | Module trong 1 tủ smarthome |

---

## 5. Thiết bị ngoại vi (tham khảo)

| Thiết bị | Kết nối | Ghi chú |
|---|---|---|
| Công tắc cơ | Dry Contact Input | CAT5e/CAT6 từ công tắc về tủ |
| PIR | 2×1.5mm² | Cấp nguồn + tín hiệu |
| Công tắc từ | Cáp điện thoại 4 lõi | Tiếp điểm đóng/mở |
| Motor rèm | 2 kênh Relay | Mở + đóng |
| Còi | 1 kênh Relay | Điều khiển bằng macro |
