import styled from 'styled-components';

export const StyledHome = styled.main`
	display: grid;
	grid-template-areas:
		'categoriesbar'
		'videos';
	position: relative;

	@media (min-width: 800px) {
		grid-template-areas:
			'subsidebar categoriesbar'
			'subsidebar videos';
		grid-template-columns: auto 1fr;
	}
`;
