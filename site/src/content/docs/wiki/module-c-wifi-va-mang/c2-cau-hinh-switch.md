---
title: "C2 — Cấu hình Switch"
description: "Cách cấu hình port Switch PoE Ruijie cho mô hình 2 VLAN: Trunk cho uplink/AP, Access cho thiết bị nội bộ, quản lý PoE budget."
module: "c"
level: "4-6"
tags: ["switch", "VLAN", "PoE", "Ruijie", "trunk"]
---

## Mục tiêu
- Cấu hình đúng port Switch: Access cho thiết bị, Trunk cho AP và uplink Router.
- Quản lý công suất PoE an toàn cho camera và AP.
- Biết cách cấu hình qua Ruijie Cloud và kiểm tra sau cấu hình.

---

## 1. Nguyên tắc phân bổ port

Switch PoE Ruijie có 2 loại port cần cấu hình:

### Port Trunk — cho uplink và AP

Port Trunk truyền nhiều VLAN trên cùng 1 cáp bằng cách gán VLAN tag vào frame. Dùng cho:

| Kết nối | Mode | Native VLAN | Allowed VLAN | Ghi chú |
|---|---|---:|---|---|
| Switch → Router (uplink) | Trunk | 1 | 1, 123 | VLAN 1 untagged, VLAN 123 tagged |
| Switch → AP Ruijie | Trunk | 1 | 1, 123 | AP cần nhận cả 2 VLAN để phát 2 SSID |

VLAN 1 là native (untagged) — traffic VLAN 1 đi qua trunk không cần tag. Chỉ VLAN 123 được tagged.

### Port Access — cho thiết bị nội bộ

Port Access chỉ thuộc 1 VLAN duy nhất, traffic đi ra không có tag. Dùng cho:

| Kết nối | Mode | VLAN | Ghi chú |
|---|---|---:|---|
| Camera | Access | 1 | Mỗi camera 1 port |
| NVR | Access | 1 | NVR cùng VLAN với camera |
| Hub LifeSmart | Access | 1 | |
| PC / Smart TV | Access | 1 | |

---

## 2. Cấu hình qua Ruijie Cloud

### Bước 1: Thêm Switch vào Project

Switch PoE Ruijie dòng ES200 hỗ trợ Cloud Management:
1. Ruijie Cloud → chọn Project → **Devices** → **Add Device**.
2. Nhập S/N của Switch.
3. Đợi Switch online (LED xanh, trạng thái Online trên Cloud).

### Bước 2: Cấu hình VLAN

1. **Devices** → chọn Switch → **VLAN Config**.
2. Tạo VLAN 123 (nếu chưa có) — đặt tên "Guest" hoặc "Home".
3. VLAN 1 đã tồn tại mặc định — không cần tạo.

### Bước 3: Cấu hình Port

1. **Devices** → chọn Switch → **Port Configuration**.
2. Với mỗi port, chọn mode:

| Port | Kết nối | Mode | Config |
|---|---|---|---|
| Port 1 (hoặc SFP uplink) | Router MikroTik | Trunk | Native VLAN 1, Allowed: 1, 123 |
| Port 2 | AP-T1 | Trunk | Native VLAN 1, Allowed: 1, 123 |
| Port 3 | AP-T2 | Trunk | Native VLAN 1, Allowed: 1, 123 |
| Port 4-8 | Camera, NVR | Access | VLAN 1 |
| Port 9-16 | Camera, thiết bị nội bộ | Access | VLAN 1 |

Sau khi cấu hình, nhấn **Save** → đợi Switch apply (10-20 giây).

---

## 3. Cấu hình qua web local (khi không có Cloud)

Nếu Switch chưa online trên Cloud hoặc mất Internet:

1. Kết nối laptop vào port Switch.
2. Tìm IP Switch (mặc định 10.44.77.254 hoặc xem DHCP lease trên MikroTik).
3. Truy cập `http://[IP-Switch]` → login (default: admin/admin).
4. Vào **VLAN** → tạo VLAN 123.
5. Vào **Port Config** → đặt mode Trunk/Access cho từng port.

---

## 4. Quản lý PoE

### Kiểm tra PoE budget

Mỗi Switch có tổng PoE budget nhất định. Tổng công suất các thiết bị kết nối không được vượt budget:

| Model Switch | PoE Budget | AP Ruijie (~13W) | Camera (~8W) | Tổng hỗ trợ (ước tính) |
|---|---:|---:|---:|---|
| RG-ES205GC-P | 54W | 2 AP | 3 cam | Nhà nhỏ |
| RG-ES209GC-P | 120W | 4 AP | 8 cam | Nhà 2-3 tầng |
| RG-ES218GC-P | 240W | 8 AP | 16 cam | Biệt thự, văn phòng |
| RG-ES226GC-P | 370W | 12 AP | 24 cam | Công trình lớn |

### Kiểm tra trên Ruijie Cloud

- **Devices** → chọn Switch → **PoE Status**: xem công suất từng port và tổng.
- Nếu PoE gần budget → một số port sẽ không cấp nguồn → AP hoặc camera offline.

### Ưu tiên PoE

Khi budget gần tới hạn, Ruijie Switch ưu tiên port số nhỏ. Nên:
- Cắm AP (quan trọng hơn) vào port số nhỏ (port 1-4).
- Camera cắm port số lớn (port 5+).

---

## 5. Tính năng bổ sung

### Loop Prevention

Switch Ruijie dòng ES200 có tính năng tự phát hiện loop — khi phát hiện loop trên port sẽ tự disable port đó. Tính năng này bật mặc định trên Cloud, không cần cấu hình.

Thực tế: hay xảy ra khi kỹ thuật viên cắm nhầm 2 đầu cáp cùng 1 switch, hoặc khách hàng tự cắm thêm switch.

### Port Mirroring

Nếu cần debug traffic:
1. **Devices** → chọn Switch → **Port Mirror**.
2. Chọn port nguồn (cần bắt traffic) và port đích (nối laptop Wireshark).
3. Chỉ dùng khi debug — tắt sau khi xong.

---

## 6. Checklist sau cấu hình

- [ ] Port uplink (nối Router) đặt Trunk, allowed VLAN 1 + 123.
- [ ] Port AP đặt Trunk, allowed VLAN 1 + 123.
- [ ] Port camera/NVR đặt Access VLAN 1.
- [ ] Laptop cắm port VLAN 1 → nhận IP 192.168.1.x.
- [ ] AP nhận PoE → LED sáng → phát đủ 2 SSID.
- [ ] Camera nhận PoE → NVR thấy camera.
- [ ] Tổng PoE không vượt budget Switch.
- [ ] Switch hiện Online trên Ruijie Cloud.
