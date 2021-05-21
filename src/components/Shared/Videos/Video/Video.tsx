import React from 'react';

import { StyledVideo, StyledInformationContainer } from './Video.styles';
const Video: React.FC = () => {
	return (
		<StyledVideo>
			<a href='#'>
				<div>
					<img
						src='https://i.ytimg.com/vi/NvCUCPIdoiw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCM2DkXenaR82AxFdXrLg0qXEPv0w'
						alt=''
					/>
					<span>0:50</span>
				</div>
			</a>

			<StyledInformationContainer>
				<a href='/'>
					<img
						src='https://yt3.ggpht.com/ytc/AAUvwniHTRh976mthOmWXb2dYDukuWdsTk_lR92xUOVqNg=s68-c-k-c0x00ffffff-no-rj'
						alt=''
					/>
				</a>
				<a href='#'>
					<div>
						<p>JAK MIEĆ WYEBANE? | FREESTYLE Z KS JAKUBEM BARTCZAKIEM</p>
						<p>Political Meme</p>
						<p>2.5K Views &bull; 14 minutes ago</p>
					</div>
				</a>
			</StyledInformationContainer>
		</StyledVideo>
	);
};

export default Video;
