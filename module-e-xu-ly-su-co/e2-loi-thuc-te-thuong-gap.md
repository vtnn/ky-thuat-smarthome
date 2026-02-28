---
title: "Lỗi thực tế thường gặp"
module: "e"
level: "3-6"
tags: ["lỗi", "thực tế", "catalog"]
---
# E2 — Lỗi Thực Tế Thường Gặp ⭐⭐⭐

## 🔴 LỖI MẠNG
- Nhầm IP thiết bị (cùng IP với thiết bị khác)
- Nhầm VLAN (camera nằm VLAN smart home)
- Conflict IP address (2 thiết bị cùng IP)
- Gateway sai (thiết bị không ra Internet)
- DNS không hoạt động (ping IP được, ping domain không)

## 🔴 LỖI CẤU HÌNH
- Sai mapping module (MobiEyes: bật đèn PK nhưng đèn PN sáng)
- Sai địa chỉ KNX (Group Address link sai actuator)
- Device ID trùng lặp (module RS485 cùng ID)
- Firmware không tương thích (sau update thiết bị không phản hồi)

## 🔴 LỖI LẬP TRÌNH
- Trùng automation gây loop (Scene A → Scene B → Scene A)
- Logic IF-THEN sai (bật đèn khi có người nhưng không tắt khi không có)
- Scene không kích hoạt (trigger/condition sai)
- Timer không chạy (múi giờ sai, Hub mất Internet)

## 🔴 LỖI PHẦN CỨNG
- Thiết bị không nhận nguồn (adapter hỏng, CB nhảy)
- LED báo lỗi (đèn đỏ/cam trên Hub)
- Relay không đóng/ngắt (công tắc hỏng)
- Cảm biến không phản hồi (hết pin, hỏng)

## 🔴 LỖI THI CÔNG
- Dây đấu sai cực (L/N/Load đảo)
- Dây bị đứt (bấm cáp mạng hỏng 1 sợi)
- Khoảng cách quá xa (Zigbee > 30m qua tường, KNX bus > 700m)
- Nhiễu điện từ (cáp mạng đi chung ống cáp điện)
