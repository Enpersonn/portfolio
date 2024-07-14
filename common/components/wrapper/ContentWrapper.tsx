import { clsx } from "@/common/utils/classes";

export const TextFild = ({
	children,
	className,
}: { children: React.ReactNode; className?: string }) => {
	return (
		<div className={clsx(className, "grid grid-cols-12")}>
			<div className="  col-span-6 col-start-4 my-10">{children}</div>
		</div>
	);
};

export const ImageFild = ({
	children,
	className,
}: { children: React.ReactNode; className?: string }) => {
	return (
		<div className={clsx(className, "grid grid-cols-12  ")}>
			<div className=" col-span-8 col-start-3 my-10 mb-20">{children}</div>
		</div>
	);
};
export const ContentFild = ({
	children,
	className,
}: { children: React.ReactNode; className?: string }) => {
	return (
		<div className={clsx(className, "grid grid-cols-12  ")}>
			<div className=" col-span-10 col-start-2 my-10 mb-20">{children}</div>
		</div>
	);
};
