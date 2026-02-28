---
title: "Giới thiệu hệ thống LifeSmart"
module: "b"
level: "1-6"
tags: ["LifeSmart", "giới thiệu", "CoSS", "Smart Station"]
---

# B1.00 — Giới Thiệu Hệ Thống LifeSmart

## 1. Tổng Quan

LifeSmart là hệ thống nhà thông minh toàn diện, giúp biến các thiết bị điện thông thường thành thiết bị thông minh — cho phép **điều khiển từ xa, tự động hóa và thiết lập ngữ cảnh (Scene)**.

---

## 2. Giao Thức Truyền Thông — CoSS

LifeSmart sử dụng giao thức không dây độc quyền **CoSS (CommandFusion Smart Signal)**:

| Thông số | Chi tiết |
|---------|---------|
| Độ phản hồi | Tính bằng **mili-giây** |
| Khoảng cách truyền | Lên đến **200m** (không gian mở) |
| Tiêu thụ điện năng | Cực thấp (low power) |
| Tần số | Sub-GHz |

### Giao thức bổ sung (tùy model)
Một số bộ trung tâm và màn hình điều khiển (Nature Mini PRO, DEFED Smart Station) còn hỗ trợ thêm:
- **Z-Wave**
- **Zigbee**
- **Wi-Fi**
- **Bluetooth**

---

## 3. Bộ Xử Lý Trung Tâm — Smart Station

Smart Station là **"trái tim"** của hệ thống LifeSmart:
- Kết nối tất cả thiết bị con qua giao thức CoSS.
- Giao tiếp với **LifeSmart App** và nền tảng **Cloud**.
- Kết nối mạng qua Ethernet (khuyến cáo) hoặc WiFi.
- Quản lý Scene, Automation, Scheduler.

### Cascade Management (Nhiều Smart Station)
- Nếu nhà quá rộng, **2 Smart Station** trong cùng mạng LAN có thể **gộp chung lại**.
- Vào **Advanced Settings → Engineering Mode → Smart Station Cascade Management**.
- Cho phép chia sẻ thiết bị giữa Smart Station nguồn và Smart Station đích.

---

## 4. Hỗ Trợ Đa Nền Tảng

| Nền tảng | Hỗ trợ |
|---------|--------|
| **Apple HomeKit** | ✅ Điều khiển qua Siri, Home App |
| **Google Assistant** | ✅ Điều khiển bằng giọng nói |
| **Amazon Alexa** | ✅ Điều khiển bằng giọng nói |
| **LifeSmart App** | ✅ iOS / Android — điều khiển đầy đủ |

---

## 5. Tích Hợp Bên Thứ 3

| Thiết bị / Hệ thống | Cách tích hợp |
|---------------------|---------------|
| **Sonos** (Loa) | Qua UPnP |
| **Philips Hue** (Đèn) | Cần Hue Bridge, add qua App |
| **Camera Hikvision** | Bật UPnP + Hikvision-CGI trên web camera trước khi add |

---

## 6. Kiến Trúc Hệ Thống

```
[LifeSmart Cloud]
       ↕ (Internet)
[Smart Station] ← Ethernet (khuyến cáo) hoặc WiFi
       ↕ (CoSS / Z-Wave / Zigbee)
┌──────┼──────┬──────┬──────┬──────┐
[Công  [Màn   [Cảm   [HVAC  [Camera
 tắc]  hình   biến]  GW]    & An
       Nature]              ninh]
```

---

## 7. Ưu / Nhược Điểm

| Ưu điểm | Nhược điểm |
|---------|-----------|
| CoSS: phản hồi ms, tầm xa 200m | Phụ thuộc WiFi/Internet cho remote |
| Hỗ trợ HomeKit, Google, Alexa | Cần dây N tại hộp công tắc |
| App trực quan, AI Builder dễ dùng | Phụ thuộc Cloud cho một số tính năng |
| Hệ sinh thái thiết bị đa dạng | Chi phí trung bình |
| Cascade: mở rộng nhiều Smart Station | |
