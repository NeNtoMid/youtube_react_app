import React from 'react';

import { ReactComponent as HomeSvg } from './../../../../assets/icons/Sidebar/home.svg';

import { ReactComponent as LikedVideosSvg } from './../../../../assets/icons/Sidebar/likedVideos.svg';

import { ReactComponent as SubscriptionsSvg } from './../../../../assets/icons/Sidebar/subscriptions.svg';

import { ReactComponent as LogoutSvg } from './../../../../assets/icons/Sidebar/logout.svg';

import { StyledSubSidebar } from './SubSidebar.styles';

import { NavLink } from 'react-router-dom';

const SubSidebar = () => {
	return (
		<StyledSubSidebar>
			<ul>
				<li>
					<NavLink to='/' className='active'>
						<HomeSvg />
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to='/subscriptions'>
						<SubscriptionsSvg />
						Subscriptions
					</NavLink>
				</li>

				<li>
					<NavLink to='/liked-videos'>
						<LikedVideosSvg />
						Liked videos
					</NavLink>
				</li>

				<li>
					<NavLink to='/logout'>
						<LogoutSvg />
						Logout
					</NavLink>
				</li>
			</ul>
		</StyledSubSidebar>
	);
};

export default SubSidebar;
