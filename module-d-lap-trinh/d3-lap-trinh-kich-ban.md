---
title: "Lập trình kịch bản"
module: "d"
level: "4-6"
tags: ["kịch bản", "scene", "ví dụ"]
---
# D3 — Lập Trình Kịch Bản ⭐ Có Ví Dụ Cụ Thể

## 📘 VÍ DỤ 1: "Về Nhà"
**Điều kiện:** Mở cửa chính + Sau 18h
**Hành động:** Bật Đèn Trần PK → Bật Đèn Hắt → Mở điều hòa nếu nhiệt > 28°C

## 📘 VÍ DỤ 2: "Ra Khỏi Nhà"
**Điều kiện:** Không có người trong nhà / Bấm nút "Away"
**Hành động:** Tắt toàn bộ đèn → Tắt điều hòa → Bật camera ghi hình cảnh báo → Kích hoạt cảm biến chuyển động

## 📘 VÍ DỤ 3: "Xem Phim"
**Hành động:** Dim Đèn Trần 30% → Tắt Đèn Led → Đóng rèm → Bật TV + âm thanh

## 📘 VÍ DỤ 4: "Chống Trộm"
**Điều kiện:** Chế độ Away đang bật + Cảm biến PIR phát hiện chuyển động
**Hành động:** Bật tất cả đèn 100% → Còi báo động → Push notification kèm snapshot camera → Gửi SMS

## 📘 VÍ DỤ 5: "Eco Mode"
**Điều kiện:** Không có người trong phòng > 10 phút
**Hành động:** Tắt đèn phòng đó → Điều hòa tăng lên 28°C

## 📘 VÍ DỤ 6: "Buổi Sáng"
**Điều kiện:** 06:30 hàng ngày (thứ 2-6)
**Hành động:** Mở rèm → Bật đèn 50% → Bật điều hòa 25°C

## 📘 VÍ DỤ 7: "Đón Khách"
**Điều kiện:** Nhấn nút "Đón khách" trên App
**Hành động:** Bật tất cả đèn 80% → Bật đèn hắt → Mở rèm → Bật điều hòa 24°C

## 📘 VÍ DỤ 8: "Đi Ngủ"
**Điều kiện:** Nhấn nút "Đi ngủ" / 23:00 hàng ngày
**Hành động:** Tắt tất cả đèn → Khóa cửa → Điều hòa PN Master 26°C Sleep → Camera bật motion detection → Push: "Chúc ngủ ngon!"

---

## Lưu ý
- Mỗi kịch bản phải được **khách hàng xác nhận** trước khi lập trình.
- Đối chiếu với **tư vấn ban đầu** từ phòng kinh doanh.
- Test mọi trường hợp sau khi tạo.
