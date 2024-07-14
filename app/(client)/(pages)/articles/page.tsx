"use client";
import StyledLink from "@/common/components/atom/Button/Link";
import ArticlesView from "@/common/components/views/Articles.view";
import { usePathname } from "next/navigation";
import { Suspense } from "react";

export default function ArticlesPage() {
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
			<Suspense fallback={<div>Loading...</div>}>
				<ArticlesView />
			</Suspense>
		</>
	);
}
