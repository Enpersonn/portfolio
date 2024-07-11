import type { articleContentType } from "../organism/articleContent.type";
import type { articleFooterType } from "./articleFooter.type";
import type { articleHeaderType } from "./articleHeader.type";

export type articleType = {
    header : articleHeaderType;
    content : articleContentType;
    footer : articleFooterType;
}