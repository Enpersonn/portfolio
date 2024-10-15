import type { ArticleFooterType } from "./articleFooter.type";
import type { ArticleHeaderType } from "./articleHeader.type";
import type { ArticleBodyType } from "./articleBody.type";
import type { BasePageType } from "../pages.type";

export type ArticleType = BasePageType & {
	header: ArticleHeaderType;
	body: ArticleBodyType;
	footer: ArticleFooterType;
};