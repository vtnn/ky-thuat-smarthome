---
title: "B2.03 — Lắp đặt và đấu nối Module"
description: "Hướng dẫn xác định dây L/N/Load, đấu relay DIN-RY8-N và đấu ngõ vào Dry Contact đúng chuẩn."
module: "b"
level: "2-4"
tags: ["MobiEyes", "DIN-RY8-N", "đấu nối", "relay", "dry contact"]
---

## Mục tiêu
- Đấu đúng dây L/N/Load để relay hoạt động đồng bộ với trạng thái trên ứng dụng.
- Đấu đúng ngõ vào Dry Contact — tuyệt đối không đưa 220V vào input.

---

## 1. Xác định dây trước khi đấu nối

Trước khi chạm vào bất kì đầu dây nào trong tủ, phải xác định chính xác ba loại dây:

- L (Lửa): bút thử điện sáng đèn.
- N (Nguội): bút thử điện không sáng.
- Load: dây từ tủ ra tải (đèn, quạt, rèm...).

Nghe thì đơn giản nhưng trên thực tế, dây trong ống thường không có nhãn màu chuẩn. Thợ điện kéo dây lửa bằng dây xanh, dây nguội bằng dây đỏ là chuyện bình thường. Không bao giờ đoán bằng màu dây, luôn dùng bút thử điện.

---

## 2. Đấu nối Relay (ngõ ra)

Khác với các module thông thường, relay trên DIN-RY8-N được thiết kế để hoạt động tương tự như một **công tắc 2 chiều (công tắc đảo)**. Điều này cho phép hệ thống smarthome can thiệp vào mạch đèn mà vẫn giữ nguyên khả năng điều khiển bộ cơ tại chỗ.

### 2.1. Cách đấu công tắc cơ (Mạch đảo 2 chiều)

Để App và công tắc tay luôn đồng bộ trạng thái, ta bắt buộc phải đấu theo sơ đồ mạch đảo. Nguyên tắc nằm lòng: **Lửa cấp cho công tắc - Tải lấy từ Relay**.

#### ⚡ Tại tủ điện (Đấu vào board DIN-RY8-N)
- **Chân C (Common)**: Bấm đầu cos **Đỏ**, đấu dây Line ra đèn (**Load**). Tuyệt đối không cấp lửa trực tiếp vào chân này.
- **Chân L1 và L2**: Bấm đầu cos **Vàng**, đấu 2 sợi dây đảo kéo từ công tắc hiện trường về.

#### 🔌 Tại hiện trường (Đấu vào công tắc 2 chiều)
- **Chân L (Chân chung)**: Đấu dây **Lửa (L)** trực tiếp từ nguồn điện lưới.
- **Chân 1 và 2**: Đấu 2 sợi dây đảo (màu Vàng) để kéo về tủ điện, nối vào cặp L1-L2 đã chờ sẵn.

Sự kết hợp này biến Relay smarthome và công tắc cơ thành một "cặp bài trùng" đảo chiều cho nhau. Bạn bật App thì đèn sáng, ra nhấn công tắc tay thì đèn tắt — hiện đại mà vẫn giữ nguyên thói quen dùng cơ cho chủ nhà.

> **⚠️ Cảnh báo sai sót:** Nhiều thợ quen tay đấu Lửa trực tiếp vào Relay C. Kết quả là đèn vẫn sáng nhưng App sẽ báo trạng thái "luôn bật" vì App không hiểu được trạng thái của công tắc cơ đang đóng hay mở ở đầu kia. Đấu đúng chuẩn giúp App báo trạng thái chuẩn 100%.

### 2.2. Quy trình kiểm tra chuẩn (Bắt buộc)

Sau khi đấu nối, kỹ thuật viên **bắt buộc** phải thực hiện đúng quy trình 4 bước sau để xác nhận mạch đảo hoạt động hoàn hảo:

1. **Bật công tắc cơ** → Đèn phải **Sáng**.
2. **Bấm nút trên App (hoặc trên module)** → Đèn phải **Tắt**.
3. **Bật lại công tắc cơ** → Đèn phải **Sáng**.
4. **Bấm nút trên App (hoặc trên module)** → Đèn phải **Tắt**.

Nếu thực hiện xuyên suốt 4 bước mà đèn phản hồi chính xác như trên, nghĩa là bạn đã đấu nối đúng sơ đồ mạch đảo. Đây là quy trình chuẩn bắt buộc phải thực hiện và nghiệm thu trước khi bàn giao tủ. Nếu có bất kỳ bước nào đèn không chuyển trạng thái, phải kiểm tra lại dây cặp L1-L2 ngay.

---

## 3. Đấu nối ngõ vào Dry Contact (Input)

Ngõ vào Dry Contact nhận tín hiệu từ công tắc cơ, cảm biến chuyển động (PIR), công tắc từ cửa.

- Chân [–] là COM chung cho toàn bộ 8 kênh input.
- Chân [1] đến [8] là từng kênh riêng biệt.
- Tín hiệu vào phải là tiếp điểm khô — tức là chỉ đóng/ngắt mạch, không có điện áp.

Cấp nhầm 220V vào chân input sẽ cháy bo mạch. Không sửa được, phải thay bo mới. Đây là lỗi đã xảy ra thực tế, đặc biệt khi thợ điện không quen với hệ thống smarthome và tưởng input cũng giống ngõ vào bình thường.

### 3.1. Cách đấu công tắc cơ (Đảo)

Từ công tắc trên tường, kéo cáp CAT5e/CAT6 về tủ. Một sợi đấu vào chân [–] (COM), sợi còn lại đấu vào chân số kênh tương ứng. Khi nhấn công tắc, hai sợi này nối mạch với nhau, bo nhận tín hiệu và kích hoạt rule/macro đã lập trình.

---

## 4. Rèm, cửa cuốn và cổng

Rèm: cần 2 kênh relay trên cùng một board. Một kênh cho hướng mở, một kênh cho hướng đóng. Hai kênh này không được bật cùng lúc (motor chạy hai chiều đồng thời sẽ cháy), nên khi lập trình macro phải có logic đảm bảo tắt kênh này trước khi bật kênh kia.

Cổng và cửa cuốn: kéo cáp CAT6 từ motor về tủ smarthome. Đấu theo sơ đồ của nhà sản xuất motor, thường là COM/OP/CL (chung/mở/đóng). Mỗi loại motor có sơ đồ khác nhau, phải đọc tài liệu motor trước khi đấu.

---

## 5. Checklist đấu nối

- [ ] Ngắt CB trước khi thao tác.
- [ ] Xác định đúng L/N/Load bằng bút thử điện, không đoán theo màu dây.
- [ ] L đấu vào L1/L2, Load đấu vào C đúng kênh.
- [ ] Input chỉ nhận tiếp điểm khô, tuyệt đối không đưa 220V vào.
- [ ] Nguồn 24VDC đúng cực (+/-). Mỗi tủ dùng nguồn riêng biệt.
- [ ] Dây mạng kéo ra mắt hồng ngoại (IR) đã được dán nhãn **"KHÔNG CẮT, THÁO RA"**. PHẢI ĐO KIỂM bằng đồng hồ (thang đo DC) đảm bảo không lọt áp 24V sang chân tín hiệu Tx+/Tx- trước khi cắm nối module.
- [ ] CFLink Bus đấu đúng Tx+/Tx-/G, nhất quán với toàn bộ bus.
- [ ] Test từng kênh relay ngay sau khi đấu xong.

### 5.1. Quy tắc màu đầu cos (ferrule)
Để tủ smarthome chuyên nghiệp và dễ bảo trì, đội thi công phải tuân thủ chuẩn màu đầu cos của công ty khi đấu nối module:

| Loại dây | Màu đầu cos | Ghi chú |
|---|---|---|
| **Line ra đèn (Load)** | Đỏ | Dây từ Relay C ra thiết bị |
| **Dây nguội (Neutral)** | Đen / Xanh dương | Dây N chung |
| **Dây công tắc (Switch)** | Vàng | Dây từ công tắc về L1-L2 của Relay |

- [ ] Bấm đầu cos (ferrule) đúng chuẩn màu: Đỏ (Load), Đen/Xanh dương (N), Vàng (Switch).
- [ ] Có bảng mapping dán trong tủ trước khi đóng nắp.
