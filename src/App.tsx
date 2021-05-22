import React, { lazy, useEffect } from 'react';

import { ThemeProvider } from 'styled-components';

import theme from './theme/theme';
import GlobalStyles from './theme/globalStyles';

import Layout from './hoc/Layout/Layout';

import { BrowserRouter, Switch, Redirect } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from './redux/hooks';

import PublicRoute from './hoc/PublicRoute/PublicRoute';

import PrivateRoute from './hoc/PrivateRoute/PrivateRoute';

import SubSidebar from './components/pages/Home/SubSidebar/SubSidebar';

import { checkUserAuthentication } from './redux/actions/auth.action';

const Home = lazy(() => import('./components/pages/Home/Home'));

const Login = lazy(() => import('./components/pages/Login/Login'));

const Logout = lazy(() => import('./components/pages/Logout/Logout'));

const Page404 = lazy(() => import('./components/pages/404/404'));

const App: React.FC = () => {
	const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(checkUserAuthentication());
	}, [dispatch]);
	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<GlobalStyles />

				<Switch>
					<PublicRoute path='/login' exact>
						{!isAuthenticated ? <Login /> : <Redirect to='/' />}
					</PublicRoute>

					<PrivateRoute path='/' exact>
						<Layout>
							<Home />
						</Layout>
					</PrivateRoute>

					<PrivateRoute path='/search' exact>
						<Layout>
							<SubSidebar />
							<h1
								style={{
									color: 'white',
									fontSize: '50px',
									paddingLeft: '6.5rem',
								}}
							>
								Search results
							</h1>
						</Layout>
					</PrivateRoute>

					<PrivateRoute path='/logout' exact>
						<Logout />
					</PrivateRoute>
					<PublicRoute path='/'>
						<Page404 />
					</PublicRoute>
				</Switch>
			</ThemeProvider>
		</BrowserRouter>
	);
};

export default App;
