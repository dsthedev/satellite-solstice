import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
	plugins: [
		plugin(function ({ addUtilities }) {
			addUtilities({
				'.text-shadow': {
					'text-shadow': '0 2px 4px rgba(0,0,0,0.85)',
				},
				'.text-shadow-md': {
					'text-shadow': '0 6px 10px rgba(0,0,0,0.65), 0 2px 4px rgba(0,0,0,0.6)',
				},
				'.text-shadow-lg': {
					'text-shadow': '0 12px 24px rgba(0,0,0,0.75), 0 6px 12px rgba(0,0,0,0.6)',
				},
				'.text-shadow-thick': {
					'text-shadow': '0 2px 4px rgba(0,0,0,0.6), 0 4px 8px rgba(0,0,0,0.5)',
				},
				'.text-shadow-outline': {
					'text-shadow': '-1px 0 0 rgba(0,0,0,0.9), 0 1px 0 rgba(0,0,0,0.9), 1px 0 0 rgba(0,0,0,0.9)',
				},
			});
		}),
	],
};
