import { defineField } from "sanity";

export const image = defineField({
	name: "image",
	title: "Bilde",
	type: "image",
	options: {
		hotspot: true,
	},
	fields: [
		{
			name: "alt",
			title: "Alternativ text",
			type: "string",
			options: {
				isHighlighted: true,
			},
		},
		{
			name: "caption",
			title: "Image caption",
			type: "string",
			options: {
				isHighlighted: true,
			},
		},
	],
});
