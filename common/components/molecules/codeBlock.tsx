'use client';
import type { SanityRichtTextType } from '@/common/types/atom/richText.type';
import { clsx } from '@/common/utils/classes';
import { Clipboard } from 'lucide-react';
import { useReducer } from 'react';
import DetailViewButtonWrapper from '../wrapper/DetailViewButtonWrapper';

type CodeBlockItem = {
	_type: 'code';
	content: string;
};

type ExampleBlockItem = {
	_type: 'exampleBlock';
	title: string;
	description: SanityRichtTextType;
	preview: string;
};

type CodeProp = (CodeBlockItem | ExampleBlockItem)[];

const CodeBlock = ({
	hasExamples = true,
	language,
	code,
}: {
	hasExamples?: boolean;
	language: string;
	code: CodeProp;
}) => {
	const [isDetailView, setIsDetailView] = useReducer((p) => !p, false);

	const handleCopy = () => {
		navigator.clipboard.writeText(
			code.map((item) => (item._type === 'code' ? item.content : item.preview)).join('\n'),
		);
	};

	return (
		<div className={clsx(hasExamples && 'border border-shadow-gray rounded-lg overflow-hidden w-full')}>
			{hasExamples && (
				<div className='px-10 flex justify-between items-center border-b border-shadow-gray mb-10 py-3 '>
					<p>{language}</p>
					<div className=' flex gap-10'>
						{code.filter((item) => item._type === 'exampleBlock').length > 0 && (
							<button type='button' onClick={setIsDetailView} className=' '>
								{isDetailView ? 'Hide' : 'Show'} Examples
							</button>
						)}
						<button
							type='button'
							onClick={handleCopy}
							className=' flex items-center gap-2 transition-all active:translate-y-1'
						>
							Copy
							<Clipboard size={14} />
						</button>
					</div>
				</div>
			)}
			<div className={clsx(hasExamples && 'px-5 pb-5 overflow-auto')}>
				{code.map((item) => {
					if (item._type === 'code') {
						return <pre>{item.content}</pre>;
					}
					return (
						<Example
							key={item.title}
							isDetailView={isDetailView}
							preview={item.preview}
							title={item.title}
							description={item.description}
						/>
					);
				})}
			</div>
		</div>
	);
};

const Example = ({
	isDetailView,
	preview,
	title,
	description,
}: { isDetailView: boolean; preview: string; title: string; description: SanityRichtTextType }) => {
	return (
		<DetailViewButtonWrapper isDetailView={isDetailView} title={title} description={description} preview={preview}>
			<CodeBlock hasExamples={false} language='ts' code={[{ _type: 'code', content: preview }]} />
		</DetailViewButtonWrapper>
	);
};

export default CodeBlock;
