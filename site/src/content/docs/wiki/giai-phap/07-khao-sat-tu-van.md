---
title: "GP.07 — Khảo sát và chọn giải pháp"
description: "Quy trình hỏi nhu cầu, xác nhận tương thích, so sánh phương án và bàn giao từ sale sang kỹ thuật bằng tiêu chí nghiệm thu."
module: gp
sidebar:
  order: 8
---

## Mục tiêu

- Chuyển mong muốn chung của khách thành hành vi có thể thử.
- Thu đủ thông tin để kỹ thuật xác nhận giải pháp.
- Bàn giao rõ phần đã xác nhận, phần đang chờ và tiêu chí nghiệm thu.

## Luồng tư vấn

~~~mermaid
flowchart TD
  A["Hỏi việc khách muốn làm"] --> B["Viết tình huống và tiêu chí thử"]
  B --> C["Thu hiện trạng, model, hạ tầng"]
  C --> D{"Đủ cơ sở tương thích?"}
  D -->|Chưa| E["Xin tài liệu hoặc thử mẫu"]
  E --> C
  D -->|Đủ| F["So sánh phương án và đánh đổi"]
  F --> G["Khách chọn theo điều kiện đã rõ"]
  G --> H["Bàn giao kỹ thuật và nghiệm thu"]
~~~

## Bước 1 — Hỏi việc khách đang muốn giải quyết

Thay câu “anh cần bao nhiêu công tắc thông minh?” bằng “khi ra ngoài, anh muốn những thiết bị nào dừng và những thiết bị nào tiếp tục chạy?”. Hỏi đến hành vi hằng ngày sẽ giúp tránh bán dư tính năng hoặc bỏ sót điều quan trọng.

| Nhóm câu hỏi | Thông tin cần ghi |
|---|---|
| Người dùng | Ai dùng chính, người lớn tuổi/trẻ nhỏ có thao tác không, ai quản trị? |
| Thời điểm | Khi nào cần tự động, khi nào muốn điều khiển tay? |
| Mức ưu tiên | Bất tiện nào cần giải quyết trước, tính năng nào có thể làm sau? |
| Công trình | Nhà mới hay cải tạo, đã đi dây/đóng trần/lắp thiết bị đến đâu? |
| Giới hạn | Ngân sách dự kiến, thời gian, yêu cầu giữ thiết bị hiện có? |

## Bước 2 — Xin đúng bằng chứng hiện trạng

| Chủ đề | Tài liệu/ảnh cần lấy | Tính năng chưa nên hứa khi thiếu |
|---|---|---|
| Chiếu sáng | Mã đèn/driver, sơ đồ mạch, thông số dim và bộ mẫu | Mức sáng thấp, đổi màu, dim-to-off |
| Điều hòa | Nhãn dàn nóng/dàn lạnh, panel/remote, sơ đồ hệ | Tương thích gateway và đồng bộ trạng thái |
| Cửa cổng/cuốn | Bo/motor, cổng tích hợp, bảo vệ và trạng thái hiện có | Đóng riêng, biết đóng kín, tự đóng từ xa |
| Rèm | Ray/motor/receiver, chiều và kích thước, nguồn | Phản hồi vị trí, kéo tay và tích hợp remote |
| Cảm biến | Mặt bằng, vị trí, vật cản, hành vi và nhiễu | Giữ hiện diện hoặc loại bỏ nhiễu trong mọi điều kiện |
| An ninh | Vùng/sự kiện, hệ sẵn có, đường báo và người xử lý | Chống xâm nhập, cảnh báo hoặc hành động đi kèm chưa thiết kế |

Thiếu thông tin thì ghi đúng hạng mục cần xác nhận và người phụ trách. Không thay chỗ trống bằng “hỗ trợ hầu hết” hoặc “chắc là được”.

## Bước 3 — So phương án theo cùng mục tiêu

Chỉ đưa những phương án đáp ứng nhu cầu chính. Mỗi phương án phải ghi tính năng, tương thích, hạ tầng, chi phí gồm những gì, công bảo trì và giới hạn sử dụng.

<details>
<summary>Khách muốn rẻ trước, có thể nâng cấp sau</summary>

Tách phần bắt buộc và phần tùy chọn, nhưng kiểm tra hạ tầng nâng cấp cần làm ngay. Ví dụ muốn DALI sau này thì phải xem lại đèn/driver và đường bus từ giai đoạn thi công; không chỉ hứa đổi công tắc là xong.

</details>

<details>
<summary>Khách muốn giữ thiết bị đã mua</summary>

Xin đúng mã và tài liệu trước. Đưa chi phí phụ kiện/cấu hình và giới hạn của việc giữ lại vào so sánh với thay thiết bị. Khách cần thấy tổng chi phí để dùng được chức năng mong muốn.

</details>

## Bước 4 — Viết tiêu chí nghiệm thu trước khi báo giá

| Mong muốn ban đầu | Cách viết để thử được |
|---|---|
| Đèn tự động | Đi vào từ những hướng đã thống nhất thì bật; vắng người thì tắt sau khoảng trễ đã chốt |
| Máy lạnh thông minh | Điều khiển các chức năng đã liệt kê; nếu yêu cầu đồng bộ panel thì thử cả chiều panel → app |
| Cửa thông minh | Gửi đúng lệnh; trạng thái hiển thị dựa trên nguồn phản hồi đã nêu |
| Rèm chạy theo lịch | Đúng lớp rèm, đúng chiều, đúng giờ; thao tác tay vẫn dùng theo phương án đã bàn giao |
| An ninh | Tạo sự kiện thử theo hãng, kiểm tra nơi nhận cảnh báo và hành động đã thống nhất |

Thời gian, mức sáng, khu vực và trạng thái phải được điền theo khách và cấu hình thật. Đây là mẫu cấu trúc, không phải một bộ giá trị áp cho mọi nhà.

## Mẫu bàn giao sale → kỹ thuật

Sao chép khung sau vào hồ sơ công trình:

~~~text
Công trình / khu vực:
Người dùng và người xác nhận:
Nhu cầu, thời điểm sử dụng:
Tình huống và tiêu chí nghiệm thu:
Thiết bị hiện có (hãng, model, phiên bản):
Ảnh / sơ đồ / tài liệu kèm theo:
Phương án khách đang chọn và lý do:
Tính năng đã được kỹ thuật xác nhận:
Hạng mục chưa xác nhận / người phụ trách / thời hạn:
Hạ tầng và phụ kiện cần bổ sung:
Giới hạn, thao tác tay và điều kiện đã trao đổi:
Phạm vi báo giá / phần tùy chọn:
~~~

## Ví dụ bàn giao phòng làm việc

Tình huống minh họa: khách hay ngồi đọc tài liệu lâu, có quạt trần và muốn đèn giữ sáng khi có người. Sale bàn giao mặt bằng, vị trí bàn/quạt, ảnh nguồn dự kiến và yêu cầu thao tác tay.

Kỹ thuật chọn mẫu thử, kiểm tra người ít cử động, rồi kiểm tra phòng trống khi quạt chạy. Chỉ sau khi có kết quả mới chốt cảm biến, vị trí, độ nhạy và khoảng trễ tắt với khách. Nếu mẫu thử chưa đạt, cập nhật phương án trước khi ghi tính năng vào báo giá.

## Checklist trước khi chuyển thi công

- [ ] Mỗi tính năng có tình huống và tiêu chí nghiệm thu?
- [ ] Model/ảnh/tài liệu và người xác nhận tương thích đã đủ?
- [ ] Phần chưa xác nhận có người phụ trách và bước xử lý?
- [ ] Báo giá gồm nguồn, dây, gateway, phụ kiện, cấu hình và thử?
- [ ] Khách đã biết giới hạn, cách dùng tay và trách nhiệm quản trị?
- [ ] Kỹ thuật nhận đúng phiên bản phương án khách đã chọn?

Tra lại [GP.00 — Tổng quan giải pháp](/wiki/giai-phap/00-tong-quan/) khi cần so phương án theo chủ đề. Khi triển khai kịch bản, xem [D — Nguyên tắc lập trình](/wiki/module-d-lap-trinh/d1-nguyen-tac-lap-trinh/) và các bài trong B của hệ đang dùng.
