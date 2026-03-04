---
title: "B2.01 — Danh sách thiết bị MobiEyes"
description: "Danh mục thiết bị chính trong hệ thống MobiEyes: LAN Bridge, DIN-RY8-N, IR Blaster, nguồn Meanwell và thiết bị ngoại vi."
module: "b"
level: "2-6"
tags: ["MobiEyes", "thiết bị", "DIN-RY8-N", "LAN Bridge", "IR Blaster"]
---

## Mục tiêu
- Biết đâu là thiết bị trung tâm, đâu là module điều khiển tải.
- Nắm nhanh thông số quan trọng để tránh cấp sai nguồn hoặc đấu sai chức năng.

---

## 1. LAN Bridge (CF-IP) — bộ xử lý trung tâm

LAN Bridge là "bộ não" của cả hệ thống. Nó nhận lệnh từ ứng dụng trên điện thoại hoặc máy tính thông qua mạng Ethernet, rồi chuyển lệnh xuống các module trên bus CFLink.

| Thông số | Chi tiết |
|---|---|
| Chức năng | Cầu nối Ethernet sang CFLink Bus |
| Giao tiếp | TCP/UDP qua cổng mạng RJ45 |
| Tích hợp | Đồng hồ thời gian thực + bộ hẹn giờ |
| Phần mềm cấu hình | System Commander |

Mỗi LAN Bridge có một địa chỉ IP riêng trên mạng nội bộ. Nên gán IP tĩnh thay vì để DHCP tự cấp, vì nếu router cấp IP mới thì ứng dụng sẽ mất kết nối.

Đồng hồ thời gian thực quan trọng hơn nhiều người nghĩ. Nếu thời gian sai, toàn bộ lịch hẹn giờ (bật đèn lúc 18:00, bật giám sát lúc 23:00) sẽ chạy sai giờ. Sau mỗi lần mất điện dài ngày, nên kiểm tra lại giờ trên LAN Bridge.

---

## 2. DIN-RY8-N — bộ điều khiển tải

Đây là module chính, đảm nhận cả hai vai trò: điều khiển tải (relay) và nhận tín hiệu từ công tắc/cảm biến (ngõ vào).

| Thông số | Chi tiết |
|---|---|
| Relay (ngõ ra) | 8 kênh, mỗi kênh chịu tải 16A tại 240VAC |
| Dry Contact (ngõ vào) | 8 kênh, nhận tín hiệu từ công tắc cơ hoặc cảm biến |
| Lắp đặt | Trên thanh ray DIN trong tủ điện |
| Phần mềm cấu hình | DIN-RY Config Tool |

Mỗi tủ smarthome thường có 1-3 module DIN-RY8-N tùy số lượng tải cần điều khiển. Một module 8 kênh relay nghe thì nhiều, nhưng riêng phòng khách đã chiếm 3-4 kênh (đèn trần, đèn LED hắt, quạt, rèm) nên hết nhanh lắm.

Điểm hay của DIN-RY8-N là "2 trong 1": vừa điều khiển tải qua relay, vừa nhận tín hiệu ngõ vào. Không cần mua thêm module riêng cho công tắc.

---

## 3. Bộ phát hồng ngoại (IR Blaster)

IR Blaster dùng để thay thế remote điều hòa, TV, quạt trần — bất kì thiết bị nào nhận tín hiệu hồng ngoại.

| Thông số | Chi tiết |
|---|---|
| Phạm vi phát | 270 độ |
| Thư viện mã | Hơn 500.000 mã hồng ngoại có sẵn |
| Kết nối | CFLink Bus |

Phạm vi 270 độ nghĩa là chỉ cần đặt IR Blaster ở góc phòng là phủ được hầu hết thiết bị. Tuy nhiên hồng ngoại không xuyên tường, nên mỗi phòng có thiết bị cần điều khiển hồng ngoại đều cần một IR Blaster riêng.

---

## 4. Nguồn cấp — Meanwell HDR-60-24

| Thông số | Chi tiết |
|---|---|
| Đầu ra | 24VDC / 2.5A (60W) |
| Lắp đặt | Trên thanh ray DIN |
| Cấp nguồn cho | Toàn bộ module trong 1 tủ smarthome |

Meanwell là hãng nguồn công nghiệp, độ bền và ổn định cao. Mỗi tủ smarthome cần ít nhất một nguồn Meanwell. Nếu tủ có nhiều module (3 DIN-RY8-N trở lên), tính lại tổng dòng tiêu thụ và cân nhắc thêm nguồn thứ hai.

Lỗi hay gặp: dùng adapter nguồn rẻ tiền thay cho Meanwell. Ban đầu chạy được, nhưng sau vài tháng adapter sụt áp, module hoạt động không ổn định, relay nhảy lung tung không rõ nguyên nhân.

---

## 5. Thiết bị ngoại vi

Ngoài thiết bị chính trong tủ, hệ thống MobiEyes kết nối với các thiết bị ngoài hiện trường:

| Thiết bị | Cách kết nối | Ghi chú |
|---|---|---|
| Công tắc cơ | 2 sợi cáp 1x1.5mm² về Relay Output | Đấu vào L1-L2 của relay, line đèn đấu vào C tương ứng |
| Công tắc đảo | Cáp CAT5e/CAT6 về Dry Contact Input | Không cấp điện 220V vào ngõ vào, chỉ truyền tín hiệu tiếp điểm khô |
| Cảm biến chuyển động (220V) | 2 sợi cáp 2×1.5mm² | 1 sợi cấp nguồn và 1 sợi tín hiệu về đấu qua role 220V để nhận tín hiệu tiếp điểm khô |
| Công tắc từ (cửa) | Cáp điện thoại 4 lõi | Tiếp điểm đóng/mở, gắn ở cửa ra vào |
| Motor rèm | 2 kênh relay trên cùng board | Một kênh mở, một kênh đóng |
| Còi báo động | 1 kênh relay | Điều khiển bằng macro trong phần mềm |

Với công tắc đảo, lỗi nghiêm trọng nhất là cấp nhầm 220V vào ngõ vào Dry Contact. Ngõ vào chỉ nhận tín hiệu tiếp điểm khô (không điện), đưa 220V vào sẽ cháy bo ngay lập tức.
