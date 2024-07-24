import type { PreviewPageType } from "@/common/types/page/pages.type";
import PageList from "../organism/PageList";

type ArticlesViewProps = {
	articles: PreviewPageType[];
};

export default function ArtilcesView({ articles }: ArticlesViewProps) {
	return <PageList pages={articles} />;
}
