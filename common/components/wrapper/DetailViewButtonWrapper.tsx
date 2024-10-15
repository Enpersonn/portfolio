import { clsx } from "@/common/utils/classes";


const DetailViewButtonWrapper = ({ children, isDetailView }: { children: React.ReactNode, isDetailView: boolean }) => {
    return (
        <div className="relative">
            <button className={clsx(isDetailView ? "absolute top-0 right-0 w-full h-full hover:bg-white/10 border border-white" : "hidden")}>
            </button>
            {children}
        </div>
    )
}

export default DetailViewButtonWrapper;
