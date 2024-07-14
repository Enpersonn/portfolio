"use client";
import StyledLink from "@/common/components/atom/Button/Link";
import SearchView from "@/common/components/views/Search.view";
import { usePathname } from "next/navigation";

export default function SearchPage() {
	const route = usePathname();

	return (
		<>
			<div className=" w-full flex justify-center gap-5 font-extralight pt-5">
				<StyledLink
					href={"../articles"}
					type="menu"
					active={route === "/articles"}
				>
					Discover
				</StyledLink>
				<StyledLink type="menu" href="../search" active={route === "/search"}>
					Search
				</StyledLink>
			</div>
			<SearchView />
		</>
	);
}
