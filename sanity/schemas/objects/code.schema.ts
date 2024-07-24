import { defineField } from "sanity";

export const code = defineField({
    name: "code",
    title: "Code",
    type: "object",
    fields: [
        {
            name: "code",
            title: "Code",
            type: "code",
        }
    ],
});