import type { tableOfContentType } from "@/common/types/molecules/tableOfContent.type";


const TableOfContent = (props : tableOfContentType) => {
    return (
        <div>
            <p>{props.header}</p>
        </div>
    )
}

export default TableOfContent;