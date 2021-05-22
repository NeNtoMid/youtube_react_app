interface Profile {
	email: string;
	family_name: string;
	given_name: string;
	id: string;
	name: string;
	granted_scopes: string;
	picture: string;
	locale: string;
}

interface Credential {
	idToken: string;
	accessToken: string;
}

export interface LoginResponse {
	additionalUserInfo: {
		profile: Profile;
	};
	credential: Credential;
}

export interface LoginData {
	profile: Profile;

	credential: Credential;
}
