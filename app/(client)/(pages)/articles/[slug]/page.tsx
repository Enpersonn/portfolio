import ArticleContent from "@/common/components/organism/ArticleContent";
import ArticleHeader from "@/common/components/organism/ArticleHeader";
import ContentWrapper from "@/common/components/wrapper/ContentWrapper";
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
		<article>
			<ContentWrapper>
				<ArticleHeader {...initialData.header} />
				<ArticleContent {...initialData.content} />
			</ContentWrapper>
		</article>
	);
}
