import { Suspense } from "react";
import { ContentFild, TextFild } from "../wrapper/ContentWrapper";
import ArticleList from "../organism/ArticleList";
import ArticleListSkeleton from "../organism/ArticleList.skeleton";

export default function ArtilcesView() {
	return (
		<>
			<TextFild>
				<h1>Discover</h1>
			</TextFild>
			<ContentFild>
				<Suspense fallback={<ArticleListSkeleton />}>
					<ArticleList />
				</Suspense>
			</ContentFild>
		</>
	);
}
