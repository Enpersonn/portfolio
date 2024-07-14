import { groq } from "next-sanity";


export const ARTICLES_QUERY = groq`*[_type == "article"] {
    _type,
    _createdAt,
    _updatedAt,
    _id,

    "header": {
        title,
        publishedAt,
        mainImage,
        entry,
    },
    "slug": slug.current

}`;