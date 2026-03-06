---
title: "B1.01e — Mô-đun Công tắc CUBE (CUBE Switch Module)"
description: "Hướng dẫn thi công, đấu nối và ứng dụng CUBE Switch Module để biến công tắc cơ truyền thống thành công tắc thông minh."
module: "b"
level: "2-5"
---

## Mục tiêu
- Nắm rõ cách đấu nối cầu đấu Mô-đun CUBE 1 lộ và 2 lộ vào hộp công tắc âm tường.
- Hiểu nguyên lý cấp nguồn mạch và nguyên lý kích hoạt bằng công tắc cơ truyền thống (chân G / K1 / K2).
- Trọng tâm: Biết cách thi công đấu nối công tắc đảo chiều (Dual Control) dùng mô-đun CUBE tại chân cầu thang.
- Hiểu cách thiết lập kịch bản hẹn giờ (Schedule) và tự động hóa (Trigger/Intelligence) từ phím cơ qua ứng dụng.

---

![Hình dáng thiết bị CUBE Switch Module](../../../../../assets/images/01e-cube-switch-module/cube_1.png)
<p class="hero-image-caption">Mô-đun CUBE có kích thước siêu nhỏ, thiết kế để nhét giấu vừa vặn vào đế âm phía sau công tắc cơ.</p>

## 1. Môi trường lắp đặt và Yêu cầu Tải trọng

CUBE Switch Module giấu mình hoàn toàn lọt thỏm sau cụm mặt nạ công tắc lẩy truyền thống. Do thiết kế chia sẻ không gian hộc hộp đế âm tường chật hẹp, anh em thi công bắt buộc đáp ứng các thông số cốt tử sau:
- **Kích thước hộc đế:** Khoảng không gian sâu đáy hộp đế âm tối thiểu phải chừa lại rỗng **16mm đến 20mm** tính từ mặt đít công tắc cơ hắt vào trong để nhét khối CUBE. Nếu hộp quá nông, tuyệt đối không cố ép tay tì chèn dây điện, sức căng lớn sẽ làm bục rỗng chân terminal đồng trên bộ phát.
- **Bắt buộc kéo dây Nguội (N):** CUBE yêu cầu nuôi điện liên tục. Trong hộp công tắc phải có luồng hạ đủ tiết diện cả dây N (Nguội) và dây L (Lửa). Dây nguồn không xuống đủ, hệ thống không chạy.
- **Tải trọng tối đa cho phép kéo:**
    - Thiết bị rơ-le trong vỏ nhét tường cực nhạy cảm với nhiệt tỏa. Với tải thuần trở (đèn sợi đốt sưởi): Kéo không quá **300W**.
    - Tuy nhiên, khi đánh dàn tải cảm kháng / dung kháng có dòng nạp xả khởi động lớn (như đèn LED phổ thông hiện nay, hoặc quạt thông gió nhỏ): Anh em phải ép công suất rơ-le chịu tải hạ xuống dưới **150W/kênh**. Không dùng CUBE để gánh van tổng bình nóng lạnh hay bơm cao áp phòng mạch ngắt.
- **Bộ định hướng Ăng-ten Sóng (Antenna):** Đoạn dây đuôi chuội màu đen thò ra hông chính là bộ phận ăng-ten để bắt nhịp phát truyền mạng lên bộ não Smart Station. Lúc nhồi CUBE vào tường, anh em phải lựa chiều hướng cọng ăng-ten vểnh ra phía sát mặt nạ nhựa. Tuyệt đối: Không cuộn tròn xoắn ăng-ten cho gọn, không bẻ gãy gập góc 90 độ, và nên lách hướng sóng tránh xa cùm sắt / viền mặt nạ kim loại để không bị chắn lồng Faraday làm chết tín hiệu (Offline).

## 2. Cách đấu dây cơ bản mô-đun khiển điện (1 Kênh / 2 Kênh)

Hệ CUBE Switch xé ra làm loại điều khiển 1 lộ đèn (1 Way) và 2 lộ đèn (2 Way). Cùng tham chiếu nguyên lý đấu chung, thiết kế phần cổng nguồn cách ly sạch sẽ với cổng tín hiệu:

### 2.1. Đấu cụm dây truyền lưới điện nặng (N, L, L1, L2)
- **Chân N / L:** Cắm kẹp dây Nguội và Lửa của điện lưới 220V vào để nuôi bảng mạch sống.
- **Chân L1 / L2 (Live Out):** Đây là rơ-le nảy nguồn cấp thẳng điện Lửa lên cho các lộ bóng đèn trên trần. Tách rời đấu nối với cáp khiển đèn tại công trình.
*(Chú ý an toàn cháy nổ: Kìm tuốt vỏ chỉ cắt xén lõi đồng lộ tối đa vừa chạm ngưỡng tiêu chuẩn **5mm**, đâm rút lút cáp cắm thẳng vào lỗ đồng terminal. Nhô đầu đồng cao sẽ dễ chạm chập phóng điện lửa hồ quang).*

### 2.2. Đấu dây thu tín hiệu một chiều với Công tắc Cơ Lẫy (G, K1, K2)
Rời xa cụm điện lưới 220V nguy hiểm, chân G / K1 / K2 bên phía góc hông chỉ mang luồng áp tín hiệu cực vi nhạy một chiều (Low DC), có mục đích là "đọc" xung xem anh em có đang bật lên / tắt xuống cái lẫy công tắc cơ gắn ốp nổi ở mặt ngoài không:
- **Chân G (Ground/COM):** Đóng vai trò là dây chung đón mạch (COM tín hiệu). Anh em đấu mồi vắt ngược dây này đâm vào lỗ chờ cực chung giữa của cụm lẫy công tắc vật lý.
- **Chân K1 / K2:** Đưa ngược luồng cắm nốt vào cực chờ lộ L1 / L2 trên vỏ mặt công tắc cơ. Khi tay chủ nhà bấm bật lẫy, K1 sẽ đi chập kín bo mạch với chân G, xung nhịp truyền xuống cấp vi xử lý con CUBE, tức thì CUBE phát lệnh bắn đóng rơ-le nhả cục điện 220V ở cổng L1 to ngoài cùng bay thẳng lên bóng đèn trên trần tường. 

![Sơ đồ CUBE 2 lộ điều khiển sáng đèn](../../../../../assets/images/01e-cube-switch-module/cube_6.png)
<p class="hero-image-caption">Bảng mạch cổng thu tín hiệu G/K1/K2 chỉ nối mộc với nẫy công tắc cơ. Có dải bo hoàn toàn cách ly cụm cáp nguy hiểm 220V chân L, N, L1, L2.</p>

## 3. Bài vở thực chiến: Lắp công tắc đảo chiều Cầu Thang (Dual Control)

Tại các vùng thi công nhạy cảm như nhà nối tầng đất, đường cầu thang rẽ nhánh, ta thường gặp mạch điện "Đảo Chiều" 1 cụm 2 công tắc đầu cuối cùng nhau quyết định chiếu sáng 1 bộ đèn rọi đi trên bậc chéo. Nhờ ứng dụng nhúng bộ CUBE, có 2 cách thức chuyên trị cho mạng đảo cầu thang cực dễ:

### Cách 1: Đấu chéo vật lý dùng chung 1 CUBE (Sửa chữa lưới cũ có đi sẵn cáp liên lạc)
- **Hoàn cảnh bối cảnh:** Hai mặt vách tường công tắc trên dưới đã liên tuyến thông với nhau sẵn bởi 3 sợi dây tín hiệu chạy giấu luồn trong ruột rỗng của ruột gà tường lõi (Traveler cables / dây liên lạc); Hộp đế nào đó tại mặt tiếp nhận điện có thả đủ tổ hợp cả cục N, dây L, cộng thêm đuôi cáp luồng bắt chờ lên chóp cụm đèn.
- **Cách thi công:** Nhồi duy nhất 1 cục thiết bị ảo CUBE áp chặt vào trong hộc hộp đế cắm cáp tụ góc. Chân tín hiệu hông G và chân hông K1 của cục CUBE nhện mắc nối vắt nhại theo cổng L và ngõ L1/L2 của hệ lẫy đấu 3 cực đảo chéo vật lý truyền thống. Lệnh nhú từ phím nào vắt mượn dây nối chung cũng bắn nhịp dập vào cổng G-K1, CUBE kích đọc tín hiệu lẩy lật một bóng đèn vẹn tròn.

![Sơ đồ đảo chiều bằng liên kết dòng cáp lẫy mạch chéo K1](../../../../../assets/images/01e-cube-switch-module/cube_double_1.png)
<p class="hero-image-caption">Cách đi chéo kinh điển mượn 3 lõi cáp thông dụng báo gộp vào chuỗi chéo K1. Nhồi ép duy nhất 1 cục Module vào vách tường nhện.</p>

### Cách 2: Bắn phát không dây dùng chéo 2 CUBE (Cứu cánh trị vướng đường ghen chôn ngầm không nối thông nhau)
Đây là cách làm hiện đại, xé toạc ràng buộc về dây đồng chéo đi đường vòng, lợi dụng cơ chế nhúng "Trường Cảnh - Liên Minh" (Trigger) đồng bộ sóng đám mây giữa các nút mạng ở mặt bằng riêng biệt.
- **Điều kiện khung sàn:** Xui rủi là đường hai cầu thang xa nhau tít tắp, đi rách trần không có ruột dây móc. Hai đế vách chôn xa rời. Xong chỉ cần chắc chắn cả 2 hộc hộp chờ đế đó cắm thọc được mồi L (Lửa) cộng N (Nguội). Môt đầu đế trên không vướng tải lên đèn rọi, một đế hộp góc dưới xách tay nắm đầu cáp kéo dây đèn chóp trần chờ. Bắt buộc bỏ chi phí quất nguyên 2 cục CUBE xé lẻ từng phòng đế.
- **Cách thi công lắp điện sống:** 
    - Lỗ hộp đế dưới trống cắm mồi đèn: Kìm ốp giấu CUBE nhánh số 1. Chân mồi G và chân mồi K1 bấu vòng khép cho lẩy lật bấm cơ. Lưới cáp N và L cấp điện sạc nuôi sống thiết bị mạng nảy báo CUBE 1. Chân ngõ ra lộ sáng L1 cắt gọt bỏ trống cụt xơ rễ do phòng đó chả kéo nối bóng đèn vật lý nào.
    - Lỗ hộp chôn phía trên, nơi nắm đầu chuôi giắc cắm bóng đèn trần: Ép CUBE chính số 2. Chân lẫy G / K1 sập vô ngàm nẫy cơ. Mắc N, L cấp sống board. Và thọc đúng cáp L1 cắm phập lút ngập vô sợi cáp kéo thốc nối điện vào bóng đèn.
    - Thi công lật tay lên kho điện thoại phần hệ thống LifeSmart App, truy xuất gán lệnh Liên Đới Logic (Trigger / Scene / Logic Bộ Lập Trình Boolean) gõ đầu 2 mạng không dây con CUBE trỏ ngầm liên minh dính chéo vào nhau. Theo lý thuyết, ông đứng hộp góc dưới rạch mặt phím cơ, CUBE góc đế sàn một nảy gửi đi sóng điện ngầm báo, CUBE nấp đỉnh hộc hai trần đập gót nhảy giật bắn điện ra L1 lóe sáng đèn choẹt cầu thang giữa đỉnh tầng. Ngược lại tắt thình lình trên trần cũng báo lệnh ngầm xuống. 

![Sơ đồ thả nổi tự lập Triggers bằng hai bo CUBE riêng](../../../../../assets/images/01e-cube-switch-module/cube_double_2.png)
<p class="hero-image-caption">Mô hình cực đắt giá dùng vắt 2 mạng CUBE thả nổi cô lập hộc tường, giải cứu luồng mạch cấu hình chéo trên giao diện mềm lưới sóng không cần bắn khoan bít luồn cáp điện thông vách.</p>

## 4. Ráp phần mềm CUBE lên cấu hình ứng dụng (LifeSmart App)

Kết thúc khóa vỏ mặt lẫy nhựa trùm về vị trí chôn ban đầu và chập sập cầu dao điện aptomat (CB) sáng board, thao tác "ép nhận máu" (Pairing) cho mô-đun nhúng ứng dụng App:
1. Mở vạch giao diện gốc trên con điện thoại LifeSmart App -> Móc **Dấu "+" Add Device** -> Rê tay nhặt hình biểu tượng **CUBE Switch Module**.
2. **Kích hoạt học lẩm Pairing:** Nhịp này bắt thợ nhanh tay lẩy lật liền tay **bật/tắt dập nhả mặt công tắc lẫy cơ liên tiếp gõ chừng độ 6 vòng (tổng cộng ấn vạch 12 lần lẩy công tắc hất kịch lên hất rạc xuống)**. Chú ý tĩnh không gian thính tai nghe kỹ ruột khối nhựa CUBE chọt phát khấc chông *"tạch tạch"* cắn nhả rơ-le liên thanh nháy nhịp ngắn nhanh, đánh dấu board nảy còi ngầm báo mạch chuyển thành trạng thái sẵn ép chóp vơ sóng đăng ký mồi vòng ghép Hub.
3. Loanh quanh xoay loading chừng ngót phút, App sẽ tự lẩy nhện móc tóm thiết bị mạng thông hẻm cục CUBE hiển thị Icon công tắc trên nhà diện Home mượt lừ lự rành rẽ ra, giờ thợ được bấm lách sang Tab Menu để đổi tên vùng vắn tắt lại (Ví dụ quy chuẩn gõ nhẹ: `Đèn Cầu Thang T1`).
4. Anh em thi công xách tai khoét mò thêm ngách hẻm **Cài đặt giữ nếp (Set Default State):** Quẹt kéo lùa vào góc Settings bánh răng -> mục Save as Default, tính năng tinh chỉnh cực phê hỗ trợ cấu hình cái tật ngủ dở giấc của nếp nhúng CUBE khi công trình vừa bị cục điện lực cắt rứt cúp pha ngầm rồi đột ngột xả tống trào dòng pha có điện đỏ lại. Chủ nhà hay đập bàn do lúc 2h sáng đang ngủ ngon bị tự động sáng chói lòa bừng mắt cái đèn cục cầu thang nhà vệ sinh theo nếp sống sập sạp lại mạch. Ép rờ le Default ghi cứng mạch về chế trạng mốc OFF mộc mạc khi sập sống dội dòng có điện lại là hết kêu rên.
5. Để phá tung vỡ mở nếp chốt trói toàn bộ kỹ thuật siêu trâu của vi xử lí nhồi mạch CUBE, thi công cấu hình chêm cả mảng định tuyến chạy lưới lập trình theo chuỗi khắc khe hẹp (Schedule rạch múi giờ), hoặc cài lẩy ma trận nút móc ảo chéo xích móc Logic bộ lọc nếu phòng cần dính móc cựa thêm với ngàm của cục Cối Radar mắt hồng ngoại liếc cảm biến bắt dáng quét bước chân khỏa khoảng (Cầm chịch lưới cấu hình phức ở vòm Menu Tab Trigger hay thâm thúy thì chui luồng thẻ gốc mạc Intelligence Template).

---

## Tài liệu tham khảo
- [Hướng dẫn cấu hình CUBE Switch Module (Google Docs)](https://docs.google.com/document/d/1cKRfF86EJqfKZpqiMixE8-mg_dNi55Mg/edit)
- [Hướng dẫn đấu nối 2 chiều với CUBE (Folder)](https://drive.google.com/drive/folders/1VU0bIoj_8IDCaWMjkJF19XvU2f_JO2eO)
