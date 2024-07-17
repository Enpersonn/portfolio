import type { headerType } from "@/common/types/molecules/header.type";
import Entry from "../atom/Entry";
import { TextFild } from "../wrapper/ContentWrapper";
import { Calendar } from "lucide-react";
import PortableText from "./portableText/PortableText";

const Header = (props: headerType) => {
	return (
		<TextFild>
			<h1>{props.title}</h1>
			<PortableText blocks={props.entry} />
			<div className=" flex gap-2 items-center mt-10">
				<Calendar />
				<p>{props.publishedAt}</p>
			</div>
		</TextFild>
	);
};

export default Header;
