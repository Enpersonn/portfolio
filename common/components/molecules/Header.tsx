import type { headerType } from '@/common/types/molecules/header.type';
import ContentWrapper from '../wrapper/ContentWrapper';
import PortableText from './portableText/PortableText';

const Header = (props: headerType) => {
	return (
		<>
			<div className=' mt-10 my-5'>
				<h1>{props.title}</h1>
			</div>
			<PortableText blocks={props.entry} />
		</>
	);
};

export default Header;
