import ArticlesView from "@/common/components/views/Articles.view";
import useLoader from "@/common/hooks/useLoader";
import { PAGES_QUERY } from "@/common/queries/pages.query";
import type { PreviewPageType } from "@/common/types/page/pages.type";

export default async function ArticlesPage() {
	const articles = await useLoader<PreviewPageType[]>(PAGES_QUERY);

	return <ArticlesView articles={articles.data} />;
}
