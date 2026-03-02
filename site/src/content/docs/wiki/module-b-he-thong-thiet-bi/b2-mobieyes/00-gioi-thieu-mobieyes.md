---
title: "B2.00 — Giới thiệu hệ thống MobiEyes"
description: "Tổng quan về hệ thống MobiEyes có dây, công nghệ CFLink từ CommandFusion (Úc) và kiến trúc phân tán."
module: "b"
level: "1-6"
tags: ["MobiEyes", "CFLink", "RS485", "CommandFusion", "giới thiệu"]
---

## Mục tiêu
- Hiểu bản chất hệ thống có dây CFLink và tại sao nó phù hợp cho biệt thự, penthouse.
- Nắm được ưu điểm của mô hình phân tán (Peer-to-Peer) so với hệ thống tập trung.

---

## 1. MobiEyes là gì?

MobiEyes Smart Home là hệ thống nhà thông minh có dây, dùng công nghệ CFLink của CommandFusion (Úc). Toàn bộ truyền thông chạy trên nền RS485 nâng cao, kết nối bằng cáp vật lý thay vì sóng không dây.

Nói đơn giản: nếu LifeSmart là giải pháp không dây dành cho căn hộ (lắp nhanh, linh hoạt), thì MobiEyes là giải pháp có dây cho biệt thự và công trình xây mới (ổn định tuyệt đối, không ngại nhiễu sóng).

Hệ thống này hướng đến phân khúc cao cấp, nơi chủ nhà sẵn sàng đầu tư đi dây từ đầu để đổi lại sự ổn định lâu dài. Thực tế cho thấy các dự án MobiEyes chạy liên tục nhiều năm mà hầu như không cần bảo trì phần mềm, khác hẳn với hệ không dây luôn phải lo chuyện pin hết hay sóng yếu.

## 2. Tại sao lại chọn có dây?

Hệ không dây tiện nhưng luôn phụ thuộc vào sóng. WiFi bị nhiễu, Zigbee bị giới hạn tầm xa, pin cảm biến hết phải thay. Với công trình lớn nhiều tầng, những vấn đề này nhân lên gấp bội.

MobiEyes giải quyết bằng cách dùng cáp vật lý cho mọi kết nối. Kết quả là:

| Đặc điểm | Chi tiết |
|---|---|
| Độ bền | Thiết kế chuẩn công nghiệp, chịu được sai dây và sụt áp trong thi công |
| Phân tán | Một thiết bị lỗi không làm sập toàn bộ hệ thống. Các module hoạt động độc lập với nhau |
| Chế độ cơ | Khi bo mạch mất nguồn, công tắc cơ vẫn bật/tắt được. Chủ nhà không bao giờ bị "kẹt tối" |
| Không phụ thuộc WiFi | Truyền thông hoàn toàn bằng dây cáp, không lo nhiễu sóng hay rớt mạng |

Chế độ cơ là điểm khác biệt lớn. Với LifeSmart, nếu Hub hỏng thì không điều khiển được gì cho đến khi thay Hub mới. Còn MobiEyes, công tắc vẫn hoạt động ở chế độ thủ công ngay cả khi hệ thống mất nguồn.

## 3. Kiến trúc hệ thống

Hệ thống kết nối cực kỳ linh hoạt, hỗ trợ cả hai kiểu: nối tiếp (Daisy Chain) hoặc hình sao (Star):

- **Tủ mạng chính** chứa LAN Bridge (CF-IP) — đóng vai trò cầu nối giữa mạng tính toán Ethernet và bus CFLink.
- Từ LAN Bridge, cáp mạng được linh động **nối tiếp** (vòng qua từng tủ) hoặc thu về **hình sao** (tọa ra từng mạch độc lập) về các tủ phụ chứa module DIN-RY8-N.
- Mỗi tủ sẽ được trang bị bộ nguồn riêng biệt. Việc cấp nguồn qua cáp mạng LAN **chỉ áp dụng cho module IR**. Tuyệt đối cẩn thận: luôn dán nhãn ghi chú "KHÔNG ĐƯỢC CẮT, THÁO RA" trên cáp IR. Nếu để nguồn chạm vào các chân tín hiệu Tx+/-, hệ thống sẽ cháy hỏng ngay lập tức. Đã có rất nhiều trường hợp phải đền thiết bị vì thợ cắt nhầm dây mạng của IR và đấu lộn dây.

Cách làm này thích nghi hoàn hảo với mọi địa hình công trình: thiết kế hẹp ngang thì đi nối tiếp cho gọn, mặt bằng rộng mênh mông thì đi hình sao để an toàn (nhánh nào đứt chỉ mất mình nhánh đó). Không còn rào cản gò ép phải đi dây kiểu "sợi cáp duy nhất" như ngày xưa.

## 4. So sánh nhanh với LifeSmart

| Tiêu chí | MobiEyes (có dây) | LifeSmart (không dây) |
|---|---|---|
| Độ ổn định | Rất cao, chạy trên cáp vật lý | Cao, chạy trên sóng CoSS |
| Thi công | Phức tạp, phải đi dây từ giai đoạn thô | Đơn giản, lắp thêm vào nhà đã hoàn thiện |
| Chế độ cơ | Có, công tắc vẫn dùng được khi mất hệ thống | Không, phụ thuộc Hub |
| Chi phí | Cao hơn (vật tư + nhân công đi dây) | Trung bình cao |
| Phù hợp | Biệt thự, dự án xây mới, penthouse | Căn hộ, nhà phố, nhà cải tạo |

Không có hệ thống nào tốt hơn hệ thống nào. Quan trọng là chọn đúng cho công trình. Nhà xây mới, chủ nhà muốn ổn định lâu dài thì MobiEyes. Nhà đã hoàn thiện hoặc cần linh hoạt thì LifeSmart.
