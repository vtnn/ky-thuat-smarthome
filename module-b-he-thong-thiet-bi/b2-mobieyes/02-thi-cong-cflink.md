---
title: "Thi công CFLink RS485"
module: "b"
level: "2-4"
tags: ["MobiEyes", "CFLink", "RS485", "thi công", "topology"]
---

# B2.02 — Thi Công Kết Nối CFLink (RS485)

## 1. Cáp Sử Dụng

| Loại cáp | Dùng cho | Ghi chú |
|----------|---------|---------|
| UTP CAT5e hoặc CAT6 | CFLink Bus giữa các tủ + kết nối ngoại vi | Cáp mạng tiêu chuẩn |
| Cặp dây điện 2×1.5mm² | Cấp nguồn giữa các tủ smarthome | Song song với cáp mạng |
| Cáp điện thoại 4 lõi | Công tắc từ (cảm biến cửa) | Tín hiệu + nguồn |

---

## 2. Cấu Trúc Đi Dây Mạng CFLink (Daisy Chain)

### Sơ đồ tổng thể

```
[Tủ mạng chính (Router/Switch)]
       │
       ├── 1 sợi CAT6 (Ethernet cho LAN Bridge)
       │
[Tủ Smarthome 1 — LAN Bridge + DIN-RY8-N Board 21]
       │
       ├── 2 sợi CAT6 (CFLink Bus)
       ├── 1 cặp dây 2×1.5 (Nguồn 24VDC)
       │
[Tủ Smarthome 2 — DIN-RY8-N Board 22]
       │
       ├── 2 sợi CAT6 + dây 2×1.5
       │
[Tủ Smarthome 3 — DIN-RY8-N Board 23]
       │
       └── (Tiếp tục nối tiếp nếu cần)
```

### Sơ đồ nối chân CFLink BUS

| Chân | Chức năng | Màu dây (tham khảo) |
|------|-----------|-------------------|
| Tx+ | Truyền dữ liệu (+) | Cam/Trắng cam |
| Tx- | Truyền dữ liệu (-) | Cam |
| G | Ground (đất) | Xanh lá/Trắng xanh lá |
| 12-24V | Nguồn cấp cho module | Dây 2×1.5 riêng |

> **Lưu ý:** Bám theo sơ đồ chân chuẩn của hãng. Nếu không chắc chắn → tham khảo tài liệu CommandFusion.

---

## 3. Kéo Dây Thiết Bị Ngoại Vi

| Thiết bị | Dây cần kéo | Từ đâu → Đến đâu |
|----------|------------|-------------------|
| Công tắc 2 chiều (cơ) | 1 sợi CAT5e/CAT6 | Vị trí công tắc tường → Tủ smarthome tương ứng |
| Cửa cuốn / Cổng tự động | 1 sợi CAT5e/CAT6 | Motor cửa → Tủ smarthome |
| IR Blaster | 1 sợi CAT5e/CAT6 | Vị trí IR (gần TV/máy lạnh) → Tủ smarthome |
| Cảm biến chuyển động (PIR) | 2 cặp dây 2×1.5mm² | Vị trí cảm biến → Tủ smarthome |
| Công tắc từ (cảm biến cửa) | Cáp điện thoại 4 lõi | Khung cửa → Tủ smarthome |

---

## 4. Quy Tắc Thi Công

### Cáp CFLink Bus
- Tách khỏi cáp điện 220V ≥ 20cm.
- Dùng ống luồn riêng cho cáp tín hiệu.
- Nhãn dán 2 đầu: `CFLink-[Board From]-[Board To]` (vd: `CFLink-21-22`).
- Không bẻ góc nhọn — bán kính uốn ≥ 5cm.
- Dự phòng 30-50cm tại mỗi đầu cáp.

### Cáp ngoại vi
- Nhãn dán: `[Loại]-[Khu vực]-[Số]` (vd: `SW-PK-01`, `PIR-HL-01`, `IR-PK-01`).
- Kéo về đúng tủ smarthome khu vực.
- Test thông mạch trước khi đấu nối.

---

## 5. Checklist Thi Công CFLink

- [ ] Cáp UTP CAT5e/CAT6 đúng loại.
- [ ] Topology daisy chain — tủ 1 → tủ 2 → tủ 3 (không star).
- [ ] 2 sợi CAT6 + 1 cặp dây 2×1.5 giữa mỗi tủ.
- [ ] Chân CFLink Bus đấu đúng: Tx+, Tx-, G.
- [ ] Nguồn 24VDC đấu đúng cực.
- [ ] Cáp ngoại vi kéo về đúng tủ.
- [ ] Nhãn dán 2 đầu tất cả dây.
- [ ] Test thông mạch trước khi cấp nguồn.
- [ ] Tách cáp tín hiệu khỏi cáp điện 220V.
