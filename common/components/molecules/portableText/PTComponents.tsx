import type { PortableTextReactComponents } from "@portabletext/react";

const block: {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	[key: string]: (props: any) => React.ReactNode;
} = {
	normal: ({ children }) => (
		<div className=" my-5">
			<p>{children}</p>
		</div>
	),
	h2: ({ children }) => (
		<div className=" my-5 mt-10">
			<h2>{children}</h2>
		</div>
	),

	h3: ({ children }) => (
		<div className=" my-5 mt-10">
			<h3>{children}</h3>
		</div>
	),

	h4: ({ children }) => (
		<div className=" my-5">
			<h4>{children}</h4>
		</div>
	),

	h5: ({ children }) => (
		<div className=" my-5">
			<h5>{children}</h5>
		</div>
	),

	h6: ({ children }) => (
		<div className=" my-5">
			<h6>{children}</h6>
		</div>
	),
};

const DefaultComponents: Partial<PortableTextReactComponents> = {
	block: block,
};

export default DefaultComponents;
