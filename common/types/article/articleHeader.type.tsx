import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import type { headerType } from "../molecules/header.type";
import type { tableOfContentType } from "../molecules/tableOfContent.type";

export type articleHeaderType = {
	mainImage: SanityImageSource;
	tableOfContent: tableOfContentType;
} & headerType;
