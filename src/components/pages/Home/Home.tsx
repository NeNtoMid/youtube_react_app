import React from 'react';

import { StyledHome } from './Home.styles';

import SubSidebar from './SubSidebar/SubSidebar';

import CategoriesBar from './CategoriesBar/CategoriesBar';

import Videos from '../../Shared/Videos/Videos';

const Home = () => {
	return (
		<StyledHome>
			<SubSidebar />
			<CategoriesBar />

			<Videos />
		</StyledHome>
	);
};

export default Home;
