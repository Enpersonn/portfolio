import { defineField } from "sanity";

export const highlighted = defineField({
    name: "highlighted",
    title: "Highlighted",
    type: "object",
    fields: [
        {
            name: "icon",
            title: "Icon",
            type: "string"
        },
        {
            name: "text",
            title: "Text",
            type: "simpleRichText",
        }
           
    ],
});