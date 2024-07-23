import type { ArticleFooterType } from "./articleFooter.type";
import type { ArticleHeaderType } from "./articleHeader.type";
import type { ArticleBodyType } from "./articleBody.type";

export type ArticleType = {
	slug: string;
	header: ArticleHeaderType;
	body: ArticleBodyType;
	footer: ArticleFooterType;
};