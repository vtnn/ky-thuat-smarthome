---
title: "A1 — Đọc bản vẽ kỹ thuật"
description: "Cách đọc và ưu tiên các loại bản vẽ để thi công đúng ngay từ đầu."
module: "a"
level: "2-6"
tags: ["bản vẽ", "sơ đồ nguyên lý", "smarthome", "camera", "wifi", "điện nhẹ"]
---

## Mục tiêu
- Phân biệt được bản vẽ nguyên lý (logic kết nối) và bản vẽ mặt bằng (vị trí thi công), rồi đọc đúng thứ tự.
- Tránh sai lệch hạ tầng do đọc nhầm bản vẽ hoặc dùng bản cũ.

---

![Kỹ thuật viên đối chiếu bản vẽ nguyên lý với tủ điện thực tế tại công trường](../../../../assets/images/a1-hero-doc-ban-ve.png)
<p class="hero-image-caption">Đọc nguyên lý trước, mặt bằng sau — sai thứ tự là sửa cả ngày.</p>

## 1. Tại sao phải đọc đúng thứ tự?

Lỗi phổ biến nhất ở công trường là thợ cầm bản vẽ mặt bằng rồi bắt tay thi công luôn. Nhìn thấy vị trí công tắc, ổ cắm thì bắt đầu đục, khoan. Kết quả là đi dây xong mới phát hiện luồng tín hiệu Bus sai, hoặc đường mạng đấu nhầm Switch.

Nguyên tắc đơn giản: đọc nguyên lý trước, mặt bằng bố trí sau. Nguyên lý cho biết các thiết bị nói chuyện với nhau kiểu gì. Mặt bằng cho biết đặt chúng ở đâu. Hiểu logic trước rồi mới thi công vị trí.

| Thứ tự | Loại bản vẽ | Đọc để làm gì |
|:---:|---|---|
| 1 | Bản vẽ nguyên lý | Nắm tổng thể hệ thống: thiết bị nào cấp nguồn cho thiết bị nào, tín hiệu đi theo đường nào. |
| 2 | Bản vẽ Smarthome | Xem vị trí từng thiết bị Smarthome và đường dây tín hiệu Bus theo khu vực. |
| 3 | Bản vẽ Camera & WiFi | Xác định chỗ đặt Camera, NVR, Switch PoE và vùng phủ sóng AP. |
| 4 | Bản vẽ Điện nhẹ | Chốt hạ tầng điểm chờ: công tắc, ổ cắm, hộp âm, đường ống thô. |

---

## 2. Quy trình đọc bản vẽ (5 bước)

Trước khi đọc bất kỳ bản vẽ nào, kiểm tra phiên bản. Nghe thì hiển nhiên nhưng trên thực tế, cầm nhầm bản cũ trong khi đội thiết kế đã phát hành bản mới là chuyện xảy ra liên tục.

1. Kiểm tra ngày phát hành và số phiên bản trên khung tên bản vẽ. Nếu không trùng với bản mới nhất từ thiết kế, dừng lại và xin lại bản đúng.
2. Mở sơ đồ nguyên lý trước. Tìm điểm tập trung (tủ điện, tủ mạng) và vẽ lại trong đầu cách các thiết bị trung tâm liên kết với nhau. Bước này mất khoảng 10-15 phút nhưng tiết kiệm cả ngày sửa sai.
3. Sau đó mới mở mặt bằng. Đọc theo luồng thi công: từ tầng thấp lên tầng cao, hoặc theo khu vực ưu tiên mà quản lý đã chỉ định.
4. Đối chiếu danh mục thiết bị (BOM) với ký hiệu trên bản vẽ. Kiểm tra model và số lượng có khớp không. Ví dụ: bản vẽ ghi Switch 24 port nhưng BOM ghi 16 port thì phải hỏi lại ngay.
5. Ra thực địa đánh dấu vị trí. Nếu vị trí bản vẽ bị vướng nội thất, dầm, hoặc đường ống nước thì báo quản lý trước khi đục. Đục rồi mới báo thì coi như chậm ít nhất nửa ngày.

---

## 3. Đi dây: mấy lỗi hay gặp

Cáp mạng (Cat6/Cat5e) phải đi riêng ống và cách cáp điện động lực tối thiểu 30 cm. Đi gần hơn sẽ bị nhiễu, test cáp vẫn pass nhưng khi chạy tải thực thì mất gói hoặc tốc độ tụt.

Bus KNX và CFLinks cũng đi riêng ống. Quan trọng hơn là phải đấu đúng kiểu mà bản vẽ thiết kế, ví dụ kiểu nối tiếp thì đấu lần lượt từ thiết bị này sang thiết bị kế tiếp chứ không rẽ nhánh tự do.

Cáp DALI thì khác, có thể đi chung ống với dây nguồn 220V nếu dây đạt chuẩn cách điện. Nhưng thực tế nên hỏi lại thiết kế trước khi đi chung, vì mỗi dự án có yêu cầu khác nhau.

---

## 4. Bản vẽ tham khảo

| Loại | File PDF |
|---|---|
| Nguyên lý | [Ban_ve_nguyen_ly.pdf](/drawings/Ban_ve_nguyen_ly.pdf) |
| Smarthome | [Ban_ve_Smarthome.pdf](/drawings/Ban_ve_Smarthome.pdf) |
| Camera & WiFi | [Ban_ve_Camera.pdf](/drawings/Ban_ve_Camera.pdf) |
| Điện nhẹ | [Ban_ve_dien_nhe.pdf](/drawings/Ban_ve_dien_nhe.pdf) |

---

## 5. Checklist trước thi công

- [ ] Bản vẽ đúng phiên bản mới nhất (kiểm tra khung tên bản vẽ).
- [ ] Đã đọc sơ đồ nguyên lý và hiểu luồng tín hiệu chính.
- [ ] Đã ra thực địa đối chiếu vị trí tường, trần, chướng ngại vật.
- [ ] Đã báo quản lý các điểm sai lệch hoặc xung đột giữa bản vẽ và thực tế.
