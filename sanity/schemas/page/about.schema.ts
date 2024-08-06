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
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
        },
        {
            name: 'content',
            title: 'Content',
            type: 'richText',
        },
    ]
})

