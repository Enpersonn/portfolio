import type { SanityRichtTextType } from "@/common/types/atom/richText.type";
import { PortableText as NativePortableText } from "@portabletext/react";

const PortableText = ({ blocks }: { blocks: SanityRichtTextType }) => {
	return <NativePortableText value={blocks} />;
};

export default PortableText;
