/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,css,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				archivo: "'Archivo', sans-serif",
				space: "'Space Grotesk', sans-serif",
			},
			colors: {
				black: '#121214',
				brand: '#7CA2F4',
				'ghost-white': '#F3F7FF',
			},
			backgroundImage: {
				'jordan-mobile': "url('assets/images/michael-jordan-mobile.png')",
				'jordan-tablet': "url('assets/images/michael-jordan-tablet.png')",
				'jordan-desktop': "url('assets/images/michael-jordan-desktop.png')",
			},
		},
	},
	plugins: [],
}
