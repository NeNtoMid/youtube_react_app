import styled from 'styled-components';

export const StyledSidebar = styled.nav`
	overflow-y: scroll;

	scrollbar-width: none;

	&::-webkit-scrollbar {
		width: 6px;
		background-color: transparent;
	}
	&::-webkit-scrollbar-thumb {
		background: #909090;
	}

	z-index: 2;
	display: grid;
	grid-template-columns: 1fr;

	animation: slideInRight 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) backwards;

	width: 24rem;
	background-color: #212121;

	position: fixed;
	top: 0;
	left: 0;
	padding: 2rem 0;

	ul {
		display: grid;
		grid-template-columns: 1fr;

		list-style: none;

		padding: 10% 0;

		margin-top: 6%;
		grid-row-gap: 1rem;

		border-top: 1px solid #383838;
		border-bottom: 1px solid #383838;

		li {
			cursor: pointer;
		}
		li a {
			padding: 5% 10%;
			display: grid;
			grid-template-columns: auto 1fr;
			align-items: center;

			grid-gap: 1rem;
			color: ${({ theme }) => theme.colors.common.white};

			font-size: 1.4rem;
			line-height: 20px;

			transition: all 0.06s;

			svg {
				width: 2.4rem;
				height: 2.4rem;
			}
			svg path {
				fill: #909090;
			}

			&:hover {
				background-color: #383838;
			}
		}
	}

	@keyframes slideInRight {
		0% {
			transform: translateX(-500px);
			opacity: 0;
		}
		100% {
			transform: translateX(0);
			opacity: 1;
		}
	}
`;

export const StyledMenubarContainer = styled.div`
	width: 60%;
	padding: 1.3% 10%;
`;

export const StyledNewContentContainer = styled.div`
	width: 2.4rem;
	height: 2.4rem;

	position: relative;

	div {
		background-color: #3ea6ff;
		width: 0.4rem;
		height: 0.4rem;
		margin: 0 auto;
		position: absolute;
		top: 50%;
		right: 18%;
		transform: translate(-50%, -50%);
		border-radius: 50%;
	}
`;

export const StyledSubscriptionsContainer = styled.div`
	padding: 5% 0;

	max-height: 30rem;

	h3 {
		font-size: 1.4rem;

		color: #838383;
		text-transform: uppercase;

		padding: 0 10%;
	}

	a {
		&:link,
		&:visited,
		&:active {
			padding: 5% 10%;
			display: grid;
			grid-template-columns: auto 1fr auto;
			align-items: center;
			grid-gap: 2rem;
			color: ${({ theme }) => theme.colors.common.white};
			font-size: 1.4rem;

			text-decoration: none;

			transition: all 0.06s;

			img {
				width: 2.4rem;
				height: 2.4rem;
				border-radius: 50%;
			}
			svg {
				width: 1.6rem;
				height: 1.6rem;
			}
			span {
				${({ theme }) => theme.lineclamp(1)}
			}
		}

		&:hover {
			background-color: #383838;
		}
	}
`;
