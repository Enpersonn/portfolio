"use client";
import ArticleFooter from "../../organism/ArticleFooter";
import ArticleHeader from "../../organism/ArticleHeader";
import ArticleBody from "../../organism/ArticleBody";
import type { ArticleType } from "@/common/types/page/article/article.type";

export default function ArticleView(article: ArticleType) {
	return (
		<article className=" flex flex-col">
			<pre>{JSON.stringify(article.header.mainImage, null, 2)}</pre>
			<ArticleHeader {...article.header} />
			<ArticleBody {...article.body} />
			<ArticleFooter {...article.footer} />
		</article>
	);
}
