# Deploy lên Cloudflare Pages (kythuat.vtnn.io.vn)

## Cách 1: Tự động qua GitHub Actions (Khuyến nghị)

Mỗi khi anh push code lên branch `main`, GitHub Actions sẽ tự động:
1. Cài thư viện (`npm ci`)
2. Build Astro (`npm run build`)
3. Deploy lên Cloudflare Pages

### Thiết lập lần đầu

Vào **GitHub repo → Settings → Secrets and variables → Actions**, thêm 2 secrets:

| Secret                    | Lấy ở đâu                                                        |
|---------------------------|-------------------------------------------------------------------|
| `CLOUDFLARE_API_TOKEN`    | Cloudflare Dashboard → My Profile → API Tokens → Create Token    |
| `CLOUDFLARE_ACCOUNT_ID`  | Cloudflare Dashboard → Workers & Pages → Account ID (cột phải)   |

**Tạo API Token** với quyền:
- `Cloudflare Pages:Edit`
- `Account:Read`

### Custom domain
Pages project → **Custom domains** → Add `kythuat.vtnn.io.vn` → Làm theo wizard DNS (CNAME).

---

## Cách 2: Deploy thủ công bằng Wrangler

Trong thư mục `site/`:
```bash
npm run build
npx wrangler pages deploy dist --project-name=kythuat-smarthome
```

---

## Preview local

```bash
cd site
npm install
npm run dev      # Dev server tại localhost:4321
npm run build    # Build production
npm run preview  # Preview bản build
```
