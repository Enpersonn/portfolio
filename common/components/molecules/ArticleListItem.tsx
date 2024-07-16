"use client";
import type { PreviewArticleType } from "@/common/types/article/article.type";
import Link from "next/link";
import SanityImage from "../atom/SanityImage";

const ArticleListItem = (article: PreviewArticleType) => {
	return (
		<Link
			className=" card-style"
			href={`/articles/article/${article.slug}`}
			key={article.slug}
		>
			<div className=" group ">
				<SanityImage image={article?.teaserImage} className=" rounded-[15px]" />
				<div className=" px-2 pt-5 pb-5 flex flex-col gap-3">
					<h2 className=" group-hover:underline teaser-title">
						{article.teaserTitle}
					</h2>
					<p className=" teaser-text line-clamp-3">{article.teaserText}</p>
				</div>
			</div>
		</Link>
	);
};

export default ArticleListItem;
