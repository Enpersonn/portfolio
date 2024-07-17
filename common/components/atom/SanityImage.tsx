import { dataset, projectId } from "@/sanity/env";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import getLength, { type AspectType } from "@/common/utils/getImageSize";
import { clsx } from "@/common/utils/classes";

export type SanityImageProps = {
	image?: SanityImageSource;
	aspect?: AspectType;
	width?: number | "full";
	height?: number;
	className?: string;
};

const urlFor = (source: SanityImageSource) =>
	projectId && dataset
		? imageUrlBuilder({ projectId, dataset }).image(source)
		: null;

const SanityImage = ({
	image,
	width,
	height,
	aspect = "16/9",
	className,
}: SanityImageProps) => {
	if (!image) return null;
	const { imgWidth, imgHeight } = getLength({ aspect, height, width });
	const imageUrl = urlFor(image)
		?.width(imgWidth ?? 550)
		.height(imgHeight ?? 310)
		.url();

	return imageUrl ? (
		<Image
			src={imageUrl}
			alt=""
			width={imgWidth ?? 550}
			height={imgHeight ?? 310}
			className={clsx(
				width === "full" && " w-full",
				aspect && `aspect-[${aspect}]`,
				className,
			)}
		/>
	) : null;
};

export default SanityImage;
