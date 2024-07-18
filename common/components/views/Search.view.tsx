import SearchBar from "../atom/SearchBar";

export default function SearchView() {
	return (
		<div className=" flex flex-col items-center justify-center gap-1">
			<SearchBar type="text" placeholder="Search for projects..." />
		</div>
	);
}
