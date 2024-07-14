import type { headerType } from "@/common/types/molecules/header.type";
import Entry from "../atom/Entry";
import { TextFild } from "../wrapper/ContentWrapper";

const Header = (props: headerType) => {
	return (
		<TextFild>
			<h1>{props.title}</h1>
			<p>{props.publishedAt}</p>
			<p className=" entry">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. In, cupiditate
				omnis amet non totam laborum. Qui voluptate quasi cum, sapiente tempora
				at non iure quae tenetur molestias provident, sunt impedit!
			</p>
		</TextFild>
	);
};

export default Header;
