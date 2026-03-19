---
title: "B1.06 — Xử lý sự cố LifeSmart"
description: "Bảng tra cứu lỗi, flow debug có hệ thống, và hướng dẫn khắc phục các sự cố thường gặp trong vận hành LifeSmart."
module: "b"
level: "3-6"
tags: ["LifeSmart", "xử lý sự cố", "DEFED", "điều hòa", "debug"]
---

## Mục tiêu
- Tra nhanh nguyên nhân dựa trên triệu chứng (mất kết nối, ghép nối lỗi, báo động, kịch bản không chạy).
- Có flow xử lý sự cố có hệ thống, không mò mẫm.
- Thay thế thiết bị hỏng mà không làm mất kịch bản tự động đã cài.

---

## Bảng tra cứu nhanh

| Triệu chứng | Nguyên nhân thường gặp | Hướng xử lý |
|---|---|---|
| Station mất kết nối | Lỗi mạng dây/WiFi, router mất mạng | Khởi động lại router → rút cắm lại Station |
| Thiết bị mất kết nối | Pin yếu, quá xa Station, mất nguồn 220V | Thay pin / kiểm tra CB / dời Station gần hơn |
| Ghép nối thất bại | Chưa đưa thiết bị vào chế độ ghép nối, đứng quá xa Station | Nhấn giữ nút lại, đưa thiết bị gần Station dưới 5m |
| DEFED đèn vàng | Cảm biến kích hoạt khi hệ thống đang tắt giám sát, hoặc Station mất kết nối | Kiểm tra trạng thái Station + danh sách cảm biến |
| DEFED đèn đỏ | Có cảm biến kích hoạt khi đang bật giám sát (báo động) | Xác nhận báo động thật hay giả, kiểm tra cảm biến |
| Bộ HVAC Gateway nháy đèn STA | Sai cáp tín hiệu hoặc điều hòa báo lỗi | Kiểm tra cáp xoắn đôi, chụp mã lỗi gửi hỗ trợ |
| Kịch bản không chạy | Chưa bật toggle, múi giờ sai, thiết bị mất kết nối | Xem mục "Sự cố kịch bản" bên dưới |
| Điều khiển đèn nhấp nháy | Hai kịch bản xung đột bật/tắt cùng thiết bị | Rà lại danh sách kịch bản, loại bỏ xung đột |
| App hiện "Device Offline" | Mất sóng CoSS, Station chưa cập nhật firmware, pin hết | Kiểm tra sóng, cập nhật firmware Station, thay pin |
| Rèm motor không dừng đúng vị trí | Hành trình chưa được cài (Travel Set) hoặc bị lệch | Vào cài đặt motor → Travel Set → chỉnh lại điểm đầu/cuối |

---

## Flow debug tổng quát

Khi gặp sự cố, đi theo thứ tự này thay vì mò lung tung. Phần lớn lỗi nằm ở 3 bước đầu.

### Bước 1 — Kiểm tra vật lý

Trước khi vào app, kiểm tra bằng mắt và tay trước:
- CB có bật không? Cắm điện chưa?
- Đèn trạng thái trên Station có sáng không?
- Dây mạng có lỏng, gãy nẹp, tuột jack không?
- Pin thiết bị còn không? (Cảm biến cửa, chuyển động thường dùng pin CR123A hoặc CR2450.)

Nhiều cuộc gọi hỗ trợ kết thúc ở bước này: CB bị nhảy, dây mạng bị ai đó rút, hoặc pin hết mà không ai thay.

### Bước 2 — Kiểm tra mạng

Station LifeSmart cần kết nối mạng ổn định:
- Router có online không? Thử vào website bất kỳ từ điện thoại cùng WiFi.
- Station nối dây LAN hay WiFi? Nếu LAN thì đổi cổng, đổi dây thử. Nếu WiFi thì kiểm tra tín hiệu.
- Có ai vừa đổi mật khẩu WiFi không? (Station kết nối WiFi sẽ bị đá ra nếu đổi pass.)

### Bước 3 — Kiểm tra trên app

Mở ứng dụng LifeSmart:
- Station có hiện online không?
- Thiết bị có hiện "Offline" không?
- Firmware Station đã cập nhật mới nhất chưa? (Engineering Settings → Update Smart Device)

### Bước 4 — Khởi động lại

Nếu 3 bước trên không phát hiện lỗi rõ ràng:
1. Khởi động lại router (rút nguồn 10 giây, cắm lại).
2. Khởi động lại Station (rút nguồn 10 giây, cắm lại).
3. Đợi 2-3 phút cho Station reconnect.
4. Kiểm tra lại trên app.

Thứ tự quan trọng: router trước, Station sau. Nếu khởi động Station trước mà router chưa lên thì Station vẫn không kết nối.

### Bước 5 — Cô lập lỗi

Nếu khởi động lại không giải quyết:
- Thử điều khiển thiết bị khác trên cùng Station. Nếu thiết bị khác vẫn hoạt động → lỗi nằm ở thiết bị cụ thể, không phải Station.
- Thử ghép nối lại thiết bị lỗi (đưa gần Station, nhấn giữ nút ghép nối).
- Nếu tất cả thiết bị đều lỗi → có thể Station hỏng hoặc mạng có vấn đề sâu hơn.

---

## Station và thiết bị mất kết nối

### Station mất kết nối

Khởi động lại router trước, sau đó rút nguồn Station khoảng 10 giây rồi cắm lại. Nếu vẫn không lên:
- Kiểm tra cổng mạng: thử đổi cổng trên router hoặc đổi dây mạng.
- Nếu Station dùng WiFi: kiểm tra xem có ai đổi mật khẩu WiFi, hoặc router có chuyển băng tần không (LifeSmart Smart Station chỉ hỗ trợ 2.4GHz).
- Nếu đèn Station sáng bình thường nhưng app vẫn báo offline: có thể do firewall trên router chặn traffic ra ngoài. Thử tắt firewall tạm hoặc thêm Station vào whitelist.

### Thiết bị mất kết nối

Thiết bị dùng pin (cảm biến cửa, chuyển động, nút bấm):
- Thay pin mới, nhưng chờ 5 giây sau khi tháo pin cũ rồi mới lắp pin mới. Tụ điện bên trong cần xả hết trước khi reset.
- Sau khi thay pin, nhiều thiết bị cần 1-2 phút để tự kết nối lại với Station.

Thiết bị dùng điện (công tắc, dimmer, CUBE Module):
- Kiểm tra CB và nguồn cấp. Có trường hợp CB tổng bật nhưng CB nhánh bị nhảy.
- Nếu thiết bị đã có điện mà vẫn offline: thử tắt CB 10 giây rồi bật lại (tương đương reset).

Sóng yếu:
- Dời Station ra vị trí thoáng hơn, tránh đặt trong tủ điện kim loại kín.
- Nếu nhà lớn hoặc nhiều tầng: thêm Station phụ (Cascade) và chia thiết bị theo khu vực.

---

## Hệ thống an ninh DEFED

Đèn xanh: hệ thống hoạt động bình thường.

Đèn vàng: có cảm biến kích hoạt khi hệ thống đang ở chế độ tắt giám sát, hoặc Station mất kết nối. Không nguy hiểm nhưng cần kiểm tra:
- Mở app, vào trang DEFED, xem cảm biến nào đang báo kích hoạt.
- Nếu là cảm biến cửa: kiểm tra cửa đã đóng hẳn chưa.
- Nếu là Station mất kết nối: xử lý theo mục Station ở trên.

Đèn đỏ: báo động — có cảm biến kích hoạt khi hệ thống đang bật giám sát. Cần phản ứng:
1. Xác nhận có phải báo động thật không (người nhà quên tắt giám sát, thú cưng kích hoạt cảm biến, gió thổi cửa).
2. Nếu báo động giả liên tục: kiểm tra lại vị trí lắp cảm biến (cảm biến chuyển động quay mặt ra cửa sổ sẽ hay bị gió kích hoạt).
3. Nếu báo động thật: liên hệ khách hàng và quản lý ngay.

---

## Bộ điều khiển điều hòa (HVAC Gateway / LS212)

### HVAC Gateway

Đèn HBS nhấp nháy: bình thường, đang giao tiếp tốt với dàn lạnh.

Đèn STA nháy nhanh: lỗi tín hiệu cáp. Xử lý:
1. Kiểm tra cáp xoắn đôi từ Gateway đến dàn lạnh.
2. Kiểm tra các điểm đấu nối, mối nối, và thứ tự dây.
3. Kiểm tra xem đã chọn đúng hãng điều hòa trong phần cấu hình Bluetooth chưa.

Màn hình hiện mã số: chụp lại mã lỗi, gửi cho bộ phận hỗ trợ kỹ thuật hãng điều hòa. Mỗi mã ứng với một lỗi cụ thể trên bo điều hòa — đây không phải lỗi của hệ thống LifeSmart.

### LS212

Đèn RUN nháy nhanh liên tục: thiết bị đang tìm dàn lạnh mà chưa kết nối được.
- Kiểm tra thứ tự đấu dây tín hiệu (có thể bị đảo cực).
- Xác nhận lại hãng điều hòa đã chọn đúng trong cấu hình Bluetooth.
- Nếu dùng song song panel gốc: kiểm tra chế độ Master/Slave đã thiết lập đúng chưa.

---

## Sự cố liên quan đến kịch bản (Scene)

Đây là nhóm lỗi thường gặp nhưng ít được nghĩ tới khi xử lý sự cố.

### Kịch bản không chạy

Kiểm tra theo thứ tự:
1. Kịch bản đúng khu vực chưa? Trong cùng 1 nhà, các kịch bản có thể trùng tên nhưng phải khác khu vực. Đôi khi khách hàng vô tình kích hoạt nhầm kịch bản ở khu vực khác (VD kịch bản "Đi ngủ" mỗi phòng sẽ thực hiện các hành động khác nhau)
2. Trigger có đúng không? Vào kịch bản, kiểm tra trigger đã trỏ đúng thiết bị chưa (có thể đã thay thế thiết bị mà quên cập nhật trigger).
3. Thiết bị trong action còn online không? Nếu thiết bị offline thì action gửi lệnh cũng không thực thi.
4. Múi giờ Smart Station có đúng UTC+7 không? Nếu sai, các lịch hẹn giờ sẽ chạy lệch.

### Kịch bản chạy sai thời điểm

- Kiểm tra condition: condition có đúng loại và đúng thiết bị không.
- Kiểm tra múi giờ: nếu trigger theo giờ mà múi giờ bị set sai, kịch bản sẽ chạy lệch 1-7 tiếng.
- Kiểm tra trùng: có kịch bản khác cũng tác động đến cùng thiết bị ở cùng khung giờ không?

---

## Thay thế thiết bị hỏng

Nguyên tắc quan trọng nhất: không xóa thiết bị cũ rồi thêm mới. Nếu xóa thiết bị, toàn bộ kịch bản tự động liên quan sẽ mất theo và phải cài lại từ đầu. Một dự án 30 kịch bản mà xóa nhầm một thiết bị cốt lõi, có thể mất nửa ngày để khôi phục.

Cách đúng:
1. Vào ứng dụng, chọn thiết bị hỏng → vào thông tin thiết bị → chọn chức năng "Replace" (thay thế).
2. Ghép nối thiết bị mới (phải cùng model với thiết bị cũ).
3. Khởi động lại Station.
4. Kiểm tra từng kịch bản liên quan — xác nhận thiết bị mới đã được nhận đúng trong trigger và action.

Nếu không tìm thấy chức năng Replace: kiểm tra firmware Station. Các phiên bản firmware cũ có thể chưa hỗ trợ tính năng này — cập nhật firmware trước.

---

## Khi nào cần báo cấp trên

Nếu xử lý quá 30 phút mà không khắc phục được, hoặc gặp một trong các tình huống sau:

- Station khởi động không lên dù đã thử mọi cách
- Thiết bị phát nóng hoặc có mùi khét
- Mã lỗi trên HVAC Gateway / LS212 không có trong tài liệu
- Khách hàng yêu cầu thay đổi lớn về logic kịch bản mà ngoài scope bảo trì
- Hệ thống báo động liên tục mà không xác định được nguyên nhân

Trước khi gọi, chuẩn bị:
1. Chụp ảnh hoặc quay video hiện trạng (đèn trạng thái, màn hình LCD, mã lỗi).
2. Ghi lại những bước đã thử và kết quả.
3. Ghi rõ model thiết bị, firmware version, và tên dự án.

Nếu chỉ nói "nó không hoạt động" mà không mô tả được triệu chứng và các bước đã thử, đội hỗ trợ cũng không giúp nhanh được.

---

## Checklist xử lý sự cố tại hiện trường

Khi đến hiện trường xử lý, đi theo checklist này:

- [ ] Hỏi khách hàng: sự cố xảy ra từ khi nào, có thay đổi gì gần đây không (đổi router, sửa điện, đổi pass WiFi)
- [ ] Kiểm tra vật lý: CB, nguồn điện, dây mạng, đèn trạng thái Station
- [ ] Kiểm tra mạng: router online, Station online trên app
- [ ] Khởi động lại: router → Station (đúng thứ tự)
- [ ] Cô lập: xác định lỗi do thiết bị cụ thể hay toàn hệ thống
- [ ] Xử lý: thay pin, ghép nối lại, sửa cáp, cập nhật firmware
- [ ] Kiểm tra kịch bản: các scene liên quan đến thiết bị vừa xử lý còn chạy đúng không
- [ ] Ghi log: thiết bị nào lỗi, nguyên nhân, cách xử lý, thời gian hoàn thành
- [ ] Xác nhận với khách hàng: cho khách test trước mặt, xác nhận đã hết lỗi
