---
title: "Xử lý sự cố DALI"
module: "b"
level: "3-6"
tags: ["DALI", "troubleshooting"]
---
# B4.05 — Xử Lý Sự Cố DALI

| Triệu chứng | Kiểm tra |
|-------------|----------|
| Đèn không sáng | Nguồn 220V driver, bus DALI 16V |
| Đèn không dim | Driver tương thích DALI, commissioning đúng |
| Nhấp nháy | Driver lỗi, tải không phù hợp |
| Mất 1 đèn trong group | Địa chỉ DALI, driver hỏng |
| Mất toàn bộ bus | Nguồn DALI, ngắn mạch bus |

## Quy trình
1. Kiểm tra nguồn 220V đến driver → OK?
2. Đo bus DALI ≈ 16V DC → OK?
3. Commissioning tool: quét → thiết bị có phản hồi?
4. Thử gửi lệnh direct → đèn phản hồi?
5. Nếu không → thay driver.
