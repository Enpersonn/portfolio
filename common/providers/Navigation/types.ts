import type { CategoryNavigationType } from '@/common/types/page/pages.type';

export type NavigationStateType = {
	page: string;
	status: 'pending' | 'isloaded';
	isLoading: boolean;
	categoryPages: CategoryNavigationType;
};
