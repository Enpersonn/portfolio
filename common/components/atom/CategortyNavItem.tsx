import { generatePath } from '@/common/utils/genereateURLPath';
import Link from 'next/link';

export type Page = {
	id: string;
	title: string;
	href: string;
	children: Page[];
	disabled?: boolean;
};

type CategoryNavItemProps = {
	page: Page;
	parentPath: string;
};

const CategoryNavItem = ({ page, parentPath }: CategoryNavItemProps) => {
	const path = generatePath({ page, parentPath });
	return (
		<>
			<Link key={page.id} href={!page.disabled ? (path ?? page.href) : '#'}>
				{page.title}
			</Link>
			{page.children?.map((child: Page) => (
				<div key={child.id} className='ml-4'>
					{CategoryNavItem({ page: child, parentPath: path })}
				</div>
			))}
		</>
	);
};

export default CategoryNavItem;
