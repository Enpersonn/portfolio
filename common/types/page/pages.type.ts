import type { SanityImageSource } from "@sanity/image-url/lib/types/types";


export type PreviewPageType = {
	slug: string;
	teaserImage?: SanityImageSource;
	teaserTitle: string;
	teaserText: string;
};
