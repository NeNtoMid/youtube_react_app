import React, { useState, useEffect } from 'react';

import HorizontalScroll from 'react-scroll-horizontal';

import {
	StyledCategoriesBar,
	StyledHorizontalScrollElement,
} from './CategoriesBar.styles';

const keywords = [
	'All',
	'React js',
	'Angular js',
	'React Native',
	'use of API',
	'Redux',
	'Music',
	'Algorithm Art ',
	'Guitar',
	'Bengali Songs',
	'Coding',
	'Cricket',
	'Football',
	'Real Madrid',
	'Gatsby',
	'Poor Coder',
	'Shwetabh',
];

const CategoriesBar: React.FC = () => {
	const [activeElement, setActiveElement] = useState(keywords[0]);

	const handleElementChange = (element: string) => {
		setActiveElement(element);
	};

	useEffect(() => {
		//fetch new videos
	}, [activeElement]);
	return (
		<StyledCategoriesBar>
			<HorizontalScroll reverseScroll>
				{keywords.map((name) => (
					<StyledHorizontalScrollElement
						onClick={() => handleElementChange(name)}
						key={name}
						active={name === activeElement}
					>
						{name}
					</StyledHorizontalScrollElement>
				))}
			</HorizontalScroll>
		</StyledCategoriesBar>
	);
};

export default CategoriesBar;
