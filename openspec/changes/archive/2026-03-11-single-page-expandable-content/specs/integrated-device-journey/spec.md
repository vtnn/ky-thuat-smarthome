## ADDED Requirements

### Requirement: Tích hợp Lộ trình (Journey Block)
Trong mỗi phần nội dung mở rộng `<details>` của thiết bị cự thể thuộc bài `02` (Thi công) và `03` (Cấu hình) SHALL chứa một Khối Lộ Trình `> [!NOTE]` ở ngay phần đầu của `<details>` đó để hướng dẫn bước tiếp theo.

#### Scenario: Chấm dứt tình trạng lạc đường
- **WHEN** người học mở xem "Hướng dẫn thi công HVAC Gateway" trong bài `02`
- **THEN** họ phải nhìn thấy một Khối Lộ Trình chỉ dẫn: 1. Thông số (Bài 01), 2. Đang ở đây (Bài 02), 3. Cấu hình trên App (Bài 03). Từ đó biết ngay bước tiếp theo là gì.

### Requirement: Đường dẫn (URL) chính xác tới vị trí thiết bị
Các liên kết bên trong Khối Lộ Trình SHALL sử dụng định dạng Anchor ID (ví dụ: `#hvac-gateway`) để trỏ đến đúng trang và cuộn đến đúng phần mở rộng của thiết bị đó trên trang đích.

#### Scenario: Nhảy trang bằng URL Anchor
- **WHEN** người dùng bấm vào link "Cấu hình trên App (Bài 03)" từ Khối lộ trình bên trong phần mở rộng HVAC Gateway của bài `02`.
- **THEN** trình duyệt chuyển sang file `03-cau-hinh-app`, đồng thời cuộn thẳng xuống phần có thẻ H3 "HVAC Gateway" để người dùng mở xem ngay lập tức, bỏ qua nội dung của các thiết bị khác ở đầu trang.
