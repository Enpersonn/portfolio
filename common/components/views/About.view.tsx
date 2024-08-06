import type AboutType from "@/common/types/page/about.type";
import PortableText from "../molecules/portableText/PortableText";
import ContentWrapper from "../wrapper/ContentWrapper";

export default function AboutView(page: AboutType) {
	return (
		<article className=" flex flex-col">
			<ContentWrapper>
				<div className="mt-10">

					<h1>{page.header?.title}</h1>
				</div>
			<PortableText blocks={page.body.content} />
			</ContentWrapper>
		</article>
	);
}
