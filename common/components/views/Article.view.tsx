"use client";
import type { ArticleType } from "@/common/types/article/article.type";
import ArticleFooter from "../organism/ArticleFooter";
import ArticleHeader from "../organism/ArticleHeader";
import ArticleContent from "../organism/ArticleContent";

export default function ArticleView(article: ArticleType) {
	return (
		<article className=" flex flex-col">
			<ArticleHeader {...article.header} />
			<ArticleContent {...article.content} />
			<ArticleFooter {...article.footer} />
		</article>
	);
}
