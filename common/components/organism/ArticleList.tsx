import { ARTICLES_QUERY } from "@/common/queries/articles.query";
import type { PreviewArticleType } from "@/common/types/article/article.type";
import { sanityFetch } from "@/sanity/lib/client";
import Link from "next/link";
import SanityImage from "../atom/SanityImage";
import Card from "../wrapper/Card";

const ArticleList = async () => {
	const Articles = await sanityFetch<PreviewArticleType[]>({
		query: ARTICLES_QUERY,
	});

	return (
		<div className=" grid gap-10 md:grid-cols-3">
			{Articles.map((article) => {
				return (
					<Link href={`/articles/${article.slug}`} key={article.slug}>
						<Card className=" group" key={article.slug}>
							<SanityImage
								image={article?.teaserImage}
								className=" rounded-[15px]"
							/>
							<div>
								<h2 className=" group-hover:underline">
									{article.teaserTitle}
								</h2>
								<p className=" line-clamp-3">{article.teaserText}</p>
							</div>
						</Card>
					</Link>
				);
			})}
		</div>
	);
};

export default ArticleList;
