import {
	LOGIN_USER_REQUEST,
	LOGOUT_USER_REQUEST,
	CHECK_USER_AUTHENTICATION_REQUEST,
} from './../types';

export const login = () => {
	return { type: LOGIN_USER_REQUEST };
};

export const logout = () => {
	return { type: LOGOUT_USER_REQUEST };
};

export const checkUserAuthentication = () => {
	return { type: CHECK_USER_AUTHENTICATION_REQUEST };
};
