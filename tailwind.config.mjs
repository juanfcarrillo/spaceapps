import plugin from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'ns-primary': '#105bd8',
				'ns-primary-darker': '#0b3d91',
				'ns-primary-darkest': '#061f4a',
				'ns-base': '#212121',
				'ns-gray-dark': '#323a45',
				'ns-gray-light': '#aeb0b5',
				'ns-white': '#ffffff',
			}
		},
	},
	plugins: [],
}
