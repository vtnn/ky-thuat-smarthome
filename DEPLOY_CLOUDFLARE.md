# Deploy lên Cloudflare Pages (kythuat.vtnn.io.vn)

## 1) Tạo Cloudflare Pages project
- Cloudflare Dashboard → **Workers & Pages** → **Pages** → **Create**
- **Connect to Git** → chọn repo `vtnn/ky-thuat-smarthome`

## 2) Build settings
- **Framework preset:** Astro (hoặc None)
- **Build command:**
  ```bash
  npm ci
  npm run build
  ```
- **Build output directory:**
  ```
  site/dist
  ```

> Lưu ý: project Astro nằm trong thư mục `site/`.

## 3) Custom domain
- Pages project → **Custom domains** → Add `kythuat.vtnn.io.vn`
- Cloudflare sẽ yêu cầu DNS record (CNAME). Làm theo wizard.

## 4) Preview local
Trong thư mục `site/`:
```bash
npm run build
npm run preview
```

## 5) (Tuỳ chọn) Deploy bằng Wrangler
Trong thư mục `site/`:
```bash
npm run build
npx wrangler deploy
```
