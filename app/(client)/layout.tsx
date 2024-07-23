import { GlobalProvider } from "@/common/providers/global.provider";

export default function clientLayout({
	children,
}: { children: React.ReactNode }) {
	return <GlobalProvider data={{}}>{children}</GlobalProvider>;
}
