# Master Roadmap — ky-thuat-smarthome (v2, đã duyệt 22/10/2026)

## Mục tiêu
Biến repo thành wiki kỹ thuật dùng thật cho đào tạo, tra cứu và vận hành nội bộ — theo hướng **trực quan, nhẹ, chuẩn hóa dần từ bài cũ**.

## Định hướng đã chốt (22/10/2026)
- Độc giả chính: kỹ thuật viên Thạch Anh ITT; kinh doanh tham khảo thêm. Site đã có cơ chế xác thực qua Cloudflare.
- Ưu tiên giai đoạn tới: **trực quan hóa** — flow quy trình + hình ảnh thật + animation dạng web. Đặc biệt cho bài lắp đặt và lập trình.
- **Không lưu file video trong repo** (tốn dung lượng; repo đẩy lên GitHub và tự deploy nên phải nhẹ). Animation làm bằng công nghệ web: Mermaid, component MDX tương tác, SVG + CSS animation. Thao tác app minh họa bằng chuỗi ảnh thật từng bước.
- Tài liệu nguồn ngoài repo đang rải rác: chủ nhân cung cấp theo đợt đến đâu, xử lý đến đó.
- Cách làm: bắt đầu lại từ các bài cũ, chuẩn hóa dần theo thứ tự module — không viết bài mới ồ ạt.

## Hiện trạng thật (kiểm kê 22/10/2026)

| Khu vực | Số bài | Độ sâu | Đánh giá |
|---|---|---|---|
| A — Kỹ thuật cơ bản | 4 | 5–6,5 KB/bài | Đạt |
| B1 — LifeSmart | 7 | 3–34 KB/bài | Rất dày, đạt |
| B2 — MobiEyes | 9 | 4–10,5 KB/bài | Đạt |
| B3 — KNX | 8 | 9–15 KB/bài | Đạt |
| B4 — DALI Dimmer | 6 | 9,6–15,6 KB/bài | Đạt |
| B5 — Camera Hikvision | 8 | 5,8–10,4 KB/bài | Đạt |
| B6 — WiFi Ruijie | 7 | 6–9,5 KB/bài | Đạt |
| C — WiFi & Mạng | 5 | 5–21 KB/bài | Đạt |
| D — Lập trình | 5 | 1,2–2 KB/bài | Mỏng — mới là khung |
| E — Xử lý sự cố | 7 | E1 dày 13 KB; E2–E7 khoảng 1,5–2 KB | Mỏng ở các bài theo hệ |
| F — Tiêu chuẩn chất lượng | 3 | Khoảng 1,4 KB/bài | Mỏng — mới là khung |
| G — Đánh giá năng lực | 8 | 1,3–1,9 KB/bài | Dạng khung |
| Biểu mẫu / Templates | 11 | 0,5–0,9 KB/file | Khung xương |
| Tài liệu tham khảo | 6 thư mục hãng | Chỉ có README giữ chỗ | Trống |
| FAQ / Glossary | 2 | 11,7 KB / 7,3 KB | Khá |

Media toàn repo: 0 video; ảnh có cấu trúc thư mục sẵn (cabinets / devices / diagrams / drawings / installations) nhưng số lượng ít; bản vẽ PDF thật đã có trong `site/public/drawings`.

## Chuẩn trực quan cho một bài (áp dụng khi chuẩn hóa)
- Mọi bài dạng quy trình (lắp đặt, cấu hình, lập trình, xử lý sự cố) **bắt buộc có flow quy trình** dạng Mermaid ngay sau phần Mục tiêu.
- Bài lắp đặt / cấu hình: tối thiểu 1 hình minh họa thật (ảnh công trình, sơ đồ đấu nối, ảnh thiết bị có chú thích).
- Bài trọng điểm của từng hệ (1 bài lắp đặt + 1 bài lập trình): thêm **1 web animation** — component MDX trình chiếu từng bước kèm ảnh thật (xem như video nhưng không tốn dung lượng), hoặc SVG animation cho luồng tín hiệu.
- Thao tác trên app / phần mềm: chuỗi ảnh chụp màn hình thật theo từng bước, trình bày bằng component từng bước (Starlight `<Steps>` hoặc component riêng) — không dùng video file.
- Không dùng video AI sinh cho nội dung quy trình.

## Bộ công cụ trực quan (web, nhẹ)
| Loại | Công cụ | Ghi chú |
|---|---|---|
| Flow tĩnh + hiệu ứng chảy | Mermaid qua integration `astro-mermaid` | Viết trong Markdown; render phía client, tự khớp theme sáng/tối; thêm CSS animation cho đường nối nếu cần hiệu ứng |
| Trình chiếu từng bước | Component MDX riêng (kiểu `ProcessSteps`) trong `site/src/components/` | Mỗi bước: ảnh thật + mô tả; có nút qua/lại và tự chạy — cảm giác như video, dung lượng chỉ bằng vài ảnh |
| Luồng tín hiệu | SVG inline + CSS keyframes | Vẽ sơ đồ đấu nối/bus, chấm sáng chạy dọc đường dây; vài KB |
| Bước thao tác | Starlight `<Steps>`, `<Tabs>`, `<Card>` có sẵn | Không cần cài thêm |
| Hình minh họa | Ảnh thật, tối ưu bằng `scripts/optimize-images.sh` | Lưu theo cấu trúc `wiki/assets/images/` sẵn có |

Quy trình làm 1 bài chuẩn hóa có trực quan:
1. Đọc bài cũ, dựng flow Mermaid — chủ nhân duyệt logic khi cần.
2. Bổ sung hình thật / dựng component từng bước hoặc SVG animation cho phần trọng điểm.
3. Chạy `content-qa-checklist`, `project-humanizer` nếu cần.
4. `npm run build` pass rồi mới push.

## Lộ trình theo pha

### Pha 0 — Đồng bộ bản đồ repo (ĐÃ XONG 22/10/2026)
- Roadmap v2 này thay bản cũ; bảng module trong `AGENTS.md` và `CURRENT_PRIORITY.md` đã sửa khớp kiểm kê; quy ước media trong `openspec/project.md` chuyển sang web-first.

### Pha 1 — Chuẩn hóa + trực quan hóa từ bài cũ (ĐANG LÀM)
- Hạ tầng trước: thêm `astro-mermaid` vào site; tạo component `ProcessSteps` mẫu trong `site/src/components/`.
- Sau đó chuẩn hóa lần lượt theo thứ tự: A → B1 → B2 → B3 → B4 → B5 → B6 → C.
- Bài mẫu cho web animation: B1.02 (Thi công lắp đặt) và B1.03 (Cấu hình ứng dụng).
- Mỗi hệ xong khi: các bài quy trình có flow, 2 bài trọng điểm có hình/animation đạt chuẩn mục "Chuẩn trực quan".

### Pha 2 — Làm dày các module mỏng
- D (Lập trình), E2–E7, F, G, biểu mẫu: nâng các bài khung lên Done Criteria chung (mục tiêu, ví dụ thật, lỗi thường gặp, checklist).

### Pha 3 — Đường ống tài liệu tham khảo (song song, theo đợt)
- Mỗi đợt chủ nhân cung cấp tài liệu: kiểm kê → phân loại vào 6 thư mục hãng / standards → chuyển đổi Markdown hoặc tóm tắt trích dẫn → QA → đăng.

### Pha 4 — Tra cứu theo tình huống + rà soát tổng
- Trang chủ bổ sung lối vào theo tình huống: đang thi công / đang xử lý sự cố / nghiệm thu bàn giao.
- Rà soát toàn repo bằng `content-qa-checklist`, cập nhật roadmap.

## Done Criteria chung cho một bài
- Có title, description, module; có mục tiêu đầu bài; không H1 trong body
- Giọng văn tự nhiên, thực chiến; có ví dụ thật, lỗi thường gặp, checklist nếu phù hợp
- Bài quy trình: có flow Mermaid; bài trọng điểm: có hình thật / web animation đạt chuẩn
- Không chứa file video; ảnh đã tối ưu dung lượng
- Build pass, link đúng, assets đúng
