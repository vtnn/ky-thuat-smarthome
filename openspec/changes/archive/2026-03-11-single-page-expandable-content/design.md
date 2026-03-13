## Context

Cấu trúc hiện tại (ví dụ: `01a-dong-sublime`, `01b-dong-nature`) tạo ra quá nhiều file nhỏ lẻ. Điều này không tương xứng với một "Bách khoa toàn thư" (Wiki) chuyên nghiệp, nơi các thông tin nên được nhóm lại theo chủ đề chính (ví dụ: Danh sách thiết bị, Thi công lắp đặt) để người đọc theo dõi trọn vẹn hơn.
Tuy nhiên, nếu đẩy tất cả hướng dẫn chi tiết của 10 thiết bị vào một file `02-thi-cong.md` mà không có cấu trúc UI/UX tốt, trang sẽ trở nên quá dài và khó đọc ("wall of text").

## Goals / Non-Goals

**Goals:**
- Kết hợp nội dung các file Sub (a, b, c...) vào file Main (01, 02, 03) tương ứng.
- Sử dụng `<Details>` (thu gọn/bấm để mở rộng) của Starlight để bọc nội dung chi tiết của từng thiết bị.
- Chèn khối `<Card>` cấu trúc "Lộ trình thiết bị" vào trong từng Details để điều hướng người dùng sang các bước tiếp theo của thiết bị đó một cách mạch lạc.
- Thay vì người dùng nhảy từ `01a -> 02d -> 03a` để đọc về Sublime. Họ sẽ nhảy từ `01#sublime -> 02#sublime -> 03#sublime`.

**Non-Goals:**
- Không thay đổi nội dung chuyên môn kỹ thuật hoặc hình ảnh.
- Không thay đổi Base Route của dự án (ví dụ: `/wiki/module-b-he-thong-thiet-bi/`).

## Decisions

### 1. Ứng dụng `<Details>` Component từ Starlight
Sử dụng MDX và built-in elements của Starlight (dựa trên Astro) thay vì các thư viện bên ngoài. Cuối cùng, một file `02-thi-cong.md` sẽ trông như sau:

```mdx
---
title: "B1.02 — Thi công lắp đặt"
...
---

import { Steps } from '@astrojs/starlight/components';
import { Card } from '@astrojs/starlight/components';

## Hướng dẫn thi công các dòng Công tắc
<details>
<summary>1. Dòng Sublime</summary>

> [!NOTE] 🗺️ LỘ TRÌNH THIẾT BỊ: DÒNG SUBLIME
> - 📖 [Thông số & Tính năng (Bài 01)](#)
> - 📍 **Bạn đang ở đây:** Hướng dẫn thi công đấu nối
> - ⚙️ [Cấu hình trên App (Bài 03)](#)

<Steps>
1. Bước 1...
2. Bước 2...
</Steps>
</details>

<details>
<summary>2. Dòng Nature</summary>
...
</details>
```

### 2. Thiết lập ID Anchor cho mỗi `<details>`
Bằng cách thêm Custom ID (nếu Header/Summary hỗ trợ) hoặc dùng Header (`###`) ngay trước `<details>`, chúng ta đảm bảo URL điều hướng có thể nhảy trực tiếp đến thiết bị đó khi người dùng click từ Lộ trình của trang khác.
Ví dụ: `[Thi công dòng Sublime](/wiki/.../02-thi-cong/#dong-cong-tac-sublime)`.

## Risks / Trade-offs

- **[Risk] Khó khăn khi copy link**: Người dùng khó lấy được link trực tiếp trỏ vào một nội dung cụ thể nếu nó nằm trong `<details>` đang đóng. 
- **Mitigation**: Đặt thẻ tiêu đề H3 (`###`) ngay trên `<details>`. Starlight tự động tạo Anchor Text (`#`) cho các thẻ H2, H3 để copy link dễ dàng, sau đó người dùng có thẻ H3 làm định vị và tự bấm mở `<details>` tương ứng bên dưới.
