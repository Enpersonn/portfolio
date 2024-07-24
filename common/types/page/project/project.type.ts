import type { ProjectBodyType } from "./projectBody.type";
import type { ProjectFooterType } from "./projectFooter.type";
import type { ProjectHeaderType } from "./projectHeader.type";


export type ProjectType = {
    slug: string;
    header: ProjectHeaderType;
    body: ProjectBodyType;
    footer: ProjectFooterType;
};