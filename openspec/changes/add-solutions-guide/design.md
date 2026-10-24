# Thiết kế mục Giải pháp & Tư vấn lựa chọn

## Vị trí và cách đọc

Chuyên mục ngang cấp Lộ trình học, đứng ngay sau Tổng quan. Mã gp, URL /wiki/giai-phap/. GP.00 dẫn sang các bài theo nhu cầu; mỗi bài nêu điều kiện lựa chọn và liên kết về B để triển khai.

## Các hướng đã cân nhắc

1. Mở rộng A: ít nhóm hơn nhưng trộn nền tảng thi công với tư vấn.
2. Thêm nhóm trong B: tận dụng nhóm thiết bị nhưng khó so sánh xuyên hãng.
3. Mục riêng: được chủ nhân chọn vì phục vụ sale và kỹ thuật theo nhu cầu.

Chủ nhân chọn kết hợp tóm tắt/tương tác gọn và một trang cảm biến chuyên sâu.

## Phân chia triển khai

- Nội dung tĩnh Markdown/MDX, bảng so sánh, chi tiết mở rộng; không phụ thuộc JS để đọc kiến thức cơ bản.
- SensorGuide.astro nhận mode quick hoặc deep, dựng dữ liệu ban đầu phía server và tăng cường tương tác phía client.
- sensor-guide.ts giữ hồ sơ công nghệ, tình huống, chuẩn hóa URL, đánh giá định tính. Cả hai mức dùng cùng hàm.
- Script chỉ cập nhật bên trong component; trạng thái hợp lệ theo danh mục, URL không đưa trực tiếp vào HTML.
- Chế độ deep có sensor, sensitivity, activity, barrier, noise; preset/reset và link chia sẻ. Tùy chỉnh làm mất hiệu lực gợi ý cố định của preset.
- Sơ đồ SVG/CSS biểu diễn người → cảm biến → tự động hóa, không giả lập dữ liệu đo. Có reduced-motion.

## Ranh giới chuyên môn

File HTML nguồn dùng ma trận số tự gán, không dùng làm bằng chứng kỹ thuật. Bỏ tỷ lệ và ngưỡng 30%; đánh giá gồm xu hướng phát hiện, nguy cơ kích hoạt ngoài ý muốn, kiểm tra tiếp theo. Khi thiếu cơ sở, ghi Cần kiểm tra thực tế.

Thông số phân vùng/AI thuộc từng sản phẩm và cách tích hợp. Chỉ Aqara FP400 được dẫn như ví dụ khi đã đối chiếu nguồn chính thức; các mã còn thiếu tài liệu không gán thông số vào trang công khai.

Trang an ninh phân biệt cảm biến tiện nghi với thiết bị báo động chuyên dụng; trang cửa phân biệt phát lệnh và biết trạng thái. Không bổ sung hướng dẫn đấu điện chi tiết.

## Kiểm tra và triển khai

Node test runner cho logic thuần; production build cho MDX/route; kiểm tra trình duyệt desktop/mobile, sáng/tối, bàn phím, không JS. Xuất bản qua luồng repo hiện có sau review của chủ nhân; phiên triển khai không tự push hoặc deploy.
