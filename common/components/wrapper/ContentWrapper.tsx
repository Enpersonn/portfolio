import { clsx } from "@/common/utils/classes";

const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
	return <div className="grid grid-cols-12 ">{children}</div>;
};

export const TextFild = ({
	children,
	className,
}: { children: React.ReactNode; className?: string }) => {
	return (
		<div className={clsx(className, " col-span-6 col-start-4 my-10")}>
			{children}
		</div>
	);
};

export const ImageFild = ({
	children,
	className,
}: { children: React.ReactNode; className?: string }) => {
	return (
		<div className={clsx(className, " col-span-8 col-start-3 my-10 mb-20")}>
			{children}
		</div>
	);
};

export default ContentWrapper;
