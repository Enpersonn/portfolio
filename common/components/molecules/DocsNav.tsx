'use client';

import type { NavPageType } from '@/common/types/page/pages.type';
import Link from 'next/link';

const DocsNav = ({ docs }: { docs: NavPageType[] }) => {
	return (
		<div className=' flex flex-col gap-5 h-fit min-h-[500px] col-span-2 p-5 border-[1px] border-shadow-gray rounded-lg'>
			<h2 className=' text-2xl font-bold'>Docs</h2>
			<div className='w-full'>
				<Link href={'/docs/hooks'}>hooks</Link>
				<div className=' ml-1 flex flex-col gap-1 border-l-2 border-l-shadow-gray pl-1'>
					{docs
						.filter((doc) => doc.type === 'hookDocs')
						.map((doc) => (
							<Link key={doc.slug} href={`/docs/hooks/${doc.slug}`}>
								{doc.title}
							</Link>
						))}
				</div>
			</div>
		</div>
	);
};

export default DocsNav;
