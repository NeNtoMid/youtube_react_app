import React, { Suspense } from 'react';

import { useAppSelector } from './../../redux/hooks';

import { Route, Redirect } from 'react-router-dom';

import Spinner from './../../components/Shared/UI/Spinner/Spinner';

interface PrivateRouteProps {
	children: React.ReactNode;
	path: string;
	exact?: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, ...rest }) => {
	const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);

	return (
		<Route
			{...rest}
			render={() =>
				isAuthenticated ? (
					<Suspense fallback={<Spinner />}>{children}</Suspense>
				) : (
					<Redirect exact to='/login' />
				)
			}
		/>
	);
};

export default PrivateRoute;
