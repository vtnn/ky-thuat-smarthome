## Why

Cấu trúc hiện tại với quá nhiều file con (ví dụ: `01a`, `01b`, `02a`, `02b`...) làm cho thư mục dự án trở nên cồng kềnh. Mặc dù việc chia nhỏ giúp chi tiết hóa từng thiết bị, nhưng nó làm rối cấu trúc bài học cốt lõi (`01. Danh sách`, `02. Thi công`, `03. Cấu hình`). 
Người dùng muốn giữ nguyên cấu trúc các trang chính (chỉ có `01`, `02`, `03`...), không tạo trang sub (sub-pages), và sử dụng cơ chế nội dung mở rộng (Expandable Content / Accordion / Tabs) để xem chi tiết từng sản phẩm ngay trên trang chính. Giải pháp này kết hợp với "Lộ trình thiết bị" (Device Journey) sẽ tạo ra trải nghiệm liền mạch: người học có thể xem tổng quan, rồi mở rộng để đi sâu vào thiết bị mình quan tâm tại mỗi giai đoạn.

## What Changes

1. **Gộp file con vào file chính**: Xóa các file `0Xa`, `0Xb`... và di chuyển nội dung của chúng vào file gốc `0X`. Ví dụ: `01a-dong-sublime.md` và `01b-dong-nature.md` sẽ được gộp chung vào `01-danh-sach-thiet-bi.md`.
2. **Sử dụng component `<Details>` hoặc `<Tabs>` của Starlight**: Để không làm trang chính quá dài, nội dung chi tiết của từng thiết bị sẽ được bọc trong các thẻ có thể đóng/mở (khi bấm vào "Xem chi tiết").
3. **Kết hợp Device Journey Block**: Bên trong mỗi phần mở rộng của thiết bị (ví dụ: khi mở "Thi công HVAC Gateway" trong bài `02`), người dùng sẽ thấy "Khối Lộ Trình" chỉ dẫn họ bấm tiếp sang bài `03` để xem cách cấu hình HVAC Gateway.

## Capabilities

### New Capabilities
- `expandable-content-blocks`: Sử dụng UI components của Starlight để ẩn/hiện nội dung chi tiết của từng thiết bị trên cùng một trang, giúp trang gọn gàng.
- `integrated-device-journey`: Nhúng Khối Lộ Trình (Device Journey Block) vào bên trong nội dung mở rộng để kết nối người dùng từ trang này sang trang khác (Ví dụ: Từ phần mở rộng ở bài 02 sang phần mở rộng ở bài 03).

### Modified Capabilities
- N/A

## Impact

- Thư mục dự án sẽ cực kỳ gọn gàng (với Module B1, số file giảm từ 16 xuống còn 6-7 file chính).
- Trải nghiệm người dùng tập trung hơn, không phải tải nhiều trang (clicks ít hơn) để xem các thiết bị khác nhau trong cùng một giai đoạn.
- Cấu trúc thư mục ngang (Phase-based) được bảo toàn 100%.
