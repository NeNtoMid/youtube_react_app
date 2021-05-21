import React from 'react';

import { StyledLogin } from './Login.styles';

const Login: React.FC = () => {
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

				<button>Login with Google</button>
				<p>
					A Youtube clone project made using Youtube-api
					<br /> (This app does not collect your data)
				</p>
			</div>
		</StyledLogin>
	);
};

export default Login;
