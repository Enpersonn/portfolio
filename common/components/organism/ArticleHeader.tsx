import type { ArticleHeaderType } from "@/common/types/article/articleHeader.type";
import Header from "../molecules/Header";
import TableOfContent from "../molecules/TableOfContent";
import SanityImage from "../atom/SanityImage";
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
			{props.tableOfContent && <TableOfContent {...props.tableOfContent} />}
		</ContentWrapper>
	);
};

export default ArticleHeader;
