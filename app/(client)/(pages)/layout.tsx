"use client";
import NavBar from "@/common/components/molecules/NavBar";

export default function PagesLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<main className=" overflow-x-hidden overflow-y-auto">
			<NavBar />
			<div className=" content-height">{children}</div>
		</main>
	);
}
