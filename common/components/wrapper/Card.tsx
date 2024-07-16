const Card = ({ children }: { children: React.ReactNode }) => (
	<div className=" rounded-[15px] overflow-hidden border-[1px] border-slate-600 w-full h-full">
		{children}
	</div>
);

export default Card;
