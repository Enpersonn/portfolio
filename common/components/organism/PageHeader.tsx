import { ArrowLeft, House } from 'lucide-react';
import Link from 'next/link';
import PageNavigation from '../molecules/PageNavigation';
import { useRouter } from 'next/navigation';
import { navigation } from '@/common/lib/navigation';

const PageHeader = () => {
	const router = useRouter();
	return (
		<nav className='  w-full h-[48px] grid grid-cols-12 items-center  border-b-[1px] border-shadow-gray'>
			<div className=' col-start-3 flex '>
				<button
					type='button'
					className=' rounded-full size-[28px] mx-2 flex items-center justify-center border-[1px] border-shadow-gray '
					onClick={() => router.back()}
				>
					<ArrowLeft size={18} />
				</button>
				<div className=' h-full w-[1px] bg-shadow-gray' />
				<Link
					href={'/#'}
					className=' rounded-full size-[28px] mx-2 flex items-center justify-center border-[1px] border-shadow-gray '
				>
					<House size={18} />
				</Link>
			</div>
			<div className=' col-span-6 flex justify-center'>
				<PageNavigation Pages={navigation} size='sm' />
			</div>
		</nav>
	);
};

export default PageHeader;
