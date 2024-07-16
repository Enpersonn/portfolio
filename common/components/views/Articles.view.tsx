import type { PreviewArticleType } from "@/common/types/article/article.type";
import ArticleList from "../organism/ArticleList";

type ArticlesViewProps = {
	articles: PreviewArticleType[];
};

export default function ArtilcesView({ articles }: ArticlesViewProps) {
	return <ArticleList articles={articles} />;
}
