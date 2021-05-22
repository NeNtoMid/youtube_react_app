import produce from 'immer';

import {
	FETCH_POPULAR_VIDEOS_SUCCESS,
	FETCH_POPULAR_VIDEOS_FAIL,
} from './../types';

import { PopularVideos } from './../../interfaces/videos.interface';

interface State {
	data: null | PopularVideos;
	error: null | string;
}

interface ErrorPayload {
	message: string;
}

type Actions =
	| {
			type: typeof FETCH_POPULAR_VIDEOS_SUCCESS;
			payload: {
				data: PopularVideos;
			};
	  }
	| {
			type: typeof FETCH_POPULAR_VIDEOS_FAIL;
			payload: ErrorPayload;
	  };

const fetchPopularVideosSuccess = (draft: State, data: any) => {
	draft.data = data;
	draft.error = null;
};

const setError = (draft: State, message: string) => {
	draft.error = message;
};

const initialState: State = {
	data: null,
	error: null,
};
const videosReducer = (state = initialState, action: Actions) => {
	return produce(state, (draft) => {
		switch (action.type) {
			case FETCH_POPULAR_VIDEOS_SUCCESS:
				fetchPopularVideosSuccess(draft, action.payload.data);
				break;
			case FETCH_POPULAR_VIDEOS_FAIL:
				setError(draft, action.payload.message);
				break;
		}
	});
};

export default videosReducer;
