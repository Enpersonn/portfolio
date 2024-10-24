import type { ConfigContext } from "sanity";
import type { StructureBuilder } from "sanity/structure";


export const structure = (S: StructureBuilder, C: ConfigContext) => {
    return S.list()
        .title('Pages')
        .items([
            S.listItem()
                .title('About')
                .child(S.document().schemaType('about')),
            S.listItem()
                .title('Contact')
                .child(S.document().schemaType('contact')),
            S.divider(),
            S.listItem()
                .title('Articles')
                .schemaType('article')
                .child(S.documentTypeList('article').title('Articles')),
            S.listItem()
                .title('Projects')
                .schemaType('project')
                .child(S.documentTypeList('project').title('Projects')),
            S.listItem()
                .title('Docs')
                .child(S.list().title('Docs').items([
                    S.listItem()
                        .title('Hooks')
                        .schemaType('hookDocs')
                        .child(S.documentTypeList('hookDocs').title('Hooks')),
                ])),
        ])
}
