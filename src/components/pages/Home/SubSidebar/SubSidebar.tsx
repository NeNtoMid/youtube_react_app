import React from 'react';

import { ReactComponent as HomeSvg } from './../../../../assets/icons/Sidebar/home.svg';

import { ReactComponent as LikedVideosSvg } from './../../../../assets/icons/Sidebar/likedVideos.svg';

import { ReactComponent as SubscriptionsSvg } from './../../../../assets/icons/Sidebar/subscriptions.svg';

import { ReactComponent as LogoutSvg } from './../../../../assets/icons/Sidebar/logout.svg';

import { StyledSubSidebar } from './SubSidebar.styles';

const SubSidebar = () => {
	return (
		<StyledSubSidebar>
			<ul>
				<li>
					<a href='#' className='active'>
						<HomeSvg />
						Home
					</a>
				</li>
				<li>
					<a href='#'>
						<SubscriptionsSvg />
						Subscriptions
					</a>
				</li>

				<li>
					<a href='#'>
						<LikedVideosSvg />
						Liked videos
					</a>
				</li>

				<li>
					<a href='#'>
						<LogoutSvg />
						Logout
					</a>
				</li>
			</ul>
		</StyledSubSidebar>
	);
};

export default SubSidebar;
