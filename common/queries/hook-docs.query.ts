import { groq } from "next-sanity";

export const HOOK_DOCS_QUERY = groq`*[ _type == "hookDocs" && slug.current == $slug ][0] {
    _type,
    _createdAt,
    _updatedAt,
    _id,

    "header": {
        title,
        entry,
        publishedAt,
    },

    "body": {
        content,
    },

    "slug": slug.current
}`;
