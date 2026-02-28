---
title: "Lắp đặt và đấu nối Module"
module: "b"
level: "2-4"
tags: ["MobiEyes", "DIN-RY8-N", "đấu nối", "relay", "dry contact"]
---

# B2.03 — Lắp Đặt Và Đấu Nối Module

## 1. Kiểm Tra Và Xác Định Dây

> ⚠️ **BẮT BUỘC trước khi đấu nối:**
> Dùng bút thử điện xác định chính xác:
> - **Dây lửa (L)** — bút thử sáng đèn
> - **Dây nguội (N)** — bút thử không sáng
> - **Dây ra thiết bị (Load)** — tách riêng

**Lý do:** Nếu cấp nhầm dây lửa vào chân N (Max) của bo → hiển thị sai trạng thái trên App, relay hoạt động không đồng bộ.

---

## 2. Đấu Nối Relay (Tải — Output)

### Sơ đồ DIN-RY8-N — Phần Relay

```
Từ CB/MCB:
  ├── Dây Lửa (L) ───→ [L1] hoặc [L2] trên bo DIN-RY8-N
  │                     (L1 cấp cho kênh 1-4, L2 cấp cho kênh 5-8)
  │
  └── Dây Nguội (N) ──→ [N] trên bo (cấp riêng cho bo mạch)

Dây ra thiết bị tải:
  [C1] (Common kênh 1) ──→ Đèn #1
  [C2] (Common kênh 2) ──→ Đèn #2
  [C3] ──→ Quạt
  [C4] ──→ Ổ cắm
  ...
  [C8] ──→ Còi báo động
```

### Nguyên tắc đấu
1. **L (Lửa)** → đấu vào chân **L1** (kênh 1-4) hoặc **L2** (kênh 5-8).
2. **Dây ra tải** → đấu vào chân **C** (Common) của kênh tương ứng.
3. **N (Nguội)** → cấp riêng vào bo (chân N hoặc Max).
4. Dây N từ thiết bị tải → về N chung.

> ⚠️ **KHÔNG đấu nhầm L1/L2 và C** — sẽ gây hiện tượng bật/tắt qua bo không đồng bộ với công tắc cơ.

---

## 3. Đấu Nối Ngõ Vào (Dry Contact Input)

### Sơ đồ DIN-RY8-N — Phần Input

```
[Công tắc cơ] ──→ Chân [–] và chân [1] (Input kênh 1)
[Công tắc đảo] ──→ Chân [–] và chân [2] (Input kênh 2)
[Cảm biến PIR] ──→ Chân [–] và chân [3] (Input kênh 3)
[Công tắc từ] ──→ Chân [–] và chân [4] (Input kênh 4)
...
```

### Nguyên tắc
- Chân **[–]** = COM (chung) của tất cả kênh input.
- Chân **[1] đến [8]** = từng kênh input tương ứng.
- Khi công tắc/cảm biến **đóng mạch** → tín hiệu gửi lên LAN Bridge qua CFLink Bus.
- Dây từ công tắc cơ là **dây tín hiệu** (không phải 220V).

---

## 4. Đấu Nối Rèm / Cửa Cuốn / Cổng

### Motor rèm
- Cần **2 kênh Relay** trên cùng 1 board:
  - **Kênh A** → Mở rèm (motor quay thuận)
  - **Kênh B** → Đóng rèm (motor quay nghịch)
- Đấu: L → L1/L2, dây motor → C của kênh tương ứng.

### Cửa cổng / Cửa cuốn
- Sử dụng tiếp điểm **COM** và **OP/CL** (Open/Close) trên motor cửa.
- Kéo 1 sợi CAT5e/CAT6 từ motor → tủ smarthome.
- Đấu vào Dry Contact Input hoặc Relay tùy loại motor.

---

## 5. Vị Trí Lắp Module Trong Tủ

```
┌──────────────────────────────────────┐
│  [CB1] [CB2] [CB3] [CB4] [CB5]      │ ← CB bảo vệ (1 CB / nhóm kênh)
│                                      │
│  [Nguồn Meanwell HDR-60-24]         │ ← Nguồn 24VDC
│                                      │
│  [DIN-RY8-N Board 21] [Board 22]    │ ← Module Relay + Input
│                                      │
│  [DIN-RY8-N Board 23]               │ ← Module bổ sung (nếu cần)
│                                      │
│  [LAN Bridge CF-IP]                  │ ← Bộ xử lý (chỉ có ở tủ chính)
│                                      │
│  📋 BẢNG MAPPING DÁN TRONG TỦ       │ ← BẮT BUỘC
└──────────────────────────────────────┘
```

---

## 6. Checklist Đấu Nối Module

- [ ] Xác định đúng dây L, N, Load bằng bút thử điện.
- [ ] L đấu vào L1/L2 (KHÔNG đấu vào C).
- [ ] Load (dây ra tải) đấu vào C (Common) đúng kênh.
- [ ] N cấp riêng vào bo (KHÔNG cấp nhầm vào Max).
- [ ] Dry Contact Input: đấu đúng chân [–] và [số kênh].
- [ ] Rèm / Cổng: 2 kênh relay (mở + đóng).
- [ ] Nguồn 24VDC đấu đúng cực (+/–).
- [ ] CFLink Bus: Tx+, Tx-, G đấu đúng.
- [ ] Bảng mapping dán trong tủ.
- [ ] Test từng kênh trước khi đóng tủ.
