import { usePathname } from "next/navigation";
import RadioForm from "../atom/RadioButton";
import SearchBar from "../atom/SearchBar";
import Button from "../atom/Button/Button";
import { useState } from "react";
import { clsx } from "@/common/utils/classes";


export default function DiscoverView() {

const [page, setPage] = useState<"discover" | "search">("discover");

    const path = usePathname();
    const isArticle = path.includes("articles");

    return (
        <>
        <div className=" w-full flex justify-center gap-5 font-extralight pt-5">
            <Button type="menu" onClick={() => setPage("discover")} active={page === "discover"}>Discover</Button>
            <Button type="menu" onClick={() => setPage("search")} active={page === "search"}>Search</Button>
        </div>
        <section className={clsx(page === "search" ? "flex" : "hidden", " w-full pt-20 items-center justify-center")}>
            <div className=" flex flex-col items-center justify-center gap-1">

            <SearchBar type="text" placeholder="Search for projects..."/>
            <RadioForm radioButtons={[
                {title: "All", value: "all"},
                {title: "Projects", value: "projects"},
                {title: "Articles", value: "articles"}
            ]}
            initialValue={isArticle ? "articles" : "projects"}
            />
            </div>
        </section>
        <section className={clsx(page === "discover" ? "flex" : "hidden", " w-full pt-20 items-center justify-center")}>
            <p>DiscoverPage</p>
        </section>
        </>
    )
}