---
title: "B1.05 — Lập trình kịch bản LifeSmart (AI Builder)"
description: "Giải thích Scene, Trigger, Condition, Action và hướng dẫn tạo kịch bản tự động bằng AI Builder kèm ví dụ chi tiết từ công trình thật."
module: "b"
level: "4-6"
tags: ["LifeSmart", "kịch bản", "tự động hóa", "AI Builder"]
---

## Mục tiêu
- Hiểu rõ các thành phần của kịch bản tự động: Scene, Trigger, Condition, Action.
- Tạo được kịch bản bằng AI Builder (kéo thả, không cần viết code).
- Biết cách test và bàn giao kịch bản hoàn chỉnh cho khách hàng.

---

## Scene là gì?

Trong hệ thống LifeSmart, Scene (hay Smart) là cách để nhiều thiết bị cùng phản ứng chỉ bằng một thao tác duy nhất. Thay vì mở app tắt từng đèn, từng điều hòa, chỉ cần nhấn nút "Đi ngủ" là xong.

Nói đơn giản: Scene là một nhóm lệnh gom lại, chạy cùng lúc hoặc chạy theo trình tự khi có điều kiện kích hoạt.

---

## Các thành phần trong kịch bản

Mỗi kịch bản trong AI Builder gồm 3 phần chính:

**Trigger** — điều kiện kích hoạt. Khi trigger xảy ra, hệ thống biết là đến lúc chạy kịch bản. Có 3 loại:

- Theo thời gian: hẹn giờ, đếm ngược, khung giờ cụ thể.
- Theo cảm biến: chuyển động, mở cửa, thay đổi nhiệt độ, thay đổi độ sáng.
- Theo thao tác thủ công: nhấn nút trên remote hoặc trên màn hình Nature.

**Condition** — điều kiện lọc (không bắt buộc). Sau khi trigger xảy ra, hệ thống kiểm tra thêm condition trước khi chạy action. Ví dụ: cảm biến phát hiện chuyển động (trigger) nhưng chỉ bật đèn nếu trời đã tối (condition).

**Action** — hành động thực thi. Là lệnh gửi đến thiết bị: bật, tắt, chỉnh nhiệt độ, kéo rèm, gửi thông báo.

---

## Kịch bản phổ biến trong nhà ở

Gần như dự án nào cũng cần cài sẵn 3 kịch bản cơ bản sau. Kỹ thuật viên nên cài trước rồi cho khách hàng tùy chỉnh thêm.

### Về nhà

Khi bước vào nhà, hệ thống tự bật đèn lối vào, hành lang, phòng khách. Nếu dự án có khóa thông minh, trigger có thể là lúc mở khóa cửa chính.

Trigger gợi ý: cảm biến cửa chính mở, hoặc mở khóa Yale.
Action: bật đèn hành lang, đèn phòng khách, bật điều hòa phòng khách.

### Ra ngoài

Khi rời khỏi nhà, tắt hết đèn đang sáng, tắt điều hòa, bật chế độ an ninh.

Trigger gợi ý: nhấn nút "Ra ngoài" trên Nature hoặc trên remote.
Action: tắt toàn bộ đèn, tắt điều hòa, chuyển DEFED sang chế độ giám sát.

### Đi ngủ

Tắt đèn sinh hoạt chung, chỉnh điều hòa chế độ ngủ, bật an ninh ban đêm.

Trigger gợi ý: nhấn nút "Đi ngủ" trên Nature đầu giường.
Action: tắt đèn phòng khách + bếp + hành lang, chỉnh điều hòa phòng ngủ ở 26 độ + quạt nhẹ, bật giám sát cảm biến cửa tầng trệt.

---

## Tạo kịch bản bằng AI Builder (bước chi tiết)

### Ví dụ: có chuyển động bật đèn hành lang ban đêm

Kịch bản: khi bước vào hành lang ban đêm, cảm biến chuyển động nhận diện và bật đèn. Ban ngày thì không bật (vì đã đủ sáng tự nhiên).

Bước 1 — Tạo kịch bản mới:
Mở ứng dụng LifeSmart → vào trang Smart → nhấn dấu "+" góc trên bên phải → chọn "Create AI" → chọn "Add New Smart" → chọn "Create Empty" → đặt tên: "Bật đèn HL ban đêm" → nhấn "Graphic Edit" để vào giao diện kéo thả.

Bước 2 — Thêm khối điều khiển:
Nhấn biểu tượng khối ở góc dưới bên trái → chọn "device control". Sẽ thấy một tổ hợp 3 khối: trigger, action, device.

Bước 3 — Cài trigger:
Bấm vào khối trigger → vào phần cài đặt → mục Device IO → chọn cảm biến chuyển động hành lang (Motion Sensor HL) → thiết lập điều kiện: "phát hiện chuyển động".

Bước 4 — Thêm condition (ban đêm):
Nhấn thêm khối condition từ menu → chọn loại "Time" → thiết lập khung giờ: từ 18:00 đến 06:00. Kết nối khối condition vào giữa trigger và action.

Bước 5 — Cài action:
Bấm vào khối action → chọn "On/Off" → đánh dấu "Turn On". Ở khối device → chọn đèn hành lang.

Bước 6 — Lưu:
Bấm mũi tên quay lại → lưu kịch bản. Kịch bản sẽ hiển thị trên trang Smart.

### Ví dụ: mở cửa kho tự bật đèn, đóng cửa tự tắt

Kho thường không có công tắc tiện tay. Gắn cảm biến cửa rồi lập 2 kịch bản:

Kịch bản 1 — "Mở cửa kho bật đèn":
- Trigger: cảm biến cửa kho → trạng thái "Open"
- Action: bật đèn kho

Kịch bản 2 — "Đóng cửa kho tắt đèn":
- Trigger: cảm biến cửa kho → trạng thái "Close"
- Action: tắt đèn kho (có thể thêm delay 10 giây để đèn không tắt ngay khi vừa đóng cửa)

### Ví dụ: bật đèn cầu thang tự tắt sau 3 phút

Cầu thang biệt thự hay gặp tình huống đèn bật quên tắt. Dùng cảm biến chuyển động kết hợp timer:

- Trigger: cảm biến chuyển động cầu thang → phát hiện chuyển động
- Action 1: bật đèn cầu thang
- Action 2 (delay 180 giây): tắt đèn cầu thang

Cách thêm delay: trong AI Builder, bấm vào khối action thứ 2, ở phần cài đặt sẽ có mục "Delay". Nhập 180 giây.

---

## Kết hợp nhiều trigger và condition

Trong thực tế, nhiều kịch bản cần kết hợp trigger với condition để tránh chạy sai ngữ cảnh.

### Chuyển động + ban đêm

Đã trình bày ở ví dụ trên. Trigger là chuyển động, condition là khung giờ 18:00-06:00. Ban ngày đi qua hành lang thì đèn không bật.

### Chuyển động + không có ai trong nhà

Kịch bản an ninh: khi bật chế độ vắng nhà, cảm biến phát hiện chuyển động thì gửi cảnh báo + chụp ảnh camera.

- Trigger: cảm biến chuyển động bất kỳ → phát hiện chuyển động
- Condition: DEFED đang ở chế độ giám sát (Arm)
- Action: gửi push notification + camera chụp snapshot

### Nhiệt độ + có người

Phòng họp công ty: chỉ bật điều hòa khi có người trong phòng và nhiệt độ trên 28 độ.

- Trigger: cảm biến hiện diện → có người
- Condition: cảm biến nhiệt/độ ẩm → nhiệt độ trên 28 độ
- Action: bật điều hòa, chỉnh 24 độ

---

## Lưu ý khi lập trình

### Tránh kịch bản xung đột

Ví dụ hay gặp: kịch bản A bật đèn khi mở cửa, kịch bản B tắt toàn bộ đèn khi không phát hiện chuyển động trong 5 phút. Nếu cửa mở nhưng người đứng yên — đèn bật rồi 5 phút sau tắt, rồi lại bật vì cửa vẫn mở. Thiết bị nhấp nháy liên tục.

Cách tránh: khi tạo kịch bản mới, rà lại danh sách kịch bản cũ xem có cái nào cùng tác động đến thiết bị đó không. Nếu có, thêm condition hoặc sửa lại trigger để tránh chạy đồng thời.

### Test đủ ngữ cảnh

Không chỉ test một lần rồi xong. Phải kiểm tra:
- Ban ngày và ban đêm
- Có người và không có người
- Mất mạng (kịch bản chạy local hay qua cloud?)
- Mất điện rồi có lại (kịch bản có tự khởi động lại không?)

Nhiều kịch bản chỉ sai vào ban đêm hoặc chỉ sai khi WiFi chập chờn. Nếu không test cả hai điều kiện thì bàn giao xong khách hàng gọi lại ngay.

### Ưu tiên CoSSLink cho độ trễ thấp

Nếu kịch bản chỉ liên quan đến các thiết bị trên cùng một Smart Station, nên dùng CoSSLink (xử lý cục bộ) thay vì qua cloud. Bấm nút tắt đèn mà phải chờ 2-3 giây vì đi vòng qua internet sẽ khiến khách hàng khó chịu. CoSSLink phản hồi gần như tức thì, và vẫn chạy dù mất mạng.

### Đặt tên kịch bản rõ ràng

Không đặt tên kiểu "Scene 1", "Test 2". Đặt tên mô tả được mục đích:
- "Về nhà bật đèn tầng trệt"
- "Đi ngủ tắt đèn PK"
- "Chuyển động HL bật đèn"

Khi danh sách kịch bản lên 20-30 cái, nếu tên không rõ thì không ai biết cái nào làm gì.

---

## Lỗi thường gặp khi lập trình scene

| Lỗi | Nguyên nhân | Cách xử lý |
|---|---|---|
| Kịch bản không chạy | Chưa bật kịch bản (nút toggle trên trang Smart) | Kiểm tra toggle, bật lên |
| Trigger đúng nhưng action không chạy | Thiết bị mất kết nối hoặc chưa thêm đúng device vào action | Kiểm tra thiết bị, ghép nối lại nếu cần |
| Kịch bản chạy sai giờ | Múi giờ Smart Station sai | Vào Setting → Time Zone → chọn UTC+7 |
| Đèn nhấp nháy liên tục | Hai kịch bản xung đột (một bật, một tắt cùng thiết bị) | Rà lại danh sách kịch bản, thêm condition hoặc xóa cái thừa |
| Delay không hoạt động | Đặt delay ở sai vị trí trong flow | Đặt delay trước action cần trì hoãn, không phải sau |
| Kịch bản chạy khi mất mạng thì không, có mạng thì chạy | Kịch bản đang chạy qua cloud thay vì local | Chuyển sang CoSSLink nếu thiết bị cùng Smart Station |

---

## Checklist trước khi bàn giao kịch bản

Trước khi khóa cấu hình và bàn giao cho khách hàng, kiểm tra:

- [ ] Danh sách kịch bản đã đặt tên rõ nghĩa
- [ ] Các kịch bản cơ bản đã cài: Về nhà, Ra ngoài, Đi ngủ
- [ ] Đã test ban ngày lẫn ban đêm
- [ ] Đã test khi có mạng và khi mất mạng
- [ ] Không có kịch bản xung đột
- [ ] Múi giờ Smart Station đúng (UTC+7)
- [ ] Cho khách hàng xem qua toàn bộ kịch bản và xác nhận
- [ ] Hướng dẫn khách cách bật/tắt từng kịch bản trên app

Thay đổi sau bàn giao phức tạp hơn nhiều. Nếu khách hàng muốn chỉnh lại logic, kỹ thuật phải quay lại hiện trường hoặc hướng dẫn từ xa — cả hai đều tốn thời gian.
