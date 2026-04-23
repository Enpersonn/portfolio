import useNavigation from '@/common/hooks/useNavigation';
import { useEffect } from 'react';
import CategoryNavItem, { type Page } from '../atom/CategortyNavItem';

const CategoryNavigation = ({ pagesTable, root }: { root: string; pagesTable?: Page[] }) => {
	const { state } = useNavigation();

	useEffect(() => {
		console.log('the state has been updated', state);
	}, [state]);

	return (
		<div className=' col-start-3 col-span-2'>
			<h3>{state.page}</h3>
			{pagesTable && (
				<div>
					{pagesTable.map((page) => (
						<CategoryNavItem key={page.id} page={page} parentPath={root} />
					))}
				</div>
			)}
		</div>
	);
};

export default CategoryNavigation;
