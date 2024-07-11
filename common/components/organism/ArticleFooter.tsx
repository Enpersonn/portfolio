import type { articleFooterType } from "@/common/types/article/articleFooter.type"
import MoreOfTheSame from "../molecules/MoreOfTheSame";
import References from "../molecules/References";



const ArticleFooter = (props: articleFooterType) => {
    return (
        <div>
            <MoreOfTheSame {...props.moreOfTheSame} />
            <References  {...props.references}/>
        </div>
    )
}

export default ArticleFooter;