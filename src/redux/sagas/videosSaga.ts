// GET https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=PL&key=[YOUR_API_KEY] HTTP/1.1

// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json

import { call, put, takeLatest } from 'redux-saga/effects';

import axios from './../../config/axios';
import {
	FETCH_POPULAR_VIDEOS_REQUEST,
	FETCH_POPULAR_VIDEOS_SUCCESS,
	FETCH_POPULAR_VIDEOS_FAIL,
} from './../types';

const getPopularVideos = async (locale: string) => {
	console.log('locale.toUpperCase():', locale.toUpperCase());
	const popularVideos = await axios.get('/videos', {
		params: {
			part: 'snippet,contentDetails,statistics',
			chart: 'mostPopular',
			regionCode: locale.toUpperCase(),
			key: process.env.REACT_APP_YOUTUBE_API_KEY,
			maxResults: 20,
			pageToken: '',
		},
	});
	// ?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=PL&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
	console.log('popularVideos  :', popularVideos);

	return popularVideos;
};
function* fetchPopularVideos(action: {
	type: string;
	payload: { locale: string };
}) {
	try {
		const { data } = yield getPopularVideos(action.payload.locale);

		yield put({
			type: FETCH_POPULAR_VIDEOS_SUCCESS,
			payload: {
				data,
			},
		});
	} catch ({ message }) {
		yield put({ type: FETCH_POPULAR_VIDEOS_FAIL });
	}
}

function* videosSaga() {
	yield takeLatest(FETCH_POPULAR_VIDEOS_REQUEST, fetchPopularVideos);
}

export default videosSaga;
