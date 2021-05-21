import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			// header: {
			// 	dark: string;
			// 	lightDark: string;
			// 	grey: string;
			// };
			common: {
				white: string;
				black: string;
			};
		};
		up: (breakpoint: number, vertical: boolean) => string;
		down: (breakpoint: number, vertical: boolean) => string;
		between: (
			breakpoint: number,
			breakpointMax: number,
			vertical: boolean
		) => string;
		lineclamp: (lineNumbers: number) => string;
	}
}
