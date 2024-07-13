import { ARTICLE_QUERY } from "@/common/queries/article.query";
import { client, sanityFetch } from "@/sanity/lib/client";
import type { QueryParams, SanityDocument } from "next-sanity";

type Article = {
	title: string;
	slug: string;
	publishedAt: string;
};

const getHook = async ({ params }: { params: QueryParams }) => {
	return await sanityFetch<Article>({ query: ARTICLE_QUERY, params });
};

export default async function ArticlePage({ params }: { params: QueryParams }) {
	const initialData = client.fetch<Article>;

	return (
		<>
			<p>Article page</p>
			<pre>{JSON.stringify(initialData, null, 2)}</pre>
		</>
	);
}
