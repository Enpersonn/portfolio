import Link from "next/link";


export default function PagesLayout({ children }: { children: React.ReactNode}) {
    return (
        <main className=" ">
            <nav className="  px-2 w-full h-[48px] flex items-center  border-b-[1px] border-[#86868663]">
                <Link href={'./'} className=" rounded-full flex items-center justify-center w-7 h-7 text-1xl border-[1px] hover:font-bold transition-all duration-300 border-[#86868663] ">{'<-'}</Link>
            </nav>
            <div className=" content-height">
            {children}
            </div>
        </main>
    )
}