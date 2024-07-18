import type { headerType } from "@/common/types/molecules/header.type";
import { Calendar } from "lucide-react";
import PortableText from "./portableText/PortableText";
import PublishedDate from "../atom/PublishedDate";

const Header = (props: headerType) => {
	return (
		<>
			<div className=" mt-10 my-5">
				<h1>{props.title}</h1>
			</div>
			<PortableText blocks={props.entry} />
			<div className="  my-5">
				<PublishedDate date={props.publishedAt} />
			</div>
		</>
	);
};

export default Header;
