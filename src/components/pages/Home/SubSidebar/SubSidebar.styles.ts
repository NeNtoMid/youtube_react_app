import styled from 'styled-components';

export const StyledSubSidebar = styled.div`
	display: none;

	@media (min-width: 800px) {
		position: fixed;
		display: block;
		grid-area: subsidebar;
		background-color: #212121;

		width: 6.5rem;

		height: 100vh;
		top: 60%;
		transform: translateY(-50%);

		ul {
			display: grid;
			grid-template-columns: 1fr;

			padding: 2rem 0;

			list-style: none;

			grid-row-gap: 2rem;

			li a.active svg path {
				fill: ${({ theme }) => theme.colors.common.white};
			}

			li a {
				&:link,
				&:visited,
				&:active {
					display: grid;
					grid-template-columns: 1fr;
					place-items: center;

					text-decoration: none;

					transition: all 0.06s;

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

				&:hover {
					background-color: #383838;
				}
			}
		}
	}
`;
