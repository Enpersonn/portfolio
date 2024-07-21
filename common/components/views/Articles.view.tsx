import type { PreviewPageType } from "@/common/types/article/article.type";
import PageList from "../organism/PageList";

type ArticlesViewProps = {
	articles: PreviewPageType[];
};

export default function ArtilcesView({ articles }: ArticlesViewProps) {
	return <PageList pages={articles} />;
}
