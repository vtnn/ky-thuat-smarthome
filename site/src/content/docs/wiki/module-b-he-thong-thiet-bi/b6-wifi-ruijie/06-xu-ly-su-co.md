---
title: "B6.06 — Xử lý sự cố WiFi"
description: "Checklist xử lý WiFi chậm, roaming kém, IoT rớt kết nối, lỗi VLAN/DHCP và các sự cố phổ biến khi triển khai Ruijie."
module: "b"
level: "3-6"
tags: ["WiFi", "troubleshooting", "sự cố", "Ruijie"]
---

## Mục tiêu
- Khoanh vùng lỗi nhanh: do AP, do uplink, do VLAN/DHCP hay do nhiễu sóng.
- Fix các lỗi phổ biến: IoT không vào mạng, WiFi chập chờn, vùng chết, roaming kém.
- Biết khi nào cần hỗ trợ từ xa (Ruijie Cloud) và khi nào phải đến hiện trường.

---

## 1. Quy trình khoanh vùng lỗi

Khi khách hàng báo "WiFi có vấn đề", không nên đoán mò. Theo flow này:

```
Khách báo lỗi
    ↓
[1] Lỗi 1 thiết bị hay tất cả?
    ├── 1 thiết bị → vấn đề phía client (driver, IP, vị trí xa AP)
    └── Nhiều thiết bị → tiếp bước 2
    ↓
[2] Lỗi 1 tầng/khu vực hay toàn nhà?
    ├── 1 khu vực → AP khu vực đó có vấn đề (PoE, cáp, firmware)
    └── Toàn nhà → tiếp bước 3
    ↓
[3] Có Internet không?
    ├── Không Internet → lỗi WAN/Router, không phải WiFi
    └── Có Internet nhưng chậm → tiếp bước 4
    ↓
[4] Kiểm tra Ruijie Cloud
    ├── AP offline → PoE/cáp/Switch
    ├── AP online nhưng client RSSI yếu → vùng chết, cần thêm AP
    └── AP online, RSSI tốt nhưng chậm → nhiễu kênh, uplink, bandwidth
```

---

## 2. Bảng triệu chứng → nguyên nhân → cách xử lý

### WiFi chậm / tốc độ thấp

| Nguyên nhân | Cách kiểm tra | Cách xử lý |
|---|---|---|
| **Cáp Cat6 chỉ lên 4/8 sợi** | Test cáp bằng cable tester | Bấm lại đầu cáp đúng 8 sợi. Ruijie negotiate xuống 100Mbps nếu cáp lỗi |
| **Nhiễu kênh** | WiFi Analyzer → xem kênh chồng lấn | Đổi kênh 2.4G (1/6/11), 5G (36/40/44/48) hoặc bật Auto Channel |
| **Quá nhiều client trên 1 AP** | Ruijie Cloud → AP → Client List | Cân bằng bằng cách thêm AP hoặc bật Client Association |
| **Uplink Switch yếu** | Kiểm tra port Switch → speed | Port phải negotiate 1Gbps, không phải 100Mbps |
| **Bandwidth WAN không đủ** | Speedtest từ Router/PC có dây | Liên hệ nhà mạng nâng băng thông |
| **Band 2.4GHz quá tải** | Kiểm tra số client 2.4G vs 5G | Bật Band Steering, ép thiết bị hỗ trợ lên 5GHz |

### Không kết nối được WiFi

| Nguyên nhân | Cách kiểm tra | Cách xử lý |
|---|---|---|
| **Sai mật khẩu** | Thử kết nối bằng thiết bị khác | Xác nhận lại mật khẩu trên Ruijie Cloud |
| **SSID ẩn** | Kiểm tra Hidden SSID trên Cloud | Tắt Hidden SSID hoặc kết nối thủ công |
| **Thiết bị không hỗ trợ WPA3** | Thiết bị cũ, IoT rẻ | Đổi security về WPA2-PSK hoặc WPA2/WPA3-PSK |
| **MAC filter / Blacklist** | Kiểm tra Blacklist trên Cloud | Xóa MAC khỏi blacklist |
| **DHCP pool hết IP** | Kiểm tra DHCP leases trên Router | Mở rộng pool hoặc giảm lease time |
| **VLAN sai / chưa trunk** | Client nhận IP 169.254.x.x | Kiểm tra VLAN trunk trên Switch, DHCP trên Router |

### IoT hay rớt kết nối

| Nguyên nhân | Cách kiểm tra | Cách xử lý |
|---|---|---|
| **SSID IoT bật 5GHz** | Kiểm tra Band trên Cloud | Chỉ bật 2.4GHz cho IoT SSID |
| **Band Steering ép 5GHz** | Kiểm tra Band Steering | Tắt Band Steering cho IoT SSID |
| **IP conflict** | 2 thiết bị cùng IP | Dùng DHCP reservation cho thiết bị quan trọng |
| **AP quá xa** | RSSI < -75 dBm | Dịch AP gần hơn hoặc thêm AP |
| **Firmware AP lỗi** | Kiểm tra version trên Cloud | Thử update hoặc downgrade firmware |
| **Mật khẩu có ký tự đặc biệt** | Một số thiết bị IoT không hỗ trợ | Đổi mật khẩu chỉ dùng chữ + số |

### Roaming kém (chuyển tầng bị mất sóng)

| Nguyên nhân | Cách kiểm tra | Cách xử lý |
|---|---|---|
| **802.11k/v chưa bật** | Ruijie Cloud → Optimization | Bật Intelligent Optimization |
| **RSSI threshold quá thấp** | Kiểm tra threshold | Đặt -70 dBm (đẩy client sớm hơn) |
| **AP phát quá mạnh** | Client "giữ" AP cũ vì vẫn nhận tín hiệu | Giảm Tx Power xuống Medium hoặc Low |
| **SSID/password không khớp** | AP mới có SSID/pass khác | Đảm bảo tất cả AP cùng SSID, cùng password, cùng security |
| **Vùng overlap quá nhỏ** | Di chuyển → có khoảng mất sóng | Dịch AP gần nhau hơn hoặc thêm AP ở vùng chuyển tiếp |

### AP offline trên Ruijie Cloud

| Nguyên nhân | Cách kiểm tra | Cách xử lý |
|---|---|---|
| **Mất PoE** | Kiểm tra LED AP (tắt?) | Kiểm tra port Switch, cáp, budget PoE |
| **Cáp đứt/lỏng** | Rút cắm lại, test cáp | Bấm lại hoặc thay cáp mới |
| **Switch PoE quá tải** | Tổng PoE vượt budget | Upgrade switch hoặc chia tải sang switch khác |
| **AP bị treo** | LED sáng nhưng offline | Reset AP (nhấn giữ nút Reset 10-15 giây) |
| **Internet mất** | Tất cả AP offline cùng lúc | Kiểm tra Router/WAN, không phải lỗi WiFi |
| **AP chưa được add** | AP mới, chưa có trong Project | Add S/N vào Project trên Ruijie Cloud |

---

## 3. Công cụ debug

### Từ xa (qua Ruijie Cloud)

- **Dashboard**: overview tất cả AP, số client, bandwidth.
- **Device → Client List**: xem RSSI, band, IP của từng client.
- **Device → Diagnosis**: ping, traceroute từ AP đến gateway.
- **Alerts**: thông báo AP offline, PoE overload, firmware outdated.

### Tại hiện trường

| Công cụ | Dùng khi |
|---|---|
| **Cable tester** | Kiểm tra cáp Cat6 (8/8 sợi) |
| **WiFi Analyzer (Android)** | Đo RSSI, kiểm tra kênh nhiễu |
| **Laptop + trình duyệt** | Truy cập web local AP (IP AP) nếu Cloud không liên lạc được |
| **Điện thoại** | Gọi video + di chuyển để test roaming |

### Truy cập web local AP

Khi AP vẫn có PoE nhưng mất Internet (không lên Cloud):
1. Kết nối laptop vào cùng mạng LAN với AP.
2. Tìm IP của AP (DHCP lease trên Router hoặc scan bằng Angry IP Scanner).
3. Truy cập `http://[IP-AP]` → đăng nhập bằng mật khẩu quản trị (default: `admin`, hoặc mật khẩu đã đặt khi setup).
4. Tại đây có thể xem thông tin cơ bản, restart AP, reset factory.

---

## 4. Cấu hình IoT tối ưu (recap)

Vì IoT là nguồn sự cố phổ biến nhất, tóm tắt lại cấu hình đúng:

- SSID riêng, VLAN riêng.
- **Chỉ 2.4GHz**, tắt 5GHz cho SSID IoT.
- **Tắt Band Steering** cho SSID IoT.
- **Tắt Client Isolation** (thiết bị IoT cần thấy nhau).
- **DHCP Reservation** cho thiết bị quan trọng: gateway LifeSmart, robot hút bụi, camera WiFi.
- **Channel Width 2.4GHz = 20MHz** (40MHz tuy nhanh hơn nhưng gây nhiễu mạnh hơn, IoT không cần tốc độ cao).

---

## 5. Khi nào cần đến hiện trường?

| Tình huống | Xử lý từ xa | Phải đến |
|---|---|---|
| SSID/password sai | ✅ (sửa trên Cloud) | |
| Firmware update | ✅ | |
| Kênh WiFi nhiễu | ✅ (đổi kênh trên Cloud) | |
| Cáp đứt/lỏng | | ✅ |
| AP treo không reset được từ xa | | ✅ |
| Cần thêm AP (vùng chết) | | ✅ |
| Roaming kém do vị trí AP | | ✅ |
| VLAN/trunk sai trên Switch vật lý | | ✅ (nếu không cấu hình được từ Cloud) |

---

## 6. Liên hệ hỗ trợ hãng

Khi gặp lỗi firmware hoặc hardware ngoài khả năng xử lý:
- Ruijie/Reyee hỗ trợ qua: support@ruijienetworks.com hoặc hotline đại lý tại Việt Nam.
- Cung cấp: S/N thiết bị, firmware version, mô tả lỗi, screenshot Ruijie Cloud.
- Thời gian phản hồi thường 1-3 ngày làm việc.
