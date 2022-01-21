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

export interface ITypeMachineItem {
	name: string;
	description: string;
	image: string;
	link: string;
}

export interface IContactItem {
	icon: IconProp;
	content: string;
	link?: string;
}

export interface ICalendarItem {
	day: string;
	opening: string;
	opened: boolean;
}

export interface IPromotion {
	type: string;
	name: string;
	value?: string | number;
}

export interface IProduct {
	id: string;
	type: string;
	title: string;
	description?: string;
	photo?: Array<string>;
	details?: Array<string>;
	promotion?: IPromotion;
	outstock?: boolean;
}

export interface IProductFilter {
	name: string;
	tag: string;
}

export interface ICardProductProps {
	product: IProduct;
}

export interface IWebServiceResponse {
	data: Array<IProduct>;
}

export interface IServiceItem {
	title: string;
	content: string;
}

export interface IPromotionSlide {
	name: string;
	type: string;
}