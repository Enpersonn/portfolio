import { defineType } from "sanity";


export const link = defineType({
    name: 'link',
    title: 'Link',
    type: 'object',
    fields: [
        {
            name: 'text',
            title: 'Text',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'url',
            title: 'URL',
            type: 'url',
            validation: (Rule) => Rule.required(),
        },
    ],
});