const Components: {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	[key: string]: (props: any) => React.ReactNode;
} = {
	normal: (props) => <p>{props.children}</p>,
	h1: (props) => <h1>{props.children}</h1>,
	h2: (props) => <h2>{props.children}</h2>,
	h3: (props) => <h3>{props.children}</h3>,
	h4: (props) => <h4>{props.children}</h4>,
	h5: (props) => <h5>{props.children}</h5>,
	h6: (props) => <h6>{props.children}</h6>,
};

export default Components;
