import { call, delay, put, takeLatest } from 'redux-saga/effects';

import firebase from 'firebase/app';

import auth from '../../config/firebase';

import { LoginResponse, LoginData } from './../../interfaces/auth.interface';

import {
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGOUT_USER_FAIL,
	LOGOUT_USER_SUCCESS,
	LOGIN_USER_REQUEST,
	LOGOUT_USER_REQUEST,
	CHECK_USER_AUTHENTICATION_REQUEST,
	CHECK_USER_AUTHENTICATION_FAIL,
	CHECK_USER_AUTHENTICATION_SUCCESS,
} from './../types';

const signInWithGoogle = async () => {
	const googleProvider = new firebase.auth.GoogleAuthProvider();
	googleProvider.addScope('https://www.googleapis.com/auth/youtube.force-ssl');

	return await auth.signInWithPopup(googleProvider);
};

function* login() {
	try {
		const { additionalUserInfo, credential }: LoginResponse = yield call(
			signInWithGoogle
		);

		const response: LoginData = {
			profile: {
				email: additionalUserInfo.profile.email,
				family_name: additionalUserInfo.profile.family_name,
				given_name: additionalUserInfo.profile.given_name,
				granted_scopes: additionalUserInfo.profile.granted_scopes,
				picture: additionalUserInfo.profile.picture,
				id: additionalUserInfo.profile.id,
				name: additionalUserInfo.profile.name,
				locale:
					additionalUserInfo.profile.locale === 'en'
						? 'us'
						: additionalUserInfo.profile.locale, //ANCHOR change this logic late,
			},
			credential: {
				accessToken: credential.accessToken,
				idToken: credential.idToken,
			},
		};

		sessionStorage.setItem('isAuthenticated', 'true');
		sessionStorage.setItem('user', JSON.stringify(response));

		sessionStorage.setItem(
			'expirationDate',
			new Date(new Date().getTime() + 3600 * 1000) as unknown as string
		);

		yield put({ type: LOGIN_USER_SUCCESS, payload: response });

		yield delay(3600 * 1000);

		yield put({ type: LOGOUT_USER_REQUEST });
	} catch ({ message }) {
		yield put({
			type: LOGIN_USER_FAIL,
			payload: {
				message,
			},
		});
	}
}

const logoutWithGoogle = async () => {
	await auth.signOut();
};

function* logout() {
	try {
		yield call(logoutWithGoogle);

		sessionStorage.removeItem('isAuthenticated');
		sessionStorage.removeItem('user');
		sessionStorage.removeItem('expirationDate');

		yield put({ type: LOGOUT_USER_SUCCESS });
	} catch ({ message }) {
		yield put({
			type: LOGOUT_USER_FAIL,
			payload: {
				message,
			},
		});
	}
}

function* checkUserAuthentication() {
	try {
		const isAuthenticated = sessionStorage.getItem('isAuthenticated');

		const userData = sessionStorage.getItem('user');

		const leftExpirationTime = new Date(
			sessionStorage.getItem('expirationDate') || ''
		) as unknown as number;

		const presentTime = new Date(new Date().getTime()) as unknown as number;

		const expiresIn = leftExpirationTime - presentTime;

		if (
			!leftExpirationTime ||
			!isAuthenticated ||
			isAuthenticated === 'false' ||
			expiresIn < 0
		) {
			yield put({ type: LOGOUT_USER_REQUEST });
		} else {
			yield put({
				type: CHECK_USER_AUTHENTICATION_SUCCESS,
				payload: {
					isAuthenticated,
					userData,
				},
			});

			yield delay(expiresIn);

			yield put({ type: LOGOUT_USER_REQUEST });
		}
	} catch ({ message }) {
		yield put({
			type: CHECK_USER_AUTHENTICATION_FAIL,
			payload: {
				message,
			},
		});
	}
}

function* authSaga() {
	yield takeLatest(LOGIN_USER_REQUEST, login);
	yield takeLatest(LOGOUT_USER_REQUEST, logout);
	yield takeLatest(CHECK_USER_AUTHENTICATION_REQUEST, checkUserAuthentication);
}

export default authSaga;
