'use client';
import type { PreviewPageType } from '@/common/types/page/pages.type';
import PageListItem from '../molecules/PageListItem';

type PagesViewProps = {
	pages: PreviewPageType[];
	type?: 'project' | 'article';
};

const PageList = ({ type, pages }: PagesViewProps) => {
	const slugList: [string, string][] = [];
	pages.map((page) => slugList.push([page.teaserTitle, page.slug]));
	return (
		<div className=' grid gap-5 md:grid-cols-3 mt-10 '>
			{pages?.map((page) => {
				return (
					<div key={page.slug}>
						<PageListItem page={page} type={type} />
					</div>
				);
			})}
		</div>
	);
};

export default PageList;
