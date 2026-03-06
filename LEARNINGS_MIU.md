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

### Bảng prompt tạo hình cho Module B5 (Camera Hikvision)

| Trang | File hình | Prompt tạo hình (dùng cho AI image gen hoặc brief cho photographer) | Caption |
|---|---|---|---|
| B5.00 | `b5-00-hero-gioi-thieu-hikvision.png` | Tỉ lệ 16:9. Kỹ thuật viên đứng tại phòng kỹ thuật với màn hình hiển thị nhiều kênh camera Hikvision, bên cạnh là đầu ghi NVR. Góc chụp ngang, ánh sáng rõ màn hình. | Nắm luồng camera từ đầu ghi tới màn hình trước thì triển khai sẽ gọn hơn nhiều. |
| B5.01 | `b5-01-hero-danh-sach-camera.png` | Tỉ lệ 16:9. Bàn kỹ thuật bày các loại camera dome, bullet, phụ kiện nguồn và chân đế, có kỹ thuật viên kiểm đối chiếu danh sách thiết bị. | Chọn đúng loại camera theo vị trí lắp ngay từ đầu sẽ tránh thay đổi về sau. |
| B5.02 | `b5-02-hero-thi-cong-camera.png` | Tỉ lệ 16:9. Kỹ thuật viên đang lắp camera lên trần, đi dây mạng gọn trong ống bảo vệ, có thang và đồ bảo hộ đầy đủ. | Lắp đúng góc từ đầu sẽ giảm công chỉnh lại sau khi bàn giao. |
| B5.03 | `b5-03-hero-lap-dat-nvr.png` | Tỉ lệ 16:9. Cận cảnh lắp đầu ghi NVR trong tủ rack, cáp mạng và ổ cứng được đấu nối gọn, có nhãn từng cổng camera. | Tủ đầu ghi gọn và có nhãn giúp xử lý sự cố nhanh hơn rất nhiều. |
| B5.04 | `b5-04-hero-cau-hinh-sadp-tool.png` | Tỉ lệ 16:9. Màn hình laptop mở công cụ SADP, kỹ thuật viên đang đổi địa chỉ mạng cho camera mới. Giao diện rõ danh sách camera online. | Cấu hình địa chỉ mạng chuẩn bằng SADP giúp tránh trùng địa chỉ và mất hình. |
| B5.05 | `b5-05-hero-cau-hinh-ghi-hinh.png` | Tỉ lệ 16:9. Kỹ thuật viên cấu hình lịch ghi hình trên giao diện NVR, có timeline ghi liên tục và ghi theo chuyển động. | Thiết lập ghi hình đúng nhu cầu từ đầu để lúc cần xem lại không bị hụt dữ liệu. |
| B5.06 | `b5-06-hero-remote-access.png` | Tỉ lệ 16:9. Kỹ thuật viên kiểm tra truy cập camera từ xa trên điện thoại qua ứng dụng Hikvision, cùng lúc theo dõi trạng thái mạng tại router. | Truy cập từ xa chỉ ổn khi mạng và quyền truy cập được cấu hình đúng chuẩn. |
| B5.07 | `b5-07-hero-xu-ly-su-co.png` | Tỉ lệ 16:9. Kỹ thuật viên xử lý lỗi camera mất hình: kiểm tra nguồn cấp qua cáp mạng và trạng thái link tại switch. Bối cảnh thực tế tại tủ mạng. | Mất hình camera thì kiểm tra nguồn và đường truyền trước, đừng đổi camera vội. |

### Bảng prompt tạo hình cho Module B6 (WiFi Ruijie)

| Trang | File hình | Prompt tạo hình (dùng cho AI image gen hoặc brief cho photographer) | Caption |
|---|---|---|---|
| B6.00 | `b6-00-hero-gioi-thieu-ruijie.png` | Tỉ lệ 16:9. Kỹ thuật viên giới thiệu hệ WiFi Ruijie tại tủ mạng, có controller/switch và sơ đồ vùng phủ sóng trên màn hình laptop. | Hiểu kiến trúc WiFi từ đầu sẽ giúp triển khai nhanh và ít chỉnh sửa. |
| B6.01 | `b6-01-hero-danh-sach-access-point.png` | Tỉ lệ 16:9. Bàn thiết bị gồm các mẫu Bộ phát WiFi Ruijie, nguồn cấp qua cáp mạng, phụ kiện gắn trần/tường và checklist kiểm hàng. | Chọn đúng mẫu Bộ phát WiFi theo công năng từng khu mới đạt phủ sóng ổn định. |
| B6.02 | `b6-02-hero-thi-cong-wifi.png` | Tỉ lệ 16:9. Kỹ thuật viên đi dây mạng và gắn Bộ phát WiFi lên trần, cáp được bó gọn và đánh nhãn tại đầu tủ mạng. | Thi công chuẩn từ cáp tới vị trí lắp Bộ phát WiFi là nền cho mạng ổn định. |
| B6.03 | `b6-03-hero-lap-dat-controller.png` | Tỉ lệ 16:9. Kỹ thuật viên lắp controller Ruijie trong tủ rack, kết nối switch và kiểm tra trạng thái đèn cổng mạng. | Lắp controller đúng sơ đồ giúp việc quản lý tập trung chạy trơn tru ngay từ đầu. |
| B6.04 | `b6-04-hero-cau-hinh-ssid.png` | Tỉ lệ 16:9. Màn hình quản trị Ruijie hiển thị cấu hình SSID, bảo mật và VLAN, kỹ thuật viên đang rà lại thông số trước khi áp dụng. | Cấu hình SSID rõ ràng và bảo mật đúng chuẩn giúp mạng chạy ổn định lâu dài. |
| B6.05 | `b6-05-hero-kiem-tra-phu-song.png` | Tỉ lệ 16:9. Kỹ thuật viên đi khảo sát sóng bằng điện thoại/laptop tại hành lang và phòng, màn hình hiển thị cường độ tín hiệu theo vị trí. | Đo phủ sóng thực tế luôn quan trọng hơn cảm giác chủ quan tại một điểm đứng. |
| B6.06 | `b6-06-hero-xu-ly-su-co.png` | Tỉ lệ 16:9. Kỹ thuật viên xử lý mạng chập chờn: kiểm tra switch, controller và nhật ký sự kiện trên giao diện quản trị. | Mạng chập chờn muốn xử lý dứt điểm thì phải soi nhật ký và kiểm tra từng lớp. |

### Bảng prompt tạo hình cho Module C (WiFi và mạng)

| Trang | File hình | Prompt tạo hình (dùng cho AI image gen hoặc brief cho photographer) | Caption |
|---|---|---|---|
| C1 | `c1-hero-quy-hoach-mang.png` | Tỉ lệ 16:9. Kỹ thuật viên trải sơ đồ mặt bằng trên bàn, dùng bút đánh dấu vị trí tủ mạng, Bộ phát WiFi và tuyến cáp chính. Góc chụp từ trên xuống, rõ bản vẽ và ghi chú tay. | Quy hoạch mạng kỹ trước khi kéo dây sẽ tiết kiệm rất nhiều chi phí sửa lại. |
| C2 | `c2-hero-cau-hinh-switch.png` | Tỉ lệ 16:9. Màn hình laptop mở giao diện cấu hình switch, kỹ thuật viên đang thiết lập VLAN và kiểm tra trạng thái từng cổng. Bên cạnh là switch thật trong tủ rack. | Cấu hình switch chuẩn ngay từ đầu giúp cả hệ thống chạy ổn định và dễ mở rộng. |
| C3 | `c3-hero-cau-hinh-router-firewall.png` | Tỉ lệ 16:9. Kỹ thuật viên cấu hình router/firewall với các mục WAN, LAN, NAT và quy tắc lọc truy cập. Bối cảnh phòng kỹ thuật, góc chụp ngang. | Router và tường lửa làm đúng từ đầu sẽ giảm hẳn sự cố mất mạng ngẫu nhiên. |
| C4 | `c4-hero-bao-mat-mang.png` | Tỉ lệ 16:9. Kỹ thuật viên rà soát bảo mật mạng trên bảng kiểm: đổi mật khẩu mặc định, tắt cổng không dùng, tách mạng khách. Bối cảnh thao tác thật trên máy tính. | Bảo mật mạng là việc phải làm trước, không phải đợi có sự cố mới xử lý. |

### Bảng prompt tạo hình cho Module F (Tiêu chuẩn chất lượng)

| Trang | File hình | Prompt tạo hình (dùng cho AI image gen hoặc brief cho photographer) | Caption |
|---|---|---|---|
| F1 | `f1-hero-tieu-chuan-hinh-anh-cong-trinh.png` | Tỉ lệ 16:9. Kỹ thuật viên chụp ảnh nghiệm thu công trình bằng điện thoại, khung hình rõ tủ điện, tủ mạng và vị trí thiết bị đã dán nhãn. Có checklist ảnh cần chụp đặt cạnh. | Ảnh chụp đúng chuẩn giúp đội sau nhìn vào là hiểu tình trạng công trình ngay. |
| F2 | `f2-hero-checklist-nghiem-thu-tong-the.png` | Tỉ lệ 16:9. Bàn nghiệm thu với checklist tổng thể đã đánh dấu từng hạng mục, kỹ thuật viên và giám sát cùng rà ký xác nhận. Bối cảnh thực tế tại công trình hoàn thiện. | Nghiệm thu có checklist rõ ràng thì không bỏ sót hạng mục quan trọng. |
| F3 | `f3-hero-tieu-chuan-bao-hanh.png` | Tỉ lệ 16:9. Kỹ thuật viên bàn giao tài liệu bảo hành cho khách hàng, trên bàn có biên bản bàn giao, thông tin liên hệ hỗ trợ và hướng dẫn xử lý sự cố cơ bản. | Bảo hành rõ quy trình từ đầu giúp khách yên tâm và đội kỹ thuật đỡ bị động. |

### Bảng prompt tạo hình cho Module A (đã chuẩn hóa)

Module A đã có đầy đủ prompt ở bảng phía trên (`a1` → `a4`). Khi cần tái tạo ảnh, dùng lại đúng tên file và caption để giữ đồng bộ toàn bộ site.

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
