import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export type BasePageType = {
	slug: string;
};

export type PreviewPageType = {
	slug: string;
	teaserImage?: SanityImageSource;
	teaserTitle: string;
	teaserText: string;
};

export type NavPageType = {
	slug: string;
	title: string;
	type: string;
};
