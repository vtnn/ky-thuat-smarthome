---
title: "GP.04 — Rèm và che nắng"
description: "Chọn motor và giao tiếp cho rèm vải, rèm cuốn, che nắng; xác nhận vị trí mở, nguồn và cách sử dụng thủ công."
module: gp
sidebar:
  order: 4
---

## Mục tiêu

- Tách phần cơ khí rèm, motor và giao tiếp điều khiển khi chọn giải pháp.
- Biết khi nào có thể hứa mở theo vị trí và khi nào chỉ có Mở/Đóng/Dừng.
- Khảo sát sớm nguồn, vị trí bảo trì và cách dùng hằng ngày.

## Trước hết phải đúng bộ rèm

Rèm vải chạy ray, rèm cuốn dùng motor ống và hệ che nắng ngoài trời có yêu cầu cơ khí khác nhau. Chọn motor theo bộ rèm thực tế: loại ray/ống, kích thước, tải, chiều chuyển động, môi trường và phụ kiện.

“Đã có motor” chưa đủ để chọn module thông minh. Cần biết model motor, nguồn và giao diện điều khiển được phép.

## So sánh cách điều khiển

| Phương án | Được gì | Đánh đổi và giới hạn | Kiểm tra trước khi chốt |
|---|---|---|---|
| Motor tích hợp giao thức của hệ thông minh | Cấu hình có thể đồng bộ trong một hệ | Phụ thuộc hub, phiên bản và tính năng motor | Có phản hồi vị trí không, cần học hành trình thế nào? |
| Bộ điều khiển rèm cho motor có ngõ lên/xuống phù hợp | Dùng được với bộ motor tương thích | Cần liên động, đúng nguồn/tải và xác định hành trình | Module có đúng chức năng điều khiển motor? Không thay bằng hai công tắc độc lập tùy ý |
| Tiếp điểm khô qua giao diện của motor/receiver | Tận dụng bộ điều khiển hiện hữu | Lệnh và phản hồi phụ thuộc giao diện; có thể chỉ Mở/Đóng/Dừng | Sơ đồ ngõ điều khiển và chế độ xung/giữ |
| Bridge/receiver cho hệ điều khiển vô tuyến của hãng | Ít can thiệp dây điều khiển tại motor | Tương thích theo hệ; không mặc định có phản hồi hai chiều | Mã motor/receiver, giao thức, cách ghép và trạng thái nhận được |
| Gateway/bus được hãng hỗ trợ | Có thể phục vụ nhiều motor và quản lý tập trung | Thêm hạ tầng và công cấu hình | Số lượng, địa chỉ, trạng thái và khả năng bảo trì |

Ví dụ Somfy có giao diện tiếp điểm khô để hệ ngoài phát lệnh đến sản phẩm RTS. Đây là ví dụ về cầu nối điều khiển, không phải bằng chứng mọi motor Somfy hoặc mọi bridge đều có cùng chức năng. [Somfy RTS Dry Contact Interface](https://www.somfysystems.com/en-us/products/1810493/rts-dry-contact-interface-single-channel)

## Mở một nửa: vị trí thật hay ước tính?

Một hệ có thể tính vị trí từ thời gian chạy sau khi học hành trình, hệ khác có phản hồi từ motor. Cần xác nhận cách tính và cách đồng bộ khi khách kéo tay, dùng remote gốc, rèm bị dừng hoặc mất điện.

Trước khi ghi “mở 50%” vào báo giá, thống nhất với khách đó là vị trí mục tiêu theo hệ điều khiển nào và cách nghiệm thu tại bộ rèm thật. Không lấy con số trên app làm bằng chứng motor có cảm biến vị trí.

## Chọn theo tình huống

<details>
<summary>Nhà mới, chưa chốt rèm và chưa đi nguồn</summary>

Cho đơn vị rèm và kỹ thuật thống nhất loại ray/motor, chiều mở, vị trí nguồn và chỗ tiếp cận bảo trì trước khi đóng trần. Chọn giao tiếp sau khi biết yêu cầu Mở/Đóng/Dừng hay vị trí.

</details>

<details>
<summary>Nhà đã có motor và remote</summary>

Xin ảnh mã motor/receiver và tài liệu giao tiếp. Xét bridge hoặc ngõ tích hợp đúng hệ. Không suy ra “có remote” là dùng được bộ phát hồng ngoại; nhiều remote dùng giao thức vô tuyến riêng.

</details>

<details>
<summary>Khách muốn rèm chạy theo nắng và ngữ cảnh</summary>

Hỏi thời điểm sử dụng, nhu cầu riêng tư, thao tác tay và giới hạn chạy liên tục. Với che nắng ngoài trời, chọn thiết bị đúng môi trường và chức năng bảo vệ theo hãng; không áp dụng nguyên bộ rèm trong nhà.

</details>

## Chi phí và bảo trì

So tổng bộ ray/motor, bộ điều khiển/bridge, nguồn, dây và công cấu hình. Một bridge dùng chung có thể khác bài toán mỗi rèm một module. Cần tính cả chỗ tháo motor, chỉnh lại hành trình và khả năng tìm đúng thiết bị thay thế.

## Ví dụ phòng ngủ có hai lớp rèm

Tình huống minh họa: khách muốn buổi sáng mở rèm vải nhưng giữ rèm voan, buổi tối đóng cả hai. Cần tách hai motor/kênh và xác nhận chiều Mở/Đóng từng lớp.

Cho khách thử bằng nút tay, app và remote gốc nếu vẫn dùng. Sau đó kiểm tra vị trí hiển thị còn đúng khi dừng giữa chừng; hẹn giờ chỉ bật sau khi khách thống nhất giờ sinh hoạt.

## Checklist khảo sát và nghiệm thu

- [ ] Loại rèm, kích thước, tải và model motor đã xác nhận với đơn vị rèm?
- [ ] Nguồn, dây tín hiệu và chỗ tiếp cận bảo trì đã có?
- [ ] Giao thức/ngõ điều khiển đúng tài liệu?
- [ ] Vị trí là phản hồi hay ước tính; cách học lại hành trình đã rõ?
- [ ] Lệnh ngược chiều được liên động theo thiết kế?
- [ ] Nút tay, remote, kéo tay nếu hỗ trợ và mất điện được thử?
- [ ] Ngữ cảnh dùng đúng kênh, chiều và lịch khách đã đồng ý?

## Đi tiếp đến triển khai

Xem motor rèm, QuickLink/MINS trong [B1.02 — Lắp đặt](/wiki/module-b-he-thong-thiet-bi/b1-lifesmart/02-thi-cong-lap-dat/), [B1.03 — Cấu hình](/wiki/module-b-he-thong-thiet-bi/b1-lifesmart/03-cau-hinh-app/) và [B1.05 — Scene](/wiki/module-b-he-thong-thiet-bi/b1-lifesmart/05-lap-trinh-scene/). Với thiết bị khác, lấy tài liệu motor và bộ điều khiển tương ứng trước khi triển khai.
