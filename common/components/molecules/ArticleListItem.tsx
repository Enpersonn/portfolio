"use client";
import type { PreviewArticleType } from "@/common/types/article/article.type";
import SanityImage from "../atom/SanityImage";
import Card from "../wrapper/Card";
import Link from "next/link";

const ArticleListItem = (article: PreviewArticleType) => {
	return (
		<Card key={article.slug}>
			<Link href={`/articles/article/${article.slug}`}>
				<div className=" group">
					<SanityImage
						image={article?.teaserImage}
						className=" rounded-[15px]"
					/>
					<div className=" px-2 pt-5 pb-5 flex flex-col gap-3">
						<h2 className=" group-hover:underline teaser-title">
							{article.teaserTitle}
						</h2>
						<p className=" teaser-text line-clamp-3">{article.teaserText}</p>
					</div>
				</div>
			</Link>
		</Card>
	);
};

export default ArticleListItem;
