const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className={'grid grid-cols-12'}>
			<div className=' col-span-8 col-start-3 '>{children}</div>
		</div>
	);
};

export default ContentWrapper;
