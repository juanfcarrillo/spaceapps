/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'color-primary': '#0b3d91',
				'color-primary-darker': '#0b3d91',
				'color-primary-darkest': '#061f4a',
				'color-base': '#212121',
				'color-gray-dark': '#323a45',
				'color-gray-light': '#aeb0b5',
				'color-white': '#ffffff',
			}
		},
	},
	plugins: [],
}
