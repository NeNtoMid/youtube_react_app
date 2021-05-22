import React, { useEffect } from 'react';
import { logout } from '../../../redux/actions/auth.action';

import { useAppDispatch } from './../../../redux/hooks';

import { Redirect } from 'react-router-dom';
const Logout = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(logout());
	}, [dispatch]);

	return <Redirect to='/login' />;
};

export default Logout;
