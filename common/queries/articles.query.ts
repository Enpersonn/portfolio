import { groq } from "next-sanity";


export const ARTICLES_QUERY = groq`*[_type == "article"] {
    "teaserTitle": coalesce(teaserTitle, title ),
    "teaserText": coalesce(teaserText, entry),
    teaserImage,
    "slug": slug.current

} | order(teaserTitle asc)`;