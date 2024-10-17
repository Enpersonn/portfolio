


export const basicPageData = [
    {
        name: 'title',
        title: 'Title',
        type: 'string',
        group: 'header',
        //@ts-ignore
        validation: (Rule) => Rule.required(),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
            },
            //@ts-ignore
            validation: (Rule) => Rule.required(),
            group: 'settings',
            },
        {
            name: 'entry',
            title: 'Entry',
            type: 'richText',
            group: 'header',
        },
        {
        name: 'publishedAt',
        title: 'Published At',
        type: 'date',
        group: 'header',
        //@ts-ignore
        validation: (Rule) => Rule.required(),
        },
]
