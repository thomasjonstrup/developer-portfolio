import { cn } from "@/lib/utils";
import type { PropsWithChildren } from "react";

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	href: string;
	external?: boolean;
	underline?: boolean;
}

export const Link = ({href, external, underline, className, children, ...rest}: PropsWithChildren<LinkProps>) => {
	return (
		<a
		href={href}
		target={external ? '_blank' : '_self'}
		className={cn(
		  'inline-block transition-colors duration-300 ease-in-out',
		  underline &&
			'underline decoration-muted-foreground underline-offset-[3px] hover:decoration-foreground',
		  className
		)}
		{...rest}
	  >
		{children}
	  </a>
	);
}