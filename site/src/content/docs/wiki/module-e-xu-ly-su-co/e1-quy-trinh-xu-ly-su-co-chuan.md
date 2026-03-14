---
title: "E1 — Quy trình xử lý sự cố chuẩn"
description: "Quy trình 20 bước từ lúc tiếp nhận thông tin từ khách hàng đến lúc đóng ticket, kèm flow debug kỹ thuật 6 bước."
module: "e"
level: "3-6"
tags: ["xử lý sự cố", "quy trình", "SOP"]
---

## Mục tiêu

- Có một quy trình chuẩn hóa từ lúc tiếp nhận thông tin của khách hàng, xử lý tại hiện trường cho đến khi đóng ticket.
- Kỹ thuật viên áp dụng flow chuẩn đoán (debug) có hệ thống để khoanh vùng nguyên nhân nhanh, không mò mẫm hay làm phát sinh lỗi mới.

---

## 1. Quy trình tiếp nhận & xử lý sự cố (SOP 20 bước)

Đây là quy trình làm việc tiêu chuẩn áp dụng cho mọi sự cố Smarthome. Quy trình được thiết kế thành 4 giai đoạn cụ thể:

### Giai đoạn 1: Tiếp nhận & Phân loại

1. **Tiếp nhận thông tin sự cố**, thu thập đủ các thông tin:
   - Tên khách hàng.
   - Địa chỉ công trình.
   - Số điện thoại liên hệ.
   - Mô tả lỗi / hiện tượng chi tiết.
2. **Ghi nhận & tạo ticket sự cố** trên hệ thống nội bộ công ty.
3. **Chuẩn đoán sơ bộ lỗi** dựa trên mô tả của khách hàng.
4. **Phân loại mức độ sự cố**:
   - Khắc phục từ xa (hướng dẫn qua điện thoại, chỉnh cấu hình từ xa).
   - Cần xử lý tại chỗ (thay đồ, đấu nối lại cáp, sửa mạng rớt).

### Giai đoạn 2: Lập phương án & Lên lịch

5. **Liên hệ khách hàng để xác minh thông tin** và xin lỗi về sự bất tiện.
6. **Hướng dẫn khách hàng xử lý nhanh từ xa** (nếu có thể, ví dụ: khởi động lại router, kiểm tra aptomat).
7. **Đưa ra phương án xử lý tạm thời** (để sinh hoạt của khách ít bị ảnh hưởng nhất trong lúc chờ kỹ thuật).
8. **Đề xuất phương án sửa chữa chính thức**.
9. **Báo giá sửa chữa** (nếu thiết bị hết bảo hành hoặc hư hỏng phát sinh từ phía khách).
10. **Xác nhận lịch xử lý tại chỗ** (nếu cần đến công trình thi công).

### Giai đoạn 3: Thực thi tại công trình

11. **Chuẩn bị vật tư & dụng cụ** trước khi xuất phát (cáp mạng, đồng hồ VOM, kìm, thang cáp, thiết bị thay thế, pin dự phòng).
12. **Tiến hành kiểm tra hiện trạng tại công trình**:
    - Xác nhận lại tình trạng lỗi có đúng như đã báo.
    - Chụp hình hiện trạng gửi về lưới nội bộ (nhóm chat hỗ trợ).
    - Báo cáo về công ty ngay nếu tình hình thực tế nghiêm trọng hơn hoặc nguyên nhân cháy nổ lạ.
13. **Xác nhận quyền truy cập hệ thống**:
    - Xin tài khoản APP từ chủ nhà (hoặc yêu cầu quét QR chia sẻ nhà).
    - Kiểm tra hệ thống trực tiếp trên giao diện của khách.
14. **Thực hiện sửa chữa / khắc phục sự cố** (Bám sát *Flow debug 6 bước* ở phần bên dưới để tránh sai lệch).

### Giai đoạn 4: Nghiệm thu & Đóng ticket

15. **Kiểm tra lại toàn bộ hệ thống liên quan** sau khi đã sửa xong (đảm bảo việc sửa không làm văng mất kịch bản/camera khác).
16. **Bàn giao lại hệ thống cho khách hàng** và hướng dẫn lại nếu có thay đổi trong cách sử dụng.
17. **Yêu cầu khách đổi mật khẩu tài khoản APP** (nếu kỹ thuật đã trực tiếp mượn tài khoản của khách ở bước 13 để test).
18. **Lập biên bản làm việc** và mời khách hàng ký nhận.
19. **Ghi chú báo cáo kỹ thuật** (Nguyên nhân lỗi là gì, đã xử lý cách nào) vào ticket nội bộ.
20. **Đóng ticket sự cố**.

---

## 2. Flow chuẩn đoán lỗi tại hiện trường (Debug 6 bước)

Áp dụng tại **Bước 14** của quy trình trên. Flow này buộc kỹ thuật viên phải loại trừ dần nguyên nhân theo thứ tự, tuyệt đối không nhảy sáo:

```text
[1. Xác định lỗi] → [2. Phân loại] → [3. Kiểm tra mạng]
→ [4. Kiểm tra nguồn] → [5. Kiểm tra cấu hình] → [6. Kiểm tra automation]
```

### 2.1. Xác định lỗi
- Triệu chứng cụ thể là gì? (Offline toàn nhà, đèn không dim được, camera không lên hình...)
- Xảy ra từ khi nào? Có vào giờ cố định không?
- Trước đó nhà khách có yếu tố nào thay đổi không? (Vừa cúp điện, thợ mạng vào thay modem, nhà có tiệc, v.v.)

### 2.2. Phân loại lỗi
Khoanh vùng vào 1 nhóm nghi ngờ cao nhất:
- Mạng / Internet (Trạng thái offline, giật lag).
- Nguồn / PoE / Pin (Đèn công tắc tắc tịt, Hub không có điện).
- Cấu hình / Mapping (Bấm công tắc cứng lên đèn nhưng trên app không lên, hoặc app ấn nhảy số mà đèn không sáng).
- Lập trình / Automation (Kịch bản rèm tới giờ không đóng, cửa mở mà đèn không tự bật).
- Phần cứng (Cháy nổ, vỡ vỏ, đơ).
- Thi công / Đấu nối (Chạm chập cáp tín hiệu, tuột domino).

### 2.3. Kiểm tra mạng
- Ping IP thiết bị (nếu nằm cùng cục bộ/VLAN).
- Kiểm tra điện thoại có lướt web được bằng Wi-Fi đó không (kiểm tra rớt gói WAN).
- Kiểm tra các VLAN, cổng port của Switch, cáp LAN có lỏng ngàm không.

### 2.4. Kiểm tra nguồn
- Attomat (CB) có nhảy không? Cáp cấp vào thiết bị có đủ áp không?
- Đèn cổng PoE trên switch có sáng vàng/xanh không?
- Nguồn cấp 12V/24V có chạy đúng vol? Pin cảm biến còn khá hay đã kiệt?
- Bus (với KNX/DALI/RS485) đo bằng thang VDC có điện áp nằm trong mức chuẩn không?

### 2.5. Kiểm tra cấu hình
- IP tĩnh cấp cho thiết bị có bị trùng trong LAN không (IP conflict)?
- Việc điều khiển riêng lẻ có bình thường không? Chỉnh group/scene có ăn mapping không?
- Có mới đổi mật khẩu Wi-Fi không (lỗi chí mạng với IoT hệ Wi-Fi)?

### 2.6. Kiểm tra automation
- Condition (Điều kiện) có đặt sai loại không (ví dụ: cần "and" lại đi đặt "or").
- Hai automation có đang xung đột với nhau theo kiểu đá chéo (Vòng lặp bật tắt vô tận) không?
- Chỉnh giờ Smart Station / Hub đã về đúng múi giờ UTC+7 (Indochina Time) chưa?

---

## 3. Escalation (Báo cáo vượt cấp)

113: Bất cứ sự cố nào xử lý **quá 30 phút mà chưa giải quyết xong**, phải thực hiện Escalation:
114: 
115: 1. **Ghi nhận chi tiết**: Ghi lại triệu chứng, các bước đã tự kiểm tra và kết quả đo đạc (bao nhiêu volt, báo đèn gì).
116: 2. **Thu thập bằng chứng**: Chụp hoặc quay video màn hình lỗi, cụm tủ điện đang thi công, log lỗi hệ thống.
117: 3. **Báo cáo cấp trên**: Báo cáo quản lý kỹ thuật để điều người hỗ trợ chéo hoặc trực tiếp liên hệ đội support của hãng. (Đừng đứng gãi đầu một mình quá lâu).
118: 
119: ---
120: 
121: ## 4. Các kịch bản hỗ trợ từ xa (Tele-support) thường gặp
122: 
123: Đây là các tài liệu hướng dẫn bắt bệnh nhanh để kỹ thuật viên hoặc bộ phận chăm sóc khách hàng tham khảo khi **trực tiếp tiếp nhận cuộc gọi của khách hàng** (Áp dụng tại Bước 6 của quy trình chuẩn).
124: 
125: ### 4.1. Sự cố mạng Internet / Wi-Fi
126: 
127: **a) Wi-Fi chập chờn, không sử dụng được**
128: - **Không thấy tên Wi-Fi:**
129:   - Nhờ khách dùng 1 thiết bị khác (điện thoại/máy tính) quét lại. Nếu thiết bị khác thấy và vào được → Lỗi ở điện thoại của khách → Hướng dẫn khách khởi động lại máy.
130:   - Kiểm tra xem CB (Aptomat) cấp điện cho tủ mạng/vị trí đặt Wi-Fi có bị nhảy không. Nếu có, bật lại.
131:   - Nếu CB vẫn đang bật: Nhờ khách tắt CB tổng hoặc rút điện modem/router ra khoảng 1 phút rồi cắm lại.
132: - **Thấy tên Wi-Fi nhưng không vào được mạng:**
133:   - Test tương tự bằng máy khác để loại trừ lỗi thiết bị cá nhân.
134:   - Kiểm tra Modem nhà mạng: Đèn tín hiệu có sáng không? Nếu có đèn đỏ (đèn LOS) báo lỗi đường truyền quang → Báo cho nhà mạng cắt cử người qua sửa chữa ngay.
135: 
136: **b) Mạng có nhưng lướt rất chậm (nhất là Facebook, YouTube, web quốc tế)**
137: - **Do đứt cáp quang biển hoặc ISP bảo trì:** Nếu đang có đợt đứt cáp quang biển chung, giải thích thực trạng cho khách hàng hiểu đây là lỗi hệ thống diện rộng của nhà cung cấp mạng.
138: - **Chỉ chậm cục bộ tại 1 phòng hoặc 1 lầu:** Do thiết bị phát Wi-Fi (AP/Node) cục bộ đó phát sinh lỗi → Áp dụng quy trình tắt/mở nguồn 1 phút như mục (a).
139: 
140: ### 4.2. Sự cố phần mềm nhà thông minh (Đặc biệt: Mobieyes)
141: 
142: **a) Không điều khiển được hệ thống qua App**
143: - **Điện thoại có ra Internet được không?** Nếu không, xử lý sự cố mạng trước. Nếu có mà vẫn lỗi, nhờ khách tắt mở lại Modem/Router mạng 1 phút.
144: - **Khách hàng mới thay Modem?** Nếu có, modem mới chưa định tuyến đúng (NAT/Port) hoặc khác dải IP cấp cho bộ điều khiển trung tâm (Controller) → Tuyến cao hơn phải can thiệp cấu hình lại.
145: - **Khách hàng dùng mạng Viettel / FPT:** Khả năng lớn bị nhà mạng tự động chặn/khóa Port (Đặc tả với Mobieyes sử dụng IP/Port tĩnh NAT).
146:   - Hướng dẫn khách tự gọi tổng đài mạng (Viettel: 1800 8119 | FPT: 1900 6600).
147:   - Khách đọc câu hỏi/yêu cầu: *"Nhà tôi đang dùng Smarthome/Camera, kỹ thuật kiểm tra báo bên mạng đang khóa port chặn thiết bị. Nhờ tổng đài kiểm tra và mở port giúp."*
148:   - Nếu nhà mạng không xử lý kịp thời, báo bộ phận kỹ thuật để hỗ trợ từ xa cho khách hàng.
149: - **Chỉ điều khiển bằng 4G được, về nhà cắm Wi-Fi lại lỗi:** Đây gọi là lỗi NAT Loopback yếu/không hỗ trợ của Modem ISP giao cho khách. Hướng dẫn khách gọi lên hãng mạng yêu cầu đổi cấp sang dòng Modem có hỗ trợ NAT Loopback. Và báo kỹ thuật bên công ty theo dõi.
150: - **Ngược lại, ở nhà dùng Wi-Fi được, ra đường dùng 4G máy xoay tròn:** Có thay đổi modem (chưa mở port) hoặc khách dùng mạng FPT/Viettel bị khoá port/NAT như đề cập bên trên.
151: 
152: **b) Không điều khiển được cụm tầng hoặc phòng nhỏ**
153: - Tầng/Phòng đấy mất điện? Thử bấm nút cứng. Kiểm tra CB điện tầng có sụp không? Nếu đang bật → Tắt 1 phút cho reset khối ngắt rồi bật lại.
154: - Khởi động cục bộ không thấu, tắt CB tổng 1 phút xong mở lại nguyên hệ thống (tắt nguồn điện tầng hoặc tổng).
155: 
156: **c) App báo sai User / Mật khẩu truy cập**
157: - Kiểm tra lại đường truyền của khách hàng đang xài coi rớt không. Điện thoại khách có bị bàn phím ảo tự động điền tự động sửa chữ, ghi hoa đầu dòng sai pass không.
158: 
159: ### 4.3. Sự cố Camera giám sát
160: 
161: **a) Không xem được cái nào**
162: - Bị cô lập thiết bị di động? Thử lấy máy người nhà khác mở xem. Nếu máy kia coi bình thường → Khởi động lại máy đang bị lỗi.
163: - Internet ở nhà hỏng? Xem hướng dẫn xử lý mạng. Nếu mạng tốt, tắt mở nguồn modem/router mạng 1 phút.
164: - Cấp nguồn cho Camera/Đầu ghi hỏng? Tắt CB bộ nguồn camera, đầu ghi hình khoảng 1 phút rồi mở lại.
165: - Có bị vụ **"Mới thay modem internet"** hoặc **"Bị FPT/Viettel khoá port"** không? → Xử lý y hệt smarthome ở trên (xin mở port 1900 6600, 1800 8119).
166: 
167: **b) Mất hình lẻ tẻ 1-2 mắt Camera**
168: - Lấy máy khác check? Nếu máy khác xem bình thường, chứng tỏ điện thoại khách chưa **tick chọn hiển thị** hết trên App (Với iVMS-4500: Nhấn biểu tượng góc trên bên phải, đánh dấu tick chèn camera để mở).
169: - Reset/tắt mở CB nguồn của Camera bị mất hình khoảng 1 phút rồi kiểm tra lại.
170: 
171: **c) Màn hình Tivi cắm trực tiếp không lên hình Camera**
172: - Dây nối hiển thị (HDMI) từ đầu ghi lên tivi có lỏng/rút ra trúng không? Tivi có bị chọn nhầm kênh vào (Source HDMI) không?
173: - Tắt nguồn đầu ghi (DVR/NVR) 1 phút rồi cắm lại để reboot.
