/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: [ "Degular Text", "sans"]
	  
			  },
			colors: {
				primary: '#FFC233',
				secondary: '#DDA266',
				background: '#5423E7',
				
			}
		},
	},
	plugins: [],
}
