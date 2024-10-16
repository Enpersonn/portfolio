import HookView from '@/common/components/views/docs/hooks/hook.view';
import useLoader from '@/common/hooks/useLoader';
import { HOOK_DOCS_QUERY } from '@/common/queries/hook-docs.query';
import type { HookViewType } from '@/common/types/page/docs/hooks/hook-docs.type';
import type { QueryParams } from 'next-sanity';

const getHook = async ({ params }: { params: QueryParams }) => {
	return await useLoader<HookViewType>(HOOK_DOCS_QUERY, params);
};

export default async function HookPage({ params }: { params: QueryParams }) {
	const initialData = await getHook({ params });

	return <HookView {...initialData.data} />;
}
