import produce from 'immer';

import {
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGOUT_USER_SUCCESS,
	LOGOUT_USER_FAIL,
	CHECK_USER_AUTHENTICATION_SUCCESS,
	CHECK_USER_AUTHENTICATION_FAIL,
} from './../types';

import { LoginData } from './../../interfaces/auth.interface';

interface State {
	isAuthenticated: boolean;
	error: null | string;
	userDetails: null | LoginData;
}

const initialState: State = {
	isAuthenticated: false,
	error: null,
	userDetails: null,
};

interface ErrorPayload {
	message: string;
}
type Actions =
	| { type: typeof LOGIN_USER_SUCCESS; payload: LoginData }
	| {
			type: typeof LOGIN_USER_FAIL;
			payload: ErrorPayload;
	  }
	| { type: typeof LOGOUT_USER_SUCCESS }
	| {
			type: typeof LOGOUT_USER_FAIL;
			payload: ErrorPayload;
	  }
	| {
			type: typeof CHECK_USER_AUTHENTICATION_SUCCESS;
			payload: { isAuthenticated: string; userData: string };
	  }
	| {
			type: typeof CHECK_USER_AUTHENTICATION_FAIL;
			payload: ErrorPayload;
	  };

const loginUserSuccess = (draft: State, data: LoginData) => {
	draft.isAuthenticated = true;
	draft.error = null;
	draft.userDetails = data;

	console.log(
		'	draft.userDetails.profile.locale:',
		draft.userDetails.profile.locale
	);
};

const logoutUserSuccess = (draft: State) => {
	draft.isAuthenticated = false;
	draft.userDetails = null;
	draft.error = null;
};

const setError = (draft: State, message: string) => {
	draft.error = message;
};

const checkUserAuthenticationSuccess = (
	draft: State,
	isAuth: string,
	userData: string
) => {
	draft.isAuthenticated = isAuth === 'true';
	draft.userDetails = JSON.parse(userData);
};

const authReducer = (state = initialState, action: Actions) => {
	return produce(state, (draft) => {
		switch (action.type) {
			case LOGIN_USER_SUCCESS:
				loginUserSuccess(draft, action.payload);
				break;

			case LOGIN_USER_FAIL:
				setError(draft, action.payload.message);

				break;
			case LOGOUT_USER_SUCCESS:
				logoutUserSuccess(draft);
				break;
			case LOGOUT_USER_FAIL:
				setError(draft, action.payload.message);
				break;
			case CHECK_USER_AUTHENTICATION_SUCCESS:
				checkUserAuthenticationSuccess(
					draft,
					action.payload.isAuthenticated,
					action.payload.userData
				);
				break;
			case CHECK_USER_AUTHENTICATION_FAIL:
				setError(draft, action.payload.message);
		}
	});
};

export default authReducer;
