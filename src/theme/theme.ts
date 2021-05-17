import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
	colors: {
		// header: {
		// 	backgroundDark: '#202020',
		// 	dark: '#121212',
		// 	lightDark: '#323232',

		// 	grey: '#7c7c7c',
		// },
		common: {
			white: '#fff',
			black: '#202020',
		},
	},

	up: (breakpoint: number, vertical: boolean = false) =>
		`@media (min-${
			vertical ? 'height' : 'width'
		}: calc(${breakpoint}px + 0.02px))`,
	down: (breakpoint: number, vertical: boolean = false) =>
		`@media (max-${vertical ? 'height' : 'width'}: ${breakpoint}px)`,
	between: (
		breakpointMin: number,
		breakpointMax: number,
		vertical: boolean = false
	) =>
		`@media (max-${
			vertical ? 'height' : 'width'
		}: ${breakpointMax}px) and (min-${
			vertical ? 'height' : 'width'
		}: calc(${breakpointMin}px + 0.02px))`,
};

export default theme;
