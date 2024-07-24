import { defineField } from "sanity";


export const quote = defineField({
    name: "quote",
    title: "quote",
    type: "object",
    fields: [
        {
            name: "quote",
            title: "Quote",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "author",
            title: "Author",
            type: "string",
            validation: (Rule) => Rule.required(),
        },

    ],
});