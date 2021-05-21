import React, { lazy, Suspense } from 'react';

import { ThemeProvider } from 'styled-components';

import theme from './theme/theme';
import GlobalStyles from './theme/globalStyles';

import Layout from './hoc/Layout/Layout';

import { BrowserRouter, Switch } from 'react-router-dom';

import PublicRoute from './hoc/PublicRoute/PublicRoute';

const Home = lazy(() => import('./components/pages/Home/Home'));

const Login = lazy(() => import('./components/pages/Login/Login'));

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<GlobalStyles />

				<Switch>
					<PublicRoute path='/login' exact>
						<Login />
					</PublicRoute>

					<Layout>
						<PublicRoute path='/' exact>
							<Home />
						</PublicRoute>
					</Layout>
				</Switch>
			</ThemeProvider>
		</BrowserRouter>
	);
};

export default App;
