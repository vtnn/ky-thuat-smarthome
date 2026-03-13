## ADDED Requirements

### Requirement: Phân cấp Source-of-Truth rõ ràng
Hệ thống file hướng dẫn PHẢI tuân theo nguyên tắc: mỗi loại thông tin chỉ có DUY NHẤT một file là source-of-truth. Các file khác chỉ được pointer (reference) đến SOT, không được copy nội dung.

#### Scenario: Agent tìm current priority
- **WHEN** agent cần biết priority hiện tại của dự án
- **THEN** agent PHẢI đọc `.agent/context/CURRENT_PRIORITY.md` và không có file nào khác chứa nội dung priority trùng lặp

#### Scenario: Agent tìm writing rules
- **WHEN** agent cần biết quy tắc viết nội dung
- **THEN** agent PHẢI đọc section "Writing Rules" trong `openspec/AGENTS.md` và không có file nào khác chứa writing rules trùng lặp

### Requirement: IDE Entrypoint rõ ràng
`.agent/README.md` PHẢI làm entrypoint duy nhất cho agent/IDE khi lần đầu vào repo. File này PHẢI chỉ chứa pointer đến các file khác, KHÔNG chứa nội dung chi tiết.

#### Scenario: Agent mới vào repo
- **WHEN** agent lần đầu mở repo `ky-thuat-smarthome`
- **THEN** agent đọc `.agent/README.md` và từ đó biết: repo là gì, đọc file nào tiếp theo, task active nằm đâu, context nằm đâu, skills nào có sẵn

### Requirement: Quick Response Guide cho agent
`openspec/AGENTS.md` PHẢI chứa bảng tra nhanh giúp agent tự điều hướng từ yêu cầu ngắn của user.

#### Scenario: User nói "làm tiếp B1.05"
- **WHEN** agent nhận yêu cầu dạng "làm tiếp [bài X]"
- **THEN** agent tra quick response guide, biết phải đọc task brief + dùng `openspec-apply-change` hoặc edit trực tiếp

#### Scenario: User nói "mở module mới"
- **WHEN** agent nhận yêu cầu dạng "mở module/phần mới"
- **THEN** agent tra quick response guide, biết phải dùng `module-planner` → `openspec-propose`

### Requirement: Không reference resource không tồn tại
Mọi file hướng dẫn KHÔNG ĐƯỢC reference skill, workflow, hoặc file không tồn tại trong repo.

#### Scenario: Kiểm tra skill references
- **WHEN** agent đọc bất kỳ file hướng dẫn nào
- **THEN** mọi skill/workflow được đề cập PHẢI tương ứng với một folder trong `.agent/skills/` hoặc `.agent/workflows/`

### Requirement: Bảo toàn giá trị nội dung Miu
Khi gộp hoặc xoá file do Miu tạo, nội dung có giá trị PHẢI được gộp vào file SOT tương ứng TRƯỚC KHI xoá file gốc.

#### Scenario: Gộp miu-skills-for-ky-thuat-smarthome.md
- **WHEN** file `miu-skills-for-ky-thuat-smarthome.md` bị xoá
- **THEN** toàn bộ workflow flows ("Mở hướng mới → explore → propose", "Làm nội dung → apply → humanizer → build") PHẢI đã được gộp vào `openspec/AGENTS.md`
