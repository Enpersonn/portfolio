"use client";

import PageHeader from "@/common/components/organism/PageHeader";

export default function PagesLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<main className=" overflow-x-hidden overflow-y-auto">
			<PageHeader />
			<div className=" content-height">{children}</div>
		</main>
	);
}
