import SanityImage from '../../atom/SanityImage';

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const ImageBlock = (props: any) => {
	return (
		<div className=' w-full  rounded-[5px]  overflow-hidden mt-20 mb-10'>
			<SanityImage image={props.value} width={'full'} />
			<p className=' image-caption mt-1 '>{props.value.caption}</p>
		</div>
	);
};

export default ImageBlock;
