'use client';
import CategoryNavigation from '@/common/components/molecules/CategoryNavigation';
import PageHeader from '@/common/components/organism/PageHeader';
import NavigationProvider from '@/common/providers/Navigation/Navigation.provider';

export default function PagesLayout({ children }: { children: React.ReactNode }) {
	return (
		<main className=' overflow-x-hidden overflow-y-auto'>
			<PageHeader />
			<NavigationProvider>
				<div className=' grid grid-cols-12 h-full m-10 gap-10 '>
					<CategoryNavigation />
					{children}
				</div>
			</NavigationProvider>
		</main>
	);
}
