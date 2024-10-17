import { defineType } from 'sanity';

export const codeFild = defineType({
	name: 'code',
	title: 'Code',
	type: 'object',
	fields: [
		{
			name: 'language',
			title: 'Language',
			type: 'string',
			options: {
				list: [
					{ title: 'JavaScript', value: 'js' },
					{ title: 'TypeScript', value: 'ts' },
					{ title: 'React (TypeScript)', value: 'tsx' },
					{ title: 'CSS', value: 'css' },
				],
				layout: 'radio',
			},
		},
		{
			name: 'code',
			title: 'Code',
			type: 'array',
			of: [
				{
					name: 'code',
					type: 'object',
					fields: [
						{
							name: 'content',
							type: 'text',
							title: 'Content',
						},
					],
				},
				{ type: 'exampleBlock' },
			],
		},
	],
});
