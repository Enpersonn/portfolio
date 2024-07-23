import { groq } from "next-sanity";
import { PAGE_REFERENCE_QUERY } from "./pages.query";



export const SEARCH_LIMIT = 6;

export const searchQuery = groq`*[
    (_type == "article") && [title, ...string::split(pt::text(content), " "), slug.current] match $q
]${PAGE_REFERENCE_QUERY}`;

export const rawSearchQuery = groq`*[
    (_type == "article") && [...title, ...string::split(pt::text(content), " "), slug.current] match $q
]`;

export const searchQueryWithLimit = groq`{
    "items": ${rawSearchQuery}[$skip...$limit]${PAGE_REFERENCE_QUERY},
    "count": count(${rawSearchQuery}),
}`;