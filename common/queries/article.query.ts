import { groq } from "next-sanity";
import { RICH_TEXT_QUERY } from "./rich-text.query";


export const ARTICLE_QUERY = groq`*[ _type == "article" && slug.current == $slug ][0] {
    _type,
    _createdAt,
    _updatedAt,
    _id,

    "header": {
        title,
        publishedAt,
        mainImage,
        entry,
        content,
        "headlines": content[style match "h*"] 
    },
    "body": {
        content,
    },

    "slug": slug.current
}`;

// && string::startsWith(style[0], "h")