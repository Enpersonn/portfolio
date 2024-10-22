import { PortableText as NativePortableText } from '@portabletext/react';
import { Lightbulb } from 'lucide-react';
import DefaultComponents from '../portableText/PTComponents';

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const HighlightBlock = (props: any) => {
	return (
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
	);
};

export default HighlightBlock;
