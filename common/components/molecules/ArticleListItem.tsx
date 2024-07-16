"use client";
import type { PreviewArticleType } from "@/common/types/article/article.type";
import SanityImage from "../atom/SanityImage";
import Card from "../wrapper/Card";

const ArticleListItem = (article: PreviewArticleType) => {
	return (
		<Card key={article.slug}>
			<div className=" group">
				<SanityImage image={article?.teaserImage} className=" rounded-[15px]" />
				<div>
					<h2 className=" group-hover:underline">{article.teaserTitle}</h2>
					<p className=" line-clamp-3">{article.teaserText}</p>
				</div>
			</div>
		</Card>
	);
};

export default ArticleListItem;
