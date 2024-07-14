import type { headerType } from "@/common/types/molecules/header.type";
import Entry from "../atom/Entry";
import { TextFild } from "../wrapper/ContentWrapper";
import { Calendar } from "lucide-react";

const Header = (props: headerType) => {
	return (
		<TextFild>
			<h1>{props.title}</h1>
			<p className=" entry">{props.entry}</p>
			<div className=" flex gap-2 items-center mt-10">
				<Calendar />
				<p>{props.publishedAt}</p>
			</div>
		</TextFild>
	);
};

export default Header;
