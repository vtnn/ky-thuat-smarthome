---
title: "Lập trình Scene LifeSmart — AI Builder"
module: "b"
level: "4-6"
tags: ["LifeSmart", "scene", "automation", "AI Builder"]
---

# B1.05 — Lập Trình Scene Với AI Builder

## 1. AI Builder Là Gì?

AI Builder là công cụ lập trình tự động hóa của LifeSmart, hoạt động theo cơ chế **khối xếp hình (Block/Lego)** — không yêu cầu viết code.

### Cấu trúc một ngữ cảnh (Smart/Scene)
```
Điều kiện (Condition) ──→ Lệnh (Command) ──→ Đối tượng (Object)
```

---

## 2. Các Khối Chức Năng (Blocks)

### Action Block — Điều khiển thiết bị
| Chức năng | Ví dụ |
|-----------|-------|
| Bật/tắt thiết bị | Bật đèn, tắt quạt |
| Đổi màu RGB | Đèn LED đổi sang xanh |
| Gửi lệnh IR (TV/AC) | Bật TV, chỉnh nhiệt độ AC |
| Điều khiển rèm | Mở rèm, đóng rèm |

### Function Block — Điều kiện & Logic thời gian
| Chức năng | Ví dụ |
|-----------|-------|
| **Calendar** | Đặt lịch theo ngày/giờ |
| **Timer** | Hẹn giờ bật/tắt |
| **Delay On/Off** | Bật sau X phút, tắt sau Y phút |
| **Compare** | So sánh nhiệt độ > 28°C ? |
| **Time Limit** | Chỉ hoạt động trong khung giờ (08:00-09:00) |

### Logic Operator Block — Toán tử logic
| Toán tử | Chức năng | Ví dụ |
|---------|-----------|-------|
| **AND** | Cả 2 điều kiện đều đúng | Mở cửa VÀ ban đêm → bật đèn |
| **OR** | 1 trong 2 điều kiện đúng | Motion HOẶC mở cửa → bật đèn |
| **NOT** | Phủ định | KHÔNG có người → tắt đèn |

---

## 3. Tạo Scene Trong App

### Quy trình
1. Mở App → **"Smart"** → **"+"** → **Add New Smart**.
2. Chọn **Create Empty** → **Graphic Edit** (giao diện kéo thả block).
3. Thêm **Trigger** (điều kiện kích hoạt).
4. Thêm **Action** (hành động thực hiện).
5. Kết nối các block theo logic mong muốn.
6. Lưu → Test.

---

## 4. Ví Dụ Thực Tế

### 📘 VÍ DỤ 1: Mở cửa → Bật đèn

```
[Trigger: Guard Sensor = Open]
       ↓
[Action: PhongKhach_DenTran = Turn On]
```

**Cách tạo:**
1. Graphic Edit → thêm Trigger: Cảm biến cửa, điều kiện = **"Open"**.
2. Thêm Action: Công tắc đèn, điều kiện = **"Turn On"**.
3. Kết nối Trigger → Action. Lưu.

---

### 📘 VÍ DỤ 2: Bật AC theo giờ (8AM - 9AM)

```
[Function: Time Limit 08:00 - 09:00]
       ↓
[AND]
       ↓
[Trigger: Guard Sensor = Closed (cửa đóng)]
       ↓
[Action: DieuHoa = Turn On 25°C]
(Ngoài khung giờ: Tắt)
```

**Cách tạo:**
1. Thêm Function Block: **Time Limit** (08:00 – 09:00).
2. Thêm Trigger: Cảm biến cửa = **Closed**.
3. Thêm Logic: **AND** (cả 2 điều kiện).
4. Thêm Action: Điều hòa = **Turn On**.
5. Trạng thái mặc định ngoài giờ = **Tắt**.

---

### 📘 VÍ DỤ 3: Về nhà (Scene tổng hợp)

```
[Trigger: Guard Sensor cửa chính = Open]
  + [Function: Calendar sau 18:00]
       ↓ [AND]
[Action 1: PhongKhach_DenTran = ON]
[Action 2: PhongKhach_DenHat = ON]
[Action 3: DieuHoa = ON 25°C (nếu Compare nhiệt > 28°C)]
```

---

### 📘 VÍ DỤ 4: Đi ngủ

```
[Trigger: Manual — nhấn nút "Đi ngủ" trên App]
       ↓
[Action 1: Tắt tất cả đèn]
[Action 2: PNMaster_DieuHoa = 26°C Sleep]
[Action 3: Camera = Bật Motion Detection]
[Action 4: Khóa cửa]
```

---

### 📘 VÍ DỤ 5: Cảm biến WC — Delay Off

```
[Trigger: Motion Sensor WC = Detected]
       ↓
[Action: WC_Den = ON]
[Function: Delay Off 180 giây]
→ Sau 3 phút không có chuyển động → WC_Den = OFF
```

---

## 5. Lưu Ý Khi Lập Trình

- Kiểm tra **không có 2 automation xung đột** (bật ↔ tắt cùng trigger).
- Test mọi trường hợp sau khi tạo (ban ngày, ban đêm, có/không người).
- **Đối chiếu với tư vấn ban đầu** từ phòng kinh doanh.
- **Khách hàng phải confirm kịch bản** trước khi lập trình.
- Sử dụng **AND/OR** cẩn thận — logic sai sẽ gây scene không kích hoạt hoặc kích hoạt sai.
