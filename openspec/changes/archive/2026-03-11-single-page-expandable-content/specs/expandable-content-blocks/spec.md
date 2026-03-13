## ADDED Requirements

### Requirement: Tích hợp nội dung vào trang Main
Nội dung chi tiết của các thiết bị đơn lẻ SHALL được gộp vào file chính tương ứng với giai đoạn của nó (Ví dụ: `01. Danh sách`, `02. Thi công`, `03. Cấu hình`). 

#### Scenario: Gộp bài hướng dẫn thi công
- **WHEN** chuyên viên cần xem cách đấu nối dòng Sublime
- **THEN** họ truy cập vào file `02. Thi công` và mở rộng phần "Dòng Sublime" thay vì phải chạy đi tìm file `02d. Thi công Sublime`.

### Requirement: Sử dụng Component `Details`
Nội dung của mỗi thiết bị hoặc nhóm thiết bị bên trong trang chính SHALL được thu gọn bằng thẻ `<details>` của HTML/MDX để không làm trang quá dài. Khách truy cập có thể nhấp để mở/đóng.

#### Scenario: Xem trang tổng hợp thi công
- **WHEN** người dùng kéo xem trang `02. Thi công`
- **THEN** họ chỉ thấy danh sách các thẻ `<details>` mang tên các thiết bị đang đóng lại (Ví dụ: 1. Dòng Sublime, 2. Dòng Nature, 3. HVAC Gateway...). Mọi thứ trông rất gọn gàng.

### Requirement: Định danh (Anchor ID) tự động
Mỗi thẻ `<details>` SHALL được gắn kèm một ID neo (Anchor) thông qua việc đặt thẻ tiêu đề H3 (`###`) ngay phía trên nó.

#### Scenario: Gửi link thi công thiết bị cụ thể
- **WHEN** kỹ thuật viên gửi link có đuôi `#dong-sublime` cho đồng nghiệp
- **THEN** trình duyệt sẽ tự động cuộn xuống chính xác vị trí thẻ H3 "Dòng Sublime" trên trang, người nhận link chỉ việc bấm mở thẻ `<details>` ngay bên dưới.
