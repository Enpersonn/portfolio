import { CardSkeleton } from "../wrapper/Card";

const ArticleListSkeleton = () => (
	<div className=" grid gap-10 grid-cols-3">
		<CardSkeleton />
		<CardSkeleton />
		<CardSkeleton />
	</div>
);

export default ArticleListSkeleton;
