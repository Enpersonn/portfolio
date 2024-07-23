import { useState } from "react";
import SearchBar from "../atom/SearchBar";
import useSearch from "@/common/hooks/useSearch";
import PageListSkeleton from "../organism/PageList.skeleton";
import PageList from "../organism/PageList";
import ContentWrapper from "../wrapper/ContentWrapper";
import { SEARCH_LIMIT } from "@/common/queries/search.query";
import Pagination from "../atom/Pagination";
import { Frown } from "lucide-react";

export default function SearchView({ type = "article" }: { type: string }) {
	const [page, setPage] = useState(1);
	const [searchedQuery, setSearchedQuery] = useState("");
	const { isPending, data } = useSearch({
		page,
		search: searchedQuery,
		type: type,
	});
	const PAGES = Math.ceil(data?.count ?? 1 / 10);

	const [query, setQuery] = useState("");

	const handleSearch = () => {
		if (query === searchedQuery) return;
		const q = query.trim();
		if (q === "") {
			setQuery("");
			return;
		}
		setSearchedQuery(q);
	};

	const nextPage = () => {
		if (page >= PAGES) return;
		setPage((p) => p + 1);
	};

	const prevPage = () => {
		if (page <= 1) return;
		setPage((p) => p - 1);
	};

	return (
		<>
			<ContentWrapper>
				<div className=" flex items-center justify-center mt-10">
					<SearchBar
						type="text"
						placeholder="Search for projects..."
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						onKeyDown={(e) => {
							if (e.key === "Enter") handleSearch();
						}}
					/>
				</div>
			</ContentWrapper>
			{isPending ? (
				<ContentWrapper>
					<PageListSkeleton n={SEARCH_LIMIT} />
				</ContentWrapper>
			) : searchedQuery && !!data && data?.count !== 0 ? (
				<PageList pages={data?.items} />
			) : (
				searchedQuery && (
					<ContentWrapper>
						<div className=" mt-10 flex justify-center items-center gap-2">
							<Frown />
							<p>
								No results found for
								<strong>{searchedQuery}</strong>
							</p>
						</div>
					</ContentWrapper>
				)
			)}
			{(data?.count ?? 0) > SEARCH_LIMIT && (
				<Pagination
					page={page}
					total={PAGES}
					nextPage={nextPage}
					prevPage={prevPage}
				/>
			)}
		</>
	);
}
