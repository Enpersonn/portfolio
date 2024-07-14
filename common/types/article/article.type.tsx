import type { ArticleContentType } from "./articleContent.type";
import type { ArticleFooterType } from "./articleFooter.type";
import type { ArticleHeaderType } from "./articleHeader.type";

export type ArticleType = {
	slug: string;
	header: ArticleHeaderType;
	content: ArticleContentType;
	footer: ArticleFooterType;
};
