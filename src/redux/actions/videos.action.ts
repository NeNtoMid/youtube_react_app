import { FETCH_POPULAR_VIDEOS_REQUEST } from './../types';

export const fetchPopularVideos = (locale: string) => {
	return {
		type: FETCH_POPULAR_VIDEOS_REQUEST,
		payload: {
			locale,
		},
	};
};
