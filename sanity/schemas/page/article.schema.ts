import { defineType } from "sanity";


export const article = defineType({
    name: 'article',
    title: 'Article',
    type: 'document',
    fields: [
        {
        name: 'title',
        title: 'Title',
        type: 'string',
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
        },
        {
        name: 'publishedAt',
        title: 'Published At',
        type: 'datetime',
        validation: (Rule) => Rule.required(),
        },
    ],
})