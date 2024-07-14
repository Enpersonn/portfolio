import type { articleContentType } from "@/common/types/organism/articleContent.type";
import { TextFild } from "../wrapper/ContentWrapper";

const ArticleContent = (props: articleContentType) => {
	return (
		<TextFild>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
				dignissimos reiciendis asperiores quis debitis. Enim quaerat
				exercitationem sunt voluptas ipsam quo, dolore, molestiae pariatur
				libero in iste deleniti officiis culpa.
			</p>
		</TextFild>
	);
};

export default ArticleContent;
