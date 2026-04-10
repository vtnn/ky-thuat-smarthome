---
title: "B5.00 — Giới thiệu Camera Hikvision"
description: "Tổng quan hệ thống camera IP Hikvision: phân loại camera (Thân, Dome, PTZ), kiến trúc PoE và vai trò trong hệ thống nhà thông minh."
module: "b"
level: "1-6"
tags: ["Hikvision", "camera", "giới thiệu", "PoE"]
---

## Mục tiêu
- Phân biệt được Camera Thân, Dome và PTZ để chọn đúng cho từng vị trí lắp đặt.
- Hiểu kiến trúc hệ thống camera IP: từ camera đến NVR, từ PoE đến Cloud.
- Nắm được vai trò của hệ thống camera trong tổng thể giải pháp nhà thông minh.

---

## 1. Hikvision trong hệ thống nhà thông minh

Hikvision là hãng camera giám sát lớn nhất thế giới, cung cấp giải pháp camera IP từ dân dụng đến doanh nghiệp. Trong các dự án nhà thông minh, hệ thống camera Hikvision thường đảm nhận toàn bộ phần giám sát an ninh — từ quan sát cổng ra vào, bãi xe, hành lang cho đến các khu vực chung trong tòa nhà.

Điểm khác biệt so với camera WiFi thông thường: camera IP Hikvision kết nối qua cáp mạng Cat6 với công nghệ PoE (Power over Ethernet), nghĩa là chỉ cần 1 sợi cáp mạng vừa truyền hình ảnh vừa cấp nguồn điện cho camera. Không cần kéo thêm dây điện riêng, giảm chi phí thi công và tăng độ ổn định.

Ngoài ra, hệ thống Hikvision tích hợp được với LifeSmart — có thể xem trực tiếp luồng camera ngay trên màn hình Nature 7 hoặc trong ứng dụng LifeSmart mà không cần mở app riêng.

## 2. Phân loại Camera

| Loại | Hình dáng | Ứng dụng phổ biến | Lý do chọn |
|---|---|---|---|
| **Thân (Bullet)** | Hình trụ, cứng cáp, thường có vỏ kim loại | Ngoài trời: bãi xe, hàng rào, cổng | Tầm nhìn xa tốt, hồng ngoại mạnh, chịu thời tiết |
| **Dome (Vòm)** | Hình cầu, gọn gàng, gắn trần hoặc tường | Trong nhà: sảnh, hành lang, phòng khách | Thẩm mỹ cao, khó bị phá vỏ (IK10), góc nhìn linh hoạt |
| **PTZ** | Xoay 360°, Zoom quang học | Sân vườn rộng, khu vực cần giám sát linh hoạt | Bao quát diện tích lớn, zoom chi tiết khi cần |

Trong các dự án nhà ở, Bullet và Dome chiếm phần lớn. PTZ thường chỉ dùng cho biệt thự lớn hoặc khu đô thị có sân vườn rộng, vì chi phí cao hơn và cần bảo trì cơ khí xoay.

## 3. Thông số kỹ thuật cần biết

| Thông số | Ý nghĩa thực tế |
|---|---|
| **Độ phân giải** | 2MP (Full HD) — đủ cho hành lang. 4MP (2K) — chuẩn sử dụng tại công ty. 8MP (4K) — khu vực cần nhận dạng chi tiết |
| **WDR (Wide Dynamic Range)** | Cân bằng sáng/tối — cần cho vị trí ngược sáng như cổng ra vào, cửa kính |
| **IR (Hồng ngoại)** | Khoảng cách nhìn ban đêm. Bullet thường 30-40m, Dome 20-30m |
| **IP67** | Chống nước, chống bụi — bắt buộc cho camera ngoài trời |
| **IK10** | Chống va đập — Dome trong nhà thường có chuẩn này, khó bị phá |
| **H.265+** | Nén video hiệu quả, tiết kiệm ~50% dung lượng HDD so với H.264 |

Tại công ty, chuẩn camera mặc định là **4MP** với codec **H.265+**. Đây là mức cân bằng tốt nhất giữa chất lượng hình ảnh, băng thông mạng và dung lượng lưu trữ.

## 4. Kiến trúc hệ thống

```
[Camera IP] ──Cat6/PoE──→ [Switch PoE] ──→ [NVR (Đầu ghi)] ──→ [Màn hình HDMI]
                                              ↓
                                        [Router/Internet]
                                              ↓
                                        [Hik-Connect Cloud]
                                              ↓
                                   [App điện thoại / iVMS-4200]
```

### Giải thích từng thành phần

- **Camera IP**: Thu hình, nén video (H.265+), gửi qua mạng. Mỗi camera có địa chỉ IP riêng.
- **Switch PoE**: Vừa trung chuyển dữ liệu vừa cấp nguồn cho camera qua cáp Cat6. Một switch 8 port PoE cấp được cho 8 camera.
- **NVR (Network Video Recorder)**: Nhận, ghi hình và quản lý toàn bộ camera. Có thể tích hợp sẵn port PoE (NVR có PoE) hoặc dùng Switch PoE riêng.
- **Hik-Connect**: Dịch vụ Cloud P2P của Hikvision, cho phép xem camera từ xa qua Internet mà không cần cấu hình port forwarding.

### Ưu điểm kiến trúc PoE

- Một sợi Cat6 đảm nhiệm cả nguồn điện và truyền dữ liệu — giảm số lượng dây cần kéo.
- Khoảng cách tối đa 100m mỗi tuyến cáp — đủ cho hầu hết công trình nhà ở.
- Nếu mất điện, chỉ cần UPS cho Switch/NVR là toàn bộ hệ thống camera vẫn hoạt động.

---

## 5. Phần mềm đi kèm

| Phần mềm | Nền tảng | Công dụng |
|---|---|---|
| **SADP Tool** | Windows/Mac | Quét thiết bị trong LAN, kích hoạt camera mới, gán IP tĩnh |
| **Hik-ProConnect** | Web/iOS/Android | Dành cho kỹ thuật viên: cấu hình từ xa, quản lý thiết bị, firmware update |
| **Hik-Connect** | iOS/Android | Dành cho khách hàng: xem camera từ xa, nhận thông báo chuyển động |
| **iVMS-4200** | Windows/Mac | Phần mềm quản lý chuyên nghiệp: xem live, playback, quản lý nhiều NVR |

---

## 6. Ưu và nhược điểm

| Ưu điểm | Nhược điểm |
|---|---|
| Hình ảnh sắc nét, hồng ngoại tốt với giá hợp lý | Giao diện NVR/Web hơi phức tạp cho người mới |
| PoE giúp thi công gọn, ít dây | Cần Switch PoE hoặc NVR có PoE — tăng chi phí ban đầu |
| Hik-Connect xem từ xa không cần port forwarding | Phụ thuộc Cloud Hik-Connect — nếu server sập thì mất xem từ xa |
| Tích hợp được với LifeSmart và các hệ thống smarthome khác | Một số model cũ không hỗ trợ H.265+, cần kiểm tra trước khi mua |
