import CodeTextBlock from '../CodeTextBlock';

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const CodeBlock = (props: any) => {
	return (
		<div className=' my-5'>
			<CodeTextBlock language={props.value.language} code={props.value.code} />
		</div>
	);
};

export default CodeBlock;
