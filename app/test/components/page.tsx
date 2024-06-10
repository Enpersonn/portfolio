"use client";
import Button from "@/common/components/atom/Button";
import SearchBar from "@/common/components/atom/SearchBar";
import Slider from "@/common/components/atom/Slider";


const ComponentSegment = ({
    component,
    children,
    
}:{
    component: string,
    children: React.ReactNode
}) => (
    <div className=" flex flex-col gap-5">
    <div  className="  w-full">
        <h3 className=" border-b-[1px] mb-4 ">{component}</h3>
        <div className=" flex w-full gap-10 justify-around">
            {children}
        </div>
    </div>

</div>
)

export default function componentsPage() {

    const TestClick = () => {
        window.alert("button was clicked")
    }

    return (
        <main className=" p-2">
            <h2>Atom</h2>
            <ComponentSegment component="Button">
                <Button type="button" size="sm" onClick={TestClick}>Button</Button>
                <Button type="radio"  value="radio" setValue={TestClick}>Radio</Button>
                <Button type="menu" onClick={TestClick}>Menu</Button>
            </ComponentSegment>
            <ComponentSegment component="Searchbar">
                <SearchBar placeholder="Search" />
            </ComponentSegment>
            <ComponentSegment component="Slider">
                <Slider value={5} min={0} max={10} step={10} />
            </ComponentSegment>
            <h2>Molecules</h2>
            <h2>Organisms</h2>
        </main>
    )
}