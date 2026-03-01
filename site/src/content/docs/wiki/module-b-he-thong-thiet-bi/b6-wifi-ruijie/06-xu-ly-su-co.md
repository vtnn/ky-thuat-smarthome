---
title: "B6.06 — Xử lý sự cố WiFi"
description: "Checklist xử lý WiFi chậm, roaming kém, IoT hay rớt và lỗi VLAN/DHCP."
module: "b"
level: "3-6"
tags: ["WiFi", "troubleshooting"]
---

## Mục tiêu
- Khoanh vùng lỗi nhanh: do AP, do uplink, do VLAN/DHCP hay do nhiễu sóng.
- Fix các lỗi phổ biến: IoT không vào mạng, WiFi chập chờn, vùng chết.

---

## 1. Bảng triệu chứng → nguyên nhân

| Triệu chứng | Nguyên nhân thường gặp |
|---|---|
| WiFi chậm | Nhiễu kênh, quá nhiều client trên 1 AP, uplink yếu |
| Không kết nối được | Sai mật khẩu, VLAN sai, DHCP không cấp IP |
| Rớt mạng gián đoạn | AP quá tải, roaming chưa tối ưu, firmware lỗi |
| IoT hay rớt | Không hỗ trợ 5GHz, IP conflict, SSID cấu hình sai |
| Vùng chết | Thiếu AP hoặc đặt sai vị trí |

---

## 2. Checklist xử lý nhanh
- [ ] AP có nguồn PoE? LED sáng?
- [ ] DHCP có cấp IP đúng VLAN?
- [ ] RSSI tại điểm lỗi ≥ -65 dBm?
- [ ] Kênh 2.4GHz/5GHz có bị nhiễu (trùng kênh) không?
- [ ] Firmware AP/controller có phải bản ổn định?

---

## 3. Khuyến nghị cấu hình IoT
- IoT SSID chỉ bật 2.4GHz.
- Tắt band steering cho IoT (nếu có).
- Reservation IP cho thiết bị quan trọng.
