import Link from "next/link";
import HomeNavButton from "../atom/HomeNavButton";
import { Suspense } from "react";
import { MoveRight } from "lucide-react";
import { navigation } from "@/common/lib/navigation";

export default function HomeView() {
	return (
		<main className=" w-[100vw] h-[100vh]">
			<div className=" flex items-end justify-end w-full h-full">
				<div className=" relative z-10 w-full h-full" />
				<div className=" flex flex-col items-start gap-y-6 p-10">
					<div className=" flex flex-col gap-2 items-start ">
						<Suspense fallback={<div>Loading...</div>}>
						{
							navigation.map((nav) => (
								<HomeNavButton href={nav.href}>{nav.title}</HomeNavButton>
								))
							}
						</Suspense>
					</div>
					<div className=" flex gap-2 px-5 justify-end items-center w-full">
						<Link href={"./about"}> Nicklas Båkind-Øverjordet</Link>
						<MoveRight strokeWidth={1.5} />
					</div>
				</div>
			</div>
		</main>
	);
}
