import { groq } from "next-sanity";


export const ARTICLE_QUERY = groq`*[ _type == "article" && slug.current == $slug ][0] {
    ...,
    "test": "test",
    "slug": slug.current
}`;