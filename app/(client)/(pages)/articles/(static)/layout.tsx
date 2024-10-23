'use client';
import PageNavigation from '@/common/components/molecules/PageNavigation';

export default function StaticLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className=' col-span-4'>
			<div>
				<PageNavigation
					Pages={[
						{ title: 'Discover', href: '/articles/discover' },
						{ title: 'Search', href: '/articles/search' },
					]}
				/>
			</div>
			{children}
		</div>
	);
}
