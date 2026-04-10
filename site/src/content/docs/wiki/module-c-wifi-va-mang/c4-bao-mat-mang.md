---
title: "C4 — Bảo mật mạng thực chiến"
description: "Các bước bảo mật bắt buộc khi triển khai: đổi password mặc định, tắt service dư, cấu hình WiFi an toàn và checklist bàn giao."
module: "c"
level: "4-6"
tags: ["bảo mật", "mạng", "firmware", "password"]
---

## Mục tiêu
- Hạn chế tối đa rủi ro lộ thiết bị smarthome/camera ra Internet.
- Đảm bảo hệ thống an toàn và dễ bàn giao sau khi hoàn thành.
- Biết các lỗi bảo mật phổ biến và cách phòng tránh.

---

## 1. Password — Lớp bảo vệ đầu tiên

### Đổi password mặc định (bắt buộc)

Tất cả thiết bị mạng khi mới mua đều có mật khẩu mặc định (admin/admin, admin/12345). Bot tự động trên Internet quét và thử hàng triệu thiết bị mỗi ngày với password mặc định. Nếu không đổi → camera, NVR bị truy cập trái phép trong vài giờ sau khi mở port.

| Thiết bị | Mặc định | Phải đổi |
|---|---|---|
| MikroTik Router | admin / (trống) | Đổi ngay lần đầu đăng nhập |
| Switch Ruijie | admin / admin | Đổi khi setup |
| AP Ruijie | admin / admin | Đổi khi setup (hoặc qua Cloud) |
| NVR Hikvision | admin / (kích hoạt) | Đặt mật khẩu khi activation |
| Camera Hikvision | admin / (kích hoạt) | Đặt cùng mật khẩu với NVR |

### Quy tắc mật khẩu

- **Tối thiểu 12 ký tự**, kết hợp chữ hoa, chữ thường và số.
- Không dùng tên công trình, tên khách hàng, hoặc địa chỉ làm mật khẩu.
- Mật khẩu WiFi khách nên khác mật khẩu WiFi nhà — để khi đổi password Guest không ảnh hưởng WiFi nội bộ.
- Ghi lại tất cả mật khẩu vào file bàn giao — không nhớ trong đầu.

---

## 2. Tắt service không cần trên MikroTik

MikroTik mặc định bật nhiều service quản lý — mỗi service là một cửa có thể bị tấn công:

```
/ip service
set telnet disabled=yes
set ftp disabled=yes
set www disabled=yes
set ssh disabled=yes
set api disabled=yes
set api-ssl disabled=yes
```

Chỉ giữ lại **Winbox** (port 8291) — đủ để quản lý. Nếu cần web interface: bật tạm `www`, xong tắt lại.

### Giới hạn truy cập Winbox (nâng cao)

Nếu muốn bảo mật hơn, giới hạn Winbox chỉ cho phép truy cập từ LAN:

```
/ip service
set winbox address=192.168.1.0/24
```

Khi đó, không ai từ Internet có thể truy cập Winbox — chỉ từ mạng nội bộ 192.168.1.x.

---

## 3. WiFi Security

### Chuẩn bảo mật WiFi

| Chuẩn | Mức bảo mật | Dùng khi |
|---|---|---|
| WPA3-SAE | Cao nhất | WiFi nhà (nếu thiết bị hỗ trợ) |
| WPA2/WPA3-PSK | Cao, tương thích tốt | WiFi nhà — khuyến nghị mặc định |
| WPA2-PSK | Đủ dùng | WiFi Guest, WiFi IoT |
| WPA/WEP | Không an toàn | Tuyệt đối không dùng |

### Tắt WPS

WPS (WiFi Protected Setup) cho phép kết nối WiFi bằng mã PIN — dễ bị brute-force. Tắt WPS trên tất cả AP:
- Ruijie Cloud: **Configuration** → **Wi-Fi** → **Advanced** → WPS: **Off**.
- Nếu AP nào bật WPS mặc định → tắt ngay.

### Ẩn SSID?

Một số tài liệu khuyến nghị ẩn SSID (Hide SSID). Thực tế:
- Ẩn SSID không tăng bảo mật — bất kỳ ai dùng WiFi Analyzer đều thấy.
- Gây bất tiện khi kết nối (phải nhập tên WiFi thủ công).
- Một số thiết bị IoT không kết nối được SSID ẩn.

Khuyến nghị: **Không ẩn SSID** — thay vào đó dùng mật khẩu mạnh.

---

## 4. Phân tách mạng (recap)

Đây là biện pháp bảo mật quan trọng nhất trong toàn bộ hệ thống:

- **VLAN 1**: nội bộ (smarthome, camera, WiFi nhà).
- **VLAN 123**: Guest (WiFi khách).
- **Firewall rule**: Guest → nội bộ = DROP.
- **Client Isolation**: bật cho SSID Guest — khách không thấy nhau.

Nếu chỉ được làm 1 việc bảo mật, đó là **tách mạng khách**. Không bao giờ cho khách dùng WiFi nội bộ.

---

## 5. Firmware Update

### Tại sao phải update?

Firmware cũ có thể chứa lỗ hổng bảo mật đã biết. Ví dụ: lỗ hổng Hikvision CVE-2021-36260 cho phép tấn công camera qua web mà không cần mật khẩu — đã được fix ở firmware mới.

### Khi nào update?

- **Khi triển khai**: update tất cả thiết bị lên firmware ổn định mới nhất trước khi bàn giao.
- **Khi có lỗ hổng nghiêm trọng**: theo dõi thông báo từ hãng.
- **Không update liên tục**: firmware beta hoặc mới ra có thể có bug. Đợi 2-4 tuần sau khi release mới update nếu không có lỗ hổng khẩn cấp.

### Cách update

| Thiết bị | Cách update |
|---|---|
| MikroTik | Winbox → System → Packages → Check for Updates |
| Switch/AP Ruijie | Ruijie Cloud → Devices → Firmware → Upgrade |
| NVR Hikvision | Web interface → Maintenance → Upgrade (upload firmware file) |
| Camera Hikvision | Qua NVR: Configuration → Camera Management → Upgrade |

---

## 6. Port Forwarding — Mở ít nhất có thể

Mỗi port mở ra Internet là một cửa tiềm năng cho tấn công. Nguyên tắc:

- Chỉ mở port thật sự cần: web NVR (81), SDK (8100), RTSP (8554).
- **Không mở port mặc định** (80, 8000, 554) — bot quét port mặc định nhiều nhất.
- Không mở port quản lý MikroTik (Winbox 8291) ra Internet — chỉ truy cập qua VPN nếu cần.
- Không mở port SSH, Telnet ra Internet.

### Xem port đang mở

Trên MikroTik:
```
/ip firewall nat print where chain=dstnat
```

Kiểm tra: chỉ nên thấy port 81, 8100, 8000, 8554 trỏ về NVR (192.168.1.30). Nếu thấy port lạ → xóa ngay.

---

## 7. Backup Config

### MikroTik

```
/system backup save name=backup-[TenCongTrinh]
/export file=export-[TenCongTrinh]
```

- File `.backup` (binary): khôi phục nhanh trên cùng model.
- File `.rsc` (text): đọc được, dùng để tham khảo hoặc áp dụng lên thiết bị khác.

Lưu cả 2 file vào máy và vào Google Drive công ty.

### NVR Hikvision

- Web → Configuration → System → Maintenance → Export Configuration.
- Lưu file `.bin` vào cùng thư mục backup.

### Ruijie Cloud

- Config lưu trên Cloud — không cần backup thủ công.
- Nhưng nên ghi lại SSID, password, VLAN vào file bàn giao (phòng trường hợp Cloud lỗi).

---

## 8. Checklist bàn giao bảo mật

| Hạng mục | Kiểm tra |
|---|---|
| Password MikroTik | Đã đổi, ghi vào file bàn giao |
| Password Switch/AP | Đã đổi hoặc quản lý qua Cloud |
| Password NVR/Camera | Đã kích hoạt với mật khẩu mạnh |
| WiFi nhà | WPA2/WPA3, mật khẩu ≥ 12 ký tự |
| WiFi Guest | WPA2, Client Isolation bật |
| WPS | Tắt trên tất cả AP |
| Service MikroTik | Chỉ còn Winbox |
| Firmware | Tất cả thiết bị đã update bản ổn định |
| Port forwarding | Chỉ mở port 81/8100/8000/8554 cho NVR |
| VLAN Guest | Guest không ping được 192.168.1.x |
| Backup | File backup MikroTik + NVR đã lưu |
| File bàn giao | In sơ đồ mạng + bảng IP + mật khẩu, dán tủ mạng |

---

## 9. Tài liệu bàn giao mẫu

```
╔═══════════════════════════════════════════╗
║  THÔNG TIN MẠNG - [TÊN CÔNG TRÌNH]      ║
╠═══════════════════════════════════════════╣
║  Router:    192.168.1.1 (MikroTik)       ║
║  Switch:    192.168.1.2 (Ruijie)         ║
║  NVR:       192.168.1.30 (Hikvision)     ║
║  Camera:    192.168.1.31 - .xx           ║
║                                           ║
║  WiFi nhà:  [TenNha]_WiFi               ║
║  Pass:      ************                  ║
║  WiFi khách: [TenNha]_Guest             ║
║  Pass:      ************                  ║
║                                           ║
║  DDNS:      [domain].thachanhitt.vn       ║
║  Port NVR:  81 (web), 8100 (app)         ║
║                                           ║
║  Ruijie Cloud: cloud.ruijienetworks.com  ║
║  Hik-Connect:  [serial NVR]              ║
║                                           ║
║  Hotline KT: [số ĐT công ty]            ║
╚═══════════════════════════════════════════╝
```

In 2 bản: 1 bản dán trong tủ mạng, 1 bản giao cho chủ nhà.
