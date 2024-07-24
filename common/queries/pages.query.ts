import { groq } from "next-sanity";


export const PAGES_QUERY = groq`*[_type == $type] {
    "teaserTitle": coalesce(teaserTitle, title ),
    "teaserText": coalesce(teaserText, entry),
    teaserImage,
    "slug": slug.current
} | order(teaserTitle asc)`;

export const PAGE_REFERENCE_QUERY = groq`{
    "teaserTitle": coalesce(teaserTitle, title ),
    "teaserText": coalesce(teaserText, entry),
    teaserImage,
    "slug": slug.current}
    `;