import DocsNav from '@/common/components/molecules/DocsNav';
import type { NavPageType } from '@/common/types/page/pages.type';
import useLoader from '@/common/hooks/useLoader';
import { NAV_QUERY } from '@/common/queries/pages.query';

export default async function DocsLayout({ children }: { children: React.ReactNode }) {
	const docsNav = await createDocsNav();

	return (
		<div className=' grid grid-cols-12 h-full m-10 gap-10 '>
			<DocsNav docs={docsNav} />
			<div className=' col-span-8 col-start-3 '>{children}</div>
		</div>
	);
}

const createDocsNav = async () => {
	const hooksPages = await getPages('hookDocs', 'hooks');

	const navigationTree = [...hooksPages];

	return navigationTree;
};

const getPages = async (type: string, parent: string) => {
	const pages = await useLoader<NavPageType[]>(NAV_QUERY, {
		type: type,
	});

	return pages.data ?? [];
};
