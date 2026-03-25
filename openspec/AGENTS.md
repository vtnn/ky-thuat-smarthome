# OpenSpec Agent Instructions

You are working on the **Kỹ thuật SmartHome Wiki** repository.

## Read Order

Mỗi khi bắt đầu task mới, đọc theo thứ tự:

1. `openspec/project.md` — overview dự án, tech stack, constraints, done criteria
2. `openspec/AGENTS.md` ← (file này) — rules vận hành, workflow, quality gate
3. `.agent/context/CURRENT_PRIORITY.md` — priority đang active
4. `.agent/tasks/` — task brief hoặc roadmap liên quan đến yêu cầu hiện tại
5. Content files liên quan trong `site/src/content/docs/wiki/`

Nếu cần hiểu owner: đọc thêm `.agent/context/OWNER_CONTEXT.md` và `WORKING_PREFERENCES.md`.

## Primary Working Style

Repo này là **content-first**, không phải code-first.

Ưu tiên:
- viết nội dung kỹ thuật tiếng Việt rõ ràng
- dùng ví dụ thực tế từ công trình / nhà ở
- giữ tính nhất quán giữa các module
- tài liệu phải dùng được cho kỹ thuật viên thật, không phải chỉ đọc được

## Quick Response Guide

Khi nhận yêu cầu ngắn từ user, tra bảng này:

| User nói | Agent làm |
|----------|-----------|
| "làm tiếp [bài X]" | Đọc task brief trong `.agent/tasks/` → dùng `openspec-apply-change` hoặc edit trực tiếp |
| "sửa bài [X]" | Đọc bài → apply `content-qa-checklist` → sửa → apply `project-humanizer` → build |
| "mở module/phần mới" | Dùng `module-planner` → `openspec-propose` → `openspec-apply-change` |
| "rà lại cho đủ" | Đọc `miu-master-roadmap.md` → dùng `content-qa-checklist` trên từng bài |
| "rà lại roadmap" | Đọc `miu-master-roadmap.md` + `CURRENT_PRIORITY.md` → cập nhật nếu cần |
| "chuẩn hóa repo" | Dùng `openspec-explore` trước → `openspec-propose` nếu cần thay đổi lớn |
| scope không rõ | Dùng `openspec-explore` để làm rõ trước khi code |

## Required Workflows

### Dùng `openspec-explore` khi:
- scope chưa rõ
- cần so sánh các hướng tiếp cận
- cần hiểu gap nội dung hiện tại

### Dùng `openspec-propose` khi:
- thêm module mới
- thay đổi kiến trúc thông tin
- thay đổi cấu trúc lớn ảnh hưởng nhiều file

### Dùng `openspec-apply-change` khi:
- change đã có tasks
- đang triển khai nội dung theo brief
- cải thiện scoped trong phạm vi đã rõ

### Dùng `openspec-archive-change` khi:
- change hoàn tất
- nội dung đã merge / finalize
- tasks đã done hết

### Workflow flows khuyến nghị

| Tình huống | Flow |
|-----------|------|
| Mở hướng mới | `openspec-explore` → `openspec-propose` → `openspec-apply-change` |
| Làm nội dung scoped | `openspec-apply-change` → `project-humanizer` → build |
| Mở module mới | `module-planner` → `openspec-propose` → `openspec-apply-change` |
| Kiểm tra bài xong chưa | `content-qa-checklist` → sửa nếu cần → build |

## Writing Rules

- Luôn viết tiếng Việt
- Không dùng H1 trong body bài (Starlight tự render title thành H1)
- Tránh giọng AI / manual khô cứng — viết như kỹ thuật viên giải thích cho kỹ thuật viên
- Không bold quá mức, không emoji trong body
- Giải thích "tại sao", không chỉ "cái gì"
- Ưu tiên ví dụ thực tế, ưu tiên tiếng Việt khi có thuật ngữ tương đương
- **Quy tắc Video**:
  - Đuôi file: Bắt buộc dùng chữ thường `.mp4`.
  - Vị trí: Lưu vào `site/public/wiki/assets/videos/`.
  - Hiển thị: Sử dụng thẻ `<video autoplay muted loop playsinline width="100%">`, KHÔNG dùng cú pháp markdown `![]()`.
  - Git LFS: KHÔNG tracking file mp4 bằng Git LFS trên repo này (do Cloudflare Pages lỗi render pointer file). File size nhỏ tự push bình thường.

## Quality Gate

Trước khi báo xong một task, BẮT BUỘC kiểm tra:
- [ ] frontmatter đúng chuẩn (title, description, module)
- [ ] heading rõ ràng, không H1 trong body
- [ ] nội dung theo đúng writing rules ở trên
- [ ] có ví dụ thật hoặc tình huống áp dụng
- [ ] link và asset path hoạt động đúng
- [ ] giọng văn tự nhiên (apply `project-humanizer` nếu cần)
- [ ] `npm run build` pass (nếu thay đổi cấu trúc nội dung)

## Current Priority

→ Xem `.agent/context/CURRENT_PRIORITY.md` ← source-of-truth duy nhất cho priority.

## Scope Discipline

- Không mở rộng sang module khác trừ khi task nói rõ
- Không redesign repo khi task chỉ yêu cầu sửa 1–2 bài
- Hoàn thành module hiện tại trước khi mở module mới
- Khi phân vân: ưu tiên chất lượng nội dung > tốc độ > vẻ đẹp cấu trúc
