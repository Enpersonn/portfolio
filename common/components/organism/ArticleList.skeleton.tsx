import Card from "../wrapper/Card";

export const ArticleListFildSkeleton = () => (
	<Card>
		<div className="animate-pulse rounded-[15px] aspect-[16/9] w-full bg-[#ffffff1c]" />
		<div className=" p-4">
			<div className="animate-pulse h-4 bg-[#ffffff1c] w-3/4 mb-2" />
			<div className="animate-pulse h-4 bg-[#ffffff1c] w-1/2" />
		</div>
	</Card>
);

const ArticleListSkeleton = () => (
	<div className=" grid gap-10 md:grid-cols-3">
		<ArticleListFildSkeleton />
		<ArticleListFildSkeleton />
		<ArticleListFildSkeleton />
		<ArticleListFildSkeleton />
		<ArticleListFildSkeleton />
		<ArticleListFildSkeleton />
	</div>
);

export default ArticleListSkeleton;
