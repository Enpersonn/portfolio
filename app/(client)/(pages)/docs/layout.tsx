'use client';
import Link from 'next/link';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className=' grid grid-cols-12 h-full m-10 gap-10'>
			<div className=' flex flex-col gap-5 h-fit min-h-[500px] p-5 border-[1px] border-shadow-gray rounded-lg'>
				<h2 className=' text-2xl font-bold'>Docs</h2>
				<Link href={'/docs/hooks'}>hooks</Link>
			</div>
			<div className=' col-span-8 col-start-3 '>{children}</div>
		</div>
	);
}
