# Current Priority

## Repo priority now
1. **Pha 1 của Roadmap v2: chuẩn hóa + trực quan hóa từ bài cũ** (xem `.agent/tasks/miu-master-roadmap.md`).
2. Việc cụ thể trước mắt:
   - Thêm integration `astro-mermaid` vào `site/` để bài viết dùng được flow Mermaid.
   - Tạo component MDX `ProcessSteps` (trình chiếu từng bước kèm ảnh thật) trong `site/src/components/` — thay cho video, giữ repo nhẹ.
   - Chuẩn hóa lần lượt theo thứ tự A → B1 → B2 → B3 → B4 → B5 → B6 → C, áp chuẩn trực quan mới.
   - Bài mẫu cho web animation: **B1.02 — Thi công lắp đặt** và **B1.03 — Cấu hình ứng dụng**.
3. Chỉ chuyển sang làm dày module mỏng (Pha 2: D, E, F, G) sau khi Pha 1 xong phần Module B.

## Quy ước đã chốt (22/10/2026)
- Không lưu file video trong repo — animation làm dạng web (Mermaid, component MDX, SVG + CSS) cộng hình ảnh thật.
- Độc giả chính là kỹ thuật viên; kinh doanh tham khảo thêm.
- Tài liệu nguồn do chủ nhân cung cấp theo đợt; Pha 3 (tài liệu tham khảo) chạy song song, không chặn Pha 1.

## What success looks like now
- Kỹ thuật viên mở bài lắp đặt / lập trình là thấy ngay flow tổng thể, sau đó đi từng bước có hình minh họa — không phải đọc tường chữ.
- Repo vẫn nhẹ: không file video, ảnh đã tối ưu, build và deploy tự động qua GitHub không chậm đi.
- Module B1 trở thành mẫu chuẩn trực quan để các module sau áp dụng theo.
