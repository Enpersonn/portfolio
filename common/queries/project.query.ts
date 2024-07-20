import { groq } from "next-sanity";

const PROJECT_QUERY = groq`
*[_type == "project"] | order(publishedAt desc) {
  
  "header": {
  title,
  slug,
  mainImage,
  projectLink
  publishedAt,
  entry,
  }

}
`;