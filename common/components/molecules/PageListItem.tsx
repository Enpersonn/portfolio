"use client";
import Link from "next/link";
import SanityImage from "../atom/SanityImage";
import type { PreviewPageType } from "@/common/types/page/pages.type";

type PageListItemProps = {
	type?: "project" | "article";
	page: PreviewPageType;
};

const PageListItem = ({ page, type = "article" }: PageListItemProps) => {
	return (
		<Link
			className=" card-style"
			href={`${type === "article" ? "/articles/article/" : "/projects/project/"}${page.slug}`}
			key={page.slug}
		>
			<div className=" group ">
				<SanityImage image={page?.teaserImage} className=" rounded-[15px]" />
				<div className=" px-2 pt-5 pb-5 flex flex-col gap-3">
					<h2 className=" group-hover:underline teaser-title">
						{page.teaserTitle}
					</h2>
					<p className=" teaser-text line-clamp-3">{page.teaserText}</p>
				</div>
			</div>
		</Link>
	);
};

export default PageListItem;
