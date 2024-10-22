'use client';
import type { CategoryNavigationType } from '@/common/types/page/pages.type';
import Link from 'next/link';
import { useReducer } from 'react';

const CategoryNavigationLink = ({ Category }: { Category: CategoryNavigationType }) => {
	const [isOpen, dispatch] = useReducer((s) => !s, false);

	return (
		<button type='button' className='w-full flex flex-col gap-1 text-left'>
			<Link href={Category.slug}>{Category.title}</Link>
			<div className=' ml-1 flex flex-col gap-1 border-l-2 border-l-shadow-gray pl-1'>
				{Category.children.map((doc) => (
					<Link key={doc.slug} href={`${Category.slug}/${doc.slug}`}>
						{doc.title}
					</Link>
				))}
			</div>
		</button>
	);
};

export default CategoryNavigationLink;
