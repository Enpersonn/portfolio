'use client';
import type { ArticleType } from '@/common/types/page/article/article.type';
import Header from '../../molecules/Header';
import ArticleBody from '../../organism/ArticleBody';
import ArticleFooter from '../../organism/ArticleFooter';
import ArticleHeader from '../../organism/ArticleHeader';

export default function ArticleView(article: ArticleType) {
	return (
		<>
			<article className=' col-span-4 flex flex-col'>
				<Header
					title={article.header.title}
					entry={article.header.entry}
					publishedAt={article.header.publishedAt}
				/>
				<ArticleBody {...article.body} />
				<ArticleFooter {...article.footer} />
			</article>
			<section className=' col-span-2 '>
				<ArticleHeader {...article.header} />
			</section>
		</>
	);
}
