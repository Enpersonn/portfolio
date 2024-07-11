import type { moreOfTheSameType } from "@/common/types/molecules/moreOfTheSameType.type";


const MoreOfTheSame = (props : moreOfTheSameType) => {
    return (
        <div>
            <p>{props.header}</p>
        </div>
    )
}

export default MoreOfTheSame;   