---
title: "Quy trình xử lý sự cố chuẩn"
module: "e"
level: "3-6"
tags: ["xử lý sự cố", "quy trình"]
---
# E1 — Quy Trình Xử Lý Sự Cố Chuẩn

## Flow
```
[1. Xác định lỗi] → [2. Phân loại] → [3. Kiểm tra mạng] →
[4. Kiểm tra nguồn] → [5. Kiểm tra cấu hình] → [6. Kiểm tra automation]
```

### 1. Xác định: Triệu chứng là gì? Từ khi nào? Có thay đổi gì trước đó?
### 2. Phân loại: Mạng / Nguồn / Cấu hình / Lập trình / Phần cứng / Thi công?
### 3. Kiểm tra mạng: Ping, IP, VLAN, Internet, DNS.
### 4. Kiểm tra nguồn: CB, adapter, PoE, pin, điện áp bus.
### 5. Kiểm tra cấu hình: IP đúng, mapping đúng, Group Address, firmware.
### 6. Kiểm tra automation: Trigger, condition, scene, xung đột.

## Nếu không giải quyết được sau 30 phút → **Escalation:**
1. Ghi nhận chi tiết (triệu chứng, bước đã kiểm tra, kết quả đo).
2. Chụp ảnh/video.
3. Báo cáo quản lý kỹ thuật.
