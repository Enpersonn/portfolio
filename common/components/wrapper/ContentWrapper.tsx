export const TextFild = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className={"grid grid-cols-12"}>
			<div className=" col-span-8 col-start-3 md:col-span-6 md:col-start-4 my-5">
				{children}
			</div>
		</div>
	);
};

export const ImageFild = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className={"grid grid-cols-12  "}>
			<div className=" col-span-10 col-start-2 md:col-span-8 md:col-start-3 my-5 md:my-10 md:mb-20">
				{children}
			</div>
		</div>
	);
};
export const ContentFild = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className={"grid grid-cols-12  "}>
			<div className=" col-span-10 col-start-2 my-10 mb-20">{children}</div>
		</div>
	);
};
