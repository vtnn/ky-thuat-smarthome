---
title: "Câu hỏi thường gặp (FAQ)"
description: "Tổng hợp các câu hỏi thường gặp khi thi công, lập trình và vận hành hệ thống smarthome."
---

# Câu Hỏi Thường Gặp (FAQ)

> Tổng hợp các câu hỏi thường gặp trong quá trình thi công, cấu hình và xử lý sự cố hệ thống nhà thông minh.

---

## A. Kỹ Thuật Cơ Bản

### A1. Bản vẽ & Thi công

**Q1: Tôi cần đọc loại bản vẽ nào trước khi thi công?**
Cần đọc bản vẽ điện nhẹ, bản vẽ camera, bản vẽ mạng và bản vẽ smarthome. Xem chi tiết tại `module-a/a1-doc-ban-ve-ky-thuat.md`.

**Q2: Chiều cao chuẩn lắp công tắc là bao nhiêu?**
Công tắc: 1.2m – 1.4m tính từ sàn. Ổ cắm: 0.3m – 0.4m. Camera trong nhà: 2.5m – 3m. Xem `module-a/a4-tieu-chuan-thi-cong.md`.

**Q3: Khoảng cách tối thiểu giữa cáp mạng và cáp điện là bao nhiêu?**
Tối thiểu 30cm nếu đi song song. Nếu giao nhau thì phải vuông góc 90°.

**Q4: Tại sao phải chụp hình trước khi tháo công tắc cũ?**
Để ghi nhận sơ đồ dây hiện tại, tránh đấu sai khi lắp thiết bị mới. Đây là bước bắt buộc.

**Q5: Dụng cụ tối thiểu cần có khi đi thi công?**
Đồng hồ vạn năng, bút thử điện, kìm bấm mạng, cable tester, tuốc-nơ-vít, máy khoan pin. Xem `module-a/a2-dung-cu-va-thiet-bi.md`.

---

## B. Hệ Thống Thiết Bị

### B1. LifeSmart

**Q6: Hub LifeSmart kết nối WiFi hay Ethernet?**
Khuyến cáo dùng Ethernet (ổn định hơn). Nếu dùng WiFi thì phải là 2.4GHz.

**Q7: Công tắc LifeSmart có cần dây N không?**
Có. Công tắc thông minh LifeSmart cần cả dây L (pha) và dây N (trung tính).

**Q8: Làm sao thay thế thiết bị LifeSmart bị hỏng mà không mất Scene?**
Sử dụng chức năng **Replace Device** trên App: Chọn thiết bị → `...` → Device Info → Replace Device → Ghép nối thiết bị mới. Sau đó khởi động lại Hub.

**Q9: Rèm LifeSmart chạy sai vị trí, làm sao sửa?**
Vào App → Chọn rèm → `...` → Settings → Travel Set → Delete all the setting. Thiết bị sẽ tự học lại hành trình.

**Q10: Quy tắc đặt tên thiết bị LifeSmart?**
Theo format: `[KHU_VUC]_[TEN_DEN]`. Ví dụ: `PK_DenTran`, `PN_Master_DenNgu`.

### B2. MobiEyes

**Q11: MobiEyes sử dụng giao thức gì?**
CFLink qua RS485 — truyền thông serial, kết nối daisy chain.

**Q12: Làm sao mapping module MobiEyes đúng?**
Theo format: `[Module]-[Kenh] = [Chuc_nang]`. Ví dụ: `21-1 = Den Tran PK`. Module phải mapping đúng vị trí tủ.

**Q13: Cáp RS485 đi tối đa bao xa?**
Tối đa 1200m theo lý thuyết, thực tế nên giữ dưới 500m và dùng cáp chất lượng.

### B3. KNX

**Q14: KNX có cần server trung tâm không?**
Không. KNX là hệ phi tập trung — thiết bị giao tiếp trực tiếp qua bus.

**Q15: Làm sao kết hợp công tắc cơ với KNX?**
Dùng **Binary Input** (Dry Contact). Nối dây từ công tắc cơ vào channel trên Binary Input → cấu hình trong ETS.

**Q16: Phần mềm lập trình KNX là gì?**
ETS (Engineering Tool Software). Thạch Anh IT hiện đang sử dụng **ETS6**. Cần license chuyên dụng (Demo miễn phí giới hạn 5 thiết bị).

**Q17: Group Address KNX đặt theo quy ước nào?**
3 cấp: `Main/Middle/Sub`. Ví dụ: `0/0/1` = Switching / Tầng 1 / Đèn trần PK.

**Q18: KNX và MobiEyes giao tiếp trực tiếp với nhau được không?**
Không. KNX và MobiEyes là hai hệ thống sử dụng giao thức phần cứng khác nhau hoàn toàn. Thạch Anh IT sử dụng Home Assistant để làm "cầu nối" đồng bộ trạng thái và điều khiển giữa hai hệ thống. Chi tiết sẽ được hướng dẫn trong Module D.

**Q19: PSU KNX nên dùng hãng nào?**
Tùy vào ngân sách và yêu cầu dự án: **Meanwell KNX-20E** (giá tốt, kích thước compact) hoặc **Siemens N 125** (thương hiệu Đức, độ bền và chất lượng cao). Cả hai đều có dòng 320mA và 640mA tùy số lượng thiết bị trên bus.

**Q20: Tại sao không dùng USB Interface mà lập trình qua IP?**
Lập trình qua IP Gateway (ví dụ Siemens N 148/23) tiện lợi hơn nhiều. Kỹ thuật viên có thể nạp chương trình từ bất kỳ đâu trong mạng LAN qua WiFi, không cần phải cắm dây ngồi cạnh tủ điện. Chỉ cần phần mềm ETS kết nối đến địa chỉ IP của Gateway.

### B4. DALI

**Q21: DALI dùng bao nhiêu dây?**
2 dây, không phân cực. Có thể đi chung ống với dây nguồn 220V.

**Q22: Tối đa bao nhiêu đèn trên 1 bus DALI?**
64 địa chỉ thiết bị (driver/ballast). Tối đa 16 nhóm, 16 kịch bản (scene).

**Q23: DALI áp dụng cho hệ thống nào?**
DALI Dimmer áp dụng cho cả 3 hệ: LifeSmart, MobiEyes, KNX thông qua gateway tương ứng.

**Q24: MobiEyes điều khiển DALI bằng cách nào?**
MobiEyes kết nối qua giao thức RS232, sử dụng bộ **Tridonic DALI Interface RS232 PS/S** (art. 28001847). Giao diện này không liên quan đến hãng driver đèn — khách có thể dùng bất kỳ hãng đèn và driver DALI nào (như Philips, Tridonic, Osram) miễn là chuẩn DALI.

**Q25: Cấu hình DALI dùng phần mềm gì?**
Tùy thuộc vào Gateway đang dùng:
- **Hệ KNX**: Cấu hình trực tiếp trên phần mềm ETS (các Gateway Siemens/EAE hỗ trợ rất tốt).
- **Hệ MobiEyes/LifeSmart**: Sử dụng phần mềm **masterCONFIGURATOR** của Tridonic kết hợp với bộ USB adapter chuyên dụng.
*Lưu ý: LifeSmart DALI Gateway chỉ đóng vai trò điều khiển, không có chức năng quét địa chỉ hay cấu hình chấn lưu DALI.*

### B5. Camera Hikvision

**Q26: Phần mềm tìm camera Hikvision trong mạng LAN là gì?**
SADP Tool — quét tìm tất cả camera/NVR Hikvision trong mạng nội bộ.

**Q27: Camera Hikvision truy cập từ xa bằng gì?**
Thạch Anh IT sử dụng **Hik-ProConnect** để quản lý danh sách thiết bị cho cấp kỹ thuật/installer, và bàn giao tài khoản **Hik-Connect** (cloud P2P) cho khách hàng sử dụng cuối.

**Q28: HDD surveillance nên dùng loại nào?**
WD Purple hoặc Seagate SkyHawk — thiết kế cho ghi hình 24/7.

**Q29: Có cần đổi mật khẩu mặc định camera?**
BẮT BUỘC. Đổi ngay lần đầu cấu hình. Mật khẩu ≥ 8 ký tự, chữ hoa + thường + số + đặc biệt.

**Q30: Camera nên đặt IP tĩnh hay DHCP?**
Luôn luôn đặt IP tĩnh cho camera để đảm bảo đầu ghi NVR không bị mất kết nối khi IP thay đổi. Quy hoạch chuẩn: NVR đặt `192.168.1.30`, các camera bắt đầu từ `.31` trở đi.

### B6. WiFi Ruijie

**Q31: Site survey WiFi là gì?**
Khảo sát vị trí đặt AP trước thi công — đo tín hiệu, xác định vùng chết, tính số lượng AP cần thiết.

**Q32: Ruijie Controller dùng để làm gì?**
Quản lý tập trung tất cả AP Ruijie — cấu hình SSID, cập nhật firmware, giám sát tín hiệu.

**Q33: Model AP Ruijie nào phổ biến nhất tại công trình?**
- **RG-RAP2260(G)**: Ưu tiên cho các vị trí lắp ốp trần (ceiling mount).
- **RG-RAP2260(E)**: Ưu tiên cho các vị trí yêu cầu thẩm mỹ cao hoặc lắp âm tường (wall mount).

---

## C. WiFi Và Mạng

**Q34: Tại sao phải chia VLAN?**
Để cách ly và bảo mật hệ thống. Cấu hình thực tế tại Thạch Anh IT: 
- **VLAN 1** (Dải 192.168.1.0/24): Dùng cho tất cả thiết bị nội bộ (Smarthome, Camera, AP, User gia đình).
- **VLAN 123** (Dải 172.16.20.0/24): Dành riêng cho Guest WiFi (khách dùng WiFi chỉ được ra internet, không thấy thiết bị thông minh).

**Q35: Camera có nên ra Internet không?**
Không. Camera nên ở VLAN riêng (nếu quy mô lớn) và không truy cập Internet trực tiếp để tránh bị hacker tấn công. Chỉ cho phép truy cập từ mạng chính hoặc qua Cloud bảo mật.

**Q36: Thiết bị IoT nên nối WiFi 2.4GHz hay 5GHz?**
2.4GHz — phạm vi rộng hơn, xuyên tường tốt hơn. Tách SSID riêng cho IoT.

**Q37: IP tĩnh hay DHCP cho thiết bị smart home?**
Thiết bị quan trọng (Hub, NVR, camera, AP) → IP tĩnh hoặc DHCP Reservation. Thiết bị cá nhân → DHCP.

---

## D. Lập Trình & Tích Hợp

**Q38: Home Assistant dùng để làm gì trong hệ thống Thạch Anh IT?**
Home Assistant (HA) đóng vai trò là "bộ não" trung gian làm cầu nối giữa các hệ sinh thái khác nhau, cụ thể là KNX và MobiEyes (hai hệ thống này vốn không giao tiếp trực tiếp). HA kết nối với KNX qua chuẩn KNXnet/IP và kết nối với MobiEyes qua API. Việc này giúp khách hàng có thể điều khiển toàn bộ ngôi nhà trên một giao diện duy nhất. Chi tiết tại Module D.

**Q39: Trigger là gì?**
Điều kiện kích hoạt automation: thời gian, cảm biến, nút bấm, vị trí GPS...

**Q40: Làm sao tránh xung đột automation?**
Kiểm tra không có 2 scene cùng trigger nhưng hành động ngược nhau. Dùng `d4-checklist-review-automation.md`.

**Q41: Số scene tối thiểu cần lập trình cho 1 căn hộ?**
Thường 5-8 scene cơ bản: Về nhà, Ra ngoài, Đi ngủ, Sáng dậy, Xem phim, Đón khách, Eco Mode, Chống trộm.

**Q42: Có cần khách hàng xác nhận kịch bản trước khi lập trình?**
CÓ. Phải đối chiếu với tư vấn ban đầu và lấy xác nhận khách hàng trước khi lập trình.

---

## E. Xử Lý Sự Cố

**Q43: Quy trình xử lý sự cố chuẩn?**
Xác định lỗi → Phân loại → Kiểm tra mạng → Kiểm tra nguồn → Kiểm tra cấu hình → Kiểm tra automation.

**Q44: Lỗi phổ biến nhất khi thi công?**
Nhầm IP / VLAN, sai mapping module (MobiEyes), sai Group Address (KNX), dây đấu sai cực.

**Q45: Khi nào cần escalation?**
Sau 30 phút không xác định được nguyên nhân, nghi lỗi phần cứng, lỗi firmware, cần công cụ đặc biệt.

---

## F. Tiêu Chuẩn Chất Lượng

**Q46: Tủ điện cần đạt tiêu chuẩn gì?**
Gọn gàng, có nhãn dán rõ ràng, có sơ đồ dán trong tủ, dây buộc bằng búng nhựa (không dùng dây thép).

**Q47: Có cần chụp ảnh nghiệm thu không?**
CÓ. Chụp đầy đủ: tủ điện, đấu nối, vị trí thiết bị, kết quả test. Theo checklist `f1-tieu-chuan-hinh-anh-cong-trinh.md`.

**Q48: SLA bảo hành là gì?**
Service Level Agreement — cam kết thời gian xử lý: 24h (khẩn cấp), 48h (thông thường), 72h (không ảnh hưởng sử dụng).

---

## G. Đánh Giá Năng Lực

**Q49: Có bao nhiêu cấp độ kỹ thuật viên?**
6 cấp: (1) Hỗ trợ → (2) Thi công dây → (3) Lắp đặt → (4) Cấu hình & Lập trình → (5) Triển khai độc lập → (6) Trưởng nhóm.

**Q50: Mất bao lâu để lên Level 4?**
Trung bình 12-18 tháng, tùy năng lực và số dự án thực tế.

**Q51: Level nào được phép tự ý lập trình automation?**
Level 4 trở lên. Level 1-3 chỉ thao tác theo hướng dẫn của cấp trên.

---

> **Ghi chú:** Tài liệu này sẽ được cập nhật thường xuyên. Nếu có câu hỏi mới, bổ sung vào cuối mỗi section tương ứng.

