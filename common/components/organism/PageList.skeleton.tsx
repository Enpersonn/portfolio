import Card from '../wrapper/Card';

const PageListFildSkeleton = () => (
	<Card>
		<div className='animate-pulse rounded-[5px] aspect-[16/9] w-full bg-[#ffffff1c]' />
		<div className=' p-4'>
			<div className='animate-pulse h-4 bg-[#ffffff1c] w-3/4 mb-2' />
			<div className='animate-pulse h-4 bg-[#ffffff1c] w-1/2' />
		</div>
	</Card>
);

const PageListSkeleton = ({ n = 6 }: { n?: number }) => (
	<div className=' grid gap-5 md:grid-cols-3 mt-10 '>
		{[...Array(n)].map((_, i) => (
			// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
			<PageListFildSkeleton key={i} />
		))}
	</div>
);

export default PageListSkeleton;
