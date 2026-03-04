---
title: "B2.02 — Thi công kết nối CFLink"
description: "Cấu trúc đi dây nối tiếp và hình sao, sơ đồ nối chuẩn CFLink Bus và nguyên tắc nhãn dán."
module: "b"
level: "2-4"
tags: ["MobiEyes", "CFLink", "RS485", "thi công", "đi dây"]
---

## Mục tiêu
- Đi dây đúng kiểu nối tiếp hoặc hình sao tuỳ vào từng dự án.
- Thuộc sơ đồ nối chân Tx+/Tx-/G để tránh chập tín hiệu.

---

## 1. Cáp sử dụng

Thi công CFLink cần hai loại cáp chạy song song:

- Cáp mạng UTP CAT5e hoặc CAT6: truyền tín hiệu CFLink Bus giữa các tủ, đồng thời dùng cho kết nối ngoại vi (công tắc, cảm biến về tủ).
- Dây điện 2×1.5mm²: cấp nguồn 220VAC song song với cáp tín hiệu giữa các tủ (điện dự phòng).

Tại sao dùng cáp mạng cho tín hiệu mà không dùng cáp chuyên dụng RS485? Vì cáp mạng CAT6 có nhiều đôi dây xoắn sẵn, chống nhiễu tốt, giá rẻ và dễ mua. Thực tế trên công trường, dùng CAT6 là lựa chọn kinh tế và hiệu quả nhất.

---

## 2. Cấu trúc đi dây

Hệ thống MobiEyes hỗ trợ linh hoạt cả hai kiểu đi dây tùy theo yêu cầu dự án:

1. Nối tiếp: kéo từ tủ này qua tủ khác (Tủ chính → Tủ 2 → Tủ 3). Thích hợp khi các tủ nằm trên một trục thẳng, tiết kiệm đường cáp.
2. Hình sao: kéo độc lập từ mỗi tủ phụ về điểm tụ ở tủ trung tâm. An toàn hơn cho dự án rộng vì đứt nhánh nào thì chỉ nhánh đó mất, các nhánh khác vẫn chạy bình thường.

Thợ thi công thường có thói quen kéo dây hình sao giống hệt khi làm mạng LAN. Cứ yên tâm cho triển khai, nền tảng thiết bị bản mới nhất hoàn toàn ổn định với cả hai kiểu đấu nối này.

### 2.1. Sơ đồ nối chân CFLink Bus

Do hệ thống mới chạy tín hiệu kèm nguồn một chiều ngay trên dây mạng, ta áp dụng sơ đồ lõi chuẩn sau:

| Chân | Chức năng | Màu dây chuẩn (CAT5e/CAT6) |
|---|---|---|
| Tx+ | Dữ liệu (+) | Trắng Dương |
| Tx- | Dữ liệu (-) | Dương |
| G | GND (Mass) | Cặp Cam |
| 24V+ | Nguồn (+) | Cặp Lá |
| 24V- | Nguồn (-) | Cặp Nâu |

Chân Tx+ và Tx- phải nhất quán xuyên suốt toàn bộ dự án. Nếu tủ 1 đấu Tx+ vào sợi Trắng Dương thì 100% các tủ còn lại phải làm y chang. Lộn âm dương (Tx+ cắm vào Tx-) là cả tuyến đi theo sau sẽ đứt kết nối hoàn toàn.

> CẢNH BÁO TỪ THỰC TẾ CÔNG TRƯỜNG:
> Việc cấp nguồn 24V đi chung trên dây mạng (theo sơ đồ Cặp Lá / Cặp Nâu ở trên) chỉ áp dụng riêng cho dây mạng kéo ra module hồng ngoại (IR). Các thiết bị còn lại và bản thân mỗi tủ phải có bộ nguồn riêng độc lập.
> Tuyệt đối không được cắt, tháo ra hay đấu lộn dây mạng của IR. Nếu chẳng may cắt nhầm, hay bấm lộn khiến điện áp 24V từ dây Cặp Lá/Nâu chạm chập qua dây tín hiệu Tx+/Tx-, bo mạch trung tâm sẽ cháy hỏng ngay lập tức. Đã có quá nhiều trường hợp phải đền thiết bị do chủ quan vấn đề này.
> Vì vậy: luôn phải dán nhãn cố định "KHÔNG ĐƯỢC CẮT, THÁO RA" lên cáp cấp cho IR, và trước khi cắm dây vào cụm thiết bị, phải dùng đồng hồ đo điện (đo một chiều) kiểm tra kỹ lưỡng các chân tín hiệu xem có vô tình lẫn điện không.

---

## 3. Nguyên tắc thi công

### 3.1. Tách cáp tín hiệu khỏi cáp điện

Cáp tín hiệu CFLink phải cách cáp điện 220V ít nhất 20cm. Không đi chung ống, không bó chung dây. Nhiễu từ dây 220V là nguyên nhân hàng đầu gây ra hiện tượng relay nhảy loạn, ngõ vào không nhạy trên thực tế.

### 3.2. Uốn cáp

Bán kính uốn tối thiểu 5cm. Không bẻ góc nhọn, không dùng kẹp siết quá chặt vào cáp mạng. Cáp mạng bị gập sẽ đứt lõi bên trong mà mắt thường không thấy, test thông mạch vẫn qua nhưng tín hiệu bị suy hao.

### 3.3. Nhãn dán dây

Dây không dán nhãn thì khi bảo trì sau này sẽ mất hàng giờ để dò lại. Quy tắc dán:

- Cáp Bus giữa các tủ: `CFLink-[Board Nguồn]-[Board Đích]` (ví dụ: `CFLink-21-22`)
- Cáp ngoại vi: `[Loại]-[Khu vực]-[Số]` (ví dụ: `SW-PK-01` cho công tắc phòng khách số 1)

### 3.4. Dự phòng chiều dài

Để thừa 30-50cm dây tại mỗi đầu tủ. Dây cắt vừa khít nhìn gọn nhưng khi cần tháo ra đấu lại thì không đủ chiều dài, phải nối thêm hoặc kéo lại từ đầu.

---

## 4. Checklist thi công

- [ ] Đi dây nối tiếp hoặc hình sao tuỳ theo bản vẽ thiết kế dự án.
- [ ] Đấu đúng Tx+, Tx-, G — nhất quán trên toàn bộ bus.
- [ ] Nguồn 24V đúng cực (+/-), dây riêng biệt với cáp tín hiệu.
- [ ] Cáp tín hiệu cách cáp điện 220V ít nhất 20cm.
- [ ] Tất cả đầu dây có nhãn dán rõ ràng.
- [ ] Test thông mạch cáp mạng trước khi cấp điện.
- [ ] Để thừa 30-50cm dây tại mỗi đầu tủ.
