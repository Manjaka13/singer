/*
	Export interfaces from here
*/

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { IconName } from "@fortawesome/fontawesome-svg-core";

export IconProp;
export IconName;

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
	name: string;
	icon: IconProp;
	title: string;
	link: string;
}

export interface ITypeMachine {
	name: string;
	description: string;
	image: string;
}
