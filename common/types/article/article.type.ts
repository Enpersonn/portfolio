import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import type { ArticleFooterType } from "./articleFooter.type";
import type { ArticleHeaderType } from "./articleHeader.type";
import type { ArticleBodyType } from "./articleBody.type";

export type ArticleType = {
	slug: string;
	header: ArticleHeaderType;
	body: ArticleBodyType;
	footer: ArticleFooterType;
};

export type PreviewPageType = {
	slug: string;
	teaserImage?: SanityImageSource;
	teaserTitle: string;
	teaserText: string;
};
