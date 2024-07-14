import { ARTICLE_QUERY } from "@/common/queries/article.query";
import type { articleType } from "@/common/types/article/article.type";
import { client, sanityFetch } from "@/sanity/lib/client";
import type { QueryParams, SanityDocument } from "next-sanity";

const getHook = async ({ params }: { params: QueryParams }) => {
	return await sanityFetch<articleType>({ query: ARTICLE_QUERY, params });
};

export default async function ArticlePage({ params }: { params: QueryParams }) {
	const initialData = await getHook({ params });

	return (
		<>
			<p>Article page</p>
			<pre>{JSON.stringify(initialData, null, 2)}</pre>
		</>
	);
}
