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
					<a>
						<HomeSvg />
						Home
					</a>
				</li>
				<li>
					<a>
						<SubscriptionsSvg />
						Subscriptions
					</a>
				</li>

				<li>
					<a>
						<LikedVideosSvg />
						Liked videos
					</a>
				</li>
				<li>
					<a>
						<JustToSvg />
						Just to
					</a>
				</li>

				<li>
					<a>
						<PopulateSvg />
						Populate
					</a>
				</li>
				<li>
					<a>
						<SidebarSvg />
						Sidebar
					</a>
				</li>
				<li>
					<a>
						<LogoutSvg />
						Logout
					</a>
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
