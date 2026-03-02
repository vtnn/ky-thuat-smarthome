---
title: "B1.05 — Lập trình kịch bản LifeSmart (AI Builder)"
description: "Giải thích Scene, Trigger và hướng dẫn tạo kịch bản tự động bằng AI Builder kèm ví dụ chi tiết."
module: "b"
level: "4-6"
tags: ["LifeSmart", "kịch bản", "tự động hóa", "AI Builder"]
---

## Mục tiêu
- Hiểu Scene (kịch bản) và Trigger (điều kiện kích hoạt) là gì.
- Tạo được kịch bản tự động bằng AI Builder theo kiểu kéo thả, không cần viết code.

---

## 1. Scene là gì?

Trong hệ thống LifeSmart, Scene (hoặc Smart) là tính năng cho phép thiết lập tự động hóa cho các thiết bị thông minh. Thay vì phải bật tắt từng thiết bị bằng tay, Scene liên kết nhiều thiết bị lại với nhau để chúng cùng hoạt động chỉ bằng một nút bấm hoặc một lệnh duy nhất.

Ví dụ: nhấn nút "Đi ngủ" thì tất cả đèn tắt, điều hòa chuyển chế độ ngủ, camera bật lên. Không cần mở ứng dụng tắt từng cái.

---

## 2. Một số kịch bản phổ biến

Về nhà: khi bước vào nhà, hệ thống tự bật đèn lối vào, hành lang, nhà bếp hoặc sáng toàn bộ tầng trệt.

Ra ngoài: khi rời khỏi nhà, hệ thống tự tắt toàn bộ đèn đang sáng trong nhà.

Đi ngủ: tắt các đèn ở không gian sinh hoạt chung, chỉnh điều hòa chế độ ngủ, bật hệ thống an ninh ban đêm.

Đây là 3 kịch bản gần như dự án nào cũng cần. Thường sẽ cài sẵn rồi cho khách hàng chỉnh thêm theo ý thích.

---

## 3. Trigger là gì?

Trigger (điều kiện kích hoạt) là sự kiện đầu vào. Khi điều kiện này được thỏa mãn, hệ thống sẽ chạy kịch bản đã lập trình sẵn.

Có 3 loại Trigger chính:

- Theo thời gian: chạy vào khung giờ cụ thể, hẹn giờ, đếm ngược hoặc trì hoãn.
- Theo cảm biến: kích hoạt khi nhiệt độ thay đổi, phát hiện chuyển động, có người mở cửa, ánh sáng thay đổi.
- Theo thao tác thủ công: nhấn nút trên điều khiển từ xa hoặc trên màn hình Nature.

---

## 4. Ví dụ: lập trình "Có chuyển động bật đèn"

Kịch bản này: khi bước vào phòng, cảm biến chuyển động nhận diện và tự bật đèn. Dùng AI Builder trên ứng dụng LifeSmart để tạo.

### Các bước thực hiện

1. Mở ứng dụng, vào trang Smart, nhấn dấu "+" ở góc trên bên phải, chọn "Create AI" rồi chọn "Add New Smart".

2. Chọn "Create Empty", đặt tên cho kịch bản (ví dụ: "Có chuyển động bật đèn"), sau đó nhấn "Graphic Edit" để vào giao diện kéo thả.

3. Nhấn vào biểu tượng khối ở góc dưới bên trái, chọn "device control" (điều khiển thiết bị). Sẽ thấy một tổ hợp khối gồm 3 phần: trigger (điều kiện), action (hành động) và device (thiết bị).

4. Cài đặt Trigger: bấm vào khối trigger, vào phần cài đặt. Tại mục Device IO, chọn cảm biến chuyển động (Motion Sensor) và thiết lập điều kiện là "phát hiện chuyển động".

5. Cài đặt hành động: bấm vào khối action, chọn "On/Off", đánh dấu "Turn On" (bật). Ở khối device cuối cùng, chọn công tắc hoặc bóng đèn muốn bật.

6. Bấm mũi tên quay lại và lưu. Kịch bản hoàn thành và sẽ hiển thị trên trang Smart.

---

## 5. Lưu ý khi lập trình

Tránh tạo 2 kịch bản xung đột. Ví dụ: kịch bản A bật đèn khi mở cửa, kịch bản B tắt đèn khi mở cửa. Cả hai kích hoạt cùng lúc và thiết bị sẽ nhấp nháy liên tục.

Test đủ các trường hợp: ban ngày lẫn ban đêm, có người và không có người. Có kịch bản chỉ sai vào ban đêm hoặc chỉ sai khi không ai ở nhà.

Trước khi khóa cấu hình và bàn giao, cho khách hàng xem qua toàn bộ kịch bản và xác nhận. Thay đổi sau bàn giao phức tạp hơn nhiều.
