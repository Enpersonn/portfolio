// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const QuoteBlock = (props: any) => {
	return (
		<div className='grid grid-cols-8 my-10'>
			<blockquote className=' col-start-2 col-span-6'>
				<div>
					<p className=' quote-text'>{props.value.quote}</p>
					<p className=' quote-author'>- {props.value.author}</p>
				</div>
			</blockquote>
		</div>
	);
};

export default QuoteBlock;
