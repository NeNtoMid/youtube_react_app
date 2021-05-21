import styled from 'styled-components';

export const StyledLogin = styled.main`
	width: 100%;
	height: 100vh;

	display: grid;

	place-items: center;

	div {
		background-color: #373737;
		color: ${({ theme }) => theme.colors.common.white};
		border-radius: 1rem;

		padding: 5rem 3rem;
		display: grid;

		place-items: center;

		grid-gap: 3rem;

		h1,
		p {
			text-align: center;
		}

		h1 {
			font-size: 3.2rem;
			font-weight: 500;
		}

		p {
			font-size: 1.6rem;
		}

		button {
			border: 1px solid rgba(255, 255, 255, 0.1);
			background-color: ${({ theme }) => theme.colors.common.white};
			border-radius: 1rem;
			padding: 1rem;
			font-size: 1.4rem;
			cursor: pointer;
		}

		img {
			width: 12rem;
			height: auto;
		}
	}
`;
