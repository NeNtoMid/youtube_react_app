import styled, { css } from 'styled-components';

interface StyledHeaderProps {
	showInput: boolean;
}

export const StyledHeader = styled.header<StyledHeaderProps>`
	position: fixed;
	z-index: 1;

	background-color: #202020;
	padding: 2rem;
	display: grid;

	width: 100vw;

	place-items: center start;

	grid-template-columns: repeat(2, 1fr);

	grid-gap: 5rem;

	@media (min-width: 650px) {
		grid-template-columns: auto 1fr auto;
		place-items: center;
	}

	${({ showInput }) =>
		showInput &&
		css`
			grid-template-columns: auto 1fr;
			grid-gap: 2rem;
		`}
`;
