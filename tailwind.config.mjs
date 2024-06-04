/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				PlusJakartaSans: ["PlusJakartaSans", "sans-serif"],
			},
			colors: {
				bodyColor: "#191919",
				textSecondary: "#97979F",
				textContent: "#c3c3c3",
			}
		},
	},
}
