---
title: "B2.07 — Xử lý sự cố MobiEyes"
description: "Hướng dẫn khắc phục các lỗi thường gặp: mất kết nối, sai trạng thái, nhiễu điện và module không phản hồi."
module: "b"
level: "3-6"
tags: ["MobiEyes", "xử lý sự cố", "troubleshooting"]
---

## Mục tiêu
- Phân loại lỗi nhanh: do mạng, do nguồn hay do đấu nối.
- Khắc phục được lỗi phổ biến nhất: bật trên ứng dụng mà công tắc cơ không đồng bộ.

---

## 1. Bảng tra nhanh

| Triệu chứng | Nguyên nhân thường gặp |
|---|---|
| Ứng dụng mất kết nối (icon đỏ) | Lỗi mạng, router mất Internet, LAN Bridge mất nguồn |
| Bật/tắt ngược với công tắc cơ | Đấu nhầm L1/L2 và C trên board DIN-RY8-N |
| Trạng thái trên ứng dụng hiển thị sai | Cấp nhầm dây lửa vào chân N của bo mạch |
| Relay nhảy loạn, input không nhạy | Nhiễu từ cáp điện 220V đi chung với cáp tín hiệu |
| Module không phản hồi lệnh | Nguồn 24V sụt, bus CFLink đứt, Board ID trùng |
| Cả hệ thống mất nguồn, bo mạch cháy khét | Cắt nhầm cáp mạng IR làm chập tín hiệu Tx+/- với đường 24V |

---

## 2. Ứng dụng mất kết nối

Mở ứng dụng MobiEyes, nhìn icon góc trái. Đỏ là mất kết nối.

Kiểm tra theo thứ tự:

1. Ping IP của LAN Bridge từ máy tính (ví dụ: `ping 192.168.10.201`). Nếu không ping được thì vấn đề ở mạng nội bộ, không liên quan đến hệ thống smarthome.
2. Kiểm tra dây mạng từ LAN Bridge đến switch/router. Thử đổi cổng trên switch.
3. Khởi động lại router trước, đợi 2 phút, rồi mới khởi động lại LAN Bridge.

Nếu nhà vừa đổi modem (Viettel, FPT, VNPT): kiểm tra cài đặt NAT loopback trên modem mới. Một số modem mặc định tắt NAT loopback, khiến thiết bị trong mạng nội bộ không kết nối được với nhau qua IP ngoài. Ngoài ra kiểm tra lại Port Forwarding nếu chủ nhà điều khiển từ xa qua Internet.

---

## 3. Bật/tắt không đồng bộ giữa App và Công tắc cơ

Đây là lỗi phổ biến nhất khi lắp mới. Triệu chứng: trạng thái trên App hiện "Bật" nhưng thực tế bóng đèn đang tắt, hoặc icon trên App không tự động cập nhật khi nhấn công tắc cơ trên tường.

**Nguyên nhân**: Đấu nhầm sơ đồ "cầu" giữa module và công tắc đảo bên ngoài. Thông thường là do thợ đấu lộn vị trí giữa dây cặp (Travelers) và dây ra tải (Load).

**Khắc phục**: 
- Kiểm tra lại: Dây cặp (2 sợi từ công tắc cơ về) phải vào chân **L1** và **L2**.
- Dây ra tải (đèn) phải vào chân **C (Common)**.
- Đảm bảo dây Lửa (L) đã được cấp vào chân chung của công tắc cơ ngoài hiện trường.

Sau khi đấu đúng, App sẽ luôn biết chính xác trạng thái thực của đèn dù bạn bật/tắt bằng cách nào.

---

## 4. Trạng thái trên ứng dụng hiển thị sai

Khác với lỗi ở mục 3. Ở đây relay thực sự bật/tắt đúng, nhưng ứng dụng hiển thị ngược: đèn đang sáng mà ứng dụng hiện "tắt".

Nguyên nhân: cấp nhầm dây lửa vào chân N (Max) của bo mạch. Bo mạch nhận điện áp sai nên trả trạng thái ngược lên ứng dụng.

Cách phát hiện: dùng bút thử điện chấm vào chân N trên bo. Nếu đèn bút sáng thì đúng là dây lửa cắm nhầm vào chân N. Phải tháo ra và đấu lại dây nguội (N) vào đúng chân N.

---

## 5. Nhiễu điện

Triệu chứng: relay tự nhảy không theo lệnh, input thỉnh thoảng tự kích hoạt, bút thử điện chấm vào nhiều dây đều báo có điện.

Đây thường là vấn đề thi công chứ không phải lỗi thiết bị.

Kiểm tra:

1. Cáp tín hiệu CFLink có đi chung ống với cáp điện 220V không? Nếu có, phải tách ra. Đi riêng ống hoặc giữ khoảng cách ít nhất 20cm.
2. Nhà dùng điện 3 pha: kiểm tra đồng pha tại CB tổng. Nếu các tủ smarthome lấy nguồn từ các pha khác nhau, điện thế giữa các module sẽ không bằng nhau, gây nhiễu trên bus.
3. Có thiết bị công suất lớn (biến tần, motor công nghiệp) gần tủ smarthome không? Nếu có, cần dùng bộ lọc nhiễu hoặc dời tủ ra xa.

---

## 6. Module không phản hồi

Khi System Commander quét bus mà không thấy một hoặc nhiều module:

1. Đo output nguồn Meanwell: phải đủ 24VDC. Nếu sụt xuống dưới 22V thì nguồn yếu, có thể do quá tải khi cắm nhiều module trên cùng nguồn.
2. Nhìn đèn LED trên module: có sáng hoặc nháy không? Không sáng là mất nguồn hoặc module hỏng.
3. Kiểm tra chân bus Tx+/Tx-/G: có bị lỏng, đứt hoặc đấu sai không?
4. Kiểm tra Board ID: nếu hai module trùng ID trên cùng bus, cả hai sẽ không phản hồi đúng. Phải cô lập từng module để kiểm tra (xem bài B2.05 mục 2.1).

---

## 7. Toàn bộ hệ thống mất kết nối, bo mạch bốc mùi khét

Đây là sự cố nghiêm trọng nhất, thường do thợ hiện trường vô tình cắt đoạn cáp mạng kéo ra mắt hồng ngoại (IR) rồi đấu nối lộn dây. 

Vì cáp mạng IR mang theo nguồn 24V (qua cặp Lá/Nâu) đi cùng các chân tín hiệu Tx+/Tx- (qua cặp Trắng Dương/Dương), nếu quá trình nối lại làm các dây này chạm nhau, điện 24V sẽ phi thẳng vào đường tín hiệu. 

Bo mạch trung tâm sẽ cháy ngay lập tức. Với lỗi này, không có cách nào sửa chữa tại chỗ, thiết bị không được bảo hành và chủ thầu phải đền thiết bị mới.
Để phòng tránh: **Tuyệt đối không cắt cáp IR**. Nếu bắt buộc phải can thiệp, phải dùng đồng hồ đo điện kiểm tra kỹ từng chân xem có lọt áp 24V sang khe tín hiệu không trước khi cắm nối mạng lại.

---

## 8. Khi nào cần báo cấp trên

Nếu xử lý quá 30 phút mà không khắc phục được:

1. Chụp ảnh hoặc quay video hiện trạng: panel LED trên module, cách đấu dây trong tủ, màn hình System Commander.
2. Ghi lại cụ thể: triệu chứng gì, đã thử những bước nào, kết quả mỗi bước ra sao.
3. Liên hệ quản lý kỹ thuật hoặc đại diện CommandFusion.

Ghi nhận đầy đủ trước khi gọi. Nói "nó không chạy" thì đội hỗ trợ cũng không giúp được nhanh. Mô tả rõ triệu chứng và các bước đã thử sẽ giúp xác định nguyên nhân nhanh hơn nhiều.

---

## 9. Checklist xử lý nhanh

- [ ] Ứng dụng kết nối được? Ping IP LAN Bridge.
- [ ] LED module DIN-RY có sáng?
- [ ] Nguồn Meanwell đủ 24VDC?
- [ ] L1-L2 là dây cặp từ công tắc cơ? C là dây ra tải?
- [ ] Chân N bo mạch có bị cấp nhầm dây lửa?
- [ ] Cáp tín hiệu có đi chung với cáp 220V?
- [ ] System Commander quét thấy đủ board?
- [ ] Board ID có trùng nhau trên cùng bus?
