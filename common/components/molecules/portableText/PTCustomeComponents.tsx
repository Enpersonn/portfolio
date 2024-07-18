import SanityImage, { type SanityImageProps } from "../../atom/SanityImage";
import W from "../../wrapper/ContentWrapper";

const CustomComponents: {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	[key: string]: (props: any) => React.ReactNode;
} = {
	image: (props: SanityImageProps) => (
		<W type="image">
			<SanityImage {...props} />
		</W>
	),
};

export default CustomComponents;
