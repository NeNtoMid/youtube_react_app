import React from 'react';

import { ThemeProvider } from 'styled-components';

import theme from './theme/theme';
import GlobalStyles from './theme/globalStyles';

const App: React.FC = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
		</ThemeProvider>
	);
};

export default App;
