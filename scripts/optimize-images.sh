#!/bin/bash
# optimize-images.sh — Tối ưu hình ảnh trong site/src/assets/ trước khi git push
# Dùng: ./scripts/optimize-images.sh [--dry-run]
#
# Chức năng:
#   1. Resize ảnh quá lớn (>1920px) về max 1920px giữ tỉ lệ
#   2. Nén chất lượng JPG/JPEG xuống 85%
#   3. Chuyển PNG sang WebP (giữ file gốc, thêm file .webp)
#   4. Báo cáo dung lượng trước/sau
#
# Yêu cầu: macOS (sips), Node.js (sharp qua npx)

set -euo pipefail

ASSETS_DIR="site/src/assets"
MAX_WIDTH=1920
JPG_QUALITY=85
WEBP_QUALITY=80
DRY_RUN=false

if [[ "${1:-}" == "--dry-run" ]]; then
  DRY_RUN=true
  echo "🔍 DRY RUN — chỉ báo cáo, không sửa file"
  echo ""
fi

# Kiểm tra thư mục
if [[ ! -d "$ASSETS_DIR" ]]; then
  echo "❌ Không tìm thấy $ASSETS_DIR. Chạy từ root repo."
  exit 1
fi

echo "📊 Dung lượng trước: $(du -sh "$ASSETS_DIR" | cut -f1)"
echo ""

# ─────────────────────────────────────────────
# 1. Resize ảnh quá lớn (sips — macOS built-in)
# ─────────────────────────────────────────────
echo "── Bước 1: Resize ảnh > ${MAX_WIDTH}px ──"
resized=0

while read -r img; do
  width=$(sips -g pixelWidth "$img" 2>/dev/null | tail -1 | awk '{print $2}')
  if [[ -n "$width" && "$width" -gt "$MAX_WIDTH" ]]; then
    if [[ "$DRY_RUN" == true ]]; then
      echo "  → sẽ resize: $img (${width}px → ${MAX_WIDTH}px)"
    else
      sips --resampleWidth "$MAX_WIDTH" "$img" --out "$img" > /dev/null 2>&1
      echo "  ✓ resized: $img (${width}px → ${MAX_WIDTH}px)"
    fi
    resized=$((resized + 1))
  fi
done < <(find "$ASSETS_DIR" -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" \))

echo "  Tổng: $resized ảnh cần resize"
echo ""

# ─────────────────────────────────────────────
# 2. Nén JPG/JPEG (sips)
# ─────────────────────────────────────────────
echo "── Bước 2: Nén JPG quality=${JPG_QUALITY}% ──"
compressed=0

while read -r img; do
  before=$(stat -f%z "$img")
  if [[ "$DRY_RUN" == true ]]; then
    echo "  → sẽ nén: $img ($(echo "scale=1; $before/1024" | bc)KB)"
  else
    sips -s formatOptions "$JPG_QUALITY" "$img" --out "$img" > /dev/null 2>&1
    after=$(stat -f%z "$img")
    saved=$((before - after))
    if [[ "$saved" -gt 0 ]]; then
      echo "  ✓ nén: $img (-$(echo "scale=1; $saved/1024" | bc)KB)"
    fi
  fi
  compressed=$((compressed + 1))
done < <(find "$ASSETS_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" \))

echo "  Tổng: $compressed file JPG xử lý"
echo ""

# ─────────────────────────────────────────────
# 3. Chuyển PNG lớn sang WebP (node + sharp)
# ─────────────────────────────────────────────
echo "── Bước 3: Chuyển PNG → WebP (quality=${WEBP_QUALITY}%) ──"
converted=0
MIN_SIZE_KB=50  # chỉ convert PNG > 50KB

while read -r img; do
  size_bytes=$(stat -f%z "$img")
  size_kb=$((size_bytes / 1024))

  if [[ "$size_kb" -lt "$MIN_SIZE_KB" ]]; then
    continue
  fi

  webp_path="${img%.png}.webp"

  if [[ -f "$webp_path" ]]; then
    continue  # đã có WebP rồi
  fi

  if [[ "$DRY_RUN" == true ]]; then
    echo "  → sẽ convert: $img (${size_kb}KB)"
  else
    NODE_PATH="site/node_modules" node -e "
      const sharp = require('sharp');
      sharp('$img')
        .webp({ quality: $WEBP_QUALITY })
        .toFile('$webp_path')
        .then(() => console.log('  ✓ converted: $webp_path'))
        .catch(e => console.error('  ✗ lỗi:', e.message));
    " 2>/dev/null || echo "  ⚠ Cần sharp: npm install -D sharp (trong site/)"
  fi
  converted=$((converted + 1))
done < <(find "$ASSETS_DIR" -type f -iname "*.png")

echo "  Tổng: $converted file PNG cần convert"
echo ""

# ─────────────────────────────────────────────
# Báo cáo
# ─────────────────────────────────────────────
echo "📊 Dung lượng sau: $(du -sh "$ASSETS_DIR" | cut -f1)"
echo ""
echo "💡 Lưu ý:"
echo "   - WebP files mới cần cập nhật import path trong .md nếu muốn dùng"
echo "   - Astro đã tự optimize ảnh khi build, script này giúp giảm size trong git"
echo "   - Chạy trước khi push: ./scripts/optimize-images.sh"
