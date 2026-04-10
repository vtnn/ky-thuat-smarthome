---
title: "B5.07 — Xử lý sự cố Camera"
description: "Flow debug có hệ thống khi camera offline, hình ảnh lỗi, NVR không ghi hình hoặc không xem được từ xa qua Hik-Connect."
module: "b"
level: "3-6"
tags: ["camera", "troubleshooting", "Hikvision", "NVR"]
---

## Mục tiêu
- Debug nhanh các sự cố phổ biến: mất hình, offline, không lưu trữ, không xem từ xa.
- Có flow xử lý sự cố có hệ thống thay vì mò mẫm.
- Biết khi nào cần báo cấp trên và chuẩn bị gì trước khi gọi.

---

## Bảng tra cứu nhanh

| Triệu chứng | Nguyên nhân thường gặp | Xử lý |
|---|---|---|
| Camera offline / mất hình | Mất nguồn PoE, đứt cáp, camera hỏng | Xem mục "Camera Offline" bên dưới |
| Hình đen khi trời tối | IR LED hỏng, bị vật cản che ống kính | Kiểm tra IR, vệ sinh ống kính |
| Hình mờ / nhiễu ban ngày | Ống kính bẩn, cáp bị nhiễu, jack RJ45 lỏng | Vệ sinh ống kính, kiểm tra đấu nối |
| Hình bị trắng xóa 1 vùng | Hồng ngoại phản xạ tường/vật cản gần | Xoay camera hoặc dời vật cản |
| Hình giật lag khi xem live | Băng thông mạng không đủ, NVR quá tải | Giảm Sub Stream bitrate, kiểm tra mạng |
| NVR không ghi hình | HDD chưa format, HDD lỗi, lịch ghi chưa bật | Xem mục "NVR không ghi hình" bên dưới |
| Không xem từ xa | Mất Internet, Hik-Connect offline, DNS sai, port forwarding lỗi | Xem mục "Mất truy cập từ xa" bên dưới |
| SADP không tìm thấy thiết bị | Khác VLAN, firewall laptop, camera mất nguồn | Xem bài B5.04 mục 6 |

---

## Flow debug tổng quát

Khi nhận thông báo sự cố, đi theo flow này. Phần lớn lỗi camera giải quyết trong 3 bước đầu.

### Bước 1 — Kiểm tra vật lý

Trước khi mở bất kỳ phần mềm nào, kiểm tra bằng mắt:

- **LED trên Switch PoE**: Port kết nối camera có LED sáng không? Nếu không → cáp đứt, jack lỏng, hoặc port Switch hỏng.
- **LED trên camera**: Một số camera có đèn IR đỏ nhìn thấy được ban đêm. Ban ngày thì khó thấy — cần nhìn qua camera điện thoại.
- **Cáp mạng**: Kiểm tra 2 đầu jack có bị lỏng, oxy hóa, hoặc gãy chốt khóa không. Đặc biệt đầu ngoài trời.
- **Hộp kỹ thuật ngoài trời**: Mở nắp kiểm tra có nước vào không. Nước + jack RJ45 = mất tiếp xúc + short circuit.

Nhiều cuộc gọi hỗ trợ kết thúc ở bước này: cáp bị chuột cắn, jack bị oxy hóa do nước mưa, hoặc Switch PoE quá tải nguồn.

### Bước 2 — Kiểm tra mạng

Từ laptop cùng mạng LAN:
1. **Ping IP camera**: `ping 192.168.1.31` — nếu reply → camera sống, lỗi ở NVR hoặc cấu hình. Nếu timeout → camera offline hoặc IP sai.
2. **Mở SADP Tool**: Quét xem camera có xuất hiện không. Nếu SADP thấy nhưng ping không được → IP conflict hoặc subnet sai.
3. **Ping NVR**: Đảm bảo NVR cũng online.

### Bước 3 — Kiểm tra trên NVR

Mở giao diện NVR (qua màn hình hoặc web browser):
- Camera Management: Camera lỗi hiện trạng thái gì? "Connected", "Offline", "Disconnected"?
- Nếu "Disconnected" → kiểm tra username/password camera trên NVR có đúng không (có thể ai đó đổi pass camera mà quên cập nhật trên NVR).
- Nếu "Offline" → vấn đề mạng giữa NVR và camera.

### Bước 4 — Khởi động lại

Nếu 3 bước trên không phát hiện nguyên nhân rõ ràng:
1. Rút cáp camera khỏi Switch, đợi 10 giây, cắm lại → tương đương restart camera qua PoE.
2. Nếu vẫn lỗi: khởi động lại Switch PoE.
3. Cuối cùng: khởi động lại NVR (rút nguồn 10 giây, cắm lại).

Thứ tự khởi động: Switch PoE trước → đợi camera lên → NVR sau. Nếu khởi động NVR trước mà Switch/camera chưa sẵn sàng, NVR sẽ không tìm thấy camera.

### Bước 5 — Cô lập lỗi

Nếu khởi động lại không giải quyết:
- **Đổi port Switch**: Rút cáp camera sang port khác trên Switch. Nếu camera hoạt động → port cũ hỏng.
- **Đổi cáp**: Thay cáp mạng khác. Nếu hoạt động → cáp cũ đứt sợi bên trong.
- **Cắm trực tiếp**: Nối camera thẳng vào laptop bằng 1 cáp ngắn. Nếu SADP thấy → lỗi nằm ở hạ tầng mạng (Switch, cáp dài, patch panel).
- **Thử camera khác**: Cắm camera khác (biết chắc đang hoạt động) vào cùng cáp + cùng port. Nếu camera khác hoạt động → camera gốc hỏng phần cứng.

---

## Camera Offline

Đây là sự cố phổ biến nhất. Nguyên nhân theo tần suất:

1. **Cáp / jack RJ45 lỗi** (40%): Đặc biệt ở đầu ngoài trời. Kiểm tra, bấm lại jack.
2. **Switch PoE quá tải nguồn** (20%): Switch 8 port nhưng công suất PoE chỉ 60W, gắn 8 camera 7.5W/cái = 60W vừa khít. Thêm 1 camera → Switch cắt nguồn camera xa nhất. Kiểm tra tổng công suất PoE đang dùng.
3. **Camera hỏng phần cứng** (15%): Sau sét đánh, quá áp nguồn, hoặc nước vào. Cần thay thế.
4. **IP conflict** (15%): Hai thiết bị cùng IP. Dùng SADP kiểm tra, gán lại IP.
5. **Cáp quá 100m** (10%): Tín hiệu suy giảm, PoE không đủ nguồn. Cần thêm Switch PoE trung gian.

---

## NVR không ghi hình

Kiểm tra theo thứ tự:

1. **HDD trạng thái gì?** Vào Storage Management → HDD Management:
   - "Normal" → HDD OK, kiểm tra lịch ghi hình.
   - "Uninitialized" → HDD chưa format. Chọn HDD → Init.
   - "Error" hoặc "Abnormal" → HDD hỏng, cần thay mới.
   - Không hiện HDD → cáp SATA lỏng hoặc HDD chết.

2. **Lịch ghi hình có bật không?** Vào Recording Schedule → kiểm tra từng kênh. Lịch trống (không có màu xanh/vàng) = không ghi.

3. **HDD đầy**: Vào Storage → kiểm tra % dung lượng đã dùng. Nếu 100% và chế độ Overwrite tắt → NVR dừng ghi. Bật Overwrite để ghi đè dữ liệu cũ nhất.

4. **Playback kiểm tra**: Vào Playback → chọn kênh → chọn ngày. Timeline có vạch xanh/vàng = đã ghi. Trống = không ghi.

---

## Hình ảnh bất thường

### Hình đen ban đêm

- Kiểm tra IR LED có hoạt động không: Nhìn camera qua camera điện thoại, IR sẽ hiện ánh sáng tím/đỏ.
- Nếu IR không sáng: Camera hỏng module IR hoặc đang ở chế độ "Day" cố định. Vào Configuration → Image → Day/Night → chuyển sang "Auto".
- Nếu IR sáng mà hình vẫn đen: Ống kính bị che (nhện giăng tơ, bụi dày). Vệ sinh ống kính.

### Hình lóa trắng ban đêm

Hồng ngoại bị phản xạ bởi vật cản gần ống kính:
- Tường trắng trong phạm vi 30cm.
- Mái hiên, thanh sắt sát camera.
- Nắp hộp kỹ thuật mở ra che 1 góc.

Xử lý: Xoay camera hoặc dời vật cản. Nếu không thể, đổi sang camera có Smart IR (tự điều chỉnh cường độ hồng ngoại theo khoảng cách).

### Hình mờ / nhiễu

- Vệ sinh ống kính bằng vải microfiber.
- Kiểm tra jack RJ45: bấm lại nếu nghi ngờ lỏng.
- Kiểm tra cáp: nếu cáp chạy song song với dây điện 220V mà không có chống nhiễu → nhiễu điện từ. Kéo cáp cách dây điện ít nhất 30cm.

---

## Mất truy cập từ xa

Công ty chủ yếu dùng truy cập qua IP/domain. Kiểm tra theo thứ tự:

1. **NVR có Internet không?** Từ NVR: Configuration → Network → kiểm tra Default Gateway và DNS. Thử ping 8.8.8.8 nếu NVR hỗ trợ.
2. **Port forwarding trên router còn đúng không?** Kiểm tra các port (81, 8554, 8100) có đang forward đúng về IP NVR (`192.168.1.30`). Nếu router bị reset, cấu hình port forwarding có thể mất.
3. **IP WAN có thay đổi không?** Nếu dùng IP động mà không có DDNS, IP sẽ thay đổi khi modem restart. Kiểm tra IP WAN hiện tại hoặc cấu hình DDNS.
4. **Nếu dùng Hik-Connect (P2P)**: Configuration → Platform Access → kiểm tra Status. Nếu "Offline" → DNS sai, Firewall chặn outbound, hoặc mất Internet.
5. **Xem được Live nhưng Playback không tải**: Upload Internet quá chậm. Playback đòi hỏi băng thông lớn hơn live view. Giải pháp: tăng gói cước Internet hoặc xem playback trực tiếp trên NVR tại chỗ.

---

## Khi nào cần báo cấp trên

Nếu đã theo flow debug 30 phút mà chưa giải quyết, hoặc gặp tình huống:

- NVR khởi động không lên (không có hình trên HDMI, không có LED)
- Camera phát nóng bất thường hoặc có mùi khét
- Nhiều camera offline cùng lúc sau sét đánh / mất điện đột ngột
- HDD kêu tiếng lạ (click click) — dấu hiệu HDD sắp chết
- Khách hàng yêu cầu thay đổi hạ tầng mạng (thêm VLAN, đổi subnet) ngoài scope bảo trì

Trước khi gọi, chuẩn bị:
1. Chụp ảnh / quay video hiện trạng (LED Switch, LED camera, màn hình NVR).
2. Ghi lại các bước đã thử và kết quả.
3. Ghi rõ model thiết bị, firmware version, IP, tên dự án.

---

## Checklist xử lý sự cố tại hiện trường

- [ ] Hỏi khách hàng: sự cố xảy ra từ khi nào, có thay đổi gì gần đây (đổi router, sửa điện, cúp điện)
- [ ] Kiểm tra vật lý: LED Switch PoE, cáp mạng, jack RJ45, hộp kỹ thuật
- [ ] Kiểm tra mạng: ping camera, ping NVR, SADP Tool
- [ ] Kiểm tra trên NVR: trạng thái camera, HDD, lịch ghi hình
- [ ] Khởi động lại: Switch → Camera (rút cáp) → NVR (đúng thứ tự)
- [ ] Cô lập: đổi port, đổi cáp, test trực tiếp
- [ ] Kiểm tra ghi hình: playback ngày hiện tại có vạch timeline không
- [ ] Kiểm tra truy cập từ xa: port forwarding đúng, Hik-Connect Online, app xem được
- [ ] Ghi log: thiết bị nào lỗi, nguyên nhân, cách xử lý, thời gian hoàn thành
- [ ] Xác nhận với khách hàng: cho khách xem trực tiếp trên app để confirm
