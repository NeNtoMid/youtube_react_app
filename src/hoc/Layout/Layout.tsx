import React from 'react';

import Header from '../../components/Layout/Header/Header';

import Sidebar from '../../components/Layout/Sidebar/Sidebar';

import { StyledLayout } from './Layout.styles';

import useLayout from '../../hooks/Layout/useLayout';

interface LayoutProps {
	children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
	const { showMenu, handleChangeShowMenu } = useLayout();

	return (
		<StyledLayout>
			<Header click={handleChangeShowMenu} />
			{showMenu && <Sidebar click={handleChangeShowMenu} />}

			{children}
		</StyledLayout>
	);
};

export default Layout;
