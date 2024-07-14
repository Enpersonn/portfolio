import { groq } from "next-sanity";


export const ARTICLE_QUERY = groq`*[ _type == "article" && slug.current == $slug ][0] {
    _type,
    _createdAt,
    _updatedAt,
    _id,

    "header": {
        title,
        publishedAt,
        mainImage,
    },
    "slug": slug.current
}`;