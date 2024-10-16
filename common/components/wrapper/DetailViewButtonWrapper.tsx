import type { SanityRichtTextType } from '@/common/types/atom/richText.type';
import { useReducer } from 'react';
import PortableText from '../molecules/portableText/PortableText';
import CodeBlock from '../molecules/CodeBlock';

const DetailViewButtonWrapper = ({
	children,
	isDetailView,
	title,
	description,
	preview,
}: {
	children: React.ReactNode;
	isDetailView: boolean;
	title: string;
	description: SanityRichtTextType;
	preview: string;
}) => {
	const [isOpen, setIsOpen] = useReducer((p) => !p, false);

	return (
		<>
			{isOpen && (
				<div className='fixed z-10 flex flex-col md:flex-row bg-black/50 top-0 right-0 w-[100vw] h-[100vh] overflow-hidden'>
					<button type='button' className='absolute top-0 right-0 w-full h-full' onClick={setIsOpen} />
					<div className='absolute top-1/2 left-1/3 -translate-x-1/3 -translate-y-1/2'>
						<div className='max-w-[90vw] max-h-[70vh] overflow-auto  grid md:grid-cols-5 gap-10 bg-black border border-shadow-gray p-3 md:p-10 rounded-lg'>
							<div className='w-full md:col-span-2'>
								<CodeBlock language='ts' code={[{ _type: 'code', content: preview }]} />
							</div>
							<div className=' w-full md:col-span-3'>
								<h2 className='text-2xl font-bold'>{title}</h2>
								<PortableText blocks={description} />
							</div>
						</div>
					</div>
				</div>
			)}
			<div className='relative'>
				{isDetailView && (
					<button
						onClick={setIsOpen}
						type='button'
						className='absolute top-0 right-0 w-full h-full hover:bg-white/5 transition-all border border-shadow-gray rounded-lg'
					/>
				)}
				{children}
			</div>
		</>
	);
};

export default DetailViewButtonWrapper;
