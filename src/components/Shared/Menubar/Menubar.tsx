import React from 'react';

import { ReactComponent as YoutubeLogoSvg } from './../../../assets/icons/Header/youtubeLogo.svg';

import { ReactComponent as MenuSvg } from './../../../assets/icons/Header/menu.svg';
import { StyledMenubar } from './Menubar.styles';

interface MenuProps {
	click?: () => void;
}
const Menu: React.FC<MenuProps> = ({ click }) => {
	return (
		<StyledMenubar>
			<MenuSvg onClick={click} />
			<YoutubeLogoSvg />
		</StyledMenubar>
	);
};

export default Menu;
