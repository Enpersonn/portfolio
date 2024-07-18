import { defineType } from "sanity";


export const article = defineType({
    name: 'article',
    title: 'Article',
    type: 'document',
    groups: [
        {
        title: 'Article Header',
        name: 'articleHeader',
        },
        {
        title: 'Article Body',
        name: 'articleBody',
        },
        {
        title: 'Article Footer',
        name: 'articleFooter',
        },
        {
            title : 'Settings',
            name: 'settings',
        }

    ],
    fields: [
        {
        name: 'title',
        title: 'Title',
        type: 'string',
        group: 'articleHeader',
        validation: (Rule) => Rule.required(),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
            },
            validation: (Rule) => Rule.required(),
            group: 'settings',
            },
        {
            name: 'entry',
            title: 'Entry',
            type: 'richText',
            group: 'articleHeader',
        },
        {
        name: 'publishedAt',
        title: 'Published At',
        type: 'date',
        group: 'articleHeader',
        validation: (Rule) => Rule.required(),
        },
        {
            name: 'projectLink',
            title: 'Project Link',
            type: 'url',
            group: 'articleHeader',
        },
        {
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
        },

        {
            name: 'content',
            title: 'Content',
            type: 'richText',
            group: 'articleBody',
        },

        {
            name: 'learnMore',
            title: 'Learn More',
            type: 'array',
            of: [{type: 'link'}],
            group: 'articleFooter',
        },
        {
            name: 'references',
            title: 'References',
            type: 'array',
            of: [{type: 'link'}],
            group: 'articleFooter',
        },
        {
            name: 'teaserTitle',
            title: 'Teaser Title',
            type: 'string',
            group: 'settings',
        },
        {
            name: 'teaserText',
            title: 'Teaser Text',
            type: 'string',
            group: 'settings',
        },
        {
            name: 'teaserImage',
            title: 'Teaser Image',
            type: 'image',
            group: 'settings',
        }

    ],
})