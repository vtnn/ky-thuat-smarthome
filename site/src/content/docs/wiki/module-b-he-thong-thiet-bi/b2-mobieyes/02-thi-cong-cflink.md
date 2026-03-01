---
title: "B2.02 — Thi công kết nối CFLink"
description: "Cấu trúc đi dây Daisy Chain, sơ đồ nối chân CFLink Bus và nguyên tắc nhãn dán dây ngoại vi."
module: "b"
level: "2-4"
tags: ["MobiEyes", "CFLink", "RS485", "thi công", "topology"]
---

## Mục tiêu
- Đảm bảo đi dây đúng **Topology Daisy Chain** (không đi hình sao).
- Thuộc sơ đồ nối chân Tx+/Tx-/G để tránh chập tín hiệu.

---

## 1. Cáp sử dụng thi công

- **UTP CAT5e/CAT6:** Dùng cho CFLink Bus giữa các tủ và kết nối ngoại vi.
- **Dây điện 2×1.5mm²:** Cấp nguồn 24VDC song song với cáp tín hiệu giữa các tủ.

---

## 2. Cấu trúc đi dây (Daisy Chain)

Hệ thống phải được nối nối tiếp từ tủ này sang tủ khác:
`Tủ chính (LAN Bridge) ↔ Tủ 2 (DIN-RY8) ↔ Tủ 3 (DIN-RY8) ↔ ...`

### 2.1. Sơ đồ nối chân CFLink Bus
| Chân | Chức năng | Màu dây gợi ý |
|---|---|---|
| **Tx+** | Dữ liệu (+) | Cam/Trắng cam |
| **Tx-** | Dữ liệu (-) | Cam |
| **G** | Ground | Xanh lá |
| **12-24V** | Nguồn cấp | Dây 2×1.5 riêng |

---

## 3. Quy tắc thi công & Nhãn dán

1. **Tách nguồn:** Cáp tín hiệu CFLink cách cáp điện 220V ≥ 20cm.
2. **Uốn cong:** Bán kính uốn ≥ 5cm, không bẻ góc nhọn.
3. **Nhãn dán (Label):**
    - Cáp Bus: `CFLink-[Board Nguồn]-[Board Đích]`
    - Ngoại vi: `[Loại]-[Khu vực]-[Số]` (VD: `SW-PK-01` cho Công tắc Phòng Khách).
4. **Dự phòng:** Để thừa 30–50cm tại mỗi đầu tủ để thuận tiện đấu nối/sửa chữa.

---

## 4. Checklist thi công
- [ ] Đi dây Daisy Chain đúng sơ đồ.
- [ ] Đấu đúng Tx+, Tx-, G; nguồn 24V đúng cực (+/-).
- [ ] Tất cả đầu dây có nhãn dán rõ ràng.
- [ ] Test thông mạch cáp mạng trước khi cấp điện.
