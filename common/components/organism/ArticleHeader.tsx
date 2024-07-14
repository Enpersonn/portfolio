import type { articleHeaderType } from "@/common/types/article/articleHeader.type";
import Header from "../molecules/Header";
import TableOfContent from "../molecules/TableOfContent";
import SanityImage from "../atom/SanityImage";
import { ImageFild } from "../wrapper/ContentWrapper";

// <AuthorDate />

const ArticleHeader = (props: articleHeaderType) => {
	return (
		<>
			<Header
				title={props.title}
				entry={props.entry}
				publishedAt={props.publishedAt}
			/>
			<ImageFild>
				<SanityImage
					image={props.mainImage}
					width={"full"}
					aspect="3/1"
					className=" rounded-[15px]"
				/>
			</ImageFild>
			<TableOfContent {...props.tableOfContent} />
		</>
	);
};

export default ArticleHeader;
