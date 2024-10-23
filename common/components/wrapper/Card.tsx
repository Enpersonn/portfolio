import { clsx } from '@/common/utils/classes';

const Card = ({
	children,
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement> & { children: React.ReactNode }) => (
	<div
		className={clsx(' rounded-[5px] overflow-hidden border-[1px] border-[#86868663] w-full h-full', className)}
		{...props}
	>
		{children}
	</div>
);

export default Card;
