---
title: "Xử lý sự cố LifeSmart"
module: "b"
level: "3-6"
tags: ["LifeSmart", "xử lý sự cố", "troubleshooting", "DEFED", "HVAC"]
---

# B1.06 — Xử Lý Sự Cố LifeSmart

## Bảng Tra Cứu Nhanh

| Triệu chứng | Nguyên nhân có thể | Mục |
|-------------|-------------------|-----|
| Hub mất kết nối | Mất mạng, lỗi Ethernet/WiFi | 1 |
| Thiết bị Offline | Mất liên lạc với Hub, pin yếu | 2 |
| Không ghép nối được (Pairing time-out) | Lỗi pairing, khoảng cách | 3 |
| Cảm biến báo pin yếu | Điện áp < 2.2V | 4 |
| Rèm chạy sai vị trí / không chạy | Lỗi hành trình / motor | 5 |
| DEFED báo đèn vàng/đỏ | Kích hoạt alarm, mất kết nối | 6 |
| Camera "Wrong Camera Password" | Sai mật khẩu camera | 7 |
| HVAC Gateway nháy đèn / báo lỗi | Lỗi tín hiệu, cáp | 8 |
| Thay thế thiết bị hỏng | Giữ nguyên cấu hình | 9 |

---

## 1. Hub Mất Kết Nối

**Kiểm tra:** Dây Ethernet, Router Internet, WiFi.

**Khắc phục:**
- Khởi động lại Router → chờ 2 phút → kiểm tra Hub.
- Khởi động lại Smart Station (rút nguồn 10 giây → cắm lại).
- Nếu dùng Ethernet: Thay cáp mạng, kiểm tra port Switch.

---

## 2. Thiết Bị Offline

**Kiểm tra:** Nguồn, pin, khoảng cách đến Smart Station.

**Khắc phục:**
- Thiết bị dùng pin → thay pin mới.
- Thiết bị dùng điện → kiểm tra CB, nguồn.
- Nếu nhiều thiết bị Offline → khởi động lại Smart Station.
- Khoảng cách quá xa → di chuyển Smart Station đến vị trí trung tâm hơn hoặc dùng Cascade.

---

## 3. Không Ghép Nối Được (Pairing Time-out)

**Triệu chứng:** App báo **"time-out"** trong quá trình ghép nối.

**Khắc phục:**
- **Lặp lại** thao tác nhấn giữ nút vật lý trên thiết bị để phát sóng trở lại.
- Tiếp tục thử cho đến khi ghép nối thành công.
- Đặt thiết bị **gần Smart Station** (< 2m) khi pairing.
- Reset thiết bị về mặc định nếu cần.
- Cập nhật firmware Smart Station.

---

## 4. Cảm Biến Cảnh Báo Pin Yếu

**Áp dụng cho:** Guard Sensor, Motion Sensor, Water Leak Sensor, CUBE Env...

**Triệu chứng:**
- Thông báo đẩy lên Smart Station + App.
- Đèn LED trên thiết bị **nháy liên tục 5 giây/lần**.
- Điện áp pin giảm xuống dưới **2.2V**.

**Khắc phục:**
1. Tháo pin cũ.
2. **Chờ khoảng 5 giây** (quan trọng — để xả tụ).
3. Lắp pin mới vào.
4. Kiểm tra thiết bị online lại trên App.

---

## 5. Rèm Chạy Sai Vị Trí

### Reset hành trình
App → Chọn rèm → `...` (góc trái) → Settings → Travel Set → **Delete all the setting** → Thiết bị tự học lại hành trình.

### Nếu vẫn không được
Kiểm tra dây curoa (belt), motor, ray rèm, nguồn cấp.

---

## 6. Hệ Thống DEFED Báo Đèn Vàng / Đỏ

| Đèn | Trạng thái | Ý nghĩa |
|-----|-----------|---------|
| 🟢 **Xanh** | Bình thường | Hệ thống hoạt động OK |
| 🟡 **Vàng** | Cảnh báo | Thiết bị báo động bị kích hoạt trong khu vực **đang TẮT an ninh** (Disarm mode) HOẶC Smart Station **bị mất kết nối** (offline) |
| 🔴 **Đỏ** | Báo động | Thiết bị bị kích hoạt trong khu vực **đang BẬT an ninh** (Arm mode) |

**Khắc phục:**
- Đèn vàng: Kiểm tra thiết bị nào kích hoạt → reset. Kiểm tra Smart Station online.
- Đèn đỏ: Kiểm tra an ninh → xử lý tình huống → Disarm khi an toàn.

---

## 7. Camera Hiển Thị "Wrong Camera Password"

**Nguyên nhân:** Mật khẩu nhập trong LifeSmart App không khớp với mật khẩu thực tế của Camera.

**Khắc phục:**
1. Nhấn vào Camera → **More → Settings**.
2. Nhập lại **mật khẩu đúng** của Camera.
3. Nếu quên mật khẩu camera → reset camera về mặc định, đặt mật khẩu mới.

---

## 8. HVAC Gateway Nháy Đèn / Báo Lỗi

| LED / Mã | Trạng thái | Ý nghĩa |
|---------|-----------|---------|
| **HBS nhấp nháy** | Đang phát hiện | Gateway đang giao tiếp với điều hòa — bình thường |
| **STA nháy nhanh** | Lỗi tín hiệu | Tín hiệu AC đang bất thường hoặc **lỗi cáp tín hiệu** |
| **LCD hiện mã sửa chữa** | Lỗi nặng | Ghi lại mã (repairing code) → gửi cho đội support |

**Khắc phục STA nháy nhanh:**
- Kiểm tra cáp STP (xoắn đôi chống nhiễu, > 0.75mm²).
- Kiểm tra cáp không đi chung với cáp điện 220V.
- Kiểm tra khoảng cách cáp ≤ 100m.
- Kiểm tra đấu nối terminal đúng chân.

**Khắc phục mã sửa chữa trên LCD:**
- Ghi lại mã → liên hệ đội hỗ trợ kỹ thuật LifeSmart.

---

## 9. Thay Thế Thiết Bị Hỏng

### Quy trình (giữ nguyên Scene + cấu hình)
```
1. App → chọn thiết bị cần thay → [...] → Device Info → Replace Device
2. Ghép nối thiết bị mới (cùng model)
3. Khởi động lại Smart Station (rút nguồn 10s → cắm lại)
4. Kiểm tra thiết bị mới hoạt động, Scene giữ nguyên
```

> ⚠️ **KHÔNG xóa thiết bị cũ rồi thêm mới** → sẽ mất toàn bộ Scene + Automation liên quan.

---

## 10. Quy Trình Escalation

Nếu không giải quyết được sau 30 phút:
1. Ghi nhận chi tiết (triệu chứng, bước đã kiểm tra, kết quả đo, mã lỗi LCD nếu có).
2. Chụp ảnh / video hiện trạng.
3. Liên hệ quản lý kỹ thuật hoặc support LifeSmart.
