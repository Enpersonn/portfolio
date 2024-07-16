import { Suspense } from "react";
import NavBar from "../molecules/NavBar";
import ArticleList from "../organism/ArticleList";
import ArticleListSkeleton from "../organism/ArticleList.skeleton";
import type { PreviewArticleType } from "@/common/types/article/article.type";

type ArticlesViewProps = {
	articles: PreviewArticleType[];
};

export default function ArtilcesView({ articles }: ArticlesViewProps) {
	return (
		<>
			<NavBar />
			<Suspense fallback={<ArticleListSkeleton />}>
				<ArticleList articles={articles} />
			</Suspense>
		</>
	);
}
