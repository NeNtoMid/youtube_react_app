import React, { useState } from 'react';

import Menubar from '../../Shared/Menubar/Menubar';
import Searchbar from './Searchbar/Searchbar';

import OptionsBar from './OptionsBar/OptionsBar';

import { ReactComponent as ArrowLeftSvg } from './../../../assets/icons/Header/arrowLeft.svg';

import { StyledHeader } from './Header.styles';

interface HeaderProps {
	click: () => void;
}

const Header: React.FC<HeaderProps> = ({ click }) => {
	const [showInput, setShowInput] = useState<boolean>(false);

	const handleChangeShowInput = () => {
		setShowInput((prevState) => !prevState);
	};
	return (
		<StyledHeader showInput={showInput}>
			{!showInput && <Menubar click={click} />}
			{showInput && <ArrowLeftSvg onClick={handleChangeShowInput} />}
			<Searchbar showInput={showInput} />
			{!showInput && <OptionsBar click={handleChangeShowInput} />}
		</StyledHeader>
	);
};

export default Header;
