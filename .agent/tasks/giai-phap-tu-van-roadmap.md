# Giải pháp & Tư vấn lựa chọn — kế hoạch triển khai

Ngày chốt: 24/10/2026. Chủ nhân đã duyệt kế hoạch và yêu cầu triển khai trong chat.

Trạng thái: đã triển khai đủ năm đợt và kiểm tra lại; chủ nhân yêu cầu commit/push main ngày 24/10/2026. Bằng chứng chi tiết và checklist đã hoàn tất nằm trong OpenSpec tasks.

## Mục tiêu

Giúp sale và kỹ thuật chọn giải pháp theo nhu cầu khách, hiểu đánh đổi và biết thông tin cần xác nhận trước khi chốt. Chuyên mục độc lập, ngay sau Tổng quan và ngang cấp Lộ trình học; mã GP, nội dung trong site/src/content/docs/wiki/giai-phap/.

## Quyết định đã chốt

- Kết hợp bài tóm tắt và tương tác gọn với trang mô phỏng cảm biến chuyên sâu.
- Dùng Astro/MDX, CSS, JavaScript hiện có; dữ liệu và logic cảm biến dùng chung cho hai trang.
- Bài chính có nhu cầu, phương án, so sánh, tình huống, câu hỏi khảo sát, ví dụ tư vấn, liên kết triển khai.
- So sánh tính năng, tương thích, hạ tầng, chi phí tương đối, bảo trì và giới hạn. Không làm bảng giá.
- Trang chuyên sâu giữ chọn công nghệ, độ nhạy, trạng thái người, vật cản, nguồn nhiễu; có reset và URL chia sẻ.
- Mô phỏng định tính, không coi ngưỡng 30% và tỷ lệ gán trong HTML là số đo. Tổ hợp chưa đủ cơ sở ghi Cần kiểm tra thực tế.
- Nguồn HTML lưu nội bộ tại .agent/references/giai-phap/, không xuất bản nguyên file.
- Bài chưa đủ nội dung chỉ nằm trong kế hoạch. Không tạo trang giữ chỗ trên sidebar.
- Hướng dẫn lắp đặt, cấu hình và xử lý sự cố liên kết sang B, không sao chép thành hai bộ.

## Danh mục và thứ tự

| Mã | Bài | Phạm vi |
|---|---|---|
| GP.00 | Tổng quan giải pháp | Nhóm nhu cầu, cách phối hợp, lối vào từng bài |
| GP.01 | Chiếu sáng | On/off, cắt pha, 0/1–10V, DALI, PWM, màu và nhiệt độ màu |
| GP.02 | Điều hòa | IR, gateway HVAC, module dàn lạnh, phản hồi trạng thái |
| GP.03 | Cửa cổng và cửa cuốn | Lệnh điều khiển, phản hồi, an toàn, vận hành thủ công |
| GP.04 | Rèm và che nắng | Loại rèm, motor, giao tiếp, vị trí mở, hạ tầng |
| GP.05 | Cảm biến và tự động hóa | Chuyển động, hiện diện, cửa, ánh sáng, nhiệt độ/độ ẩm |
| GP.05A | Mô phỏng cảm biến | Trang chuyên sâu, dùng chung dữ liệu với GP.05 |
| GP.06 | An ninh và cảnh báo | Xâm nhập, camera, khóa, khói, khí gas, rò nước |
| GP.07 | Khảo sát và lựa chọn | Câu hỏi, ví dụ tư vấn, bàn giao sale → kỹ thuật |

Checklist thực thi duy nhất: [OpenSpec tasks](../../openspec/changes/add-solutions-guide/tasks.md).

| Đợt | Sản phẩm | Điều kiện hoàn thành |
|---|---|---|
| 0 | Kế hoạch, OpenSpec, bản tham khảo | Tài liệu đủ, bản sao khớp nguồn, OpenSpec validate pass |
| 1 | GP.00, GP.05, GP.05A và lối vào | Hai mức xem nhất quán; tương tác, URL, mobile, không JS, build được kiểm tra |
| 2 | GP.01 và GP.02 | Có bảng cùng tiêu chí, tình huống tư vấn, giới hạn tương thích và nguồn |
| 3 | GP.03 và GP.04 | Phân biệt lệnh với trạng thái; nêu điều kiện an toàn và vận hành thủ công |
| 4 | GP.06, GP.07, hoàn thiện GP.00 | Có ví dụ bàn giao và nghiệm thu; rà link, QA, build toàn bộ |

## Thiết kế cảm biến

Bài chính: so sánh bốn nhóm công nghệ → chọn một trong sáu tình huống → gợi ý, đánh đổi và kiểm tra tại công trình → mở mô phỏng chuyên sâu. Chi tiết dài dùng phần mở rộng.

Sáu tình huống: hành lang/cầu thang; phòng ngủ/làm việc; WC có kính; nắng/gió; phòng tắm có kính đọng nước; chống xâm nhập.

Trang chuyên sâu: điều khiển bên trái, kết quả bên phải trên desktop; một cột trên mobile. So sánh bốn công nghệ trong cùng cấu hình. Đổi thông số phải hiện Đang tùy chỉnh và tính lại nội dung; reset khôi phục tình huống. URL sai dùng giá trị mặc định hợp lệ.

Không suy ra phân vùng, AI, phản hồi trạng thái hoặc khả năng chống nhiễu chỉ từ tần số. Mã mẫu chỉ dùng khi đã đối chiếu nguồn; mẫu chưa có tài liệu giữ trong ghi chú tham khảo.

## Kiểm tra

- Frontmatter title, description, module: gp; Mục tiêu ở đầu; không H1 trong body, không emoji.
- Giọng kỹ thuật thực tế, ví dụ là tình huống minh họa, không nhận là công trình đã thi công.
- Quy trình có Mermaid; cảm biến có sơ đồ web, tôn trọng reduced-motion.
- Test logic với phòng trống, nhiễu, ít cử động, kính, độ nhạy, URL, reset và cấu hình tùy chỉnh.
- Kiểm tra desktop/mobile, sáng/tối, bàn phím, không JavaScript và không tràn ngang trang.
- Link nội bộ/asset đúng, npm run build pass; ghi kết quả trong tasks.

## Nhật ký triển khai

- 24/10/2026: bắt đầu triển khai theo yêu cầu đã duyệt. Ruling: yêu cầu IMPLEMENT áp dụng toàn bộ các đợt; checklist chỉ đánh dấu sau kiểm tra.
- Ruling: dùng cảm biến theo nhóm công nghệ; mô phỏng thể hiện xu hướng và điều kiện cần kiểm tra, không mô phỏng vật lý hoặc chứng nhận khả năng chống trộm.

- Ruling: build nền lỗi NoImageMetadata ở sáu JPG của B1.02/B1.03; phát hiện nội dung base64 thay vì JPEG. Khôi phục đúng byte JPEG từ nội dung gốc, không đổi hình. Build sau khôi phục đã pass (108 trang tại thời điểm kiểm tra mẫu cảm biến).
- Test logic cảm biến: 8/8 pass, gồm URL, reset, tùy chỉnh và 720 tổ hợp điều kiện.

- 24/10/2026: hoàn tất chín trang GP, sidebar/trang chủ, mô phỏng hai mức và QA. Build 114 trang pass; 110 link nội bộ đã rà. Preview đang chạy tại http://127.0.0.1:4322/wiki/giai-phap/00-tong-quan/.

- Kiểm tra trước commit/push: npm test 8/8 pass, production build 114 trang pass, 110 link nội bộ đúng, sáu JPEG khớp byte giải mã từ bản gốc. Build còn cảnh báo bundle Mermaid vượt 500 kB; không chặn build. Phát hành qua workflow deploy.yml khi push main.
