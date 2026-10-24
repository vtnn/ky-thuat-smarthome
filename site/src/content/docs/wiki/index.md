---
title: "Tổng quan"
description: "Tài liệu đào tạo kỹ thuật viên — Hệ thống nhà thông minh"
---

## Giải pháp & Tư vấn lựa chọn

Sale và kỹ thuật có thể bắt đầu từ [nhu cầu của khách](/wiki/giai-phap/00-tong-quan/) để so sánh chiếu sáng, điều hòa, cửa, rèm, cảm biến và an ninh trước khi chọn hệ thống.

Muốn thử một tình huống cụ thể, mở [tư vấn cảm biến](/wiki/giai-phap/05-cam-bien/) hoặc [mô phỏng chuyên sâu](/wiki/giai-phap/05a-mo-phong-cam-bien/).

# 📘 Tài Liệu Đào Tạo Kỹ Thuật Viên — Hệ Thống Nhà Thông Minh

> Cấu trúc tài liệu phục vụ đào tạo kỹ thuật viên thi công, lập trình và xử lý sự cố hệ thống nhà thông minh (Smart Home), Camera giám sát và WiFi.

---

## 📂 Cấu Trúc Thư Mục

| Module | Nội dung | Mức độ |
|--------|----------|--------|
| `module-a-ky-thuat-co-ban/` | Đọc bản vẽ, dụng cụ, an toàn, tiêu chuẩn thi công | Nền tảng |
| `module-b-he-thong-thiet-bi/` | LifeSmart, MobiEyes, KNX, DALI, Camera Hikvision, WiFi Ruijie | Chuyên sâu |
| `module-c-wifi-va-mang/` | Quy hoạch mạng, VLAN, Switch, Router, bảo mật | ⭐ Trọng tâm |
| `module-d-lap-trinh/` | Nguyên tắc lập trình, quy tắc đặt tên, kịch bản Scene | ⭐⭐⭐ Trọng tâm nhất |
| `module-e-xu-ly-su-co/` | Quy trình chuẩn, lỗi thực tế, troubleshooting theo hệ | ⭐ Quan trọng |
| `module-f-tieu-chuan-chat-luong/` | Hình ảnh công trình, checklist nghiệm thu, bảo hành | Chất lượng |
| `module-g-danh-gia-nang-luc/` | 6 cấp độ kỹ thuật viên, lộ trình thăng tiến | Đánh giá |
| `bieu-mau-templates/` | Checklist thi công, form báo cáo, biên bản bàn giao | Biểu mẫu |
| `tai-lieu-tham-khao/` | Tài liệu hãng, tiêu chuẩn ngành | Tham khảo |
| `assets/` | Hình ảnh, video, sơ đồ, icon | Tài nguyên |

---

## 📄 Tài Liệu Bổ Trợ

- **GLOSSARY** — Thuật ngữ chuyên ngành A-Z
- **FAQ** — Câu hỏi thường gặp

---

## 🎯 Đối Tượng Sử Dụng

| Đối tượng | Bắt đầu từ |
|-----------|------------|
| Kỹ thuật viên mới (Level 1) | Module A → Module B |
| Kỹ thuật viên thi công (Level 2-3) | Module A + B → Module E |
| Kỹ thuật viên lập trình (Level 4) | Module C + D → Module E |
| Kỹ thuật viên triển khai (Level 5) | Tất cả module |
| Trưởng nhóm (Level 6) | Module F + G + Biểu mẫu |

---

## 📋 Quy Ước Định Dạng File

Mỗi file Markdown sử dụng **YAML Frontmatter**:

```yaml
---
title: "Tên tài liệu"
module: "a | b | c | d | e | f | g"
level: "1-6"
tags: ["tag1", "tag2"]
---
```

---

## 🚀 Hệ Thống Đang Sử Dụng

| Hệ thống | Hãng | Giao thức |
|----------|------|-----------|
| Smart Home | LifeSmart | CoSS / WiFi |
| Smart Home | MobiEyes | CFLink / RS485 |
| Smart Home | KNX | KNX TP Bus |
| Chiếu sáng | DALI | DALI Bus |
| Camera | Hikvision | IP / PoE |
| WiFi | Ruijie | WiFi 5/6 |
