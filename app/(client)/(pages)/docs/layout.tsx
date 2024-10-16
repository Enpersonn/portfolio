'use client';
import DocsNav from '@/common/components/molecules/DocsNav';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className=' grid grid-cols-12 h-full m-10 gap-10 '>
			<DocsNav />
			<div className=' col-span-8 col-start-3 '>{children}</div>
		</div>
	);
}
