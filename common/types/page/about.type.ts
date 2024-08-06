import { SanityRichtTextType } from "../atom/richText.type";

type AboutType = {
    _id: string;
    _updatedAt: string;
    slug: string;
    header: {
        title: string;
        mainImage: string;
        entry: SanityRichtTextType[];
    }
    body: {
        content: SanityRichtTextType[];
    }
}

export default AboutType;