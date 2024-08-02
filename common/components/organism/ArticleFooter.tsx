import { ArticleFooterType } from "@/common/types/page/article/articleFooter.type";
import MoreOfTheSame from "../molecules/MoreOfTheSame";
import References from "../molecules/References";

const ArticleFooter = (props: ArticleFooterType) => {
	return (
		<div>
			<MoreOfTheSame {...props.moreOfTheSame} />
			<References {...props.references} />
		</div>
	);
};

export default ArticleFooter;

