export default function DocsLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className=' grid grid-cols-12 h-full m-10 gap-10'>
			<div className=' h-full p-5 border-[1px] border-shadow-gray rounded-lg'>
				<h2 className=' text-2xl font-bold'>Docs</h2>
			</div>
			<div className=' col-span-8 col-start-3 '>{children}</div>
		</div>
	);
}
