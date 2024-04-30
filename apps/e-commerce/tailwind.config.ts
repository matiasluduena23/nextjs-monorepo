import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				clOrange: 'hsl(26, 100%, 55%)',
				clPaleOrange: 'hsl(25, 100%, 94%)',
				clDarkBlue: 'hsl(220, 13%, 13%)',
				clDarkGreyblue: 'hsl(219, 9%, 45%)',
				clGrayishblue: 'hsl(220, 14%, 75%)',
				clLightgrayishblue: 'hsl(223, 64%, 98%)',
			},
		},
	},
	plugins: [],
};
export default config;
