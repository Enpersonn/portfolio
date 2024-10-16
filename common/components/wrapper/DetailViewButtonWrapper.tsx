import type { SanityRichtTextType } from '@/common/types/atom/richText.type';
import { useReducer } from 'react';
import PortableText from '../molecules/portableText/PortableText';
import CodeBlock from '../molecules/codeBlock';

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
				<div className='fixed z-10 flex items-center justify-center bg-black/50 top-0 right-0 w-[100vw] h-[100vh] overflow-hidden'>
					<button type='button' className='absolute top-0 right-0 w-full h-full' onClick={setIsOpen} />
					<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
						<div className='flex gap-24 bg-black border border-shadow-gray p-10 rounded-lg'>
							<div>
								<CodeBlock language='ts' code={[{ _type: 'code', content: preview }]} />
							</div>
							<div>
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
