import React, { Suspense } from 'react';

import { Route } from 'react-router-dom';

import Spinner from './../../components/Shared/UI/Spinner/Spinner';

interface PublicRouteProps {
	children: React.ReactNode;
	path: string;
	exact?: boolean;
}
const PublicRoute: React.FC<PublicRouteProps> = ({ children, ...rest }) => {
	return (
		<Route {...rest}>
			<Suspense fallback={<Spinner />}>{children}</Suspense>
		</Route>
	);
};

export default PublicRoute;
