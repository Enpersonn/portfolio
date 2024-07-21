import { groq } from "next-sanity";

const PROJECT_QUERY = groq`
*[_type == "project" && slug.current == $slug ] | order(publishedAt desc) {
  
  _type,
  _createdAt,
  _updatedAt,
  _id,
  "slug": slug.content,
  
  "header": {
  title,
  mainImage,
  projectLink,
  publishedAt,
  entry,
  },
  "body": {
    content,
  }

}
`;