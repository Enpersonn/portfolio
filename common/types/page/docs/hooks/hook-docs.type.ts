import type { DocType } from "../doc.type";
import type { HookBodyType } from "./hookBody.type";


export type HookViewType = DocType & {
    body: HookBodyType;
};

