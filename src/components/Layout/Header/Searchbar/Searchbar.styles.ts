import styled from 'styled-components';

interface StyledSearchbarProps {
	showInput: boolean;
}
export const StyledSearchbar = styled.div<StyledSearchbarProps>`
	display: grid;
	grid-template-columns: 1fr auto;

	align-items: center;

	border-radius: 2px;

	width: 100%;

	input {
		font-size: 1.6rem;
		background-color: #121212;
		border: 1px solid #2f2f2f;

		color: ${({ theme }) => theme.colors.common.white};
		padding: 0.6rem 1rem;

		outline: none;

		&::placeholder {
			color: rgb(200, 200, 200);
			font-weight: 500;
		}

		&:focus {
			border: 0.1rem solid #1c62b9;
		}
	}

	div {
		background-color: #323232;
		padding: 0.2rem 1.8rem;
		height: 100%;
		display: grid;
		place-items: center;

		cursor: pointer;

		path {
			fill: hsla(0, 100%, 100%, 0.5);
			opacity: 0.6;
		}

		&:hover {
			path {
				opacity: 1;
			}
		}
	}

	@media (max-width: 650px) {
		display: ${({ showInput }) => (showInput ? 'grid' : 'none')};
	}
`;
