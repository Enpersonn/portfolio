import { groq } from "next-sanity";

export const ABOUT_QUERY = groq`
*[_type == "about"][0] {
    _id,
    _updatedAt,
    "slug": slug.current,
    "header": {
        title,
        mainImage,
        entry,
    },
    "body": {
        content,
    }
}
`;