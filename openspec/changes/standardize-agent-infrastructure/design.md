## Context

Repo `ky-thuat-smarthome` có lớp hướng dẫn cho agent/IDE gồm 3 tầng:
- `openspec/` — project constitution + agent rules
- `.agent/` — IDE entrypoint + context + tasks + skills
- `.agent/workflows/` — thin wrappers cho OpenSpec skills

Tầng này phát triển organic qua nhiều conversation, dẫn đến trùng lặp và mâu thuẫn:
- Priority trùng 3 file, writing rules trùng 2 file, workflow mapping trùng 3 file
- Reference đến skill không tồn tại (`brainstorming`, `decision-framework`, `pa-admin-exec`)
- Read order khác nhau giữa `AGENTS.md` và `.agent/README.md`

## Goals / Non-Goals

**Goals:**
- Mỗi file có một vai trò rạch ròi, không trùng lặp
- Agent mới vào repo có read path rõ ràng: `.agent/README.md` → `openspec/AGENTS.md` → context + tasks
- Từ yêu cầu ngắn ("làm tiếp B1.05"), agent tự biết workflow nào dùng, file nào đọc
- Bảo toàn 100% giá trị thông tin do Miu tạo

**Non-Goals:**
- Không tái cấu trúc thư mục (giữ nguyên `openspec/`, `.agent/`, `.agent/skills/`, v.v.)
- Không sửa nội dung module kỹ thuật (B1/B2...)
- Không tạo thêm skill mới
- Không thay đổi OpenSpec schema hay workflow

## Decisions

### 1. Source-of-truth phân cấp rõ ràng

| Loại thông tin | SOT duy nhất |
|---|---|
| Project overview, tech, constraints, done criteria | `openspec/project.md` |
| Agent rules, writing rules, workflow rules, quality gate | `openspec/AGENTS.md` |
| IDE entrypoint (pointer đến đúng file) | `.agent/README.md` |
| Current priority | `.agent/context/CURRENT_PRIORITY.md` |
| Owner preferences | `.agent/context/OWNER_CONTEXT.md` |
| Working preferences (không trùng agent rules) | `.agent/context/WORKING_PREFERENCES.md` |
| Roadmap + task briefs | `.agent/tasks/*` |

**Tại sao**: tránh agent đọc priority ở 3 nơi khác nhau rồi không biết tin cái nào.

### 2. `.agent/README.md` chỉ là pointer, không chứa nội dung

**Tại sao**: nếu README cũng chứa priority, writing rules, workflow mapping → thành nơi dễ outdated nhất vì copy từ chỗ khác. Giữ nó nhẹ: chỉ trỏ đến đúng file.

### 3. Gộp workflow flows từ `miu-skills-for-ky-thuat-smarthome.md` vào `AGENTS.md`, rồi xoá file gốc

**Tại sao**: thông tin "Mở hướng mới → explore → propose" có giá trị, nhưng nằm ở file riêng gây rối. Gộp vào AGENTS.md Workflow section. Bỏ reference skill không tồn tại.

**Thay thế đã cân nhắc**: giữ file riêng nhưng bỏ phần trùng → vẫn tạo thêm 1 file agent phải đọc mà giá trị thấp.

### 4. Thêm Quick Response Guide vào AGENTS.md

Bảng tra nhanh: "user nói X → agent đọc file Y, dùng workflow Z". Giúp agent tự điều hướng từ yêu cầu ngắn.

## Risks / Trade-offs

- **Xoá `miu-skills-for-ky-thuat-smarthome.md`** → Mất file gốc do Miu tạo. Mitigation: nội dung đã được gộp 100% vào AGENTS.md trước khi xoá.
- **AGENTS.md dài hơn** → agent đọc lâu hơn. Mitigation: cấu trúc section rõ ràng, có heading scan-friendly.
- **Single point of failure ở CURRENT_PRIORITY.md** → nếu quên cập nhật, agent đọc priority cũ. Mitigation: đây đã là hành vi hiện tại, chỉ là bây giờ rõ ràng hơn.
