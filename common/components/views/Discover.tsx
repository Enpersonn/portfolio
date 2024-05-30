import SearchBar from "../atom/SearchBar";


export default function DiscoverView() {

    return (
        <>
        <div className=" w-full flex items-center justify-center gap-5 font-extralight pt-5">
            <button type="button">Discover</button>
            <button type="button" className="underline" >Search</button>
        </div>
        <section className=" w-full min-h-[50vh] flex items-center justify-center">
            <SearchBar type="text" placeholder="Search for projects..."/>
        </section>
        </>
    )
}