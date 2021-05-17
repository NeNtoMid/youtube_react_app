import styled from 'styled-components';

import { ReactComponent as SearchSvg } from './../../../../assets/icons/Header/search.svg';

export const StyledOptionsBar = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	place-items: center;
	grid-gap: 2rem;

	justify-self: end;

	img {
		width: 3.2rem;
		height: 3.2rem;
		border-radius: 50%;
	}

	svg:nth-child(2) {
		display: none;
	}

	@media (min-width: 380px) {
		svg:nth-child(2) {
			display: block;
		}
	}

	@media (min-width: 650px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;

export const StyledSearchSvg = styled(SearchSvg)`
	path {
		fill: ${({ theme }) => theme.colors.common.white};
	}

	@media (min-width: 650px) {
		display: none;
	}
`;
