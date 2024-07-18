import type { SanityRichtTextType } from "@/common/types/atom/richText.type";
import { PortableText as NativePortableText } from "@portabletext/react";
import DefaultComponents from "./PTComponents";

const PortableText = ({ blocks }: { blocks: SanityRichtTextType }) => {
	return (
		<div className=" my-5">
			<NativePortableText
				value={blocks}
				components={{
					...DefaultComponents,
				}}
			/>
		</div>
	);
};

export default PortableText;
