import React from 'react';

import { StyledVideos } from './Videos.styles';
import Video from './Video/Video';

const Videos = () => {
	return (
		<StyledVideos>
			{[...new Array(50)].map(() => (
				<Video />
			))}
		</StyledVideos>
	);
};

export default Videos;
