import type AboutType from "@/common/types/page/about.type";
import PortableText from "../molecules/portableText/PortableText";

export default function AboutView(page: AboutType) {
	return (
		<article>
			<h1>{page.header?.title}</h1>
			<PortableText blocks={page.body.content} />
		</article>
	);
}
