import ArticlesView from "@/common/components/views/Articles.view";
import useLoader from "@/common/hooks/useLoader";
import { ARTICLES_QUERY } from "@/common/queries/articles.query";
import type { PreviewArticleType } from "@/common/types/article/article.type";

export default async function ArticlesPage() {
	const articles = await useLoader<PreviewArticleType[]>(ARTICLES_QUERY);

	return <ArticlesView articles={articles.data} />;
}
