import { usePathname } from "next/navigation";
import RadioForm from "../atom/RadioButton";
import SearchBar from "../atom/SearchBar";
import Button from "../atom/Button/Button";
import { useState } from "react";
import { clsx } from "@/common/utils/classes";
import SearchView from "./Search.view";
import DiscoverView from "./Discover.view";

export default function FindView() {
	const [page, setPage] = useState<"discover" | "search">("search");

	const path = usePathname();
	const isArticle = path.includes("articles");

	return (
		<>
			<div className=" w-full flex justify-center gap-5 font-extralight pt-5">
				<Button
					type="menu"
					onClick={() => setPage("search")}
					active={page === "search"}
				>
					Search
				</Button>
				<Button
					type="menu"
					onClick={() => setPage("discover")}
					active={page === "discover"}
				>
					Discover
				</Button>
			</div>
			<section className=" w-full mt-10">
			{
				page === "search" ? <SearchView /> : <DiscoverView />
			}
			</section>

		</>
	);
}
