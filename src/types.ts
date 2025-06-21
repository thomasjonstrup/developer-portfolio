import { Icon as IconType } from '@lucide/astro';


export type Site = {
	title: string;
	description: string;
	href: string;
	author: string;
	locale: string;
	location: string;
}

export type SocialLink = {
	href: string;
	label: string;
	icon?: typeof IconType;
}

export type IconMap = {
	[key: string]: string;
};
