import React from 'react';

import {
	StyledSidebar,
	StyledMenubarContainer,
	StyledSubscriptionsContainer,
} from './Sidebar.styles';

import { ReactComponent as HomeSvg } from './../../../assets/icons/Sidebar/home.svg';

import { ReactComponent as JustToSvg } from './../../../assets/icons/Sidebar/justTo.svg';

import { ReactComponent as LikedVideosSvg } from './../../../assets/icons/Sidebar/likedVideos.svg';

import { ReactComponent as SidebarSvg } from './../../../assets/icons/Sidebar/sidebar.svg';

import { ReactComponent as SubscriptionsSvg } from './../../../assets/icons/Sidebar/subscriptions.svg';

import { ReactComponent as PopulateSvg } from './../../../assets/icons/Sidebar/populate.svg';

import { ReactComponent as LiveSvg } from './../../../assets/icons/Sidebar/live.svg';

import { ReactComponent as LogoutSvg } from './../../../assets/icons/Sidebar/logout.svg';

import SubscriptionProfileImg from './../../../assets/images/Sidebar/subscriptionProfile.jpg';

import Menubar from '../../Shared/Menubar/Menubar';

import { StyledNewContentContainer } from './Sidebar.styles';

import { NavLink } from 'react-router-dom';

interface SidebarProps {
	click: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ click }) => {
	return (
		<StyledSidebar>
			<StyledMenubarContainer>
				<Menubar click={click} />
			</StyledMenubarContainer>

			<ul>
				<li>
					<NavLink to='/'>
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
					<NavLink to='liked-videos'>
						<LikedVideosSvg />
						Liked videos
					</NavLink>
				</li>
				<li>
					<NavLink to='/just-to'>
						<JustToSvg />
						Just to
					</NavLink>
				</li>

				<li>
					<NavLink to='/populate'>
						<PopulateSvg />
						Populate
					</NavLink>
				</li>
				<li>
					<NavLink to='/sidebar'>
						<SidebarSvg />
						Sidebar
					</NavLink>
				</li>
				<li>
					<NavLink to='/logout'>
						<LogoutSvg />
						Logout
					</NavLink>
				</li>
			</ul>

			<StyledSubscriptionsContainer>
				<h3>Subscriptions</h3>
				<a href='/'>
					<img
						src={SubscriptionProfileImg}
						alt='youtube subscription profile'
					/>
					<span>Joma Tech</span>
					<LiveSvg />
				</a>
				<a href='/'>
					<img
						src={SubscriptionProfileImg}
						alt='youtube subscription profile'
					/>
					<span>Joma Tech</span>
					<StyledNewContentContainer>
						<div></div>
					</StyledNewContentContainer>
				</a>
				<a href='/'>
					<img
						src={SubscriptionProfileImg}
						alt='youtube subscription profile'
					/>
					<span>Joma Tech</span>
					<StyledNewContentContainer>
						<div></div>
					</StyledNewContentContainer>
				</a>
				<a href='/'>
					<img
						src={SubscriptionProfileImg}
						alt='youtube subscription profile'
					/>
					<span>Joma Tech</span>
					<StyledNewContentContainer>
						<div></div>
					</StyledNewContentContainer>
				</a>
				<a href='/'>
					<img
						src={SubscriptionProfileImg}
						alt='youtube subscription profile'
					/>
					<span>Joma Tech</span>
					<StyledNewContentContainer>
						<div></div>
					</StyledNewContentContainer>
				</a>
				<a href='/'>
					<img
						src={SubscriptionProfileImg}
						alt='youtube subscription profile'
					/>
					<span>Joma Tech</span>
					<StyledNewContentContainer>
						<div></div>
					</StyledNewContentContainer>
				</a>
				<a href='/'>
					<img
						src={SubscriptionProfileImg}
						alt='youtube subscription profile'
					/>
					<span>Joma Tech</span>
					<StyledNewContentContainer>
						<div></div>
					</StyledNewContentContainer>
				</a>{' '}
				<a href='/'>
					<img
						src={SubscriptionProfileImg}
						alt='youtube subscription profile'
					/>
					<span>Joma Tech</span>
					<StyledNewContentContainer>
						<div></div>
					</StyledNewContentContainer>
				</a>
				<a href='/'>
					<img
						src={SubscriptionProfileImg}
						alt='youtube subscription profile'
					/>
					<span>Joma Tech</span>
					<StyledNewContentContainer>
						<div></div>
					</StyledNewContentContainer>
				</a>
			</StyledSubscriptionsContainer>
		</StyledSidebar>
	);
};

export default Sidebar;
