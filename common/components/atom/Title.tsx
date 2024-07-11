import type { titleType } from "@/common/types/atom/title.type"


const Title = (props : titleType) => {
    return (
        <h1>{props.text}</h1>
    )
}

export default Title;   