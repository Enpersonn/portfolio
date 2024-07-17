import type { PropsWithChildren } from "react";
import { type ArrayOfType, defineType } from "sanity";

type TextSizeValues = "normal" | "h2" | "h3" | "h4" | "h5" | "h6";

type TextSizeTypes = {
	title: string;
	value: TextSizeValues;
	fontSize?: string;
};

const textSizesValues: TextSizeTypes[] = [
	{ title: "Normal", value: "normal" },
	{ title: "Overskrift h2", value: "h2", fontSize: "1.5rem" },
	{ title: "Overskrift h3", value: "h3", fontSize: "1.25rem" },
	{ title: "Overskrift h4", value: "h4", fontSize: "1.125rem" },
	{ title: "Overskrift h5", value: "h5", fontSize: "1.1rem" },
	{ title: "Overskrift h6", value: "h6", fontSize: "1rem" },
];

export const getDefaultBlockSetup = ({
	headingLevels = [],
	lists = false,
	annotations,
}: {
	headingLevels?: Array<TextSizeValues>;
	lists?: boolean;
	annotations?: ArrayOfType<"object" | "reference", undefined>[];
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
}): Array<any> => {
	const textSizes = textSizesValues.map((size) => {
		if (!headingLevels.includes(size.value)) {
			return;
		}
		return {
			title: size.title,
			value: size.value,
			component: ({ children }: PropsWithChildren) => (
				<span style={{ fontSize: size.fontSize }}> {children} </span>
			),
		};
	});
	return [
		{
			type: "block",
			styles: [...textSizes].filter(Boolean),
			marks: {
				decorators: [
					{ title: "Fet", value: "strong" },
					{ title: "Kursiv", value: "em" },
				],
				annotations: annotations ?? [],
			},
			lists: lists
				? [
						{ title: "Nummerert liste", value: "number" },
						{ title: "Punktliste", value: "bullet" },
					]
				: [],
		},
	];
};

export const richText = defineType({
	name: "richText",
	type: "array",
	of: [
		...getDefaultBlockSetup({
			headingLevels: ["normal", "h2", "h3", "h4"],
		}),
	],
});
