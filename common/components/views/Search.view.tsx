import SearchBar from "../atom/SearchBar";
import { TextFild } from "../wrapper/ContentWrapper";

export default function SearchView() {
	return (
		<div className=" flex flex-col items-center justify-center gap-1">
			<TextFild>
				<SearchBar type="text" placeholder="Search for projects..." />
			</TextFild>
		</div>
	);
}
