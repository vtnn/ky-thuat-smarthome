---
title: "GP.02 — Chọn cách điều khiển điều hòa"
description: "So sánh hồng ngoại IR, gateway HVAC và module dàn lạnh; phân biệt gửi lệnh với phản hồi trạng thái."
module: gp
sidebar:
  order: 2
---

## Mục tiêu

- Chọn hướng tích hợp theo hệ điều hòa và mức điều khiển khách cần.
- Phân biệt trạng thái lệnh trong app với trạng thái máy được phản hồi.
- Thu đủ mã máy và thông tin tương thích trước khi báo giá.

## Ba câu cần hỏi đầu tiên

1. Điều hòa loại gì, hãng/model dàn nóng và dàn lạnh nào, hiện có panel hay remote gì?
2. Khách cần bật/tắt, nhiệt độ, mode, tốc độ quạt hay thêm mã lỗi và trạng thái?
3. Có tiếp tục dùng remote/panel gốc không; app cần đồng bộ những thao tác đó thế nào?

“Điều hòa trung tâm” là mô tả chưa đủ để chọn gateway. Một hãng có nhiều dòng, giao thức và cách kết nối khác nhau; cần đối chiếu đúng hệ và phiên bản.

## So sánh phương án

| Phương án | Cách hiểu | Điểm được | Đánh đổi và cần xác nhận |
|---|---|---|---|
| Hồng ngoại IR | Phát lệnh tương tự remote | Ít can thiệp vào máy, đáng cân nhắc với máy đã có bộ nhận IR | Vị trí phát, mã lệnh, nguồn và mạng; không mặc định có phản hồi trạng thái máy |
| Gateway HVAC | Giao tiếp với hệ điều hòa qua giao diện được hỗ trợ | Có thể quản lý nhiều dàn lạnh và đọc thuộc tính theo giao thức | Danh sách tương thích, điểm kết nối, số lượng máy và chức năng từng dòng |
| Module kết nối dàn lạnh | Giao tiếp theo từng dàn lạnh qua cổng/bộ chuyển đổi phù hợp | Chọn theo từng máy/khu vực; có thể đồng bộ với điều khiển gốc nếu hỗ trợ | Cổng, dây/adapter, model dàn lạnh, giới hạn kết hợp panel và quyền điều khiển |

Chi phí IR có thể gọn cho một máy độc lập, nhưng tăng theo số khu vực, nguồn và bộ phát. Gateway dùng chung và module theo máy phải so trên tổng số dàn lạnh, phụ kiện và công cấu hình; không chỉ so giá một hộp.

## Lệnh đã gửi khác trạng thái phản hồi

| Điều nhìn thấy | Chứng minh được gì? |
|---|---|
| App lưu “Bật, 26°C” | Có thể chỉ là lệnh hoặc giá trị gần nhất mà app ghi nhận |
| Gateway nhận nhiệt độ đặt từ bus | Có phản hồi theo giao thức, nhưng vẫn cần biết đó là nhiệt độ đặt hay nhiệt độ đo |
| Đồng bộ sau khi dùng remote/panel gốc | Cần kiểm tra thiết bị lấy trạng thái từ đâu và cập nhật chức năng nào |
| App hiện “Đang chạy” | Chưa đủ để kết luận máy nén thực đang chạy; phải hiểu định nghĩa của thuộc tính |

Có bộ IR nhận thêm tín hiệu remote hoặc có cơ chế theo dõi trạng thái riêng. Vì vậy không kết luận mọi IR đều chỉ một chiều, cũng không coi mọi gateway đều đọc được đầy đủ thông số. Manual Intesis có ví dụ gateway IR nhận trạng thái qua remote; phải đọc đúng cơ chế của model. [Manual Intesis Universal IR](https://www.hms-networks.com/docs/default-source/products/intesis/manuals-and-guides---manuals/user-manual-in485uni001i100-bacnet-r2.1.pdf)

## Chọn theo tình huống

<details>
<summary>Căn hộ đã lắp máy treo tường, chỉ cần bật trước khi về nhà</summary>

Khảo sát IR trước nếu máy có nhận hồng ngoại phù hợp. Thử vị trí bộ phát, các lệnh cần dùng và tình huống khách thao tác bằng remote gốc. Nói rõ app đang lưu lệnh hay nhận phản hồi.

</details>

<details>
<summary>Biệt thự có nhiều dàn lạnh trong một hệ</summary>

Xin sơ đồ hệ, mã dàn nóng/dàn lạnh và bộ điều khiển hiện hữu. Xác nhận gateway hỗ trợ đúng dòng, quy mô và tính năng. Không dùng số lượng phòng để suy ra số địa chỉ máy hoặc số gateway.

</details>

<details>
<summary>Chỉ tích hợp một vài dàn lạnh hoặc hệ không hợp gateway dự kiến</summary>

Xét module cho từng dàn lạnh khi có giải pháp tương thích. Kiểm tra cổng, adapter và khả năng cùng tồn tại với panel. Nếu chưa có xác nhận, để trạng thái cần kiểm tra thay vì hứa “hãng này đều dùng được”.

</details>

HMS cung cấp công cụ tra tương thích theo hãng/model; Samsung cũng mô tả giao diện riêng qua bus điều khiển dàn lạnh. Đây là ví dụ vì sao phải tra mã máy. [Intesis](https://www.hms-networks.com/p/inwmpuni001i000-universal-ir-air-conditioner-to-home-automation-interface?tab=tab-support), [Samsung HVAC](https://www.samsunghvac.com/controls/intesis-ac-interfaces)

## Ví dụ tư vấn: khách vẫn dùng panel gốc

Tình huống minh họa: app đặt 26°C, khách đổi panel sang 24°C. Yêu cầu cần viết là “app cập nhật nhiệt độ đặt sau thao tác panel”, kèm thời gian cập nhật chấp nhận được khi nghiệm thu.

Kỹ thuật thử trên đúng tổ hợp máy và module. Nếu chỉ gửi lệnh mà không đồng bộ, sale phải giải thích cách dùng hoặc đổi phương án; tránh để khách tưởng app thể hiện trạng thái hiện tại của máy.

## Checklist khảo sát

- [ ] Có ảnh nhãn dàn nóng, dàn lạnh, panel/remote và sơ đồ hệ?
- [ ] Liệt kê tính năng cần điều khiển và thuộc tính cần đọc riêng?
- [ ] Xác nhận đúng mã gateway/module, phụ kiện và firmware?
- [ ] Nguồn, mạng, dây tín hiệu và vị trí lắp có sẵn?
- [ ] Đã thử điều khiển từ app và từ điều khiển gốc?
- [ ] Đã thử mất mạng, khôi phục nguồn và xung đột kịch bản?
- [ ] Kịch bản vắng người có trễ và cách bật tay phù hợp?

## Đi tiếp đến triển khai

Trong hệ LifeSmart, xem [B1.01 — Thiết bị](/wiki/module-b-he-thong-thiet-bi/b1-lifesmart/01-danh-sach-thiet-bi/), [B1.02 — Lắp đặt HVAC Gateway/LS212](/wiki/module-b-he-thong-thiet-bi/b1-lifesmart/02-thi-cong-lap-dat/) và [B1.03 — Cấu hình](/wiki/module-b-he-thong-thiet-bi/b1-lifesmart/03-cau-hinh-app/). Cách đấu nối trong B áp dụng cho đúng thiết bị được nêu; không lấy làm sơ đồ chung cho mọi hệ điều hòa.
