# Nguồn tham khảo cảm biến

- Nguồn do chủ nhân cung cấp: /Users/vutrongnhannghia/Downloads/mo_phong_cam_bien_chuyen_dong.html.
- Bản sao nhận ngày 24/10/2026; chỉ dùng để tham khảo bố cục và tương tác.
- Giữ bản gốc, không chỉnh sửa hoặc đưa nguyên file lên site.

## Giữ lại

Chọn tình huống, so sánh được gì/đánh đổi gì, đổi công nghệ/độ nhạy/trạng thái người/vật cản/nhiễu, đặt các phương án cạnh nhau.

## Cần kiểm chứng trước khi dùng

- Các tỷ lệ HUMAN_BASE, NOISE_BASE, hệ số độ nhạy và ngưỡng 30% do mã gán sẵn, không có nguồn đo.
- Không khái quát 24 GHz thành 1D hoặc 60 GHz thành phân vùng/AI/3D.
- Không sử dụng các kết luận tuyệt đối về xuyên kính, hơi nước, quạt/rèm, khả năng bắt nhịp thở hoặc chống báo giả.
- Panasonic WTKG2310, Kawasan KW-RS02D2 và MIR-HE200: cần đúng datasheet, phiên bản và thử nghiệm; chưa dùng thông số riêng trong bài công khai.
- FP400: đối chiếu tài liệu Aqara; không gộp tính năng FP400 Pro, không coi mọi kiểu kết nối Matter có cùng tính năng phân vùng.
- Thông báo đèn trong bản gốc không mô phỏng thời gian giữ, trễ tắt và trạng thái vật lý; wiki chỉ giải thích ảnh hưởng có thể xảy ra.

## Nguồn đối chiếu

- [Panasonic PaPIRs FAQ](https://api.pim.na.industrial.panasonic.com/file_stream/main/fileversion/244673): nguyên lý thay đổi hồng ngoại và vật cản.
- [TI tuning overview](https://dev.ti.com/tirex/explore/content/radar_toolbox_4_00_00_05/software_docs/Tuning_Guides/tuning_overview.html): cấu hình phát hiện và độ nhạy.
- [Aqara FP400](https://www.aqara.com/en/product/spatial-multi-sensor-fp400): tính năng và giới hạn theo cách thiết lập/tích hợp.
