import { usePathname } from "next/navigation";
import StyledLink from "../atom/Button/Link";

type PageLinkType = {
	name?: string;
	title: string;
	href: string;
};

type PageNavigationProps = {
	Pages: PageLinkType[];
	size?: "sm" | "md";
};

const PageNavigation = ({ Pages, size = "md" }: PageNavigationProps) => {
	const Path = usePathname();
	return (
		<div className=" w-full flex justify-center gap-5 font-extralight">
			{Pages.map((page) => {
				const Name = page.name?.toLowerCase() ?? page.title.toLowerCase();
				const isPath = Path.includes(Name);
				return (
					<StyledLink
						type="menu"
						key={page.name}
						href={page.href}
						active={isPath}
						size={size}
					>
						{page.title}
					</StyledLink>
				);
			})}
		</div>
	);
};

export default PageNavigation;
