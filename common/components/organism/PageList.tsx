"use client";
import type { PreviewPageType } from "@/common/types/page/pages.type";
import PageListItem from "../molecules/PageListItem";
import ContentWrapper from "../wrapper/ContentWrapper";

type PagesViewProps = {
	pages: PreviewPageType[];
};

const PageList = ({ pages }: PagesViewProps) => {
	return (
		<ContentWrapper>
			<div className=" grid gap-5 md:grid-cols-3 mt-10 ">
				{pages?.map((page) => {
					return (
						<div key={page.slug}>
							<PageListItem {...page} />
						</div>
					);
				})}
			</div>
		</ContentWrapper>
	);
};

export default PageList;
