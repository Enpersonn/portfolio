import type { BasePageType } from "../pages.type";
import type { DocFooterType } from "./docFooter.type";
import type { DocHeaderType } from "./docHeader.type";
import type { DocsBodyType } from "./docsBody.type";


export type DocType = BasePageType & {
    header?: DocHeaderType;
    footer?: DocFooterType;
};


export type DocsType = {
    body?: DocsBodyType;
    header?: DocHeaderType;
    footer?: DocFooterType;
};

