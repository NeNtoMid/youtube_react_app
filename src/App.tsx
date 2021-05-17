import React from 'react';

import { ThemeProvider } from 'styled-components';

import theme from './theme/theme';
import GlobalStyles from './theme/globalStyles';

import Layout from './hoc/Layout/Layout';

import Home from './components/pages/Home/Home';

const App: React.FC = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Layout>
				<Home />
			</Layout>
		</ThemeProvider>
	);
};

export default App;
