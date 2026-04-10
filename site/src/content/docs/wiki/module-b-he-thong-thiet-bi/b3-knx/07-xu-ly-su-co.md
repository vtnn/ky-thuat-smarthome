---
title: "B3.07 — Xử lý sự cố KNX"
description: "Hướng dẫn chẩn đoán và khắc phục sự cố KNX từ thực tế: bus không hoạt động, thiết bị không phản hồi, ETS không kết nối, DALI lỗi, push button LED bất thường."
module: "b"
level: "3-6"
tags: ["knx", "su-co", "troubleshooting", "debug", "chan-doan", "bus"]
---

## Mục tiêu

- Nhận dạng được triệu chứng sự cố KNX phổ biến
- Biết quy trình kiểm tra từng bước
- Dùng được Group Monitor và Bus Monitor để chẩn đoán
- Biết khi nào cần leo thang liên hệ nhà sản xuất

---

## Nguyên tắc troubleshooting KNX

Trước khi bắt đầu debug, xác định rõ: sự cố xảy ra ở tầng nào?

```
Tầng 1 — Vật lý (Physical):   Bus voltage, cáp, đấu nối
Tầng 2 — Kết nối (Connection): Physical Address, programming
Tầng 3 — Logic (Application):  Group Address, CO liên kết, Parameters
Tầng 4 — Tích hợp (System):    KNX/IP Gateway, MobiEyes, mạng LAN
```

Luôn kiểm tra từ tầng thấp nhất trước. Không có ích gì khi debug Group Address nếu bus voltage đang dưới 21V.

---

## Bảng xử lý sự cố tổng hợp

### Sự cố 1: Bus hoàn toàn không hoạt động (tất cả thiết bị câm)

| Bước | Kiểm tra | Công cụ | Khắc phục |
|---|---|---|---|
| 1 | PSU có được cấp 230V không | Đồng hồ điện | Kiểm tra CB nguồn cấp PSU |
| 2 | Điện áp bus tại đầu ra PSU | Đồng hồ VDC | Phải 29–31V, nếu 0V = PSU hỏng |
| 3 | Điện áp bus tại thiết bị đầu cuối | Đồng hồ VDC | Phải ≥21V, nếu thấp = ngắn mạch hoặc điện trở cao |
| 4 | Kiểm tra ngắn mạch bus | Đồng hồ Ohm (PSU tắt) | Đo trở kháng giữa + và -: <50 Ohm = ngắn mạch |
| 5 | Tìm điểm ngắn mạch | Ngắt từng nhánh | Ngắt từng nhánh bus cho đến khi trở kháng trở về bình thường |
| 6 | Kiểm tra Ring topology | Trace cáp vật lý | Tìm và cắt điểm nối vòng |

**Triệu chứng ngắn mạch:** PSU LED báo lỗi (đỏ), điện áp bus = 0V hoặc rất thấp (<10V), PSU nóng và có thể ngắt thermal protection.

**Cách tìm điểm ngắn mạch nhanh:** Ngắt tất cả nhánh bus khỏi PSU. Cắm từng nhánh lại và đo điện áp sau mỗi lần cắm. Nhánh nào làm điện áp giảm mạnh = nhánh đó bị ngắn mạch.

---

### Sự cố 2: Một thiết bị không phản hồi

| Triệu chứng | Nguyên nhân | Cách kiểm tra | Khắc phục |
|---|---|---|---|
| LED power không sáng | Mất nguồn bus tại thiết bị | Đo bus voltage tại terminal thiết bị | Kiểm tra dây bus, đầu nối |
| LED power sáng nhưng không phản hồi | Chưa nạp Physical Address | ETS scan → thiết bị chưa xuất hiện | Ấn programming button, nạp lại PA |
| PA đúng nhưng download lỗi | Application Program lỗi | ETS → thiết bị → Properties → xem lỗi | Full Download lại |
| Download OK nhưng vẫn không phản hồi | Group Address không đúng | Group Monitor → nhấn nút → kiểm tra GA gửi | Kiểm tra lại liên kết CO-GA |
| Thiết bị biến mất khỏi bus | Firmware crash | ETS bus scan | Factory reset bằng programming button (giữ >10s) |

**Factory reset push button (thường):** Giữ programming button >10 giây → LED nhấp nháy → thả → thiết bị reset về factory (PA = 15.15.255 hoặc 0.0.0). Sau đó cần nạp lại PA và download.

---

### Sự cố 3: ETS không kết nối được với bus

| Triệu chứng | Nguyên nhân | Cách kiểm tra | Khắc phục |
|---|---|---|---|
| ETS không tìm thấy gateway | Gateway không có IP | Ping IP của gateway | Kiểm tra DHCP hoặc set IP tĩnh |
| Tìm thấy gateway nhưng kết nối thất bại | Tunneling slots đầy | Đếm client đang kết nối | Ngắt client khác, hoặc restart gateway |
| Kết nối bị drop liên tục | Mạng LAN không ổn định | Ping liên tục gateway | Kiểm tra switch, cáp mạng |
| Firewall chặn | Windows Firewall | Thử tắt firewall tạm thời | Thêm exception cho KNXnet/IP (UDP 3671) |
| Subnet khác | Máy tính và gateway khác subnet | Kiểm tra IP/mask | Đặt cùng subnet hoặc dùng router |
| ETS báo lỗi "Interface not available" | Driver USB Interface lỗi | Device Manager | Gỡ/cài lại driver USB Interface |

**Kiểm tra nhanh:** Trong ETS → Connections → Interfaces — nếu gateway hiện "Not reachable", kiểm tra: ping được không? Cùng mạng không? Port 3671 UDP có bị chặn không?

**Mặc định multicast KNX:** 224.0.23.12, UDP port 3671. Nếu dùng IP multicast scan trong ETS mà không thấy gateway, thử scan unicast bằng cách nhập trực tiếp IP của gateway.

---

### Sự cố 4: Nhấn nút không có tác dụng

| Bước | Kiểm tra | Kết quả mong đợi | Nếu không đúng |
|---|---|---|---|
| 1 | Mở Group Monitor trong ETS | Khi nhấn nút, thấy telegram xuất hiện | Không thấy = push button không hoạt động hoặc không download |
| 2 | Kiểm tra GA của telegram | GA đúng với GA đã cấu hình | Sai = kiểm tra lại cấu hình push button trong ETS |
| 3 | Kiểm tra GA liên kết với actuator | Actuator có CO liên kết cùng GA không | Thiếu liên kết = thêm GA vào CO actuator |
| 4 | Kiểm tra actuator có nhận không | Group Monitor thấy telegram đến actuator | Không thấy = actuator không online |
| 5 | Manual test actuator | Gõ lệnh từ Group Monitor trực tiếp | Nếu actuator phản hồi với lệnh manual = vấn đề ở push button |

**Quy trình chuẩn:** Mở Group Monitor → nhấn nút → nhìn xem có telegram không → đúng GA không → actuator có CO liên kết không → actuator có online không.

---

### Sự cố 5: DALI không dim / đèn không sáng

| Triệu chứng | Nguyên nhân | Cách kiểm tra | Khắc phục |
|---|---|---|---|
| DALI LED "Error" đỏ trên gateway | DALI bus lỗi hoặc ngắn mạch | Đo điện áp DALI: phải ~16V DC | Kiểm tra cáp DALI, driver |
| Một vài driver không phản hồi | DALI address chưa gán | ETS DALI commissioning | Chạy lại DALI auto-addressing |
| Tất cả driver không phản hồi | DALI commissioning chưa làm | Kiểm tra trạng thái commissioning | Chạy DALI commissioning từ đầu |
| Dim không mượt (giật cục) | DPT sai (gửi 1-byte thay vì 4-bit) | Kiểm tra CO liên kết | Dùng đúng CO và DPT 3.007 |
| Đèn không tắt hết về 0% | Min level cấu hình > 0 | ETS DALI Gateway → Min dim level | Set min level về 0 hoặc giá trị phù hợp |
| DALI gateway online nhưng không phản hồi KNX | Physical Address chưa nạp | ETS scan | Nạp lại PA cho gateway |

**Đo DALI bus voltage:** Đặt đồng hồ vào 2 dây DALI (DA+ và DA-). Điện áp khi không tải: ~16–18V DC. Khi có driver: ~12–16V DC. Dưới 9V = quá tải hoặc ngắn mạch DALI.

**Tổng số driver DALI tối đa trên 1 gateway/kênh: 64.** Nếu kết nối nhiều hơn, gateway không ổn định. Đếm chính xác trước khi commissioning.

---

### Sự cố 6: Push Button LED bất thường

| Triệu chứng | Nguyên nhân | Khắc phục |
|---|---|---|
| LED không sáng dù đèn đã bật | Status GA không liên kết với push button | Liên kết CO "LED Status Input" với GA status feedback |
| LED sáng ngược (đèn tắt thì LED sáng) | Invert LED cấu hình sai | ETS → parameter LED inversion → đổi lại |
| LED nhấp nháy liên tục | Bus voltage thấp (<21V) | Kiểm tra voltage, PSU |
| LED sáng màu sai (Vimar RGB) | Màu LED chưa cấu hình | ETS → LED colour per button → chọn màu |
| Navigation LED không sáng | Parameter navigation LED tắt | ETS → Navigation LED brightness → bật |
| LED sáng rất yếu | PWM level thấp | ETS → LED brightness → tăng lên |

---

### Sự cố 7: Binary Input lỗi

| Triệu chứng | Nguyên nhân | Khắc phục |
|---|---|---|
| Nhấn công tắc không có telegram | Đấu dây sai (dry contact không kín) | Kiểm tra thông mạch công tắc khi nhấn bằng đồng hồ |
| Telegram liên tục gửi không dừng | NC (Normally Closed) thay vì NO | ETS → channel parameter → đổi NO/NC |
| Toggle mode: ON rồi lại OFF ngay | Pulse detection không đúng | Kiểm tra debounce time, thay mode từ Toggle sang Switching |
| Binary Input không trong ETS bus scan | Chưa nạp PA | Ấn programming button trên Binary Input, nạp PA |

---

## Công cụ chẩn đoán

### 1. Đồng hồ vạn năng (VOM)

Công cụ căn bản nhất. Dùng để đo:
- Điện áp bus DC tại terminal thiết bị: bình thường 27–30V
- Điện áp tại đầu cuối line: bình thường ≥21V
- Điện áp DALI: bình thường ~16V
- Trở kháng bus (PSU tắt): bình thường >100 Ohm

### 2. ETS Group Monitor

Xem realtime tất cả telegram KNX. Cách sử dụng hiệu quả:
- Lọc theo GA: nhập GA cần theo dõi vào filter
- Khi nhấn nút, telegram phải xuất hiện trong <100ms
- Nếu không thấy telegram: thiết bị không hoạt động hoặc bus không kết nối

Lệnh "Write" từ Group Monitor: nhấp chuột phải vào GA → Write → nhập giá trị → gửi thủ công. Dùng để test actuator mà không cần dùng push button.

### 3. ETS Bus Monitor

Hiển thị raw telegram ở mức bit. Hữu ích khi:
- Nghi ngờ telegram bị corrupt (do nhiễu)
- Muốn xem acknowledge từ thiết bị
- Debug timing issues

Chú ý: Bus Monitor tạo nhiều traffic hơn Group Monitor. Không bật Bus Monitor khi hệ thống đang hoạt động bình thường — chỉ dùng khi debug.

### 4. Individual Address Scan

ETS → Diagnostics → Individual Address → Scan

Liệt kê tất cả thiết bị đang "sống" trên bus với PA của chúng. So sánh với danh sách project:
- PA trong scan nhưng không trong project = thiết bị lạ (thiết bị cũ còn sót)
- PA trong project nhưng không trong scan = thiết bị offline (mất điện, hỏng, PA chưa nạp)

### 5. Commissioning DALI (ETS)

DALI commissioning thực hiện trong ETS (với KNX-DALI Gateway Siemens/EAE):
- Tự động assign DALI address cho từng driver
- Kiểm tra trạng thái từng ballast riêng lẻ
- Thay DALI driver: nạp lại DALI address qua ETS

---

## Checklist xử lý nhanh

### Khi bus câm lặng (tất cả thiết bị không phản hồi):

- [ ] Kiểm tra CB nguồn cấp PSU — đã bật chưa?
- [ ] Đo điện áp tại PSU output: phải 29–31V DC
- [ ] Đo điện áp tại cuối line: phải ≥21V DC
- [ ] Quan sát LED PSU: có LED báo overload/error không?
- [ ] Tắt PSU → đo trở kháng bus (+/-): <50 Ohm = ngắn mạch
- [ ] Nếu ngắn mạch: ngắt từng nhánh cho đến khi tìm được nhánh lỗi
- [ ] Kiểm tra Ring topology: có dây nào nối vòng không?

### Khi một thiết bị không phản hồi:

- [ ] Đo bus voltage tại terminal thiết bị: phải ≥21V
- [ ] Mở ETS → bus scan → thiết bị có xuất hiện không?
- [ ] Nếu không xuất hiện: ấn programming button → nạp PA lại
- [ ] Nếu xuất hiện: kiểm tra Download status trong ETS
- [ ] Mở Group Monitor → thực hiện hành động → có telegram không?
- [ ] Kiểm tra GA liên kết trong ETS

### Khi ETS không kết nối gateway:

- [ ] Ping IP của gateway từ máy tính — thành công chưa?
- [ ] Kiểm tra gateway và máy tính cùng subnet
- [ ] Kiểm tra Windows Firewall: UDP 3671 có bị chặn không?
- [ ] Đếm số client đang kết nối: có vượt tunneling slot không?
- [ ] Thử restart KNX/IP Gateway
- [ ] Nếu IP Gateway có vấn đề, xử lý gateway trước khi tiếp tục

---

## Thông số đo đạc chuẩn

| Tham số | Bình thường | Cảnh báo | Nguy hiểm |
|---|---|---|---|
| Bus voltage (tại PSU) | 29–31V DC | 27–28V hoặc 31–32V | <21V hoặc >35V |
| Bus voltage (cuối line) | 25–29V DC | 22–24V | <21V |
| Dòng bus (PSU 640mA) | 50–500mA | 520–600mA | >640mA (overload) |
| DALI voltage | 14–18V DC | 10–13V | <9V (overload/short) |
| Bus trở kháng (PSU tắt) | >100 Ohm | 50–100 Ohm | <50 Ohm (short circuit) |

---

## Escalation — Khi nào liên hệ nhà sản xuất

Liên hệ hỗ trợ kỹ thuật nhà sản xuất khi:

1. **Thiết bị không phản hồi dù đã thử tất cả:** Bus OK, PA đúng, download thành công nhưng thiết bị vẫn câm — có thể firmware lỗi hoặc phần cứng hỏng.

2. **ETS báo lỗi không rõ nghĩa:** Error code trong Download Log mà không có trong tài liệu.

3. **Firmware update cần thiết:** Một số bug chỉ được fix trong firmware mới — cần file firmware và hướng dẫn từ hãng.

4. **DALI commissioning thất bại liên tục:** Có thể driver không tương thích với gateway, cần xác nhận từ nhà sản xuất gateway.

**Thông tin cần chuẩn bị khi contact support:**
- Model và serial number của thiết bị
- Phiên bản firmware (xem trong ETS → Properties → thiết bị)
- Phiên bản ETS đang dùng
- Screenshot màn hình lỗi
- File log từ Bus Monitor (export ra CSV)

**Liên hệ:**
- Siemens Building Technologies: [siemens.com/knx](https://www.siemens.com/knx)
- EAE Technology: [eaetechnology.com/support](https://www.eaetechnology.com)
- Ekinex: [ekinex.com/support](https://www.ekinex.com)
- Vimar: [vimar.com/en/support](https://www.vimar.com)
- MDT Technologies: [mdt-group.com/support](https://www.mdt-group.com)

---

## Ghi nhú từ thực tế thi công

**Hay gặp nhất khi bàn giao:** Push button LED sáng ngược hoặc không phản hồi status — hầu hết do quên liên kết CO Status Input với GA feedback. Kiểm tra GA 4/x/x trong project.

**Hay gặp khi mở rộng:** Thêm thiết bị nhưng quên cập nhật PA (chọn trùng PA cũ). Luôn dùng Individual Address Scan sau khi thêm thiết bị mới.

**Hay gặp sau bàn giao 6 tháng:** Khách gọi "đèn bật tắt không ổn định" — thường là bus voltage thấp do thiết bị thêm vào sau mà PSU không đủ dòng. Đo bus voltage → upgrade PSU.
