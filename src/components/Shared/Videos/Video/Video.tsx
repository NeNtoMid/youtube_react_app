import React, { useEffect, useState } from 'react';

import { StyledVideo, StyledInformationContainer } from './Video.styles';

import axios from './../../../../config/axios';

import { Item } from './../../../../interfaces/videos.interface';

import moment from 'moment';

import numeral from 'numeral';

import { Channel } from './../../../../interfaces/channels.interface';

interface VideoProps {
	video: Item;
}
const Video: React.FC<VideoProps> = ({ video }) => {
	console.log('video:', video);

	const [channelIcon, setChannelIcon] = useState<string>('');
	useEffect(() => {
		const fetchChannelIcon = async () => {
			try {
				const { data }: { data: Channel } = await axios.get('/channels', {
					params: {
						part: 'snippet',
						id: video.snippet.channelId,
					},
				});

				console.log(data);

				setChannelIcon(data.items[0].snippet.thumbnails.default.url);
			} catch (error) {}
		};

		fetchChannelIcon();
	}, [video.snippet.channelId]);

	const durationSeconds = moment
		.duration(video.contentDetails.duration)
		.asSeconds();

	const duration = moment.utc(durationSeconds * 1000).format('mm:ss');

	return (
		<StyledVideo>
			<a href='#'>
				<div>
					<img src={video.snippet.thumbnails.medium.url} alt='' />
					<span>{duration}</span>
				</div>
			</a>

			<StyledInformationContainer>
				<a href='/'>
					<img src={channelIcon} alt='' />
				</a>
				<a href='#'>
					<div>
						<p>{video.snippet.title}</p>
						<p>{video.snippet.channelTitle}</p>
						<p>
							{numeral(video.statistics.viewCount).format('0.a').toUpperCase()}{' '}
							Views &bull; {moment(video.snippet.publishedAt).fromNow()}
						</p>
					</div>
				</a>
			</StyledInformationContainer>
		</StyledVideo>
	);
};

export default Video;
