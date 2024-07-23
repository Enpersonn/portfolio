import type { tableOfContentType } from "@/common/types/molecules/tableOfContent.type";
import Link from "next/link";

const TableOfContent = ({ headlines }: tableOfContentType) => {
	return (
		<div>
			<div className=" w-full border-b-[1px] border-white">
				<h2>Table of content</h2>
			</div>
			<div className=" pl-5">
				{headlines?.map((headline, index) => {
					switch (headline.style) {
						case "h2":
							return (
								<Link
									key={headline._key}
									href={`#${headline.children[0].text}`}
									className=" hover:underline"
								>
									<h2>{headline.children[0].text}</h2>
								</Link>
							);
						case "h3":
							return (
								<div className=" pl-5">
									<Link
										key={headline._key}
										href={`#${headline.children[0].text}`}
										className=" pl-2  border-l block hover:underline"
									>
										<h3>{headline.children[0].text}</h3>
									</Link>
								</div>
							);
						case "h4":
							return (
								<div className=" pl-5">
									<Link
										key={headline._key}
										href={`#${headline.children[0].text}`}
										className=" pl-2  border-l block hover:underline"
									>
										<h4>{headline.children[0].text}</h4>
									</Link>
								</div>
							);
					}
				})}
			</div>
		</div>
	);
};

export default TableOfContent;
