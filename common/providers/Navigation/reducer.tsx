import type { CategoryNavigationType } from '@/common/types/page/pages.type';
import type { NavigationStateType } from './types';

export type NavigationReducerAction =
	| { page: 'articles' }
	| { page: 'projects' }
	| { page: 'docs' }
	//Static pages
	| { page: 'about' }
	| { page: 'contact' };

export const InitialNavigationState: NavigationStateType = {
	page: '',
	status: 'pending',
	isLoading: false,
	categoryPages: {} as CategoryNavigationType,
};

const NavigationReducer = (state: NavigationStateType, action: NavigationReducerAction) => {
	switch (action.page) {
		case 'articles':
			return { ...state };

		case 'projects':
			return { ...state };

		case 'docs':
			return { ...state };

		case 'about':
			return { ...state };

		case 'contact':
			return { ...state };

		default:
			return state;
	}
};

export default NavigationReducer;
