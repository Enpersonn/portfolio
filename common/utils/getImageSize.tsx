export type AspectType = "3/2" | "16/9" | "1/1" | "2/1" | "3/1";

type ImageSize = {
	imgWidth: number | undefined;
	imgHeight: number | undefined;
};

type GetLengthParams = {
	aspect?: AspectType;
	height?: number;
	width?: number | "full";
};

const FULL_WIDTH = 1920;

const calculateDimensions = ({
	aspect,
	height,
	width,
}: GetLengthParams): ImageSize => {
	if (height) {
		switch (aspect) {
			case "3/2":
				return { imgWidth: Math.floor((height * 2) / 3), imgHeight: height };
			case "16/9":
				return { imgWidth: Math.floor((height * 16) / 9), imgHeight: height };
			case "1/1":
				return { imgWidth: height, imgHeight: height };
			case "2/1":
				return { imgWidth: height * 2, imgHeight: height };
			case "3/1":
				return { imgWidth: height * 3, imgHeight: height };
			default:
				return { imgWidth: Math.floor((height * 16) / 9), imgHeight: height };
		}
	}

	if (width !== undefined) {
		const calculatedWidth = width === "full" ? FULL_WIDTH : width;
		switch (aspect) {
			case "3/2":
				return {
					imgWidth: calculatedWidth,
					imgHeight: Math.floor((calculatedWidth * 3) / 2),
				};
			case "16/9":
				return {
					imgWidth: calculatedWidth,
					imgHeight: Math.floor((calculatedWidth * 9) / 16),
				};
			case "1/1":
				return { imgWidth: calculatedWidth, imgHeight: calculatedWidth };
			case "2/1":
				return {
					imgWidth: calculatedWidth,
					imgHeight: Math.floor(calculatedWidth / 2),
				};
			case "3/1":
				return {
					imgWidth: calculatedWidth,
					imgHeight: Math.floor(calculatedWidth / 3),
				};
			default:
				return {
					imgWidth: calculatedWidth,
					imgHeight: Math.floor((calculatedWidth * 9) / 16),
				};
		}
	}

	return { imgWidth: undefined, imgHeight: undefined };
};
const getLength = ({
	aspect = "16/9",
	height,
	width,
}: GetLengthParams): ImageSize => {
	if ((width && height) || (!width && !height)) {
		return {
			imgWidth: width === "full" ? FULL_WIDTH : width,
			imgHeight: height,
		};
	}

	return calculateDimensions({ aspect, height, width });
};

export default getLength;
