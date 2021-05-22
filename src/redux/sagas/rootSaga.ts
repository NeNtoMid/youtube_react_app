import { all } from 'redux-saga/effects';

import authSaga from './authSaga';

import videosSaga from './videosSaga';

function* rootSaga() {
	yield all([authSaga(), videosSaga()]);
}

export default rootSaga;
