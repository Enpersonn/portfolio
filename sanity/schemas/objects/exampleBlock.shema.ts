import { defineType } from 'sanity';

export const exampleBlock = defineType({
	name: 'exampleBlock',
	title: 'Example Block',
	type: 'object',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			name: 'description',
			title: 'Description',
			type: 'simpleRichText',
		},
		{
			name: 'preview',
			title: 'Preview',
			type: 'text',
		},
	],
});
