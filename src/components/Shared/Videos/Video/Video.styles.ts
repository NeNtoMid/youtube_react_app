import styled from 'styled-components';

export const StyledVideo = styled.li`
	img {
		width: 100%;
	}
	div {
		position: relative;
		span {
			position: absolute;
			right: 1%;
			bottom: 5%;
			padding: 0.05rem 0.2rem;
			background-color: #060606;
			font-size: 1.2rem;
			font-weight: 500;
			border-radius: 0.2rem;
			letter-spacing: 0.035rem;
			color: ${({ theme }) => theme.colors.common.white};
		}
	}
`;

export const StyledInformationContainer = styled.div`
	display: grid;
	grid-template-columns: auto 1fr;

	grid-gap: 2rem;
	img {
		border-radius: 50%;
		margin-top: 0.5rem;
		width: 3.6rem;
		height: 3.6rem;
	}
	div p {
		font-size: 1.4rem;

		color: rgb(170, 170, 170);

		&:first-child {
			font-weight: 500;
			color: ${({ theme }) => theme.colors.common.white};
			${({ theme }) => theme.lineclamp(2)}
		}
	}
`;
