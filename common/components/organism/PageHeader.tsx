import { ArrowLeft, House } from "lucide-react";
import Link from "next/link";
import PageNavigation from "../molecules/PageNavigation";
import { useRouter } from "next/navigation";

const PageHeader = () => {
	const router = useRouter();
	return (
		<nav className="  w-full h-[48px] grid grid-cols-12 items-center  border-b-[1px] border-[#86868663]">
			<div className=" col-start-3 flex gap-3 ">
				<button
					type="button"
					className=" rounded-full size-[28px] flex items-center justify-center border-[1px] border-[#86868663] "
					onClick={() => router.back()}
				>
					<ArrowLeft size={18} />
				</button>
				<Link
					href={"/"}
					className=" rounded-full size-[28px] flex items-center justify-center border-[1px] border-[#86868663] "
				>
					<House size={18} />
				</Link>
			</div>
			<div className=" col-span-6 flex justify-center">
				<PageNavigation
					Pages={[
						{ title: "Projects", href: "/projects/discover" },
						{ title: "Articles", href: "/articles/discover" },
						{ title: "About", href: "/about" },
						{ title: "Contact", href: "/contact" },
					]}
					size="sm"
				/>
			</div>
		</nav>
	);
};

export default PageHeader;
