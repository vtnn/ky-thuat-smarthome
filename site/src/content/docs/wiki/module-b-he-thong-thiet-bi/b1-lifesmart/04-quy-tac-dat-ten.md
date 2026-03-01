---
title: "B1.04 — Quy tắc đặt tên thiết bị LifeSmart"
description: "Chuẩn định danh thiết bị và IO port để dễ quản lý, tìm kiếm và tạo ngữ cảnh AI Builder."
module: "b"
level: "3-6"
tags: ["LifeSmart", "đặt tên", "quy tắc", "IO port"]
---

## Mục tiêu
- Biết **format đặt tên chuẩn** để kỹ thuật viên nào nhìn vào cũng hiểu.
- Đảm bảo tính nhất quán trên toàn hệ thống, đặc biệt là đặt tên cho từng nút (IO port).

---

## 1. Quy tắc chung (Format)

Dùng tiền tố khu vực kết hợp tên thiết bị:
```
[KHU_VUC]_[TEN_THIET_BI / TEN_DEN]
```

**Ví dụ:** `PhongKhach_DenTran`, `PN_Master_DieuHoa`.

---

## 2. Định danh IO port (Quan trọng)

Nhiều thiết bị (như công tắc 3 nút) cần đặt tên cả thiết bị chính và các nút con:

| Cấp | Ví dụ tên |
|---|---|
| **Thiết bị chính** | `PhongKhach_CongTac1` |
| **Nút L1** | `PhongKhach_DenChum` |
| **Nút L2** | `PhongKhach_DenHat` |
| **Nút L3** | `PhongKhach_QuatTran` |

---

## 3. Quy ước viết tắt Khu vực

| Viết tắt | Ý nghĩa |
|---|---|
| **PK / PhongKhach** | Phòng khách |
| **PB / PhongBep** | Phòng bếp |
| **PN / PhongNgu** | Phòng ngủ |
| **WC** | Nhà vệ sinh |
| **HL / HanhLang** | Hành lang |
| **ST / SanThuong** | Sân thượng |
| **CuaChinh** | Cửa chính |

---

## 4. Lưu ý khi đặt tên

1. **Không dùng dấu:** Tránh tiếng Việt có dấu và ký tự đặc biệt (@, #, !).
2. **Nghĩ trước khi làm:** Lên danh sách naming trên giấy/file trước khi add vào App.
3. **Nhất quán:** Một dự án chỉ nên do một người phụ trách đặt tên để tránh "ông nói gà bà nói vịt".
4. **Tên dự phòng:** Luôn có `[KHU_VUC]` ở đầu để khi xem danh sách "All Devices" không bị rối.
