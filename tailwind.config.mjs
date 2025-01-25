/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				custom:{
					purple: "#354e8c",
					purple_darker: "#6c23ff",
				},
			},
			screens:{
				xs:"428px",
			}
		},
	},
	plugins: [require("flowbite/plugin")],
}
