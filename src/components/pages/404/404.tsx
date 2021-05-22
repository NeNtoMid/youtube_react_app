import React from 'react';

import { Styled404, StyledSearchContainer } from './404.styles';

import { ReactComponent as YoutubeLogoSvg } from './../../../assets/icons/Header/youtubeLogo.svg';

import Searchbar from '../../Layout/Header/Searchbar/Searchbar';

import { useAppSelector } from './../../../redux/hooks';

import { Link } from 'react-router-dom';

const Page404 = () => {
	const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);
	return (
		<Styled404>
			<div>
				<img
					src='https://www.gstatic.com/youtube/src/web/htdocs/img/monkey.png'
					alt=''
				/>
				<h1>
					This page isn't available. Sorry about that.
					<br /> Try searching for something else.
				</h1>

				<StyledSearchContainer>
					<YoutubeLogoSvg />
					{isAuthenticated ? (
						<Searchbar showInput />
					) : (
						<Link to='/login'>Login</Link>
					)}
				</StyledSearchContainer>
			</div>
		</Styled404>
	);
};

export default Page404;
