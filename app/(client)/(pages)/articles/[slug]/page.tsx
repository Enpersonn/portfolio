"use client";

import ArticleView from "@/common/components/views/Article.view";
import { ARTICLE_QUERY } from "@/common/queries/article.query";
import type { ArticleType } from "@/common/types/article/article.type";
import { sanityFetch } from "@/sanity/lib/client";
import type { QueryParams } from "next-sanity";

const getHook = async ({ params }: { params: QueryParams }) => {
	return await sanityFetch<ArticleType>({ query: ARTICLE_QUERY, params });
};

export default async function ArticlePage({ params }: { params: QueryParams }) {
	const initialData = await getHook({ params });

	return <ArticleView {...initialData} />;
}
