import { ARTICLES_QUERY } from "@/common/queries/articles.query";
import type { ArticleType } from "@/common/types/article/article.type";
import { sanityFetch } from "@/sanity/lib/client";
import SanityImage from "../atom/SanityImage";
import Card, { CardSkeleton } from "../wrapper/Card";
import { Suspense } from "react";

const ArticleList = async () => {
	const Articles = await sanityFetch<ArticleType[]>({
		query: ARTICLES_QUERY,
	});

	return (
		<div className=" grid gap-10 grid-cols-3">
			{Articles.map((article) => {
				return (
					<Suspense key={article.slug} fallback={<CardSkeleton />}>
						<Card>
							<SanityImage
								image={article.header.mainImage}
								className=" rounded-[15px]"
							/>
							<div>
								<h2>{article.header.title}</h2>
							</div>
						</Card>
					</Suspense>
				);
			})}
		</div>
	);
};

export default ArticleList;
