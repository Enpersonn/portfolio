'use client';
import PageHeader from '@/common/components/organism/PageHeader';

export default function StaticLayout({ children }: { children: React.ReactNode }) {
	return (
		<main className=' overflow-x-hidden overflow-y-auto'>
			<PageHeader />
			{children}
		</main>
	);
}
