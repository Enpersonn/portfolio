import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import type { headerType } from "../molecules/header.type";
import type { tableOfContentType } from "../molecules/tableOfContent.type";
import type { SanityRichtTextType } from "../atom/richText.type";

export type ArticleHeaderType = {
	mainImage?: SanityImageSource;
	headlines: SanityRichtTextType[];
} & headerType;

export type SimpleArticleHeaderType = {
	slug: string;
};
