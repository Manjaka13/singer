/*
	All typescript interfaces
*/

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { IconName } from "@fortawesome/fontawesome-svg-core";

export interface ISingerProps {
	Component: React.ComponentClass;
	pageProps?: Record<string, unknown>;
}

export interface IPageProps {
	title?: string;
	image?: string;
	description?: string;
	children?: JSX.Element;
	active?: number;
}

export interface IHeadingProps {
	title?: string;
	image?: string;
	children?: string;
}

export interface ISocial {
	icon: IconName;
	title: string;
	link: string;
}

export interface IButtonProps {
	title?: string;
	className?: string;
	children?: JSX.Element | string;
	atClick?: () => null;
	color?: string;
	disabled?: boolean;
	alt?: boolean;
}

export interface IBadgeProps {
	content: number;
}

export interface INavbarProps {
	atTrigger?: () => void;
}

export interface IMenuProps {
	opened?: boolean;
	atClose?: () => void;
}

export interface IMenuItem {
	name: string;
	icon: IconProp;
	title: string;
	link: string;
}
