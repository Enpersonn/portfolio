import { groq } from "next-sanity";


export const RICH_TEXT_QUERY = groq`{
...,
body[]{
    ...,
    markDefs[]{
        ...,
    },
    }
}`;