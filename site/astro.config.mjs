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
				src: './src/assets/logo.svg',
				alt: 'Kỹ thuật Smarthome',
			},
			head: [
				{ tag: 'link', attrs: { rel: 'icon', href: '/logo.svg' } },
			],
			customCss: ['./src/styles/custom.css'],
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/vtnn/ky-thuat-smarthome' },
			],
			sidebar: [
				{ label: 'Tổng quan', link: '/wiki/' },
				{
					label: 'Modules',
					items: [
						{ label: 'Module A — Kỹ thuật cơ bản', autogenerate: { directory: 'wiki/module-a-ky-thuat-co-ban' } },
						{ label: 'Module B — Hệ thống thiết bị', autogenerate: { directory: 'wiki/module-b-he-thong-thiet-bi' } },
						{ label: 'Module C — WiFi & Mạng', autogenerate: { directory: 'wiki/module-c-wifi-va-mang' } },
						{ label: 'Module D — Lập trình', autogenerate: { directory: 'wiki/module-d-lap-trinh' } },
						{ label: 'Module E — Xử lý sự cố', autogenerate: { directory: 'wiki/module-e-xu-ly-su-co' } },
						{ label: 'Module F — Tiêu chuẩn chất lượng', autogenerate: { directory: 'wiki/module-f-tieu-chuan-chat-luong' } },
						{ label: 'Module G — Đánh giá năng lực', autogenerate: { directory: 'wiki/module-g-danh-gia-nang-luc' } },
					],
				},
				{ label: 'Biểu mẫu & Templates', autogenerate: { directory: 'wiki/bieu-mau-templates' } },
				{ label: 'Tài liệu tham khảo', autogenerate: { directory: 'wiki/tai-lieu-tham-khao' } },
				{ label: 'Reference', autogenerate: { directory: 'wiki/reference' } },
			],
		}),
	],
});
