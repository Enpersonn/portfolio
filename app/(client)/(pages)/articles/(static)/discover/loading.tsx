import ArticleListSkeleton from "@/common/components/organism/ArticleList.skeleton";
import ContentFild from "@/common/components/wrapper/ContentWrapper";

export default function Loading() {
	return (
		<ContentFild>
			<ArticleListSkeleton />
		</ContentFild>
	);
}
