import { loadQuery } from '@/sanity/lib/store';
import type { QueryParams } from 'next-sanity';

const useLoader = <T>(q: string, params?: QueryParams) =>
	loadQuery<T>(q, params, {
		next: {
			revalidate: process.env.NODE_ENV === 'development' ? 30 : 3600,
		},
	});

export default useLoader;
