import type { headerType } from "@/common/types/molecules/header.type";
import Entry from "../atom/Entry";
import { TextFild } from "../wrapper/ContentWrapper";
import { Calendar } from "lucide-react";

const Header = (props: headerType) => {
	return (
		<TextFild>
			<h1>{props.title}</h1>
			<div className=" flex gap-2 items-center">
				<Calendar />
				<p>{props.publishedAt}</p>
			</div>
			<p className=" entry">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. In, cupiditate
				omnis amet non totam laborum. Qui voluptate quasi cum, sapiente tempora
				at non iure quae tenetur molestias provident, sunt impedit!
			</p>
		</TextFild>
	);
};

export default Header;
