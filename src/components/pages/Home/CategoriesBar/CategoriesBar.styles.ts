import styled, { css } from 'styled-components';

export const StyledCategoriesBar = styled.div`
	display: none;

	@media (min-width: 1000px) {
		position: fixed;
		right: 0;

		z-index: 1;
		width: calc(100% - 6.5rem);
		display: block;
		border-top: 1px solid #383838;
		border-bottom: 1px solid #383838;
		grid-area: categoriesbar;
		height: 5.6rem;

		background-color: #202020;

		div {
			align-items: center;
		}
	}
`;

interface StyledHorizonstalScrollElementProps {
	active: boolean;
}
export const StyledHorizontalScrollElement = styled.div<StyledHorizonstalScrollElementProps>`
	padding: 0.25rem 1rem;
	cursor: pointer;
	display: grid;
	place-items: center;
	margin: 0 1rem;
	font-size: 1.4rem;
	background-color: #373737;
	border: 1px solid rgba(255, 255, 255, 0.1);
	color: ${({ theme }) => theme.colors.common.white};
	border-radius: 16px;
	transition: 0.1s;

	white-space: nowrap;

	&:hover {
		background-color: rgba(255, 255, 255, 0.22);
	}

	${({ active }) =>
		active &&
		css`
			background-color: ${({ theme }) => theme.colors.common.white};
			color: #1b1b1b;
		`}
`;
