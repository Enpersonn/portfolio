"use client";
import type { PreviewArticleType } from "@/common/types/article/article.type";
import ArticleListItem from "../molecules/ArticleListItem";
import ContentFild from "../wrapper/ContentWrapper";

type ArticlesViewProps = {
	articles: PreviewArticleType[];
};

const ArticleList = ({ articles }: ArticlesViewProps) => {
	return (
		<ContentFild>
			<div className=" grid gap-5 md:grid-cols-3 mt-10 ">
				{articles?.map((article) => {
					return (
						<div key={article.slug}>
							<ArticleListItem {...article} />
						</div>
					);
				})}
			</div>
		</ContentFild>
	);
};

export default ArticleList;
