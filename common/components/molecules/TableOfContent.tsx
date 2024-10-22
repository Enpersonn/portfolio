import type { tableOfContentType } from '@/common/types/molecules/tableOfContent.type';
import Link from 'next/link';

const TableOfContent = ({ headlines }: tableOfContentType) => {
	return (
		<div className=' my-5'>
			<div className=' w-full border-b-[1px] border-white'>
				<p className=' text-xl font-bold'>Table of content</p>
			</div>
			<div className=' pl-5'>
				{headlines?.map((headline, index) => {
					switch (headline.style) {
						case 'h2':
							return (
								<Link
									key={headline._key}
									href={`#${headline.children[0].text}`}
									className=' hover:underline'
								>
									<p className=' text-lg font-bold'>{headline.children[0].text}</p>
								</Link>
							);
						case 'h3':
							return (
								<div className=' pl-5'>
									<Link
										key={headline._key}
										href={`#${headline.children[0].text}`}
										className=' pl-2  border-l block hover:underline'
									>
										<p className=' text-lg '>{headline.children[0].text}</p>
									</Link>
								</div>
							);
						case 'h4':
							return (
								<div className=' pl-5'>
									<Link
										key={headline._key}
										href={`#${headline.children[0].text}`}
										className=' pl-2  border-l block hover:underline'
									>
										<p className=' font-bold'>{headline.children[0].text}</p>
									</Link>
								</div>
							);
					}
				})}
			</div>
		</div>
	);
};

export default TableOfContent;
