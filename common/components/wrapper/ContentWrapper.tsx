const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className={'grid grid-cols-6'}>
			<div className=' col-span-4 col-start-2 '>{children}</div>
		</div>
	);
};

export default ContentWrapper;
