import Link from 'next/link';

const DocsNav = () => {
	return (
		<div className=' flex flex-col gap-5 h-fit min-h-[500px] col-span-2 p-5 border-[1px] border-shadow-gray rounded-lg'>
			<h2 className=' text-2xl font-bold'>Docs</h2>
			<div className='w-full'>
				<Link href={'/docs/hooks'}>hooks</Link>
				<div className=' ml-1 flex flex-col gap-1 border-l-2 border-l-shadow-gray pl-1'>
					<Link href={'/docs/hooks/usestate'}>useState</Link>
					<Link href={'/docs/hooks/useeffect'}>useEffect</Link>
					<Link href={'/docs/hooks/usecontext'}>useContext</Link>
					<Link href={'/docs/hooks/useref'}>useRef</Link>
					<Link href={'/docs/hooks/usereducer'}>useReducer</Link>
					<Link href={'/docs/hooks/usecallback'}>useCallback</Link>
					<Link href={'/docs/hooks/usememo'}>useMemo</Link>
				</div>
			</div>
		</div>
	);
};

export default DocsNav;
