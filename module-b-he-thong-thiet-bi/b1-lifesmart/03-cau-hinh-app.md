---
title: "Cấu hình App LifeSmart"
module: "b"
level: "3-5"
tags: ["LifeSmart", "cấu hình", "App", "HVAC", "pairing"]
---

# B1.03 — Cấu Hình App LifeSmart

## 1. Thêm Smart Station

1. Tải **LifeSmart App** (iOS / Android).
2. Đăng ký tài khoản hoặc đăng nhập.
3. Cấp nguồn Smart Station + cắm cáp mạng Ethernet.
4. Trong App → **"+"** → **Add Device** → App tự quét mạng cục bộ.
5. Chọn Smart Station → hoàn tất.

---

## 2. Thêm Thiết Bị Con (Sub-devices)

### Quy trình chung
1. Mở App → nhấn dấu **"+"** góc trên bên phải → **"Add Device"**.
2. Chọn loại thiết bị tương ứng từ danh sách.
3. Đưa thiết bị vào chế độ **Pairing**:
   - Nhấn giữ nút **Pairing/Set** trên thiết bị khoảng **5 giây**.
   - Đèn báo trên thiết bị **nhấp nháy** = sẵn sàng ghép nối.
4. Đợi App hoàn tất quét và ghép nối.
5. Đặt tên thiết bị theo quy tắc (xem `04-quy-tac-dat-ten.md`).

### Lưu ý
- Nếu App báo **"time-out"** → lặp lại thao tác nhấn giữ nút vật lý trên thiết bị.
- Đặt thiết bị **gần Smart Station** (< 5m) trong quá trình pairing.
- Sau khi pairing thành công, có thể di chuyển thiết bị đến vị trí lắp đặt chính thức.

---

## 3. Đồng Bộ Thiết Bị HVAC (Điều Hòa Trung Tâm)

### Quy trình
1. Thêm HVAC Gateway vào App (như thiết bị con thông thường).
2. Vào **All Devices** → chọn HVAC Gateway → **Settings**.
3. **Trượt màn hình từ phải sang trái** để đồng bộ nhóm địa chỉ.
4. Chờ quá trình lấy thông tin dàn lạnh: **1 – 10 phút**.
   - Trong lúc đồng bộ, thiết bị hiển thị **màu xám**.
   - Khi hoàn tất → thiết bị hiển thị bình thường.
5. Đổi tên từng dàn lạnh theo vị trí (vd: `PN_Master_DieuHoa`, `PK_DieuHoa`).

> ⚠️ **KHÔNG thao tác trên HVAC Gateway trong khi đang đồng bộ** — chờ cho đến khi tất cả dàn lạnh hiển thị bình thường.

---

## 4. Quản Lý Nhiều Smart Station (Cascade Management)

Khi nhà quá rộng, cần 2+ Smart Station:

1. Đảm bảo tất cả Smart Station nằm trong **cùng mạng LAN**.
2. Vào **Advanced Settings → Engineering Mode → Smart Station Cascade Management**.
3. Chọn Smart Station **nguồn** (chứa thiết bị cần chia sẻ).
4. Chọn Smart Station **đích** (nhận thiết bị).
5. Chia sẻ → thiết bị xuất hiện trên cả 2 Smart Station.

---

## 5. Tích Hợp Thiết Bị Bên Thứ 3

### Sonos (Loa)
- Sonos phải nằm cùng mạng LAN với Smart Station.
- App tự phát hiện qua **UPnP**.

### Philips Hue (Đèn)
- Cần **Hue Bridge** kết nối cùng mạng.
- Thêm Hue Bridge trong App LifeSmart → phát hiện bóng đèn.

### Camera Hikvision
- Trên giao diện web camera:
  - Bật **UPnP**.
  - Bật **Hikvision-CGI**.
- Sau đó thêm camera trong App LifeSmart.

---

## 6. Cấu Trúc Trong App

```
Tài khoản LifeSmart
  └── Nhà (Home)
        ├── Phòng khách
        │   ├── PhongKhach_CongTacChinh (công tắc 3 nút)
        │   │   ├── L1: PhongKhach_DenChum
        │   │   ├── L2: PhongKhach_DenHat
        │   │   └── L3: PhongKhach_QuatTran
        │   ├── PhongKhach_CamBienCua
        │   └── PhongKhach_SPOT (IR)
        ├── Phòng ngủ Master
        │   ├── PNMaster_CongTac (công tắc 2 nút)
        │   │   ├── L1: PNMaster_DenNgu
        │   │   └── L2: PNMaster_DenWC
        │   └── PNMaster_DieuHoa (HVAC)
        └── ...
```

---

## 7. Chia Sẻ Quyền

1. App → **Cài đặt → Quản lý thành viên**.
2. Mời thành viên bằng email / QR code.
3. Chọn quyền: **Quản trị** hoặc **Thành viên** (chỉ điều khiển).

> Chỉ cung cấp tài khoản chia sẻ cho khách hàng. Tài khoản Admin bàn giao sau khi quyết toán thành công.
