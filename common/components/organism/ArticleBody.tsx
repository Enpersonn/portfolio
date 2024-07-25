import type { ArticleBodyType } from "@/common/types/page/article/articleBody.type";
import PortableText from "../molecules/portableText/PortableText";
import ContentWrapper from "../wrapper/ContentWrapper";

const ArticleBody = (props: ArticleBodyType) => {
	return (
		<ContentWrapper>
			<PortableText blocks={props.content} />
		</ContentWrapper>
	);
};

export default ArticleBody;
