"use client";
import type { PreviewPageType } from "@/common/types/article/article.type";
import PageListItem from "../molecules/PageListItem";
import ContentFild from "../wrapper/ContentWrapper";

type PagesViewProps = {
	pages: PreviewPageType[];
};

const PageList
 = ({ pages }: PagesViewProps) => {
	return (
		<ContentFild>
			<div className=" grid gap-5 md:grid-cols-3 mt-10 ">
				{pages?.map((page) => {
					return (
						<div key={page.slug}>
							<PageListItem {...page} />
						</div>
					);
				})}
			</div>
		</ContentFild>
	);
};

export default PageList
;
