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

## ✍️ Quy chuẩn viết bài (Humanizer — BẮT BUỘC)

Tất cả nội dung phải được viết theo phong cách tự nhiên, giống người kỹ thuật chia sẻ kinh nghiệm thực tế. **Tuyệt đối tránh giọng văn AI/máy móc.** Áp dụng skill `humanizer` mỗi khi viết hoặc chỉnh sửa bài.

### Những lỗi phải tránh:
1. **Không bold lạm dụng:** Chỉ bold khi thật sự cần nhấn mạnh (cảnh báo nguy hiểm, tên riêng quan trọng). Không bold mọi cụm từ trong bảng, checklist, hay danh sách.
2. **Không dùng inline-header lists:** Tránh `**Tên mục:** nội dung...`. Viết thành câu tự nhiên.
3. **Không dùng emoji trong nội dung:** Tránh ⚠️🔴🟢💡✅ trong body bài. Giữ nội dung chuyên nghiệp.
4. **Không dùng từ chuyên môn tiếng Anh** khi có từ tiếng Việt tương đương:

   | Tiếng Anh (KHÔNG dùng) | Tiếng Việt (DÙNG) |
   |---|---|
   | topology | kiểu đấu nối |
   | Daisy-chain | nối tiếp |
   | title block | khung tên bản vẽ |
   | revision | phiên bản |
   | AC / DC | xoay chiều / một chiều |
   | PoE | nguồn cấp qua cáp mạng |
   | Access Point / AP | Bộ phát WiFi |
   | Hub / Controller | Bộ điều khiển trung tâm |
   | PIR | cảm biến chuyển động (hồng ngoại) |
   | PPE | trang bị bảo hộ |
   | debris | vật liệu thừa |
   | App | ứng dụng |
   | pairing | ghép nối |
   | time-out | hết thời gian chờ |
   | Offline | mất kết nối |
   | Arm / Disarm | bật / tắt chế độ giám sát |
   | Escalation | báo cấp trên |
   | Scene | kịch bản |
   | Trigger | điều kiện kích hoạt |
   | Action | hành động |
   | line-of-sight | tầm nhìn thẳng |
   | Travel Set | hành trình |
   | IR | hồng ngoại |

   **Ngoại lệ:** Tên riêng sản phẩm/giao thức giữ nguyên tiếng Anh (LifeSmart, CoSS, KNX, DALI, CFLinks, Cat6, T568B, Zigbee, Nature, SPOT, HVAC Gateway...).

5. **Thêm giọng thực tế:** Giải thích TẠI SAO chứ không chỉ liệt kê QUY TẮC. Thêm ví dụ cụ thể, tình huống công trường thật.
   - ❌ "Kiểm tra phiên bản bản vẽ trước khi thi công."
   - ✅ "Kiểm tra phiên bản bản vẽ. Cầm nhầm bản cũ trong khi đội thiết kế đã phát hành bản mới là chuyện xảy ra liên tục."

6. **Câu văn tự nhiên:** Thay đổi độ dài câu, không đều đều kiểu manual máy. Ngắn gọn khi cần, chi tiết khi quan trọng.

## 📐 Quy tắc đặt tên thiết bị

Format: `[TÊN THIẾT BỊ] [KHU VỰC]`
- Tên thiết bị: tiếng Việt CÓ DẤU (Đèn Trần, Quạt Trần, Điều Hòa...)
- Khu vực: viết tắt KHÔNG DẤU

| Viết tắt | Khu vực |
|---|---|
| PK | Phòng khách |
| PA | Phòng ăn |
| Bếp | Bếp |
| PN / PN1 / PN2 | Phòng ngủ / Phòng ngủ 1 / 2 |
| HL | Hành lang |
| ST | Sân thượng |
| BC | Ban công |
| WC | Nhà vệ sinh |
| PB | Phòng bé |
| PT | Phòng thờ |

**Công tắc đảo:** Thêm dấu `.` ở cuối tên. Ví dụ: `Đèn Trần PK` (chính) → `Đèn Trần PK.` (đảo).

## 📊 Tiến độ chỉnh sửa Humanizer

| Module | File | Trạng thái |
|---|---|---|
| A1 | a1-doc-ban-ve-ky-thuat.md | ✅ Đã humanize |
| A2 | a2-dung-cu-va-thiet-bi.md | ✅ Đã humanize |
| A3 | a3-an-toan-lao-dong.md | ✅ Đã humanize |
| A4 | a4-tieu-chuan-thi-cong.md | ✅ Đã humanize |
| B1.00 | 00-gioi-thieu-lifesmart.md | ✅ Đã humanize |
| B1.01 | 01-danh-sach-thiet-bi.md | ✅ Đã humanize |
| B1.02 | 02-thi-cong-lap-dat.md | ✅ Đã humanize |
| B1.03 | 03-cau-hinh-app.md | ✅ Đã humanize |
| B1.04 | 04-quy-tac-dat-ten.md | ✅ Đã humanize |
| B1.05 | 05-lap-trinh-scene.md | ✅ Đã humanize |
| B1.06 | 06-xu-ly-su-co.md | ✅ Đã humanize |
| B2.00 | 00-gioi-thieu-mobieyes.md | ✅ Đã humanize |
| B2.01 | 01-danh-sach-thiet-bi.md | ✅ Đã humanize |
| B2.02 | 02-thi-cong-cflink.md | ✅ Đã humanize |
| B2.03 | 03-lap-dat-module.md | ✅ Đã humanize |
| B2.04 | 04-quy-tac-dat-ten.md | ✅ Đã humanize |
| B2.05 | 05-cau-hinh-controller.md | ✅ Đã humanize |
| B2.06 | 06-lap-trinh-scene.md | ✅ Đã humanize |
| B2.07 | 07-xu-ly-su-co.md | ✅ Đã humanize |
| B3 | module-b/b3-knx/ | ⬜ Chưa làm |
| B4 | module-b/b4-dali-dimmer/ | ⬜ Chưa làm |
| B5 | module-b/b5-camera-hikvision/ | ⬜ Chưa làm |
| B6 | module-b/b6-wifi-ruijie/ | ⬜ Chưa làm |
| C–G | Các module còn lại | ⬜ Chưa làm |

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
- **Đọc file này trước khi viết/chỉnh bài:** Để áp dụng đúng humanizer rules và không lặp lại lỗi thông tin đã sửa.
- **Khi chỉnh bài mới:** Đọc file gốc → áp dụng humanizer → Việt hóa thuật ngữ → kiểm tra lại thông tin kỹ thuật với bảng "Thông tin đã xác nhận" ở trên.

---
*Cập nhật lần cuối: 2026-03-02 bởi Miu 🐾*
