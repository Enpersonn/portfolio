import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import type { ArticleContentType } from "./articleContent.type";
import type { ArticleFooterType } from "./articleFooter.type";
import type { ArticleHeaderType } from "./articleHeader.type";

export type ArticleType = {
	slug: string;
	header: ArticleHeaderType;
	content: ArticleContentType;
	footer: ArticleFooterType;
};

export type PreviewArticleType = {
	slug: string;
	teaserImage?: SanityImageSource;
	teaserTitle: string;
	teaserText: string;
};
