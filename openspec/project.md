# Project Constitution: Kỹ thuật SmartHome Wiki

## Overview
Dự án này là một wiki kỹ thuật nội bộ về hệ thống nhà thông minh, dùng để đào tạo kỹ thuật viên mới, tra cứu nhanh khi đi công trình, và chuẩn hóa cách thi công / cấu hình / xử lý sự cố.

## Mục tiêu
- Tạo tài liệu kỹ thuật tiếng Việt, dễ hiểu nhưng vẫn đúng chuyên môn
- Ưu tiên tính thực chiến hơn lý thuyết suông
- Xây dựng một hệ thống tri thức dùng được thật trong vận hành nội bộ
- Giữ repo gọn, dễ bảo trì, dễ mở rộng theo module

## Tech Stack
- Framework: Astro
- Theme: Starlight
- Content: Markdown / MDX
- Nội dung chính: `site/src/content/docs/wiki/`
- Trang chủ docs: `site/src/content/docs/index.mdx`
- Style tùy chỉnh: `site/src/styles/custom.css`
- Deployment: Cloudflare Pages (`kythuat-smarthome`)

## Global Constraints
- Tất cả nội dung phải viết bằng tiếng Việt
- Không dùng H1 trong body bài viết (Starlight tự render title thành H1)
- Mỗi bài phải có `title`, `description`, `module`
- Mỗi bài phải có phần `## Mục tiêu` ngay sau frontmatter
- Nội dung phải ưu tiên ví dụ thực tế công trình / nhà ở / vận hành thật
- Không lạm dụng bold, không dùng emoji trong body
- Giữ thuật ngữ dễ hiểu, ưu tiên tiếng Việt khi có thể
- Mọi thay đổi lớn về cấu trúc hoặc module nên đi qua OpenSpec

## Done Criteria chung cho một bài
Một bài chỉ xem là xong khi:
- có frontmatter đúng chuẩn
- có mục tiêu đầu bài
- heading rõ ràng
- không có H1 trong body
- có ví dụ thực tế hoặc tình huống áp dụng
- có lỗi thường gặp / checklist nếu phù hợp
- giọng văn tự nhiên, không kiểu AI/manual khô cứng
- build pass
- link và asset path đúng

## Content Directory Structure
- `site/src/content/docs/wiki/` — toàn bộ bài viết wiki (markdown/MDX)
- `site/src/content/docs/index.mdx` — trang chủ docs
- `site/src/assets/` — hình ảnh, media
- `site/src/styles/custom.css` — style tùy chỉnh
- `site/astro.config.mjs` — cấu hình Astro + Starlight sidebar

## Build & Deploy SOP
1. `cd site`
2. `npm install` (nếu cần)
3. `npm run build`
4. nếu cần deploy thủ công:
   ```bash
   CLOUDFLARE_API_TOKEN="$CLOUDFLARE_API_TOKEN" npx wrangler pages deploy dist --project-name kythuat-smarthome --branch main --commit-dirty=true
   ```

## Media Rules
- Mỗi bài tối đa 1 visual hero (ảnh hoặc video) nếu thật sự cần
- Ưu tiên ảnh thực tế hơn ảnh stock
- Ảnh nên lưu theo cấu trúc phù hợp với Astro/Starlight
- Caption phải có ý nghĩa, không chỉ trang trí
- Sau khi thêm ảnh mới trong `src/assets/`, nên restart dev server nếu Astro chưa hot reload đúng
