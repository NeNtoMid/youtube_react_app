import React, { useEffect, useState } from 'react';

import { StyledVideos } from './Videos.styles';
import Video from './Video/Video';

import { useAppDispatch, useAppSelector } from './../../../redux/hooks';

import { fetchPopularVideos } from '../../../redux/actions/videos.action';

import Spinner from './../UI/Spinner/Spinner';

const Videos = () => {
	const [loading, setLoading] = useState(false);

	const dispatch = useAppDispatch();

	const locale =
		useAppSelector((state) => state.user.userDetails?.profile.locale) || 'PL';

	useEffect(() => {
		setLoading(true);
		dispatch(fetchPopularVideos(locale));

		setLoading(false);
	}, [dispatch, locale]);

	const videos = useAppSelector((state) => state.videos.data?.items);

	return (
		<StyledVideos>
			{loading || !videos ? (
				<Spinner />
			) : (
				videos.map((video) => <Video video={video} key={video.id} />)
			)}
		</StyledVideos>
	);
};

export default Videos;
