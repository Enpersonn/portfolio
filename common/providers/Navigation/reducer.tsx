import type { CategoryNavigationType } from '@/common/types/page/pages.type';
import type { NavigationStateType } from './types';

export type NavigationReducerAction =
	| { page: 'articles'; payload: { pages: CategoryNavigationType } }
	| { page: 'projects'; payload: { pages: CategoryNavigationType } }
	| { page: 'docs'; payload: { pages: CategoryNavigationType } }
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
			return { ...state, categoryPages: action.payload.pages };

		case 'projects':
			return { ...state, categoryPages: action.payload.pages };

		case 'docs':
			return { ...state, categoryPages: action.payload.pages };

		case 'about':
			return { ...state };

		case 'contact':
			return { ...state };
	}
	return state;
};

export default NavigationReducer;
