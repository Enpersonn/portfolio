import type { DocType } from "../doc.type";
import type { CodeSnippetBodyType } from "./codeSnippetBody.type";


export type CodeSnippetViewType = DocType & {
    body: CodeSnippetBodyType;
};

