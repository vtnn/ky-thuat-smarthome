---
title: "Quy tắc đặt tên thiết bị LifeSmart"
module: "b"
level: "3-6"
tags: ["LifeSmart", "đặt tên", "quy tắc", "IO port"]
---

# B1.04 — Quy Tắc Đặt Tên Thiết Bị LifeSmart

## 1. Quy Tắc Chung

### Format
```
[KHU_VUC]_[TEN_THIET_BI / TEN_DEN]
```

### Ví dụ
```
PhongKhach_DenTran
PhongKhach_DenHat
PhongNgu_CongTac1
```

---

## 2. Định Danh Trên Hệ Thống LifeSmart

Mỗi thiết bị khi add vào App đều cho phép đổi:
- **Tên thiết bị chính** (device name)
- **Tên các "nút" (IO port)** bên trong thiết bị

### Ví dụ: Công tắc 3 nút lắp ở Phòng Khách

| Cấp | Tên |
|-----|-----|
| Thiết bị chính | `PhongKhach_CongTacChinh` |
| IO port L1 | `PhongKhach_DenChum` |
| IO port L2 | `PhongKhach_DenHat` |
| IO port L3 | `PhongKhach_QuatTran` |

### Ví dụ: Công tắc 2 nút lắp ở Phòng Ngủ Master

| Cấp | Tên |
|-----|-----|
| Thiết bị chính | `PNMaster_CongTac` |
| IO port L1 | `PNMaster_DenNgu` |
| IO port L2 | `PNMaster_DenWC` |

---

## 3. Quy Ước Khu Vực

| Viết tắt | Khu vực |
|----------|---------|
| PhongKhach / PK | Phòng khách |
| PhongAn / PA | Phòng ăn |
| PhongBep / PB | Phòng bếp |
| PNMaster | Phòng ngủ Master |
| PN1, PN2, PNCon | Phòng ngủ 1, 2, con |
| WCMaster, WCChung | WC |
| HanhLang / HL | Hành lang |
| BanCong / BC | Ban công |
| SanKhach / SK | Sân khách |
| SanThuong / ST | Sân thượng |
| Garage / HM | Hầm / Garage |
| CuaChinh | Cửa chính |

---

## 4. Phân Bổ Phòng (Rooms/Groups)

App LifeSmart cho phép gán thiết bị vào các **"Room"** cụ thể.

Việc đặt tên tiền tố `[KHU_VUC]` đóng vai trò **dự phòng** — giúp dễ tìm kiếm ngay cả khi xem ở giao diện **"All Devices"**.

---

## 5. Lưu Ý

- Đặt tên **TRƯỚC khi** ghép nối (nghĩ trước, làm sau).
- Đặt theo cụm công tắc: **khu vực trước → sau**, **phòng lớn → phòng nhỏ**.
- **Không dùng** ký tự đặc biệt, dấu tiếng Việt (một số hệ thống không hỗ trợ tốt).
- Đặt tên **nhất quán** trong toàn bộ dự án — một người chịu trách nhiệm naming.
- Đặt tên cả **IO port** (L1/L2/L3) — không chỉ đặt tên thiết bị chính.
