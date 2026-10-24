---
title: "GP.06 — An ninh và cảnh báo"
description: "Phân biệt chống xâm nhập, camera, khóa cửa và cảnh báo khói, khí, rò nước; chọn theo sự kiện và cách xử lý."
module: gp
sidebar:
  order: 7
---

## Mục tiêu

- Tách nhu cầu quan sát, phát hiện xâm nhập, kiểm soát cửa và cảnh báo sự cố.
- Xác định sự kiện nào cần phát hiện, báo cho ai và ai xử lý.
- Biết giới hạn của tích hợp smarthome trước khi tư vấn một hệ an ninh.

## Bắt đầu bằng sự kiện cần phát hiện

“Có an ninh” có thể là xem lại camera, biết cửa bị mở khi nhà vắng, hoặc nhận cảnh báo nước tràn. Mỗi việc cần một đường phát hiện và xử lý riêng. Camera nhìn thấy cửa không đồng nghĩa đã có hệ báo động; khóa thông minh không tự chứng minh cửa thực đang đóng kín.

## So sánh các nhóm giải pháp

| Nhóm | Vai trò chính | Được gì | Giới hạn và cần xác nhận |
|---|---|---|---|
| Đầu báo cửa/chuyển động và trung tâm báo động | Phát hiện sự kiện theo chế độ bảo vệ | Có thể quản lý vùng, lịch, còi và đường báo theo thiết kế | Đầu báo, chống can thiệp/giám sát nếu cần, nguồn dự phòng và kết nối phải phù hợp |
| Camera/NVR | Quan sát, ghi hình, xác minh | Có hình để xem hiện tại hoặc xem lại | Góc khuất, ánh sáng, lưu trữ, quyền truy cập; sự kiện AI cần kiểm tra riêng |
| Khóa cửa thông minh | Cho phép/kiểm soát mở khóa theo phương thức được hỗ trợ | Quản lý cách vào nhà và nhật ký theo model | Loại cửa, thân khóa, pin, phương án mở dự phòng và trạng thái thực được cung cấp |
| Đầu báo khói/nhiệt | Phát hiện dấu hiệu tương ứng của nguy cơ cháy | Có thể cảnh báo tại chỗ và truyền về hệ phù hợp | Đúng loại, vị trí, nguồn và thiết kế; không coi một scene là toàn bộ hệ báo cháy |
| Đầu báo khí | Phát hiện loại khí được thiết kế để nhận biết | Cảnh báo đúng nguy cơ khi chọn đúng loại | CO khác khí cháy; không dùng tên “gas sensor” để suy ra phát hiện mọi loại khí |
| Đầu báo rò nước | Phát hiện nước tại điểm/dây cảm biến | Cảnh báo sớm tại vị trí có nguy cơ | Không chứng minh toàn bộ căn nhà khô; tự đóng van cần thêm thiết bị và kiểm tra |

Chi phí phải tính cả đầu báo, trung tâm, còi, nguồn, đường liên lạc, lưu trữ và bảo trì. Tăng số cảm biến chưa chắc giải quyết được vùng mù hoặc cảnh báo không tới đúng người.

## Ba lớp phải xác nhận

1. Phát hiện: đúng đầu báo, vị trí và tình huống nào?
2. Truyền/hiển thị: tại chỗ, app, cuộc gọi hay đơn vị trực; mất Internet thì còn gì?
3. Phản ứng: ai nhận trách nhiệm, ai có quyền vào, có cần xác minh trước khi hành động?

Không mặc định app luôn gửi được thông báo: cần kiểm tra quyền thông báo, tài khoản, kết nối và đường dự phòng được thiết kế. Với công trình có hệ báo cháy hoặc an ninh riêng, smarthome cần được xác nhận vai trò tích hợp với người phụ trách thiết kế.

## Chọn theo tình huống

<details>
<summary>Khách đi vắng và muốn biết có người đột nhập</summary>

Làm rõ vùng bảo vệ, cửa ra vào, vật nuôi, giờ bật bảo vệ, người nhận cảnh báo và cách xác minh. Chọn đầu báo/hệ báo động cho nhiệm vụ đó; không lấy cảm biến hiện diện bật đèn làm mặc định.

</details>

<details>
<summary>Khách chỉ muốn xem con nhỏ hoặc xem lại sân trước</summary>

Xác định vùng hình cần thấy, ánh sáng ban đêm, thời gian lưu và người có quyền xem. Nếu muốn báo động theo hình ảnh, bổ sung tiêu chí sự kiện và thử sai/bỏ sót; tránh gọi mọi tính năng nhận diện chuyển động là chống xâm nhập đầy đủ.

</details>

<details>
<summary>Khách sợ rò nước khi vắng nhà và muốn tự khóa van</summary>

Xác định vị trí đặt đầu báo và tuyến nước cần khóa. Chọn van, bộ chấp hành, nguồn và quyền mở lại phù hợp. Thử riêng nhận cảnh báo và đóng van; hai chức năng này không tự đi cùng nhau.

</details>

## Khí CO không phải mọi loại khí cháy

Đầu báo phải ghi rõ nhận biết CO, methane, propane hoặc loại khí tương ứng. First Alert phân biệt đầu báo CO truyền thống với thiết bị có thêm cảm biến khí cháy. Khi khách nói “bếp gas”, phải xác định nguy cơ cần phát hiện và dùng đúng tài liệu model, không chỉ nhìn chữ CO. [Nguồn First Alert](https://support.firstalert.com/s/article/Can-First-Alert-alarms-detect-explosive-gases)

Vị trí lắp, cách thử và chu kỳ thay thế tuân theo đầu báo được chọn. Không dùng lửa, khí hoặc tình huống nguy hiểm để thử tùy ý tại công trình.

## Ví dụ: máy giặt rò nước

Tình huống minh họa: đầu báo đặt ở điểm nước có thể chảy tới gần máy giặt. Khi đầu báo tác động, khách cần nhận thông báo; nếu phương án gồm khóa nước, van phải thực sự đóng và có cách xử lý/mở lại.

Hướng dẫn LeaksProtect nêu việc phát hiện khi nước nối tiếp điểm; vị trí đặt vì vậy ảnh hưởng trực tiếp tới khả năng phát hiện. [Hướng dẫn Ajax](https://ajax.systems/wp-content/uploads/2018/09/Guide_LeaksProtect_en_web.pdf)

Khi nghiệm thu dùng quy trình thử an toàn theo hãng, ghi được ba kết quả riêng: đầu báo nhận sự kiện, người nhận được tin và thiết bị chấp hành thực hiện đúng nếu có.

## Checklist khảo sát và bàn giao

- [ ] Sự kiện, vùng cần theo dõi và giờ/chế độ hoạt động đã rõ?
- [ ] Đúng loại đầu báo, điều kiện môi trường, tiêu chí/chứng nhận theo thiết kế?
- [ ] Ai nhận cảnh báo, ai xử lý, ai có quyền xem hoặc mở cửa?
- [ ] Nguồn, pin, đường truyền và trạng thái mất kết nối đã được xét?
- [ ] Có lịch thử, thay pin, vệ sinh, lưu trữ và người phụ trách?
- [ ] Đã thử cảnh báo tại chỗ, từ xa và hành động đi kèm?
- [ ] Khách biết chức năng nào thuộc hệ an ninh riêng và chức năng nào là tích hợp smarthome?

## Đi tiếp đến triển khai

- [B5 — Camera Hikvision](/wiki/module-b-he-thong-thiet-bi/b5-camera-hikvision/00-gioi-thieu-hikvision/).
- [B1.03 — Cấu hình thiết bị/khóa](/wiki/module-b-he-thong-thiet-bi/b1-lifesmart/03-cau-hinh-app/).
- [B1.06 — Xử lý sự cố LifeSmart/DEFED](/wiki/module-b-he-thong-thiet-bi/b1-lifesmart/06-xu-ly-su-co/).
- [GP.07 — Khảo sát và tư vấn](/wiki/giai-phap/07-khao-sat-tu-van/).
