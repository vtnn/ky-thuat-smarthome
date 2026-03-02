# 🧠 LEARNINGS: Website kỹ thuật (Astro + Starlight)

File này ghi lại các kinh nghiệm, cấu trúc và quy trình vận hành trang web `kythuat.vtnn.io.vn` để các Agent (Miu, Đệ Code) hoặc IDE (Cursor/Claude) có thể kế thừa và xử lý tiếp.

## 🏗️ Cấu trúc dự án (Repo: `ky-thuat-smarthome`)
- **Vị trí code:** `/site/`
- **Nền tảng:** Astro + Starlight (Documentation Framework).
- **Thư mục nội dung:** `site/src/content/docs/wiki/`
- **Trang chủ:** `site/src/content/docs/index.mdx`
- **Style tùy chỉnh:** `site/src/styles/custom.css`
- **Deployment:** Cloudflare Pages (Project: `kythuat-smarthome`).

## 🎨 Quy chuẩn nội dung (Style Guide)
Để đảm bảo site đồng nhất và dễ đọc, cần tuân thủ:

1. **Frontmatter:**
   - Phải có `title` (định dạng: `A1 — Tên trang`), `description`, và `module`.
   - `level` (1-6) để phân cấp năng lực kỹ thuật.

2. **Bố cục chuẩn (Đã duyệt):**
   ```markdown
   ---
   title: "A2 — Dụng cụ và thiết bị"
   description: "Mô tả ngắn"
   module: "a"
   ---

   ## Mục tiêu
   - Nắm vững các loại dụng cụ cầm tay.
   - Biết cách vận hành máy khoan, máy cắt an toàn.

   ---

   ## 1. Giới thiệu
   Nội dung bắt đầu từ đây...

   ## 2. Các loại dụng cụ
   ### 2.1. Dụng cụ cầm tay
   - Kìm, tua vít, mỏ lết...
   ```
   - **Mục tiêu:** Ngay sau frontmatter, dùng list `-` để tóm tắt 2-3 ý chính. Ngăn cách bằng `---`.
   - **Heading:** H2 (`## 1. ...`) cho mục lớn, H3 (`### 1.1. ...`) cho mục con. **Tuyệt đối không dùng H1 (`#`) trong body** vì Starlight đã tự lấy `title` làm H1.

3. **UI/UX:**
   - **Tiêu đề lặp:** Nếu thấy trang hiện 2 tiêu đề giống nhau, hãy xóa H1 trong body.
   - **Home page cards:** Các card ở trang chủ phải dùng component bấm được (CustomCard hoặc LinkCard).

## 🚀 Quy trình vận hành (SOP)
1. **Cập nhật:** `git pull origin main` trong folder gốc.
2. **Kiểm tra (Build):** `cd site && npm run build` (Phải pass build mới được deploy).
3. **Deploy thủ công (Wrangler):**
   ```bash
   source /root/.openclaw/workspace/.env
   cd site
   CLOUDFLARE_API_TOKEN="$CLOUDFLARE_API_TOKEN" npx wrangler pages deploy dist --project-name kythuat-smarthome --branch main --commit-dirty=true
   ```

## ⚠️ Lưu ý quan trọng cho IDE/Agent
- **Không tự ý đổi cấu trúc thư mục:** Starlight dựa trên file system để tạo sidebar.
- **Dữ liệu lớn:** Nếu nội dung quá dài, ưu tiên dùng Bảng (Table) hoặc Checklist để người dùng "lướt" nhanh.
- **Rollback:** Nếu deploy lỗi, kiểm tra ngay logs của `npm run build` để tìm file MD hỏng (thường do lỗi YAML frontmatter).

---
*Cập nhật lần cuối: 2026-03-02 bởi Miu 🐾*
