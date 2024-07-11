import type { entryType } from "@/common/types/atom/entry.type"


const Entry = (props : entryType) => {
    return (
        <div>
            <p>{props.text}</p>
        </div>
    )
}

export default Entry;