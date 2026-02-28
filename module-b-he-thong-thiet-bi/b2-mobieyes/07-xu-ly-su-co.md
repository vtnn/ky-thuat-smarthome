---
title: "Xử lý sự cố MobiEyes"
module: "b"
level: "3-6"
tags: ["MobiEyes", "xử lý sự cố", "troubleshooting"]
---

# B2.07 — Xử Lý Sự Cố MobiEyes

## Bảng Tra Cứu Nhanh

| Triệu chứng | Nguyên nhân có thể | Mục |
|-------------|-------------------|-----|
| App không điều khiển được | Mất mạng, NAT loopback, port bị khóa | 1 |
| Mất kết nối cục bộ (1 phòng/1 lầu) | CB điện khu vực, CB mạng | 2 |
| Bật/tắt qua bo không đồng bộ với công tắc cơ | Đấu nhầm L1/L2 và C | 3 |
| Hiển thị sai trạng thái trên App | Đấu nhầm dây lửa vào chân N (Max) | 4 |
| Nhiễu điện / Ngược pha | Đi chung ống, pha bị đảo | 5 |
| Module không phản hồi | Nguồn 24V, CFLink bus, Board ID | 6 |

---

## 1. App Không Điều Khiển Được / Mất Kết Nối

### Kiểm tra
1. Biểu tượng **góc trái App** → nếu BÁO ĐỎ = mất mạng.
2. Kiểm tra modem Internet → khởi động lại modem.
3. Ping IP LAN Bridge từ laptop cùng mạng.

### Khắc phục
- **Mất Internet:** Khởi động lại modem → chờ 2 phút → kiểm tra lại.
- **Thay đổi modem:** Nếu gần đây đã đổi modem (Viettel/FPT), cần thiết lập lại **NAT loopback** và kiểm tra port không bị khóa.
- **Port bị chặn:** Một số ISP (Viettel, FPT) chặn port mặc định → cần đổi port hoặc liên hệ ISP.

---

## 2. Mất Kết Nối Cục Bộ (1 Phòng / 1 Tầng)

### Kiểm tra
1. CB điện khu vực đó → có bị nhảy/tắt không?
2. CB điện mạng tổng (nuôi Switch/LAN Bridge) → OK?
3. Nguồn 24VDC tủ smarthome khu vực → còn hoạt động?

### Khắc phục
- CB nhảy → đóng lại, kiểm tra quá tải.
- Nguồn 24V mất → kiểm tra Meanwell, đo output.
- CFLink bus đứt giữa 2 tủ → kiểm tra cáp, đấu nối.

---

## 3. Bật/Tắt Qua Bo Không Đồng Bộ Với Công Tắc Cơ

### Nguyên nhân
**Đấu nhầm dây L1/L2 và C** trên DIN-RY8-N.

### Kiểm tra
1. Ngắt nguồn, kiểm tra lại sơ đồ đấu nối.
2. Dây Lửa (L) phải vào **L1** hoặc **L2**.
3. Dây ra tải phải vào **C** (Common) của kênh.

### Khắc phục
- Đấu lại đúng: L → L1/L2, Load → C.
- Test lại: bật/tắt qua App + bật/tắt công tắc cơ → phải đồng bộ.

---

## 4. Hiển Thị Sai Trạng Thái Trên App

### Nguyên nhân
**Cấp nhầm dây lửa (L) vào chân Max (N)** của bo.

### Kiểm tra
1. Dùng bút thử điện kiểm tra chân N (Max) → KHÔNG được có điện (dây lửa).
2. Đo bằng đồng hồ vạn năng: L-N phải đúng.

### Khắc phục
- Đảo lại dây: Lửa → L1/L2, Nguội → N (Max).
- Reset bo nếu cần (ngắt nguồn 10 giây → cấp lại).

---

## 5. Nhiễu Điện / Ngược Pha

### Triệu chứng
- Bút thử điện ra **nhiều dây lửa** (không phải chỉ 1 dây L).
- Relay đóng/ngắt thất thường.
- Tín hiệu Input không ổn định.

### Nguyên nhân
- Pha bị đảo (ngược pha giữa các CB).
- Cáp tín hiệu đi **chung ống** với cáp điện 220V → nhiễu điện từ.

### Kiểm tra
1. Dùng bút thử điện → nếu nhiều dây báo lửa → nghi nhiễu hoặc đảo pha.
2. Dùng **đồng hồ vạn năng** đo lại cặp dây tại CB tổng → xác định chính xác L và N.
3. Kiểm tra ống luồn → cáp tín hiệu có đi chung với cáp điện không.

### Khắc phục
- Xác định lại L/N chính xác bằng đồng hồ đo tại CB tổng.
- Tách cáp tín hiệu ra khỏi ống đi chung với cáp điện.
- Nếu đảo pha giữa các CB → đấu lại cho đồng pha.

---

## 6. Module Không Phản Hồi

### Kiểm tra
1. Nguồn 24VDC → đo output Meanwell = 24V?
2. LED trên DIN-RY8-N → có sáng?
3. CFLink Bus: Tx+, Tx-, G → đúng chân?
4. Board ID có trùng không?

### Khắc phục
- Nguồn mất → kiểm tra/thay Meanwell.
- LED tắt → kiểm tra đấu nối nguồn.
- Board ID trùng → gán lại qua DIN-RY Config Tool.
- Bus đứt → kiểm tra cáp giữa các tủ.

---

## 📝 Checklist Xử Lý Sự Cố MobiEyes

- [ ] App: Biểu tượng góc trái — đỏ hay xanh?
- [ ] Ping IP LAN Bridge.
- [ ] CB điện khu vực lỗi → OK?
- [ ] Nguồn 24VDC tủ smarthome → đo = 24V?
- [ ] LED DIN-RY8-N sáng?
- [ ] Dây L đấu vào L1/L2 (KHÔNG vào C)?
- [ ] Dây N đấu vào N/Max (KHÔNG phải dây lửa)?
- [ ] Cáp tín hiệu KHÔNG đi chung ống cáp điện?
- [ ] Đồng hồ đo → xác định đúng L/N tại CB tổng?
- [ ] System Commander → quét thấy đủ Board?
