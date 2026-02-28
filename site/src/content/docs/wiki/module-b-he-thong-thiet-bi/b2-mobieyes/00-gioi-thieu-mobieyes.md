---
title: "Giới thiệu hệ thống MobiEyes"
module: "b"
level: "1-6"
tags: ["MobiEyes", "CFLink", "RS485", "CommandFusion", "giới thiệu"]
---

# B2.00 — Giới Thiệu Hệ Thống MobiEyes Smart Home

## 1. Tổng Quan

MobiEyes Smart Home là hệ thống nhà thông minh **có dây**, sử dụng công nghệ **CFLink** độc quyền từ **CommandFusion (Úc)**, hoạt động trên nền **RS485 nâng cao**. Hệ thống được thiết kế cho biệt thự, penthouse và các dự án yêu cầu độ ổn định cao.

### Công nghệ CFLink
- Giao thức truyền thông độc quyền của CommandFusion.
- Hoạt động trên nền vật lý RS485 nhưng được nâng cao về độ tin cậy.
- Mô hình kết nối **phân tán (peer-to-peer)** — nếu một thiết bị gặp lỗi, các thiết bị còn lại vẫn hoạt động bình thường.
- Hỗ trợ **chịu được sai dây, sụt áp** — hệ thống ổn định trong điều kiện thi công thực tế.

---

## 2. Đặc Điểm Nổi Bật

### ✅ Ưu điểm
| Ưu điểm | Chi tiết |
|---------|---------|
| **Độ bền cao** | Thiết kế công nghiệp, chịu được sai dây và sụt áp |
| **Không phụ thuộc WiFi** | Truyền thông hoàn toàn có dây — không bị ảnh hưởng bởi WiFi |
| **Chế độ Manual** | Khi bo mạch mất nguồn, **công tắc cơ vẫn hoạt động** (relay bypass) |
| **Tiêu chuẩn quốc tế** | Đạt chứng nhận **FCC, CE, C-Tick** |
| **Peer-to-peer** | 1 thiết bị lỗi không ảnh hưởng toàn bộ hệ thống |
| **IR học lệnh** | Thư viện hơn **500,000 mã lệnh** IR tích hợp |

### ❌ Nhược điểm
| Nhược điểm | Chi tiết |
|-----------|---------|
| Cần đục tường đi dây | Không phù hợp cho nhà đã hoàn thiện (retrofit) |
| Thi công phức tạp | Đòi hỏi kỹ thuật viên có tay nghề cao |
| Thời gian thi công dài | So với hệ không dây (LifeSmart) |
| Chi phí cao hơn | Chi phí thiết bị + thi công cao hơn hệ không dây |

---

## 3. Kiến Trúc Hệ Thống

```
[App MobiEyes / Panel]
       ↕ (Ethernet TCP/UDP)
[LAN Bridge (CF-IP)] ← Bộ xử lý trung tâm, đồng hồ thời gian thực
       ↕ (CFLink Bus — RS485 nâng cao)
       ↕ (Cáp mạng UTP CAT5e/CAT6 + Cặp dây điện 2×1.5)
┌──────┼──────┬───────┬───────┐
[DIN-RY8-N  [DIN-RY8-N  [DIN-RY8-N  [IR Blaster]
 Board 21]   Board 22]   Board 23]
  8 Relay     8 Relay     8 Relay    (Điều khiển
  8 Input     8 Input     8 Input     TV, máy lạnh)
  │             │            │
  ├── Đèn      ├── Đèn     ├── Công tắc cơ
  ├── Quạt     ├── Rèm     ├── Cảm biến
  └── Ổ cắm   └── Cửa     └── Còi
```

### Mô hình kết nối tủ (Daisy Chain)

```
[Tủ mạng chính] ──CAT6──→ [Tủ Smarthome 1] ──CAT6──→ [Tủ Smarthome 2] ──→ ...
                           + Cặp dây 2×1.5       + Cặp dây 2×1.5
```

---

## 4. So Sánh Với Các Hệ Thống Khác

| Tiêu chí | MobiEyes | LifeSmart | KNX |
|----------|----------|-----------|-----|
| Giao thức | CFLink (RS485) | CoSS (Zigbee) | KNX TP |
| Kết nối | Có dây | Không dây | Có dây |
| Phụ thuộc WiFi | Không | Có | Không |
| Chế độ Manual | ✅ Có | ❌ Không | ❌ Không |
| Tiêu chuẩn | FCC, CE, C-Tick | - | ISO 14543-3 |
| Phù hợp | Biệt thự, dự án lớn | Căn hộ, nhà phố | Tòa nhà, biệt thự |
| Chi phí | Trung bình - Cao | Thấp - Trung bình | Cao |
