import useNavigation from '@/common/hooks/useNavigation';

const CategoryNavigation = () => {
	const { state } = useNavigation();

	return (
		<div className=' col-start-3 col-span-2'>
			<h3>{state.page}</h3>
		</div>
	);
};

export default CategoryNavigation;
