import React, { useEffect } from 'react';

import { StyledLogin } from './Login.styles';

import { useAppDispatch, useAppSelector } from './../../../redux/hooks';

import { useHistory } from 'react-router-dom';
import { login } from './../../../redux/actions/auth.action';

const Login: React.FC = () => {
	const dispatch = useAppDispatch();

	const history = useHistory();

	const handleLogin = () => {
		dispatch(login());
	};

	const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);

	useEffect(() => {
		isAuthenticated && history.replace('/');
	}, [isAuthenticated, history]);

	return (
		<StyledLogin>
			<div>
				<img
					src='https://seeklogo.com/images/Y/youtube-logo-FF3BEE4378-seeklogo.com.png'
					alt='youtube logo'
				/>
				<h1>
					Youtube Clone <br />
					made by Dominik Ptaszek :D
				</h1>

				<button onClick={handleLogin}>Login with Google</button>
				<p>
					A Youtube clone project made using Youtube-api
					<br /> (This app does not collect your data)
				</p>
			</div>
		</StyledLogin>
	);
};

export default Login;
