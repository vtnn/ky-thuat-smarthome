---
title: "B1.01a — Dòng thiết bị SUBLIME"
description: "Giới thiệu chuyên sâu về dòng công tắc cao cấp SUBLIME của LifeSmart dành cho đội ngũ kỹ thuật và bán hàng."
module: "b"
level: "2-6"
tags: ["LifeSmart", "SUBLIME", "công tắc", "cao cấp"]
---

## Mục tiêu
- Nắm bắt điểm nhấn thiết kế và công nghệ lõi của dòng SUBLIME để tư vấn khách hàng cao cấp.
- Hiểu cấu trúc các phân khúc, khả năng tùy biến vật liệu và thông số các Actuator để triển khai kỹ thuật chuẩn xác.

---

![Dòng thiết bị cao cấp SUBLIME](../../../../../assets/images/01a-dong-sublime/01-danh-sach-thiet-bi-sublime.jpg)
<p class="hero-image-caption">Dòng SUBLIME: Tái định nghĩa không gian bằng bộ sưu tập nâng tầm công nghệ và chế tác mặt viền.</p>

Dòng SUBLIME không đơn giản là công tắc treo tường. Đây là sự kết hợp giữa công nghệ thông minh và vẻ đẹp nghệ thuật, hướng tới phân khúc biệt thự và căn hộ cao cấp.

## 1. Công nghệ lõi và cấu trúc phần cứng

Điểm nhấn kỹ thuật lớn nhất nằm ở cấu trúc chèn mô-đun đa lớp. Phần rơ-le chịu tải (đế âm) và mặt hiển thị được tách bạch hoàn toàn, giúp anh em thi công đấu nối dây và kiểm tra tải rơ-le trước. Đợi công trình qua giai đoạn bả sơn sạch sẽ rồi mới ráp mặt phím lên — tránh hư hao bề mặt. Hệ thống tương thích kép với cả bo mạch chạy mạng dây và không dây nên dễ kết hợp trong cùng một căn nhà.

## 2. Thông số các phân khúc mặt công tắc

Hãng chia rành mạch các dải sản phẩm theo kích thước để anh em thả đế âm và đi cáp cho chuẩn ngay từ lúc làm thô:

| Phân khúc | Kích thước | Đặc điểm |
|---|---|---|
| The Line | 516×42 mm | Dạng thanh dài, gom chung phím cơ, màn hình và đầu cấp nguồn USB-C |
| Classic | 86×86 mm | Lắp vừa y đế âm vuông, trụ cột ở các khu vực sinh hoạt chung. Có thể tích hợp thêm mặt cắm LAN |
| Standard | 86×150 mm | Đế âm chữ nhật, phổ biến nhất cho căn hộ chung cư cao cấp |
| Bedside | Theo cấu hình | Chuyên cho cụm tủ đầu giường, cho phép tùy chọn rời mô-đun cấp nguồn và điều khiển |
| Air | 86×86 mm | Siêu mỏng chỉ 3.7 mm, lắp nổi tường |
| Pro | 172×150 mm | Bảng tích hợp phím cứng với màn hình lớn. Yêu cầu tính toán đế chôn tường chuẩn xác |
| Max | 258×150 mm | Bảng lai phím cứng + màn hình, phù hợp phòng khách lớn |
| Ultra | 316×170 mm | Bảng chỉ huy lớn nhất, trang bị màn hình 12.3 inch. Có thể vẽ toàn bộ mô hình nhà để điều khiển (RoomMap) |

Về chất liệu, mặt viền hoàn toàn có thể đặt tùy chỉnh riêng. Từ kim loại khắc CNC (Elite, Premium, Signature) cho đến ốp gỗ, bọc da theo đúng yêu cầu thiết kế nội thất, ẩn giấu hẳn công tắc vào kiến trúc căn biệt thự.

## 3. Cấu trúc Actuator và giao thức CoSS cục bộ

Điều làm nên sự khác biệt của SUBLIME chính là kiến trúc tách rời giữa mặt hiển thị (Panel) và mô-đun chấp hành (Actuator). Hai thành phần này giao tiếp với nhau qua các chân ma trận tiếp điểm mạ vàng chống nhiễu.

### 3.1. Đấu nối Actuator (phần âm tường)

Actuator đóng vai trò như một mini rơ-le chịu tải điện lưới trực tiếp (220V). Anh em kỹ thuật lưu ý:

- Phải cấp đủ dây L (lửa) và N (nguội) để nuôi màn hình.
- Siết thật chặt ốc tại các lỗ chia tải để ngăn hồ quang điện. Siết lỏng thì lúc chạy tải lớn rất dễ phát sinh tia lửa.
- Không để bụi hay thạch cao rơi vào dàn chân tiếp điểm. Đây là cầu nối duy nhất cấp nguồn một chiều nhỏ và truyền tín hiệu điều khiển lên mặt cảm ứng.

### 3.2. Quy trình ghép nối thiết bị vào mạng

Để SUBLIME nhận diện được bộ điều khiển trung tâm, thao tác theo các bước sau:

1. Tháo mặt nạ ngoài ra để lộ phần Actuator trên tường.
2. Tìm nút ghép nối trên mặt Actuator.
3. Nhấn và giữ nút này hơn 5 giây cho đến khi đèn trạng thái bắt đầu nhấp nháy (chế độ chờ ghép nối).
4. Mở ứng dụng LifeSmart → dấu "+" → Thêm thiết bị mới → chọn dòng SUBLIME và chờ ứng dụng nhận thiết bị.

![Hướng dẫn tháo mặt và nhấn nút ghép nối](../../../../../assets/images/01a-dong-sublime/Actuator%204%20gang%200005_00000.png)
<p class="hero-image-caption">Vị trí nút nhấn cứng trên Actuator âm tường.</p>

### 3.3. Cấu hình gán định nghĩa phím

Ngay sau khi thiết bị hiện lên ứng dụng, anh em phải cài luồng hoạt động cho từng phím cơ/cảm ứng:

1. Vào trang điều khiển màn hình → bấm biểu tượng bánh răng (cài đặt).
2. Nhấn vào mục cấu hình phím để đổi tên gợi nhớ (ví dụ: Đèn Trần, Rèm Cửa) và thay biểu tượng tương ứng.
3. Khi gán kịch bản hoặc công tắc con, ưu tiên chọn giao thức nhánh cục bộ CoSSLink thay vì gọi qua đám mây. Chọn CoSSLink thì bấm phím công tắc sẽ bắn thẳng lệnh ra rơ-le mà không cần chạy vòng qua Internet hay bộ điều khiển trung tâm. Tốc độ nhanh như công tắc cơ và mất WiFi thì nhà vẫn sáng.

## 4. Thông số tải và giao thức truyền thông CoTP

### 4.1. Đặc tả các dòng sản phẩm

Mỗi cấp độ thiết kế tương ứng một Actuator khác nhau.

| Dòng sản phẩm | Nút kịch bản | Chuẩn đế âm | Đặc trưng |
|---|---|---|---|
| SUBLIME Max | 8 | Đôi (120/150) | Tích hợp lai mặt chạm lớn và phím cơ |
| SUBLIME Pro | 6 | 86×86 / Vát | Phù hợp phòng khách lớn, cụm kết hợp |
| SUBLIME Standard | 4 | 86×86 | Phổ biến nhất cho căn hộ chung cư cao cấp |
| SUBLIME Classic | 2 | 86×86 | Dùng cho khu vệ sinh, hành lang hẹp |

![Sơ đồ Actuator Standard](../../../../../assets/images/01a-dong-sublime/sublime_standard_wiring.png)
<p class="hero-image-caption">Sơ đồ đấu tải chuẩn cho loại thiết bị thông dụng nhất.</p>

### 4.2. Chịu tải thực tế rơ-le

- Tải thuần trở (đèn sợi đốt): tối đa 500W mỗi kênh (chia khung 2 hoặc 4 kênh).
- Tải LED (có dòng khởi động cao): bắt buộc hạ xuống 200W mỗi kênh để chống dính tiếp điểm do hồ quang. Đây là lỗi rất hay gặp ngoài công trình — đèn LED hiện nay có xung dòng khởi động lớn hơn nhiều so với công suất ghi trên bao bì.
- Tải nặng (bình nóng lạnh, máy bơm...): phải gắn thêm rơ-le ray 20A độc lập để gánh công suất.

### 4.3. Giao thức truyền thông CoTP (có dây)

Khác với sóng không dây, SUBLIME dùng giao thức CoTP (Communication of Token Pass) chạy trên cáp tín hiệu 4 lõi hoặc cáp mạng đa lõi để đảm bảo không có độ trễ:

- Linh hoạt dây cáp: dùng được mọi loại cáp tín hiệu phổ thông, không đòi hỏi cáp chuyên dụng đắt tiền như chuẩn KNX EIB.
- Gỡ lỗi dễ dàng: không cần thợ có bằng cấp chuyên sâu. Cắm dây là có đồ thị trên ứng dụng để dò đường, dùng điện thoại cấu hình thay vì phải lập trình RS-485.
- Dung lượng mạng lớn: một nhánh mạng gánh được 64 nút (khoảng 40 mặt, 16 hộp đóng cắt). Khi cắm mạng LAN liên phân khu, dự án lớn có thể mở rộng tới 30.000 điểm.

### 4.4. Luồng thi công thực chiến

Anh em có hai cách kéo cáp CoTP tùy theo điều kiện công trình:

1. Tủ tập trung: gom hết rơ-le đóng cắt vào tủ điện tổng. Chỉ kéo 1 đường tín hiệu (cáp mạng hoặc RVVSP) dạo vòng qua các mặt SUBLIME trên tường. Cách này sạch sẽ nhất và dễ bảo trì.
2. Phân tán: giấu rơ-le trong đế âm giống hệt công tắc cơ thường. Áp dụng cho nhà cũ cải tạo, nơi đường ống ghen đã chôn ngầm và không nối thêm tuyến mới được.

## 5. Cốt lõi dành cho đội ngũ triển khai

Với anh em kỹ thuật, công việc quan trọng nhất là tính toán kỹ thông số tải hệ thống, tránh trường hợp quá công suất tiếp điểm rơ-le ở các cụm đóng cắt. Nắm nguyên tắc kéo dây tín hiệu điều khiển đúng sơ đồ và cấp nguồn màn hình chuẩn định mức. Lúc lắp mặt, xem kỹ hình vẽ cấu trúc chèn ráp đa lớp để ốp khung chuẩn vào rãnh ngàm — sai một chút là gãy chân chốt.

Với đội ngũ bán hàng, giá trị của SUBLIME nằm ở khả năng tùy chỉnh mặt công tắc theo phong cách nội thất. Mỗi chiếc mặt bảng SUBLIME có thể hòa mình thành một phần không gian sống thay vì lộ ra như thiết bị điện. Đối với các dự án diện tích lớn, dòng Ultra với màn hình 12.3 inch rất trực quan, giao diện hiển thị lớn phù hợp cho các chủ nhà thích điều khiển ngay trên tường thay vì mở điện thoại.

---

## Tài liệu tham khảo
- [SUBLIME Catalog 260228 .pdf](https://drive.google.com/file/d/1hgFp9rl7HyK4aJ4U9_EG4qXJfZ7eLUr1/view?usp=drive_link)
- [SUBLIME Configuration Guide.pdf](https://drive.google.com/file/d/1U8AEgErdfXP5csqE_Qhsmtz7lMSaRhe7/view?usp=drive_link)
- [Sublime Training - CoTP.pdf](https://drive.google.com/file/d/1l5kP-1uUsMt_oM4oJ0ZLgyJPBhr1jTXg/view?usp=drive_link)
- [SUBLIME Training - Video](https://drive.google.com/file/d/1895jjRN6FLiV9SgTLCvUJIU_iAcz-VVo/view?usp=sharing)