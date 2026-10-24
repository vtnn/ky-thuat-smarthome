---
title: "GP.01 — Chọn giải pháp chiếu sáng"
description: "So sánh on/off, dimmer cắt pha, 0/1–10V, DALI và PWM; kiểm tra đèn, driver và nhu cầu trước khi chốt."
module: gp
sidebar:
  order: 1
---

## Mục tiêu

- Chọn đúng mức điều khiển: bật/tắt, giảm sáng, đổi nhiệt độ màu hay đổi màu.
- Phân biệt cách điều khiển với đặc tính của đèn và driver.
- Biết cần xin mẫu và thử gì trước khi đặt thiết bị số lượng lớn.

## Hỏi nhu cầu trước khi hỏi hãng

Đèn hành lang chỉ cần bật/tắt theo người đi qua sẽ khác đèn phòng ngủ cần hạ sáng thấp vào ban đêm. “Dim được” cũng chưa đủ: khách có cần sáng rất thấp, chuyển mượt, đổi từ trắng sang vàng hoặc gọi lại một ngữ cảnh không?

Đèn, driver và bộ điều khiển phải phù hợp với nhau. Nhãn “LED” không đồng nghĩa dim được; nhãn “dimmable” vẫn cần xem hỗ trợ phương pháp nào.

## So sánh các phương án

| Phương án | Làm được gì | Được gì | Đánh đổi và điều kiện |
|---|---|---|---|
| On/off qua công tắc/rơ-le | Đóng hoặc ngắt mạch đèn | Dễ hiểu, phù hợp nhóm đèn không cần dim | Không giảm sáng; chọn khả năng đóng cắt theo tải LED và dòng khởi động |
| Cắt pha | Điều chỉnh dạng điện áp AC cấp vào tải tương thích | Có thể phù hợp cải tạo nếu đèn/driver và dây đáp ứng | Phải khớp leading/trailing edge, tải tối thiểu/tối đa; thử nhấp nháy, tiếng ồn, mức sáng thấp |
| 0/1–10V | Gửi mức điều khiển analog cho driver | Phù hợp gom nhóm điều khiển khi driver hỗ trợ | Cần dây điều khiển và đúng kiểu giao tiếp; khả năng tắt hẳn phải tra driver |
| DALI | Điều khiển số theo địa chỉ/nhóm khi thiết bị hỗ trợ | Linh hoạt chia nhóm, ngữ cảnh, đọc thông tin theo chức năng thiết bị | Cần bus, bộ điều khiển/nguồn bus phù hợp và công cấu hình; không mặc định mọi driver hỗ trợ màu |
| PWM cho LED điện áp không đổi | Bộ điều khiển đóng/ngắt đầu ra theo chu kỳ cho tải phù hợp | Thường dùng với LED dây một màu, CCT hoặc RGB(W) đúng loại | Phải khớp điện áp, dòng, số kênh; xem sụt áp, tản nhiệt và chiều dài đoạn dây |

Chi phí tương đối chỉ so sánh được khi cùng số mạch và tính năng. On/off ít chức năng thường có cấu hình gọn. DALI có thể cần thêm hạ tầng và công địa chỉ hóa, nhưng cần xét lợi ích chia nhóm và vận hành trên toàn công trình.

## Hai chỗ hay nhầm

### 0–10V và 1–10V có tắt hẳn như nhau không?

Không hứa tắt hẳn chỉ từ tên giao tiếp. Tra tài liệu về mức dim thấp nhất, dim-to-off và cách bật/tắt của đúng driver. Kiểm tra cả đầu ra điều khiển đang dùng và số driver ghép chung. MEAN WELL có hướng dẫn riêng về dim-to-off; khi áp dụng phải đọc cùng datasheet model. [Nguồn MEAN WELL](https://www.meanwell.eu/ExclusivePDF/DIMMER-NOTE.pdf)

### PWM đầu vào và PWM đầu ra có giống nhau không?

Driver có ngõ DIM nhận tín hiệu PWM không có nghĩa đầu ra đèn của nó dùng cùng điện áp hoặc cách đấu với bộ điều khiển LED dây. Ví dụ một driver có thể nhận tín hiệu PWM ở đầu điều khiển nhưng cấp điện riêng cho tải ở đầu ra. Phải đọc đúng phần DIM và phần OUTPUT. [Ví dụ datasheet PWM-40 của MEAN WELL](https://www.meanwell.eu/Upload/PDF/PWM-40/PWM-40-SPEC.PDF)

## Chọn theo tình huống

<details>
<summary>Nhà đang hoàn thiện, khách chỉ cần bật/tắt và ngữ cảnh Ra ngoài</summary>

Ưu tiên phân mạch hợp lý và công tắc/rơ-le phù hợp tải. Hỏi mạch nào cần giữ chạy, mạch nào tham gia ngữ cảnh; chưa cần dim cho mọi vị trí.

</details>

<details>
<summary>Khách muốn dim nhưng đã mua đèn</summary>

Xin ảnh nhãn và mã driver, thông số dim, sơ đồ và một bộ mẫu. Thử bộ điều khiển dự kiến từ mức thấp đến cao, tắt/bật lại và sau mất điện. Nếu driver không hỗ trợ, phải trao đổi việc thay driver/đèn trước khi báo giá.

</details>

<details>
<summary>Phòng khách cần nhiều nhóm, thay đổi ngữ cảnh và nhiệt độ màu</summary>

Xét phương án số hoặc điều khiển nhiều kênh phù hợp với đèn. Với DALI, xác nhận loại điều khiển màu cần thiết và khả năng của gateway/driver. DT6 và DT8 là các chức năng khác nhau; cần đúng loại DT8 cho nhu cầu màu, không coi nhãn DALI là đã đủ.

</details>

## Độ sáng, nhiệt độ màu và màu sắc

| Khách muốn | Cần kiểm tra thêm |
|---|---|
| Chỉ giảm/tăng sáng | Phương pháp dim, mức thấp nhất sử dụng được và độ mượt |
| Đổi trắng/vàng (CCT) | Nguồn sáng hỗ trợ tunable white, driver/bộ điều khiển và số kênh hoặc loại DALI phù hợp |
| Đổi RGB/RGBW | Đúng loại LED, cách ghép kênh, công suất và chức năng điều khiển màu |
| Giảm sáng thì tự ấm hơn | Đèn có dim-to-warm hay kịch bản phối màu? Không mặc định là CCT độc lập |

DALI Alliance phân biệt điều khiển mức sáng và các kiểu điều khiển màu trong DT8. Khi chọn thiết bị, đọc cả chức năng driver và bộ điều khiển. [Device types](https://www.dali-alliance.org/tech-notes/device-types.html), [DALI colour](https://www.dali-alliance.org/dali/colour.html)

## Ví dụ tư vấn phòng ngủ

Khách muốn sáng thấp khi đi vệ sinh ban đêm. Trong tình huống minh họa này, câu hỏi nghiệm thu là: “Ở mức thấp khách muốn dùng, đèn có sáng ổn định và dễ chịu không?”

Kỹ thuật thử một bộ đèn/driver với bộ dim dự kiến trước khi đặt hàng. Nếu đèn không ổn định ở mức đó, có thể cần thay driver hoặc dùng một nhóm đèn ngủ riêng. Không lấy thanh trượt xuống mức thấp trên app làm bằng chứng đèn thực đã đạt yêu cầu.

## Checklist khảo sát và nghiệm thu

- [ ] Mỗi nhóm đèn cần on/off, dim, CCT hay màu?
- [ ] Có mã đèn, driver, điện áp/dòng tải và phương pháp dim?
- [ ] Dây nguồn, dây tín hiệu, tủ và vị trí nguồn đã đủ?
- [ ] Tính cả tải mỗi kênh, dòng khởi động, phụ kiện và công cấu hình?
- [ ] Đã thử mẫu ở mức sáng thấp, ngữ cảnh và sau mất điện?
- [ ] Khách biết cách bật tay và thay driver đúng loại sau này?

## Đi tiếp đến triển khai

- [B4 — DALI](/wiki/module-b-he-thong-thiet-bi/b4-dali-dimmer/00-gioi-thieu-dali/): bus, cấu hình và xử lý sự cố.
- [B1.02 — Lắp đặt LifeSmart](/wiki/module-b-he-thong-thiet-bi/b1-lifesmart/02-thi-cong-lap-dat/): chọn đúng bài thiết bị đang dùng.
- [GP.07 — Khảo sát và bàn giao](/wiki/giai-phap/07-khao-sat-tu-van/).
