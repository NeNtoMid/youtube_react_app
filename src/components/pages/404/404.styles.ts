import styled from 'styled-components';

export const Styled404 = styled.main`
	display: grid;
	place-items: center;

	h1 {
		text-align: center;
	}

	div {
		display: grid;
		justify-items: center;
		grid-gap: 3rem;
	}
	height: calc(100vh - 7.3rem);
`;

export const StyledSearchContainer = styled.div`
	display: grid;
	place-items: center;

	justify-self: stretch;
	a {
		border: 1px solid rgba(255, 255, 255, 0.1);
		background-color: ${({ theme }) => theme.colors.common.white};
		border-radius: 1rem;
		padding: 1rem;
		font-size: 1.4rem;
		cursor: pointer;
		width: 100%;
		text-align: center;
		max-width: 15rem;
	}
	@media (min-width: 500px) {
		grid-template-columns: auto 1fr;
	}
`;
