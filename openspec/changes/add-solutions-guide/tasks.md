## 0. Lưu kế hoạch và nguồn
- [x] 0.1 Lưu roadmap đã duyệt và OpenSpec proposal/design/spec/tasks; validate strict.
- [x] 0.2 Sao chép HTML nguồn nội bộ, ghi chú nội dung cần kiểm chứng, đối chiếu bản sao.
- [x] 0.3 Liên kết từ master roadmap và CURRENT_PRIORITY, ghi đúng trạng thái.

## 1. Mẫu cảm biến và lối vào
- [x] 1.1 Test trước cho chuẩn hóa URL, preset/reset, tùy chỉnh, ít cử động, nhiễu và vật cản.
- [x] 1.2 Tạo dữ liệu/logic dùng chung và component hai mức xem, sơ đồ web, link chia sẻ.
- [x] 1.3 Viết GP.00, GP.05, GP.05A, kiểm chứng ví dụ sản phẩm và liên kết B.
- [x] 1.4 Thêm sidebar, trang chủ và tổng quan.
- [x] 1.5 Kiểm tra tương tác desktop/mobile, theme, bàn phím, reduced-motion và không JS.

## 2. Chiếu sáng và điều hòa
- [x] 2.1 Viết GP.01 với bảng so sánh, tình huống, khảo sát, nguồn và liên kết triển khai.
- [x] 2.2 Viết GP.02, phân biệt IR/gateway/module dàn lạnh, phản hồi và điều kiện tương thích.

## 3. Cửa và rèm
- [x] 3.1 Viết GP.03, phân biệt lệnh/trạng thái, an toàn và vận hành thủ công.
- [x] 3.2 Viết GP.04 với phương án motor/giao tiếp và điều kiện điều khiển vị trí.

## 4. An ninh, khảo sát và kiểm tra tổng
- [x] 4.1 Viết GP.06 về xâm nhập, camera, khóa và cảnh báo theo đúng vai trò thiết bị.
- [x] 4.2 Viết GP.07 có flow Mermaid, mẫu câu hỏi và ví dụ bàn giao sale → kỹ thuật.
- [x] 4.3 Hoàn thiện GP.00, rà frontmatter, mục tiêu, giọng văn, ví dụ và link/asset.
- [x] 4.4 Chạy test, production build, kiểm tra trang đã render và review thay đổi.
- [x] 4.5 Ghi bằng chứng kiểm tra, cập nhật trạng thái roadmap/priority.

## Bằng chứng

Kiểm tra ngày 24/10/2026, trên worktree solutions-guide:

- OpenSpec validate strict: pass.
- Bản sao HTML: cmp khớp nguồn Downloads, 72.200 byte.
- npm test với Node 24.11.1: 8/8 pass; bao phủ 720 tổ hợp công nghệ/độ nhạy/người/vật cản/nhiễu.
- npm run build: pass, 114 trang. Chín trang GP có đúng một H1 do Starlight sinh; frontmatter, mục tiêu và body đã rà.
- 110 link nội bộ duy nhất trong HTML của chín trang GP: không thiếu route hoặc anchor.
- Trình duyệt: sáu preset; chuyển quick → deep giữ WC/kính/độ nhạy; tùy chỉnh hiện đúng trạng thái; reset; URL không hợp lệ về mặc định.
- Desktop 1440×1000: hai cột điều khiển/kết quả. Mobile 390×844: cả chín trang không tràn ngang, mô phỏng một cột, sơ đồ chuyển sang danh sách dễ đọc.
- Theme sáng/tối và thao tác Tab giữa các select: kiểm tra trực tiếp. Có focus ring; điều khiển native cao tối thiểu 44px.
- Bản production chặn toàn bộ script bằng CSP: dữ liệu ban đầu, bốn thẻ so sánh và bảng kiến thức vẫn đọc được, điều khiển tương tác được ẩn.
- Reduced-motion: kiểm tra media rule animation:none trong CSS; chưa đổi thiết lập chuyển động của hệ điều hành để thử riêng.
- GP.07 Mermaid render thành SVG trong trình duyệt. Không có console error trên trang tương tác được kiểm tra.
- content-qa-checklist / project-humanizer: đã rà chín bài theo nhu cầu, ví dụ minh họa, giới hạn, checklist và đường dẫn triển khai.
- Review độc lập: không phát hiện lỗi P1/P2; rà link, logic, claim kỹ thuật chính và xác nhận sáu JPG khớp byte giải mã từ HEAD.
- git diff --check: pass.

Lỗi nền được xử lý để build: sáu JPG B1 vốn chứa văn bản base64. Đã giải mã thành JPEG đúng định dạng, giữ nguyên nội dung ảnh. Không thay cấu hình build để bỏ qua lỗi.

Giới hạn: mô phỏng định tính không xác nhận hiệu năng phần cứng tại công trình; các mã trong HTML chưa có tài liệu được ghi riêng trong README nguồn. Chủ nhân yêu cầu commit/push main sau khi kiểm tra lại; phát hành theo workflow deploy.yml.

Kiểm tra lại trước phát hành: npm test 8/8 pass; build 114 trang pass; 110 link nội bộ và sáu JPEG đã đối chiếu lại. Build có cảnh báo chunk Mermaid lớn hơn 500 kB, không có lỗi build.
