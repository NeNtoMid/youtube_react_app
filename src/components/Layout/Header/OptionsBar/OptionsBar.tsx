import React from 'react';

import { ReactComponent as AppsSvg } from './../../../../assets/icons/Header/apps.svg';

import { ReactComponent as NotificationsSvg } from './../../../../assets/icons/Header/notifications.svg';

import profileImg from './../../../../assets/images/Header/profile.jpg';
import { StyledOptionsBar, StyledSearchSvg } from './OptionsBar.styles';

interface OptionsBarProps {
	click: () => void;
}

const OptionsBar: React.FC<OptionsBarProps> = ({ click }) => {
	return (
		<StyledOptionsBar>
			<StyledSearchSvg onClick={click} />
			<AppsSvg />
			<NotificationsSvg />
			<img src={profileImg} alt='youtube user profile' />
		</StyledOptionsBar>
	);
};

export default OptionsBar;
