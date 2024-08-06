import { defineType } from "sanity";


export const aboutSchema = defineType({
    name: "about",
    title: "About",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: 'entrie',
            title: 'Entrie',
            type: 'richText',
        },
        {
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            group: 'articleHeader',
        },
        {
            name: 'content',
            title: 'Content',
            type: 'richText',
            group: 'articleBody',
        },
    ]
})

