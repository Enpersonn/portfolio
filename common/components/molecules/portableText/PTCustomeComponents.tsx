import { PortableText as NativePortableText } from '@portabletext/react';
import { Lightbulb } from 'lucide-react';
import type { PortableTextReactComponents } from 'next-sanity';
import Icon from '../../atom/Icon';
import SanityImage from '../../atom/SanityImage';
import Card from '../../wrapper/Card';
import DefaultComponents from './PTComponents';
import CodeTextBlock from '../CodeTextBlock';

const type: {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	[key: string]: (props: any) => React.ReactNode;
} = {
	image: (props) => (
		<div className=' w-full  rounded-[5px]  overflow-hidden mt-20 mb-10'>
			<SanityImage image={props.value} width={'full'} />
			<p className=' image-caption mt-1 '>{props.value.caption}</p>
		</div>
	),

	quote: (props) => (
		<div className='grid grid-cols-8 my-10'>
			<blockquote className=' col-start-2 col-span-6'>
				<div>
					<p className=' quote-text'>{props.value.quote}</p>
					<p className=' quote-author'>- {props.value.author}</p>
				</div>
			</blockquote>
		</div>
	),

	highlighted: (props) => (
		<div className=' my-5 items-center flex'>
			<Lightbulb size={32} className=' mr-3' />
			<div className=' w-full pl-3 border-l-[1px]'>
				<NativePortableText
					value={props.value.text}
					components={{
						...DefaultComponents,
					}}
				/>
			</div>
		</div>
	),

	//biome-ignore lint/suspicious/noExplicitAny: <explanation>
	cardList: (props: any) => (
		<div className='grid grid-cols-4 gap-4'>
			{/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
			{props.value.cards.map((card: any) => {
				switch (props.value.type) {
					case 'largeIcon':
						return (
							<div
								key={card._key}
								className=' flex flex-col items-center justify-center text-center aspect-square '
							>
								<Icon icon={card.icon} size={84} />
								{card.title}
							</div>
						);
					default:
						return (
							<Card
								key={card._key}
								className=' flex flex-col items-center justify-center text-center aspect-square '
							>
								<Icon icon={card.icon} size={84} />
								{card.title}
							</Card>
						);
				}
			})}
		</div>
	),

	code: (props) => (
		<div className=' my-5'>
			<CodeTextBlock language={props.value.language} code={props.value.code} />
		</div>
	),
};

const CustomComponents: Partial<PortableTextReactComponents> = {
	types: type,
};

export default CustomComponents;
