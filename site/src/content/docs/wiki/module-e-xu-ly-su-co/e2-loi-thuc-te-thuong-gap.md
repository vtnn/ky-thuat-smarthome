---
title: "E2 — Các lỗi thực tế thường gặp"
description: "Tổng hợp danh mục các lỗi phổ biến trong thi công và vận hành smarthome thực tế."
module: "e"
level: "3-6"
tags: ["lỗi", "thực tế", "catalog"]
---

## Mục tiêu
- Nhận diện nhanh các tình huống lỗi phổ biến đã từng xảy ra tại công trình.
- Giúp kỹ thuật viên mới rút kinh nghiệm và tránh các sai lầm tương tự.

---

## 1. Lỗi mạng (Internet/LAN)
- **Nhầm IP:** Cài IP tĩnh trùng với thiết bị khác (Conflict IP).
- **Nhầm VLAN:** Camera nằm ở VLAN smarthome thay vì VLAN camera riêng.
- **Lỗi Gateway:** Gán sai gateway khiến thiết bị nội bộ chạy được nhưng không ra được Cloud/Internet.
- **Lỗi DNS:** Ping được IP 8.8.8.8 nhưng không vào được website/app (không phân giải được domain).

---

## 2. Lỗi cấu hình (Mapping/ID)
- **Sai mapping:** Bật đèn Phòng khách nhưng đèn Phòng ăn sáng (do gán kênh Relay/Group sai).
- **Trùng ID:** Hai thiết bị RS485/Bus có cùng địa chỉ vật lý.
- **Firmware:** Update firmware không đồng bộ khiến thiết bị lỗi phản hồi hoặc mất automation cũ.

---

## 3. Lỗi lập trình (Automation)
- **Trùng Trigger:** Hai scene cùng 1 trigger nhưng lệnh ngược nhau.
- **Loop vô hạn:** Scene A kích hoạt Scene B, rồi Scene B kích hoạt lại Scene A.
- **Logic sai:** Bật đèn khi có người nhưng quên điều kiện OFF khi hết người (hoặc delay sai).
- **Timer không chạy:** Do múi giờ Hub sai hoặc Hub mất kết nối Internet để đồng bộ giờ.

---

## 4. Lỗi thi công và Đấu nối
- **Nhiễu điện từ:** Cáp mạng/Bus đi chung ống cáp điện 220V gây chập chờn tín hiệu.
- **Sai cực tính:** Đấu nhầm L/N hoặc đảo cực Tx+/Tx- trên đường bus.
- **Khoảng cách:** Thiết bị Zigbee/WiFi quá xa Hub (>30m qua nhiều tường) gây rớt kết nối.
- **Jack nối:** Jack RJ45/terminal bị lỏng hoặc bấm hỏng 1-2 sợi cáp con.
