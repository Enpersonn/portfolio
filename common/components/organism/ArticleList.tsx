import { ARTICLES_QUERY } from "@/common/queries/articles.query";
import type { ArticleType } from "@/common/types/article/article.type";
import { sanityFetch } from "@/sanity/lib/client";
import Link from "next/link";
import SanityImage from "../atom/SanityImage";
import Card from "../wrapper/Card";

const ArticleList = async () => {
	const Articles = await sanityFetch<ArticleType[]>({
		query: ARTICLES_QUERY,
	});

	return (
		<div className=" grid gap-10 md:grid-cols-3">
			{Articles.map((article) => {
				return (
					<Link href={`/articles/${article.slug}`} key={article.slug}>
						<Card className=" group" key={article.slug}>
							<SanityImage
								image={article.header.mainImage}
								className=" rounded-[15px]"
							/>
							<div>
								<h2 className=" group-hover:underline">
									{article.header.title}
								</h2>
							</div>
						</Card>
					</Link>
				);
			})}
		</div>
	);
};

export default ArticleList;
