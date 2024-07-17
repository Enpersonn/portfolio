"use client";
import type { ArticleType } from "@/common/types/article/article.type";
import ArticleFooter from "../organism/ArticleFooter";
import ArticleHeader from "../organism/ArticleHeader";
import ArticleBody from "../organism/ArticleBody";

export default function ArticleView(article: ArticleType) {
	return (
		<article className=" flex flex-col">
			<ArticleHeader {...article.header} />
			<ArticleBody {...article.body} />
			<ArticleFooter {...article.footer} />
		</article>
	);
}
