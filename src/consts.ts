import type { IconMap, SocialLink, Site } from "@/types";

import { Github } from "@lucide/astro";

export const SITE: Site = {
	title: "My Personal Blog",
	description: "A blog about my personal experiences and thoughts.",
	href: "https://example.com",
	author: "John Doe",
	locale: "en-US",
	location: "New York, USA",
};

export const NAV_LINKS: SocialLink[] = [
	{
		href: "/",
		label: "home",
	},
	{
		href: "/about",
		label: "about",
	},
	{
		href: "/projects",
		label: "projects",
	},
	{
		href: "/contact",
		label: "contact",
	},
	{
		href: "/blog",
		label: "blog",
	},
];

export const SOCIAL_LINKS: SocialLink[] = [
	{
		href: "https://github.com/cojocaru-david?ref=personal-website",
		label: "GitHub",
		icon: Github,
	},
];

export const ICON_MAP: IconMap = {
	Website: "lucide:globe",
	GitHub: "lucide:github",
	Instagram: "lucide:instagram",
	Phone: "lucide:phone",
	Email: "lucide:mail",
	RSS: "lucide:rss",
};

export interface Category {
	text: string;
	logo: string;
}

export type Technologies = {
	"Web Development": Category[];
};

export const technologies: Technologies = {
	"Web Development": [
		{
			text: "HTML",
			logo: "logos:html-5",
		},
		{
			text: "CSS",
			logo: "logos:css-3",
		},
		{
			text: "JavaScript",
			logo: "logos:javascript",
		},
		{
			text: "TypeScript",
			logo: "logos:typescript-icon",
		},
	],
};
