## 1. Chuẩn hóa project.md

- [x] 1.1 Thêm section `## Content Directory Structure` vào `openspec/project.md` — liệt kê rõ nơi nội dung nằm

## 2. Rewrite AGENTS.md

- [x] 2.1 Rewrite `openspec/AGENTS.md` — chuẩn hóa read order, gộp workflow flows từ `miu-skills-for-ky-thuat-smarthome.md`, thêm Quick Response Guide, chuyển priority thành pointer đến `CURRENT_PRIORITY.md`

## 3. Rewrite .agent/README.md

- [x] 3.1 Rewrite `.agent/README.md` thành pure pointer/entrypoint — bỏ nội dung trùng, chỉ trỏ đến đúng file

## 4. Refactor context files

- [x] 4.1 Refactor `.agent/context/WORKING_PREFERENCES.md` — bỏ writing rules đã có ở AGENTS.md, thêm pointer
- [x] 4.2 Giữ nguyên `OWNER_CONTEXT.md` và `CURRENT_PRIORITY.md` (xác nhận không cần sửa)

## 5. Cập nhật task files

- [x] 5.1 Sửa `.agent/tasks/miu-b1-05-b1-06-brief.md` — fix reference `LEARNINGS_MIU.md` thành `openspec/AGENTS.md`
- [x] 5.2 Gộp nội dung `miu-skills-for-ky-thuat-smarthome.md` vào `AGENTS.md` rồi xoá file gốc

## 6. Bổ sung config

- [x] 6.1 Bổ sung project context vào `openspec/config.yaml`

## 7. Verification

- [x] 7.1 Kiểm tra grep: không còn reference đến skill/file không tồn tại
- [x] 7.2 Kiểm tra grep: không còn trùng lặp priority/writing rules
- [x] 7.3 Build test: `npm run build` vẫn pass
