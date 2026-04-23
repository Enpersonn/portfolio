import { basicPageData } from '@/sanity/lib/basic-page-data';
import { basicPageGroup } from '@/sanity/lib/group';
import { teaserData } from '@/sanity/lib/teaser-data';
import { defineType } from 'sanity';

export const article = defineType({
	name: 'article',
	title: 'Article',
	type: 'document',
	groups: basicPageGroup,
	fields: [
		...basicPageData,
		{
			name: 'projectLink',
			title: 'Project Link',
			type: 'url',
			group: 'header',
		},
		{
			name: 'mainImage',
			title: 'Main Image',
			type: 'image',
			group: 'header',
		},

		{
			name: 'content',
			title: 'Content',
			type: 'richText',
			group: 'body',
		},

		{
			name: 'learnMore',
			title: 'Learn More',
			type: 'array',
			of: [{ type: 'link' }],
			group: 'footer',
		},
		{
			name: 'references',
			title: 'References',
			type: 'array',
			of: [{ type: 'link' }],
			group: 'footer',
		},
		...teaserData,
	],
});
