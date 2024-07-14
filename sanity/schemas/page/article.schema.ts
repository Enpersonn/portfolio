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
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
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
        type: 'date',
        
        validation: (Rule) => Rule.required(),
        },
        {
            name: 'entry',
            title: 'Entry',
            type: 'text',
        }
    ],
})