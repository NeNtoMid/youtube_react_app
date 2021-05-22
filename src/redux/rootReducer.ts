import { combineReducers } from 'redux';

import authReducer from './reducers/auth.reducer';

import videosReducer from './reducers/videos.reducer';

const rootReducer = combineReducers({
	user: authReducer,
	videos: videosReducer,
});

export default rootReducer;
