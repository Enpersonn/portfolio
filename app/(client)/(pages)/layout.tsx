'use client';
import PageHeader from '@/common/components/organism/PageHeader';

export default function PagesLayout({ children }: { children: React.ReactNode }) {
	return (
		<main className=' overflow-x-hidden overflow-y-auto'>
			<PageHeader />
			<div className=' grid grid-cols-12 h-full m-10 gap-10 '>
				<div className=' col-start-3 col-span-2'>Category Navigation</div>
				{children}
			</div>
		</main>
	);
}
