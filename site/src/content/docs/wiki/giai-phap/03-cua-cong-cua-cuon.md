---
title: "GP.03 — Cửa cổng và cửa cuốn"
description: "Chọn cách tích hợp cửa cổng, cửa cuốn; làm rõ lệnh, trạng thái, an toàn và phương án vận hành thủ công."
module: gp
sidebar:
  order: 3
---

## Mục tiêu

- Phân biệt điều khiển mở/đóng với biết cửa thực đang ở đâu.
- Chọn giao diện tích hợp theo bo điều khiển/motor có sẵn.
- Thống nhất điều kiện vận hành an toàn và cách dùng khi hệ thông minh gặp sự cố.

## Khách muốn phát lệnh hay biết cửa đã đóng?

Nút “Đóng” trên app chỉ chứng minh người dùng có thể yêu cầu đóng. Muốn xác nhận đóng kín cần tín hiệu phản hồi phù hợp. Tính vị trí bằng thời gian chạy cũng không chứng minh cửa đã tới cuối hành trình nếu bị dừng hoặc gặp vật cản.

Trước khi chọn module, chụp nhãn bo điều khiển, tài liệu cổng chức năng, loại motor và thiết bị bảo vệ đang có.

## So sánh hướng tích hợp

| Phương án | Điểm được | Đánh đổi | Cần kiểm tra |
|---|---|---|---|
| Tiếp điểm khô vào ngõ điều khiển được hãng cho phép | Tận dụng bộ điều khiển hiện hữu, cấu hình thường gọn | Lệnh có thể là xung tuần tự, không phải Mở/Đóng riêng | Ý nghĩa ngõ vào, kiểu xung/giữ, thời gian tác động và cách dừng |
| Module/gateway chuyên dụng theo hệ | Có thể có lệnh và trạng thái rõ hơn nếu được hỗ trợ | Phụ thuộc dòng bo, giao thức và phiên bản | Danh sách tương thích và các thuộc tính phản hồi thật |
| Bổ sung cảm biến trạng thái phù hợp | Có thêm bằng chứng tại vị trí đóng/mở đang giám sát | Thêm dây/pin, vị trí và bảo trì | Cảm biến được kích hoạt ở đâu; đóng cửa khác với khóa cửa |
| Can thiệp điều khiển motor trực tiếp | Chỉ xem xét khi thiết kế và tài liệu cho phép | Phải giải quyết liên động, tải và bảo vệ; không là phương án mặc định | Kỹ thuật chịu trách nhiệm thiết kế, sơ đồ được xác nhận |

Tiếp điểm khô không tự cấp điện ra tải. Không lấy chân tín hiệu của bo để thử cấp điện hoặc dùng module không đúng loại; việc đấu nối phải theo tài liệu thiết bị và do kỹ thuật thực hiện.

Chi phí gồm module điều khiển, cảm biến trạng thái, nguồn, dây, phụ kiện và công thử bảo vệ. Phương án chỉ phát lệnh thường ít hạng mục hơn phương án cần phản hồi đầy đủ.

## Chọn theo tình huống

<details>
<summary>Khách chỉ cần thêm nút mở cổng trên app</summary>

Kiểm tra bo có ngõ tích hợp được phép hay không. Nếu chỉ có lệnh tuần tự, phải giải thích rằng một xung có thể mở/dừng/đóng tùy trạng thái hiện tại. Không đổi nhãn thành nút “Đóng chắc chắn” khi chưa có đủ cơ sở.

</details>

<details>
<summary>Khách muốn ra ngoài là tự đóng cửa cuốn</summary>

Cần xét trạng thái cửa, người/vật trong hành trình, cơ chế bảo vệ gốc và cách dừng khẩn theo hệ. Chốt điều kiện tự động với khách và đơn vị cửa trước; không chỉ thêm một lệnh Đóng vào scene.

</details>

<details>
<summary>Khách cần kiểm tra từ xa cửa đã đóng kín chưa</summary>

Chọn phản hồi trạng thái từ bộ điều khiển hoặc cảm biến tại vị trí phù hợp. Ghi rõ những trạng thái nhận được: đóng kín, mở hết hay chỉ “không đóng kín”; không tự suy ra toàn bộ vị trí hành trình.

</details>

## Điều kiện an toàn và sử dụng thủ công

Giữ các chức năng bảo vệ của hệ cửa như thiết kế của hãng: photocell, cạnh an toàn, phát hiện lực hoặc các ngõ bảo vệ tương ứng. Không bỏ qua chức năng bảo vệ để lệnh từ app chạy được. Tài liệu Nice yêu cầu xử lý sự cố và sử dụng chế độ thủ công theo hướng dẫn của đúng hệ; photocell là một phần hỗ trợ, không thay toàn bộ thiết kế an toàn. [Hướng dẫn Nice](https://www.niceforyou.com/sites/default/files/upload/manuals/is0095a01mm.pdf)

Khách cần biết vị trí remote/nút tay, cách dừng và cách sử dụng bộ nhả cơ khi thiết bị có hỗ trợ. Trình tự nhả cơ phải theo tài liệu và được đơn vị lắp cửa hướng dẫn, đặc biệt với cửa có tải trọng.

## Ví dụ bàn giao

Tình huống minh họa: bộ điều khiển có một ngõ xung và chỉ bổ sung cảm biến cửa đóng kín. App nên thể hiện “Đóng kín” khi đúng cảm biến xác nhận; khi mất tín hiệu hoặc cửa rời vị trí đó, không được giữ nhãn đóng kín như một trạng thái đã chắc chắn.

Danh sách nghiệm thu gồm thao tác app, remote gốc, nút tay, dừng giữa hành trình, bảo vệ gặp vật cản theo quy trình hãng và khôi phục sau mất điện.

## Checklist trước khi chốt

- [ ] Có model bo/motor, tài liệu và xác nhận từ đơn vị cửa?
- [ ] Lệnh là xung tuần tự hay Mở/Đóng/Dừng riêng?
- [ ] Mỗi trạng thái trên app lấy từ đâu; mất kết nối hiển thị thế nào?
- [ ] Thiết bị bảo vệ và liên động gốc được giữ và kiểm tra?
- [ ] Có phương án thao tác thủ công và hướng dẫn cho người sử dụng?
- [ ] Tự động đóng từ xa đã được xem xét với tình trạng công trình thật?

## Đi tiếp đến triển khai

Với LifeSmart, xem phần General Controller trong [B1.01](/wiki/module-b-he-thong-thiet-bi/b1-lifesmart/01-danh-sach-thiet-bi/) và [B1.02](/wiki/module-b-he-thong-thiet-bi/b1-lifesmart/02-thi-cong-lap-dat/). Sơ đồ phải phù hợp đúng bộ cửa; dùng [GP.07](/wiki/giai-phap/07-khao-sat-tu-van/) để bàn giao các xác nhận còn thiếu.
