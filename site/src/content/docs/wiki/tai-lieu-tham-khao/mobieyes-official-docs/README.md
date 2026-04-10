---
title: "Tài liệu MobiEyes"
description: "Tài liệu MobiEyes — controller CFLink, module RS485, DALI qua Tridonic RS232, sơ đồ đấu nối."
---

Hệ thống MobiEyes sử dụng nền tảng phần cứng từ CommandFusion và các giao thức công nghiệp như RS485, RS232 để điều khiển thiết bị.

## Phần cứng & Giao thức

- **Trang chủ CommandFusion:** [commandfusion.com](https://www.commandfusion.com)
- **Tài liệu giao thức CFLink:** Tài liệu mô tả cách các thiết bị trong hệ thống MobiEyes giao tiếp với nhau qua bus.
- **Quy chuẩn đấu nối RS485:** Luôn sử dụng cáp xoắn đôi (twisted pair) có bọc kim (shielded) để đảm bảo tín hiệu không bị nhiễu.

## Giải pháp DALI cho MobiEyes

Hệ thống MobiEyes thường kết nối với mạng DALI thông qua module chuyển đổi của Tridonic.

- **Thiết bị:** Tridonic DALI Interface RS232 PS/S (Mã hàng: 28001847).
  - [Trang sản phẩm Tridonic](https://www.tridonic.com/en/int/product/28001847)
  - [Download Datasheet/Sơ đồ (PDF)](https://www.wlk.eu/images/user/28001847.pdf)
- **Phần mềm cấu hình DALI:** **masterCONFIGURATOR** của Tridonic dùng để quét địa chỉ và thiết lập thông số cho chấn lưu (ballast).
  - [Link tải masterCONFIGURATOR](https://www.tridonic.com/en/int/services/software/masterconfigurator)

## Kho tài liệu PDF

Toàn bộ các sơ đồ đấu nối (Wiring Diagram) và hướng dẫn cấu hình phần mềm MobiEyes (System Commander) được lưu trữ tại Google Drive kỹ thuật của công ty. Anh em cần tra cứu mã lỗi hoặc sơ đồ tủ điện hãy kiểm tra thư mục tài liệu dự án tương ứng.
