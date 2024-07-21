import PageListSkeleton from "@/common/components/organism/PageList.skeleton";
import ContentFild from "@/common/components/wrapper/ContentWrapper";

export default function Loading() {
	return (
		<ContentFild>
			<PageListSkeleton />
		</ContentFild>
	);
}
