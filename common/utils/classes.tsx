// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const clsx = (...args: any[]) => {
	return args.filter(Boolean).join(' ');
};