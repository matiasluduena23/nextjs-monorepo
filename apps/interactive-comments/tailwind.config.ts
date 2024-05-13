import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				clModerateblue: 'hsl(238, 40%, 52%)',
				clSoftRed: 'hsl(358, 79%, 66%)',
				clLightgrayblue: 'hsl(239, 57%, 85%)',
				clPalered: 'hsl(357, 100%, 86%)',
				clDarkblue: 'hsl(212, 24%, 26%)',
				clGrayBlue: 'hsl(211, 10%, 45%)',
				clLightgray: 'hsl(223, 19%, 93%)',
				clVerylightgray: 'hsl(228, 33%, 97%)',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [],
};
export default config;
