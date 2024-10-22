import type { ArticleBodyType } from '@/common/types/page/article/articleBody.type';
import PortableText from '../molecules/portableText/PortableText';

const ArticleBody = (props: ArticleBodyType) => {
	return <PortableText blocks={props.content} />;
};

export default ArticleBody;
