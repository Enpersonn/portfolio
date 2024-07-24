import type { SanityRichtTextType } from "@/common/types/atom/richText.type";
import { PortableText as NativePortableText } from "@portabletext/react";
import DefaultComponents from "./PTComponents";
import CustomComponents from "./PTCustomeComponents";

const PortableText = ({ blocks }: { blocks: SanityRichtTextType }) => {
	return (
		<div className=" my-5">
			<NativePortableText
				value={blocks}
				components={{
					...DefaultComponents,
					...CustomComponents,
				}}
			/>
		</div>
	);
};

export default PortableText;
