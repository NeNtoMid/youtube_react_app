import { useState } from 'react';

const useLayout = () => {
	const [showMenu, setShowMenu] = useState<boolean>(false);

	const handleChangeShowMenu = () => {
		setShowMenu((prevState) => !prevState);
	};

	return { showMenu, handleChangeShowMenu };
};

export default useLayout;
