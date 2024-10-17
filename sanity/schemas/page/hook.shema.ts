import { basicPageData } from "@/sanity/lib/basic-page-data";
import { basicPageGroup } from "@/sanity/lib/group";
import { teaserData } from "@/sanity/lib/teaser-data";
import { defineType } from "sanity";


export const hookDocsSchema = defineType({
    name: 'hookDocs',
    title: 'Hook Docs',
    type: 'document',
    groups: basicPageGroup,
    fields: [
        ...basicPageData,
        {
            name: 'content',
            title: 'Content',
            type: 'richText',
            group: 'body',
        },
        {
            name: 'learnMore',
            title: 'Learn More',
            type: 'array',
            of: [{type: 'link'}],
            group: 'footer',
        },
        {
            name: 'references',
            title: 'References',
            type: 'array',
            of: [{type: 'link'}],
            group: 'footer',
        },
        ...teaserData
    ]
})
