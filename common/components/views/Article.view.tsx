"use client";
import type { articleType } from "@/common/types/article/article.type";
import ArticleFooter from "../organism/ArticleFooter";
import ArticleHeader from "../organism/ArticleHeader";
import ArticleContent from "../organism/ArticleContent";



export default function ArticleView(article: articleType) {
    return (
        <article>
            <ArticleHeader {...article.header} />
            <ArticleContent {...article.content} />
            <ArticleFooter {...article.footer} /> 
        </article>
    )
}