/*
	Export interfaces from here
*/

import { IconProp } from "@fortawesome/fontawesome-svg-core";
// import { IconName } from "@fortawesome/fontawesome-svg-core";

export interface ISingerProps {
	Component: React.ComponentClass;
	pageProps?: Record<string, unknown>;
}

export interface IHeadingProps {
	title?: string;
	image?: string;
	description?: string;
}

export interface ISocial {
	icon: IconProp;
	title: string;
	link: string;
}

export interface ISection {
	name: string;
	icon: IconProp;
	title: string;
	link: string;
}

export interface IProfile {
	name: string;
	link: string;
}

export interface IContact {
	icon: IconProp;
	content: string;
	link?: string;
}

export interface ICalendar {
	day: string;
	opening: string;
	opened: boolean;
}

export interface IService {
	title: string;
	content: string;
}

export interface ITypeMachine {
	name: string;
	description: string;
	image: string;
}

export interface IMercerie {
	name: string;
	description: string;
	image: string;
}

export interface ILogin {
	email: string;
	password: string;
}

export interface IAPIFail {
	payload?: null;
	caption?: string;
	status?: number;
}

export interface IUser {
	email: string;
	password?: string;
	name: string;
	level: number;
	verified?: boolean;
	_id?: string;
	avatar?: string;
	token?: string;
}

export interface IAuthContext {
	user: IUser | null;
	loading: boolean;
	error?: string | null;
	login: (user: ILogin) => void;
	logout: () => void;
}