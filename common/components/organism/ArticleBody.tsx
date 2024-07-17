import type { ArticleBodyType } from "@/common/types/article/articleBody.type";
import { TextFild } from "../wrapper/ContentWrapper";
import PortableText from "../molecules/portableText/PortableText";

const ArticleBody = (props: ArticleBodyType) => {
	return (
		<TextFild>
			<PortableText blocks={props.content} />
		</TextFild>
	);
};

export default ArticleBody;
