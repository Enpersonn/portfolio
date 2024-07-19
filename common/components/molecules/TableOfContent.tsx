import type { tableOfContentType } from "@/common/types/molecules/tableOfContent.type";
import Link from "next/link";

const TableOfContent = ({ headlines }: tableOfContentType) => {
	return (
		<div>
			<h2>Table of content</h2>
			{headlines?.map((headline, index) => {
				switch (headline.style) {
					case "h2":
						return (
							<Link key={headline._key} href={`#${headline.children[0].text}`}>
								<h2>{headline.children[0].text}</h2>
							</Link>
						);
					case "h3":
						return (
							<div className=" pl-5">
								<Link
									key={headline._key}
									href={`#${headline.children[0].text}`}
									className=" pl-2  border-l block"
								>
									<h3>{headline.children[0].text}</h3>
								</Link>
							</div>
						);
				}
			})}
		</div>
	);
};

export default TableOfContent;
