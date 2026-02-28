---
title: "Cấu hình Controller MobiEyes"
module: "b"
level: "4-6"
tags: ["MobiEyes", "LAN Bridge", "System Commander", "DIN-RY Config Tool"]
---

# B2.05 — Cấu Hình Controller

## 1. Cấu Hình LAN Bridge (CF-IP) — Bằng System Commander

### Phần mềm: **System Commander** (CommandFusion)

### Kết nối
1. Kết nối laptop và LAN Bridge cùng mạng LAN (Ethernet).
2. Mở System Commander → quét mạng → phát hiện LAN Bridge.

### Thiết lập cần cấu hình

| Hạng mục | Chi tiết |
|---------|---------|
| **IP Address** | Gán IP tĩnh theo quy hoạch VLAN Smart Home (vd: 192.168.10.201) |
| **DHCP** | Tắt DHCP trên LAN Bridge — dùng IP tĩnh |
| **Date/Time** | Thiết lập thời gian thực (real-time clock) — **quan trọng cho Scheduler** |
| **COM Mode** | Chọn chế độ giao tiếp CFLink |
| **Baud Rate** | Thiết lập Baud Rate phù hợp (mặc định theo hãng) |
| **Firmware** | Kiểm tra và cập nhật firmware phiên bản mới nhất |

### Kiểm tra sau cấu hình
- [ ] Ping IP LAN Bridge từ laptop → OK.
- [ ] System Commander thấy LAN Bridge → OK.
- [ ] Date/Time chính xác (ảnh hưởng Scheduler).
- [ ] LAN Bridge quét thấy tất cả Board trên CFLink Bus.

---

## 2. Cấu Hình DIN-RY8-N — Bằng DIN-RY Config Tool

### Phần mềm: **DIN-RY Config Tool** (CommandFusion)

### Kết nối
1. Kết nối qua IP và Port (qua LAN Bridge) hoặc trực tiếp.
2. Mở DIN-RY Config Tool → nhập IP + Port → kết nối.

### Thiết lập cần cấu hình

| Hạng mục | Chi tiết |
|---------|---------|
| **Board ID** | Gán ID cho mỗi bo: Board 01, 21, 22, 23... (phải duy nhất) |
| **Firmware** | Update firmware bo lên phiên bản mới nhất |
| **Relay Parameters** | Thiết lập thông số relay (nếu cần: toggle mode, momentary, latching) |
| **Input Parameters** | Cấu hình loại input (NO/NC, debounce time) |

### Quy trình gán Board ID
1. Kết nối 1 bo tại một thời điểm (tháo các bo khác khỏi bus tạm thời).
2. Mở DIN-RY Config Tool → gán ID (vd: Board 21).
3. Lưu → ngắt bo → kết nối bo tiếp theo → gán ID khác.
4. Sau khi gán xong tất cả → nối lại toàn bộ bus.
5. Kiểm tra: System Commander quét thấy đầy đủ board.

---

## 3. Backup Cấu Hình

- **LUÔN backup** sau khi hoàn thành cấu hình.
- Lưu file cấu hình LAN Bridge + DIN-RY vào thư mục dự án + USB.
- Đặt tên: `config_[ten_du_an]_LANBridge_[ngay].cfg`
- Ghi nhận: Danh sách Board ID + IP + cấu hình vào biên bản bàn giao.
