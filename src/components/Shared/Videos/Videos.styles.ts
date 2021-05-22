import styled from 'styled-components';

export const StyledVideos = styled.ul`
	grid-area: videos;

	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));

	width: 90%;

	margin: 0 auto;

	list-style: none;

	padding: 2rem 0;
	grid-gap: 3rem 2rem;

	@media (min-width: 800px) {
		padding-left: 6.5rem;
		width: 95%;
	}

	@media (min-width: 1000px) {
		margin: 5.4rem auto 0 auto;
	}
`;
