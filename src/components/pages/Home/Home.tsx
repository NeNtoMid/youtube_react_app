import React from 'react';

import { StyledHome } from './Home.styles';

import SubSidebar from './SubSidebar/SubSidebar';

import CategoriesBar from './CategoriesBar/CategoriesBar';

import Video from '../../Shared/Video/Video';

const Home = () => {
	return (
		<StyledHome>
			<SubSidebar />
			<CategoriesBar />
			<div>
				{[...new Array(20)].map(() => (
					<Video />
				))}
			</div>
		</StyledHome>
	);
};

export default Home;
