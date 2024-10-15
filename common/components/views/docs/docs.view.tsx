import { DocsType } from "@/common/types/page/docs/doc.type";
import Link from "next/link";


export default function DocsView({ ...props }: DocsType) {
    
    
    return (
        <div>
            <h1>Docs</h1>
            <Link href={"/docs/hooks"}>hooks</Link>
        </div>
    )
}


