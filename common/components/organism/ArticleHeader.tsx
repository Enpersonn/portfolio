import type { ArticleHeaderType } from "@/common/types/page/article/articleHeader.type";
import SanityImage from "../atom/SanityImage";
import Header from "../molecules/Header";
import TableOfContent from "../molecules/TableOfContent";
import ContentWrapper from "../wrapper/ContentWrapper";

// <AuthorDate />

const ArticleHeader = (props: ArticleHeaderType) => {
	return (
		<ContentWrapper>
			<Header
				title={props.title}
				entry={props.entry}
				publishedAt={props.publishedAt}
			/>
			{props.mainImage && (
				<div>
					<SanityImage
						image={props.mainImage}
						width={"full"}
						aspect="3/1"
						className=" rounded-[15px]"
					/>
				</div>
			)}
			{props.headlines && <TableOfContent headlines={props.headlines} />}
		</ContentWrapper>
	);
};

export default ArticleHeader;
