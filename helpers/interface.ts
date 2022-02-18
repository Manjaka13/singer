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
	icon: IconName;
	title: string;
	link: string;
}
