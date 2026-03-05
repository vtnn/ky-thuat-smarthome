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

## 🖼️ Quy chuẩn hình ảnh / video minh họa bài học (Hero Visual)

Mỗi trang bài học có thể có **tối đa 1 hình ảnh hoặc 1 video** đặt ngay sau mục tiêu, trước nội dung chính. Mục đích là tạo ấn tượng đầu tiên mạnh, giúp người học ghi nhớ bài ngay khi mở trang.

### Nguyên tắc chọn hình / video

1. **Chỉ 1 visual duy nhất mỗi trang** — hoặc hình, hoặc video. Nếu bài không cần minh họa thì bỏ qua, không ép.
2. **Ưu tiên ảnh thực tế công trường** hơn ảnh stock hoặc ảnh AI tạo. Ảnh thật gây ấn tượng mạnh hơn.
3. **Nội dung hình phải gắn với bài học chính**, không trang trí. Hình phải trả lời được câu hỏi: "Nhìn ảnh này, người học nhớ ngay điều gì?"
4. **Caption (chú thích) bắt buộc** — viết ngắn, giọng thực tế, nhấn vào bài học cốt lõi.
5. **Anh bỏ ảnh PNG/JPG vào là được** — Astro sẽ tự convert sang WebP + nén khi build. Không cần xử lý ảnh trước.
6. **Tỉ lệ hình 16:9** — phù hợp cả điện thoại lẫn laptop, không bị cắt xấu trên bất kỳ màn hình nào.
7. **Video chỉ dùng khi thao tác khó giải thích bằng ảnh tĩnh** (vd: quy trình bấm cáp, cách đo bằng đồng hồ vạn năng).

### Cách đặt tên file

Format: `[mã-bài]-hero-[từ-khóa].[png|jpg|mp4]`

Ví dụ:
- `a1-hero-doc-ban-ve.png`
- `a3-hero-an-toan.jpg`
- `b1-03-hero-cau-hinh-app.mp4`

### Vị trí lưu file

- Hình ảnh: **`site/src/assets/images/`** (bỏ hình thẳng vào đây, không cần chia thư mục theo module)
- Video: `site/public/wiki/assets/videos/` (video vẫn giữ trong `public/` vì Astro không xử lý video)

> **Lý do dùng `src/assets/` thay vì `public/`:** Ảnh trong `src/assets/` được Astro xử lý tự động khi build — convert sang WebP, nén, thêm lazy-load và kích thước chuẩn. Ảnh trong `public/` phục vụ nguyên bản, không tối ưu gì.

### Cách chèn vào Markdown

Dùng **Markdown syntax chuẩn** (KHÔNG dùng thẻ `<img>` HTML thuần — Astro sẽ không tối ưu được):

```markdown
![Mô tả ngắn nội dung hình](../../../../assets/images/a1-hero-doc-ban-ve.png)
<p class="hero-image-caption">Caption ngắn — nhấn vào bài học cốt lõi.</p>
```

> **Lưu ý đường dẫn tương đối:** File trong `wiki/module-a-ky-thuat-co-ban/` cần **4 cấp** `../` để lên đến `src/`, rồi vào `assets/images/[tên-file]`.
>
> **QUAN TRỌNG:** Sau khi thêm ảnh mới, phải restart dev server bằng `rm -rf .astro && npm run dev`. Astro không tự hot-reload ảnh mới trong `src/assets/`.

Với video (vẫn dùng HTML vì Astro không xử lý video):
```markdown
<video src="/wiki/assets/videos/b1-03-hero-cau-hinh-app.mp4" controls class="hero-video" />
<p class="hero-image-caption">Caption mô tả thao tác trong video.</p>
```

### Vị trí chèn trong bài

Chèn **ngay sau phần `---` (ngăn cách sau Mục tiêu), trước heading `## 1.`**:

```markdown
## Mục tiêu
- Mục tiêu 1...
- Mục tiêu 2...

---

![Mô tả nội dung hình](../../../../assets/images/xx-hero-xxx.png)
<p class="hero-image-caption">Caption...</p>

## 1. Nội dung bắt đầu từ đây
```

### CSS đã có sẵn trong `custom.css`

Class `.hero-image` và `.hero-image-caption` đã được định nghĩa — không cần thêm CSS mới.

### Bảng prompt tạo hình cho Module A (tham khảo)

| Trang | File hình | Prompt tạo hình (dùng cho AI image gen hoặc brief cho photographer) | Caption |
|---|---|---|---|
| A1 | `a1-hero-doc-ban-ve.png` | Tỉ lệ 16:9. Một kỹ thuật viên mặc đồng phục đang cầm bản vẽ kỹ thuật (A3), đứng trước tủ điện đã mở nắp, tay kia chỉ vào sơ đồ nguyên lý trên bản vẽ để đối chiếu với thiết bị bên trong tủ. Ánh sáng tự nhiên từ công trường. Góc chụp ngang tầm mắt, lấy nét vào bản vẽ. | Đọc nguyên lý trước, mặt bằng sau — sai thứ tự là sửa cả ngày. |
| A2 | `a2-hero-dung-cu.png` | Tỉ lệ 16:9. Bộ dụng cụ kỹ thuật viên smarthome bày trên mặt bàn: kìm cắt, tuốc-nơ-vít bộ, đồng hồ vạn năng đang bật, máy test cáp mạng, bút thử điện, cuộn băng keo điện, dây rút nhựa. Nền bàn gỗ hoặc thảm tool-mat. Chụp từ trên xuống (flat lay), ánh sáng đều. | Thiếu một món là chưa sẵn sàng ra công trường. |
| A3 | `a3-hero-an-toan.png` | Tỉ lệ 16:9. Cận cảnh tủ điện công trường, CB đã ngắt, gắn biển cảnh báo đỏ-trắng ghi "ĐANG THI CÔNG — KHÔNG ĐÓNG ĐIỆN". Bên cạnh có bút thử điện và găng tay cách điện treo trên tay nắm tủ. Ánh sáng hơi tối (công trường), biển cảnh báo nổi bật. | Biển cảnh báo trên tủ điện — thứ cứu mạng khi người khác vô tình đóng điện lại. |
| A4 | `a4-hero-tieu-chuan.png` | Tỉ lệ 16:9. Tủ mạng (rack) sau khi thi công xong: cáp mạng gom gọn bằng nẹp, từng sợi cáp dán nhãn trắng rõ ràng ở cả 2 đầu, sơ đồ đấu nối in A4 dán bên trong cánh tủ. Chụp thẳng chính diện, ánh sáng tốt. | Tủ mạng hoàn thiện chuẩn — gọn gàng, có nhãn, ai mở tủ cũng hiểu. |

### Gợi ý prompt cho các module tiếp theo

Khi viết prompt cho module mới, tuân theo nguyên tắc:

1. **Chọn khoảnh khắc đại diện nhất** của bài — cái hình phải "kể" được nội dung bài trong 1 giây.
2. **Ưu tiên hình có con người đang thao tác** hơn hình chỉ có thiết bị nằm im.
3. **Mô tả chi tiết trong prompt**: trang phục, góc chụp, ánh sáng, tiêu điểm (focus point). Luôn ghi rõ "Tỉ lệ 16:9" ở đầu prompt.
4. **Caption viết giọng thực tế**, ngắn gọn, như lời dặn dò của kỹ thuật trưởng.
5. **Nếu bài quá lý thuyết (bảng thông số, danh sách spec) thì không cần hình** — ép hình vào sẽ vô nghĩa.

| Loại bài | Nên dùng | Ví dụ |
|---|---|---|
| Quy trình thi công | Ảnh kỹ thuật viên đang làm | Lắp đặt, kéo dây, đấu nối |
| An toàn / Cảnh báo | Ảnh cận cảnh biển cảnh báo, trang bị bảo hộ | Biển "KHÔNG ĐÓNG ĐIỆN", PPE |
| Cấu hình phần mềm | Video quay màn hình (screencast) | Cấu hình app, giao diện controller |
| Troubleshooting | Ảnh lỗi thực tế + ảnh sau khi sửa | Dây đấu sai → đấu đúng |
| Danh sách thiết bị / Spec | KHÔNG cần hình | Chỉ bảng thông số |
| Biểu mẫu / Template | KHÔNG cần hình | Đã có file mẫu download |

---

## ⚠️ Lưu ý quan trọng cho IDE/Agent
- **Không tự ý đổi cấu trúc thư mục:** Starlight dựa trên file system để tạo sidebar.
- **Dữ liệu lớn:** Nếu nội dung quá dài, ưu tiên dùng Bảng (Table) hoặc Checklist để người dùng "lướt" nhanh.
- **Rollback:** Nếu deploy lỗi, kiểm tra ngay logs của `npm run build` để tìm file MD hỏng (thường do lỗi YAML frontmatter).
- **Đọc file này trước khi viết/chỉnh bài:** Để áp dụng đúng humanizer rules và không lặp lại lỗi thông tin đã sửa.
- **Khi chỉnh bài mới:** Đọc file gốc → áp dụng humanizer → Việt hóa thuật ngữ → kiểm tra lại thông tin kỹ thuật với bảng "Thông tin đã xác nhận" ở trên.

---
*Cập nhật lần cuối: 2026-03-02 bởi Miu 🐾*
