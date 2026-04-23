import type { Page } from '../components/atom/CategortyNavItem';

type generateFullPathProps = {
	page: Page;
	parentPath: string;
};

export function generatePath({ page, parentPath }: generateFullPathProps): string {
	if (page && parentPath) {
		const path = `${parentPath}/${page.href}`;
		console.log(path);
		if (path) return path;
	}
	return '#';
}
