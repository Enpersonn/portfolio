"use client";
import NavBar from "@/common/components/molecules/NavBar";
import SearchView from "@/common/components/views/Search.view";

export default function SearchPage() {
	return (
		<>
			<NavBar isSearchPage />
			<SearchView />
		</>
	);
}
