import { defineType } from "sanity";


export const contactSchema = defineType({
    name: "contact",
    title: "Contact",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "email",
            title: "Email",
            type: "string",
        },
        {
            name: "phone",
            title: "Phone",
            type: "string",
        }
    ]
})

