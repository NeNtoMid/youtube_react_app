import { createGlobalStyle } from 'styled-components';

const globalStyles = createGlobalStyle`
*,*::before,*::after {
    margin:0;
    padding:0;
    box-sizing:inherit;
	font-family: 'Roboto', sans-serif;
}
html {
    font-size:62.5%;


}
body {
    width:100%;
	min-height:100vh;
    line-height:1.7;
    box-sizing:border-box;
	 
	background-color:#121212;
                      
	height:500vh; //for testing purposes
   
}


svg {
	cursor:pointer;
}


`;

export default globalStyles;

/* &::-webkit-scrollbar {
			width: 10px;
			background-color: ${({
				theme: {
					colors: {
						common: { white },
					},
				},
			}) => white};
			border-radius: 0 11px 11px 0;
		}
	&::-webkit-scrollbar-thumb {
			background: ${({
				theme: {
					colors: { mainBlue },
				},
			}) => mainBlue};
			border-radius: 11px;
	} */
