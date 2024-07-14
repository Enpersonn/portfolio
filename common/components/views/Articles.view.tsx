import { Suspense } from "react";
import { ContentFild, TextFild } from "../wrapper/ContentWrapper";
import ArticleList from "../organism/ArticleList";

export default function ArtilcesView() {
	return (
		<>
			<TextFild>
				<h1>Discover Page</h1>
			</TextFild>
			<ContentFild>
				<Suspense fallback={<div>Loading...</div>}>
					<ArticleList />
				</Suspense>
			</ContentFild>
		</>
	);
}
