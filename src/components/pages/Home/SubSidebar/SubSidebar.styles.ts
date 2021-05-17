import styled from 'styled-components';

export const StyledSubSidebar = styled.div`
	background-color: #212121;

	width: 6.5rem;

	height: 89vh;
	position: fixed;

	ul {
		display: grid;
		grid-template-columns: 1fr;

		list-style: none;

		grid-row-gap: 2rem;

		li a.active svg path {
			fill: ${({ theme }) => theme.colors.common.white};
		}

		li a {
			display: grid;
			grid-template-columns: 1fr;
			place-items: center;

			text-decoration: none;

			grid-gap: 0.8rem;
			color: ${({ theme }) => theme.colors.common.white};

			font-size: 1rem;

			svg {
				width: 2.4rem;
				height: 2.4rem;
			}
			svg path {
				fill: #909090;
			}
		}
	}
`;
