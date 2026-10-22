# AGENTS.md — ky-thuat-smarthome

> File này giúp AI agent nắm nhanh dự án trong 30 giây.
> Chi tiết đầy đủ hơn: xem `openspec/AGENTS.md`.

## Dự án là gì

Wiki kỹ thuật nhà thông minh nội bộ — dùng cho đào tạo kỹ thuật viên, tra cứu khi đi công trình, và chuẩn hóa quy trình thi công / cấu hình / xử lý sự cố.

- **Live**: https://kythuat.vtnn.io.vn
- **Ngôn ngữ nội dung**: Tiếng Việt
- **Tính chất**: Content-first, không phải code-first
- **Độc giả chính**: kỹ thuật viên; kinh doanh tham khảo thêm (site đã có xác thực qua Cloudflare)

## Tech Stack

| Thành phần | Công nghệ |
|-----------|-----------|
| Framework | Astro + Starlight |
| Content | Markdown / MDX |
| Deploy | Cloudflare Pages (`kythuat-smarthome`) |
| Quản lý thay đổi | OpenSpec |

## Cấu trúc thư mục quan trọng

```
site/
  src/content/docs/wiki/     ← toàn bộ bài viết wiki
  src/content/docs/index.mdx ← trang chủ docs
  src/assets/                ← hình ảnh, media
  src/styles/custom.css      ← style tùy chỉnh
  astro.config.mjs           ← cấu hình Astro + sidebar

openspec/
  project.md     ← project overview, constraints, done criteria
  AGENTS.md      ← rules chi tiết: workflows, writing rules, quality gate
  config.yaml    ← OpenSpec CLI config
  changes/       ← active/archived changes
  specs/         ← shared specs

.agent/
  README.md                          ← IDE entrypoint (pointer file)
  context/CURRENT_PRIORITY.md        ← priority đang active
  context/OWNER_CONTEXT.md           ← phong cách owner
  context/WORKING_PREFERENCES.md     ← ưu tiên vận hành
  tasks/miu-master-roadmap.md        ← roadmap toàn dự án (v2, 22/10/2026)
  skills/                            ← 7 local skills
  workflows/                         ← 4 workflow wrappers
```

## Read Order — Bắt đầu task mới thì đọc gì

1. **File này** (`AGENTS.md`) — nắm tổng quan
2. `openspec/project.md` — constraints, done criteria, build SOP
3. `openspec/AGENTS.md` — rules vận hành, Quick Response Guide, quality gate
4. `.agent/context/CURRENT_PRIORITY.md` — việc đang ưu tiên
5. `.agent/tasks/` — task brief liên quan
6. Content files trong `site/src/content/docs/wiki/`

## Quick Response Guide

| User nói | Agent làm |
|----------|-----------|
| "làm tiếp [bài X]" | Đọc task brief → dùng `openspec-apply-change` hoặc edit trực tiếp |
| "sửa bài [X]" | Đọc bài → `content-qa-checklist` → sửa → `project-humanizer` → build |
| "mở module mới" | `module-planner` → `openspec-propose` → `openspec-apply-change` |
| "rà lại cho đủ" | Đọc roadmap → `content-qa-checklist` trên từng bài |
| "chuẩn hóa repo" | `openspec-explore` trước → `openspec-propose` nếu cần |
| Scope không rõ | `openspec-explore` để làm rõ trước |

## Writing Rules (tóm tắt)

- Luôn viết tiếng Việt
- Không dùng H1 trong body (Starlight tự render title thành H1)
- Giọng kỹ thuật viên giải thích cho kỹ thuật viên — không giọng AI / manual khô
- Không bold quá mức, không emoji trong body
- Giải thích "tại sao", không chỉ "cái gì"
- Ưu tiên ví dụ thực tế từ công trình / nhà ở
- **Trực quan (quy ước từ 22/10/2026)**: Không lưu file video trong repo (tốn dung lượng). Minh họa động làm dạng web: flow Mermaid cho bài quy trình; component MDX từng bước (kèm ảnh thật) hoặc SVG + CSS animation cho bài trọng điểm. Hình ảnh dùng ảnh thật, tối ưu dung lượng trước khi commit.
- Chi tiết đầy đủ → xem `openspec/AGENTS.md` mục **Writing Rules**

## Quality Gate (checklist trước khi báo xong)

- [ ] Frontmatter đúng: `title`, `description`, `module`
- [ ] Heading rõ ràng, không H1 trong body
- [ ] Nội dung theo writing rules
- [ ] Có ví dụ thật hoặc tình huống áp dụng
- [ ] Bài quy trình có flow Mermaid; bài trọng điểm có hình thật / web animation
- [ ] Link và asset path hoạt động đúng
- [ ] Giọng văn tự nhiên (apply `project-humanizer` nếu cần)
- [ ] `npm run build` pass (nếu thay đổi cấu trúc)

## Build & Dev

```bash
cd site
npm install        # lần đầu hoặc khi cần
npm run dev        # chạy dev server
npm run build      # build production, kiểm tra lỗi
```

## Content Modules (Roadmap)

Trạng thái theo kiểm kê 22/10/2026 — chi tiết trong `.agent/tasks/miu-master-roadmap.md` (Roadmap v2).

| Module | Chủ đề | Trạng thái |
|--------|--------|-----------|
| A | Kỹ thuật cơ bản (bản vẽ, dụng cụ, an toàn, tiêu chuẩn) | Đã đủ 4 bài — chờ chuẩn hóa trực quan (Pha 1) |
| B1 | LifeSmart (7 bài: B1.00–B1.06) | Đã đủ — hệ mẫu cho chuẩn trực quan |
| B2 | Mobieyes / CommandFusion (9 bài) | Đã đủ — chờ chuẩn hóa trực quan |
| B3 | KNX (8 bài) | Đã đủ — chờ chuẩn hóa trực quan |
| B4 | DALI (6 bài) | Đã đủ — chờ chuẩn hóa trực quan |
| B5 | Camera Hikvision (8 bài) | Đã đủ — chờ chuẩn hóa trực quan |
| B6 | WiFi Ruijie (7 bài) | Đã đủ — chờ chuẩn hóa trực quan |
| C | WiFi & Mạng (5 bài) | Đã đủ — chờ chuẩn hóa trực quan |
| D | Lập trình (5 bài) | Mỏng — làm dày ở Pha 2 |
| E | Xử lý sự cố (7 bài) | E1 đạt; E2–E7 mỏng — Pha 2 |
| F | Tiêu chuẩn chất lượng (3 bài) | Mỏng — Pha 2 |
| G | Đánh giá năng lực (8 bài) | Dạng khung — Pha 2 |

## Available Skills

| Skill | Khi nào dùng |
|-------|-------------|
| `openspec-explore` | Làm rõ scope, khám phá ý tưởng |
| `openspec-propose` | Tạo change proposal mới |
| `openspec-apply-change` | Triển khai task từ change đã có |
| `openspec-archive-change` | Archive change hoàn tất |
| `openspec-context-loading` | Xem trạng thái project, danh sách spec và change |
| `content-qa-checklist` | Kiểm tra bài viết trước khi báo xong |
| `module-planner` | Lên kế hoạch module mới |
| `project-humanizer` | Chuẩn hóa giọng văn bài viết |

## Owner Preferences

- Giao tiếp tiếng Việt, ngắn gọn, thực tế
- Ưu tiên triển khai hơn lý thuyết
- Thích checklist cho task trung bình/lớn
- Muốn agent tự detect context, không cần nhớ lệnh
- Ưu tiên: chất lượng nội dung > tốc độ > vẻ đẹp cấu trúc
- Không mở rộng scope trừ khi được nói rõ

## Scope Discipline

- Không mở rộng sang module khác trừ khi task nói rõ
- Không redesign repo khi task chỉ yêu cầu sửa 1–2 bài
- Hoàn thành module hiện tại trước khi mở module mới
