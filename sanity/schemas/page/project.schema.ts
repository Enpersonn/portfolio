import { defineField } from "sanity";


export const project = defineField({
    name: 'project',
    title: 'Project',
    type: 'document',
    groups: [
        {
        title: 'Project Header',
        name: 'projectHeader',
        },
        {
        title: 'Project Body',
        name: 'projectBody',
        },
        {
        title: 'Project Footer',
        name: 'projectFooter',
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
        group: 'projectHeader',
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
            group: 'projectHeader',
        },
        {
        name: 'publishedAt',
        title: 'Published At',
        type: 'date',
        group: 'projectHeader',
        },
        {
            name: 'projectLink',
            title: 'Project Link',
            type: 'url',
            group: 'projectFooter',
        },
        {
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            group: 'projectHeader',
        },
        {
            name: 'content',
            title: 'Project Content',
            type: 'richText',
            group: 'projectBody',
        },
    ],
})