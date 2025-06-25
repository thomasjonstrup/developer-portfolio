import { cn } from "@/lib/utils";
import type { PropsWithChildren } from "react";

export interface LinkProps
	extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	href: string;
	external?: boolean;
	underline?: boolean;
}

/**
 * Link
 * -
 * A simple link component that supports external links, underlining, and custom classes.
 *
 * @param {PropsWithChildren<LinkProps>} {href, external, underline, className, children, ...rest}
 * @return {JSX.Element}
 */
export const Link = ({
	href,
	external,
	underline,
	className,
	children,
	...rest
}: PropsWithChildren<LinkProps>) => {
	return (
		<a
			href={href}
			target={external ? "_blank" : "_self"}
			className={cn(
				"inline-block transition-colors duration-300 ease-in-out",
				underline &&
					"decoration-muted-foreground hover:decoration-foreground underline underline-offset-[3px]",
				className,
			)}
			{...rest}
		>
			{children}
		</a>
	);
};
