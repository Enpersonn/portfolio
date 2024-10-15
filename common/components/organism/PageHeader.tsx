import { ArrowLeft, House } from "lucide-react";
import Link from "next/link";
import PageNavigation from "../molecules/PageNavigation";
import { useRouter } from "next/navigation";
import { navigation } from "@/common/lib/navigation";

const PageHeader = () => {
	const router = useRouter();
	return (
		<nav className="  w-full h-[48px] grid grid-cols-12 items-center  border-b-[1px] border-[#86868663]">
			<div className=" col-start-3 flex ">
				<button
					type="button"
					className=" rounded-full size-[28px] mx-2 flex items-center justify-center border-[1px] border-[#86868663] "
					onClick={() => router.back()}
				>
					<ArrowLeft size={18} />
				</button>
				<span className=" h-full w-[1px] bg-[#86868663]"></span>
				<Link
					href={"/"}
					className=" rounded-full size-[28px] mx-2 flex items-center justify-center border-[1px] border-[#86868663] "
				>
					<House size={18} />
				</Link>
			</div>
			<div className=" col-span-6 flex justify-center">
				<PageNavigation
					Pages={navigation}
					size="sm"
				/>
			</div>
		</nav>
	);
};

export default PageHeader;
