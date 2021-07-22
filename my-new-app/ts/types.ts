export interface User {
	id: string;
	name: string;
}

export interface CreateUser {
	name: string;
}

// type partialUser = Partial<User>;

export interface UserFromServer {
	[id: string]: {
		name: string;
	};
}
