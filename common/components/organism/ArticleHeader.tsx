import type { articleHeaderType } from "@/common/types/article/articleHeader.type";
import Header from "../molecules/Header";
import MainImage from "../molecules/MainImage";
import TableOfContent from "../molecules/TableOfContent";

// <AuthorDate />


const ArticleHeader = (props : articleHeaderType) => {

 return (
    <div>
    <Header {...props.header} />
    <MainImage {...props.mainImage} />
    <TableOfContent {...props.tableOfContent} />
    </div>
);
};

export default ArticleHeader;