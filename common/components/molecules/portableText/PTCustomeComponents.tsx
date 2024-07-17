import SanityImage, { type SanityImageProps } from "../../atom/SanityImage";
import { ImageFild } from "../../wrapper/ContentWrapper";

const CustomComponents: {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	[key: string]: (props: any) => React.ReactNode;
} = {
	image: (props: SanityImageProps) => (
		<ImageFild>
			<SanityImage {...props} />
		</ImageFild>
	),
};

export default CustomComponents;
