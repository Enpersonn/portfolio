import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import type { headerType } from "../molecules/header.type";
import type { tableOfContentType } from "../molecules/tableOfContent.type";

export type ArticleHeaderType = {
	mainImage?: SanityImageSource;
	tableOfContent: tableOfContentType;
} & headerType;

export type SimpleArticleHeaderType = {
	slug: string;
};
