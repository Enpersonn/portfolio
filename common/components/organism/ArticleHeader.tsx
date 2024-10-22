import type { ArticleHeaderType } from '@/common/types/page/article/articleHeader.type';
import PublishedDate from '../atom/PublishedDate';
import SanityImage from '../atom/SanityImage';
import TableOfContent from '../molecules/TableOfContent';

// <AuthorDate />

const ArticleHeader = (props: ArticleHeaderType) => {
	return (
		<div>
			<h3>{props.title}</h3>
			{props.mainImage && (
				<div className=' my-5'>
					<SanityImage image={props.mainImage} width={'full'} aspect='1/1' className=' rounded-[15px]' />
				</div>
			)}
			<div className=' my-5'>
				<PublishedDate date={props.publishedAt} />
			</div>
			{props.headlines && <TableOfContent headlines={props.headlines} />}
		</div>
	);
};

export default ArticleHeader;
