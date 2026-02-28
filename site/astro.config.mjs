// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://kythuat.vtnn.io.vn',
	integrations: [
		starlight({
			title: 'Kỹ thuật Smarthome',
			description: 'Wiki kỹ thuật – tài liệu đào tạo & vận hành',
			logo: {
				src: './src/assets/brand/logo-192.png',
				alt: 'Kỹ thuật Smarthome',
			},
			head: [
				{ tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/brand/favicon-32.png' } },
				{ tag: 'link', attrs: { rel: 'apple-touch-icon', sizes: '192x192', href: '/brand/logo-192.png' } },
			],
			customCss: ['./src/styles/custom.css'],
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/vtnn/ky-thuat-smarthome' },
			],
			sidebar: [
				{ label: 'Tổng quan', link: '/wiki/' },
				{
					label: 'Lộ trình học',
					items: [
						{ label: 'A — Nền tảng kỹ thuật', autogenerate: { directory: 'wiki/module-a-ky-thuat-co-ban' } },
						{ label: 'B — Thiết bị & hệ thống', autogenerate: { directory: 'wiki/module-b-he-thong-thiet-bi' } },
						{ label: 'C — WiFi & Mạng', autogenerate: { directory: 'wiki/module-c-wifi-va-mang' } },
						{ label: 'D — Lập trình & Tự động hoá', autogenerate: { directory: 'wiki/module-d-lap-trinh' } },
						{ label: 'E — Xử lý sự cố (Troubleshooting)', autogenerate: { directory: 'wiki/module-e-xu-ly-su-co' } },
						{ label: 'F — Chất lượng & Nghiệm thu', autogenerate: { directory: 'wiki/module-f-tieu-chuan-chat-luong' } },
						{ label: 'G — Lộ trình kỹ thuật viên', autogenerate: { directory: 'wiki/module-g-danh-gia-nang-luc' } },
					],
				},
				{ label: 'Biểu mẫu & Checklist', autogenerate: { directory: 'wiki/bieu-mau-templates' } },
				{ label: 'Tài liệu hãng / tham khảo', autogenerate: { directory: 'wiki/tai-lieu-tham-khao' } },
				{ label: 'Tra cứu nhanh (FAQ / Glossary)', autogenerate: { directory: 'wiki/reference' } },
			],
		}),
	],
});
