---
title: "FAQ"
---

---
title: "Câu hỏi thường gặp (FAQ)"
module: "all"
level: "1-6"
tags: ["FAQ", "câu hỏi", "hỗ trợ"]
---

# Câu Hỏi Thường Gặp (FAQ)

> Tổng hợp các câu hỏi thường gặp trong quá trình thi công, cấu hình và xử lý sự cố hệ thống nhà thông minh.

---

## 📁 A. Kỹ Thuật Cơ Bản

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

## 📁 B. Hệ Thống Thiết Bị

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
ETS (Engineering Tool Software). Phiên bản hiện tại: ETS6. Cần license (Demo miễn phí giới hạn 5 thiết bị).

**Q17: Group Address KNX đặt theo quy ước nào?**
3 cấp: `Main/Middle/Sub`. Ví dụ: `0/0/1` = Switching / Tầng 1 / Đèn trần PK.

### B4. DALI

**Q18: DALI dùng bao nhiêu dây?**
2 dây, không phân cực. Có thể đi chung ống với dây nguồn 220V.

**Q19: Tối đa bao nhiêu đèn trên 1 bus DALI?**
64 thiết bị (driver/ballast). Tối đa 16 nhóm, 16 scene.

**Q20: DALI áp dụng cho hệ thống nào?**
DALI Dimmer áp dụng cho cả 3 hệ: LifeSmart, MobiEyes, KNX thông qua gateway tương ứng.

### B5. Camera Hikvision

**Q21: Phần mềm tìm camera Hikvision trong mạng LAN là gì?**
SADP Tool — quét tìm tất cả camera/NVR Hikvision trong mạng nội bộ.

**Q22: Camera Hikvision truy cập từ xa bằng gì?**
Ứng dụng **Hik-Connect** (cloud P2P) — không cần port forwarding.

**Q23: HDD surveillance nên dùng loại nào?**
WD Purple hoặc Seagate SkyHawk — thiết kế cho ghi hình 24/7.

**Q24: Có cần đổi mật khẩu mặc định camera?**
BẮT BUỘC. Đổi ngay lần đầu cấu hình. Mật khẩu ≥ 8 ký tự, chữ hoa + thường + số + đặc biệt.

### B6. WiFi Ruijie

**Q25: Site survey WiFi là gì?**
Khảo sát vị trí đặt AP trước thi công — đo tín hiệu, xác định vùng chết, tính số lượng AP cần thiết.

**Q26: Ruijie Controller dùng để làm gì?**
Quản lý tập trung tất cả AP Ruijie — cấu hình SSID, cập nhật firmware, giám sát tín hiệu.

---

## 📁 C. WiFi Và Mạng

**Q27: Tại sao phải chia VLAN?**
Để cách ly hệ thống: Smarthome (VLAN 10), Camera (VLAN 20), WiFi gia đình (VLAN 30), WiFi khách (VLAN 40). Bảo mật + hiệu suất.

**Q28: Camera có nên ra Internet không?**
Không. Camera nên ở VLAN riêng, không truy cập Internet trực tiếp. Chỉ cho phép từ mạng chính xem camera.

**Q29: Thiết bị IoT nên nối WiFi 2.4GHz hay 5GHz?**
2.4GHz — phạm vi rộng hơn, xuyên tường tốt hơn. Tách SSID riêng cho IoT.

**Q30: IP tĩnh hay DHCP cho thiết bị smart home?**
Thiết bị quan trọng (Hub, NVR, camera, AP) → IP tĩnh hoặc DHCP Reservation. Thiết bị cá nhân → DHCP.

---

## 📁 D. Lập Trình

**Q31: Trigger là gì?**
Điều kiện kích hoạt automation: thời gian, cảm biến, nút bấm, vị trí GPS...

**Q32: Làm sao tránh xung đột automation?**
Kiểm tra không có 2 scene cùng trigger nhưng hành động ngược nhau. Dùng `d4-checklist-review-automation.md`.

**Q33: Số scene tối thiểu cần lập trình cho 1 căn hộ?**
Thường 5-8 scene cơ bản: Về nhà, Ra ngoài, Đi ngủ, Sáng dậy, Xem phim, Đón khách, Eco Mode, Chống trộm.

**Q34: Có cần khách hàng xác nhận kịch bản trước khi lập trình?**
CÓ. Phải đối chiếu với tư vấn ban đầu và lấy xác nhận khách hàng trước khi lập trình.

---

## 📁 E. Xử Lý Sự Cố

**Q35: Quy trình xử lý sự cố chuẩn?**
Xác định lỗi → Phân loại → Kiểm tra mạng → Kiểm tra nguồn → Kiểm tra cấu hình → Kiểm tra automation.

**Q36: Lỗi phổ biến nhất khi thi công?**
Nhầm IP / VLAN, sai mapping module (MobiEyes), sai Group Address (KNX), dây đấu sai cực.

**Q37: Khi nào cần escalation?**
Sau 30 phút không xác định được nguyên nhân, nghi lỗi phần cứng, lỗi firmware, cần công cụ đặc biệt.

---

## 📁 F. Tiêu Chuẩn Chất Lượng

**Q38: Tủ điện cần đạt tiêu chuẩn gì?**
Gọn gàng, có nhãn dán rõ ràng, có sơ đồ dán trong tủ, dây buộc bằng búng nhựa (không dùng dây thép).

**Q39: Có cần chụp ảnh nghiệm thu không?**
CÓ. Chụp đầy đủ: tủ điện, đấu nối, vị trí thiết bị, kết quả test. Theo checklist `f1-tieu-chuan-hinh-anh-cong-trinh.md`.

**Q40: SLA bảo hành là gì?**
Service Level Agreement — cam kết thời gian xử lý: 24h (khẩn cấp), 48h (thông thường), 72h (không ảnh hưởng sử dụng).

---

## 📁 G. Đánh Giá Năng Lực

**Q41: Có bao nhiêu cấp độ kỹ thuật viên?**
6 cấp: (1) Hỗ trợ → (2) Thi công dây → (3) Lắp đặt → (4) Cấu hình & Lập trình → (5) Triển khai độc lập → (6) Trưởng nhóm.

**Q42: Mất bao lâu để lên Level 4?**
Trung bình 12-18 tháng, tùy năng lực và số dự án thực tế.

**Q43: Level nào được phép tự ý lập trình automation?**
Level 4 trở lên. Level 1-3 chỉ thao tác theo hướng dẫn của cấp trên.

---

> **Ghi chú:** Tài liệu này sẽ được cập nhật thường xuyên. Nếu có câu hỏi mới, bổ sung vào cuối mỗi section tương ứng.
