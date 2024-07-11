import type { headerType } from "@/common/types/molecules/header.type";
import Entry from "../atom/Entry";
import Title  from "../atom/Title";

const Header = (props : headerType) => {

    return (
        <div>
            <Title {...props.title} />
            <Entry {...props.entry}/>
        </div>
    )
}


export default Header;