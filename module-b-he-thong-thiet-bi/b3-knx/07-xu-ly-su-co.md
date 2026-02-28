---
title: "Xử lý sự cố KNX"
module: "b"
level: "3-6"
tags: ["KNX", "troubleshooting"]
---
# B3.07 — Xử Lý Sự Cố KNX

| Triệu chứng | Kiểm tra |
|-------------|----------|
| Thiết bị không phản hồi | Điện áp bus 21-29V DC, Physical Address |
| ETS không kết nối | Gateway, subnet, firewall |
| Đèn không bật khi nhấn nút | Group Monitor → telegram, GA, relay |
| Binary Input không phản hồi | Đấu dây, channel, toggle/push config |
| DALI không dim | Gateway online, DALI commissioning, bus 16V |
| Logic sai (ngược) | Kiểm tra Parameters, Communication Objects, flags |
| Bus mất tín hiệu | Cáp đứt, ngắn mạch, quá tải nguồn |

## Checklist
- [ ] Đo bus 21-29V DC
- [ ] Group Monitor: nhấn nút → telegram?
- [ ] Binary Input: bật/tắt → telegram?
- [ ] GA đúng? Parameters đúng?
- [ ] Relay output có điện?
- [ ] DALI bus 16V DC?
