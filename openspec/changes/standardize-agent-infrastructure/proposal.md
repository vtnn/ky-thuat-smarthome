## Why

Lớp hướng dẫn cho agent/IDE trong repo (`openspec/`, `.agent/`) hiện có thông tin trùng lặp ở nhiều nơi (priority trùng 3 file, writing rules trùng 2 file, workflow mapping trùng 3 file), reference đến skill không tồn tại, và read order chưa nhất quán. Khi agent mới vào repo, không rõ file nào là source-of-truth cho loại thông tin nào. Cần chuẩn hóa để mỗi file có vai trò rạch ròi, agent chỉ cần đọc đúng vài file là tự biết cách làm việc.

## What Changes

- **Rewrite** `openspec/AGENTS.md` — chuẩn hóa thành SOT cho agent rules, bỏ trùng lặp priority, thêm quick response guide, gộp workflow flows từ `miu-skills-for-ky-thuat-smarthome.md`
- **Rewrite** `.agent/README.md` — biến thành pure pointer/entrypoint, bỏ nội dung trùng
- **Refactor** `.agent/context/WORKING_PREFERENCES.md` — bỏ writing rules đã có ở AGENTS.md
- **Sửa nhẹ** `openspec/project.md` — thêm content directory structure
- **Bổ sung** `openspec/config.yaml` — điền project context
- **Fix** `.agent/tasks/miu-b1-05-b1-06-brief.md` — sửa reference LEARNINGS_MIU.md đã bị xoá
- **Gộp + xoá** `.agent/tasks/miu-skills-for-ky-thuat-smarthome.md` — nội dung gộp vào AGENTS.md, loại reference skill không tồn tại

## Capabilities

### New Capabilities
- `agent-operating-model`: Mô hình vận hành chuẩn cho agent/IDE trong repo — phân cấp source-of-truth rõ ràng, read order nhất quán, quick response guide để agent tự điều hướng từ yêu cầu ngắn

### Modified Capabilities
_(Không có specs hiện tại để sửa — thư mục `openspec/specs/` đang trống)_

## Impact

- **Files bị sửa**: 6 file `.md` + 1 file `.yaml` trong `openspec/` và `.agent/`
- **Files bị xoá**: 1 (`miu-skills-for-ky-thuat-smarthome.md` — nội dung gộp trước khi xoá)
- **Không ảnh hưởng**: nội dung wiki (`site/`), skills (`*.agent/skills/*`), workflows (`.agent/workflows/*`), site build
- **Rủi ro**: thấp — chỉ sửa file hướng dẫn, không đụng code hay nội dung bài viết
