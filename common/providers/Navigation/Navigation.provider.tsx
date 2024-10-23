import { usePathname } from 'next/navigation';
import { type Dispatch, createContext, useEffect, use, useReducer } from 'react';
import NavigationReducer, { InitialNavigationState, type NavigationReducerAction } from './reducer';
import type { NavigationStateType } from './types';

export const NavigationStateContext = createContext<NavigationStateType>(InitialNavigationState);
export const NavigationDispatchContext = createContext<Dispatch<NavigationReducerAction>>(() => {});

const NavigationProvider = ({ children }: { children: React.ReactNode }) => {
	const pathname = usePathname();
	console.log(pathname);
	const [state, dispatch] = useReducer(NavigationReducer, {
		...InitialNavigationState,
		page: pathname.split('/')[1],
	});

	useEffect(() => {
		const page = pathname.split('/')[1];

		const isValidPage = (p: string): p is NavigationReducerAction['page'] => {
			const validPages = ['articles', 'projects', 'docs', 'about', 'contact'];
			return validPages.includes(p);
		};

		if (isValidPage(page)) {
			dispatch({ page } as NavigationReducerAction);
		}
	}, [pathname]);

	return (
		<NavigationStateContext.Provider value={state}>
			<NavigationDispatchContext.Provider value={dispatch}>{children}</NavigationDispatchContext.Provider>
		</NavigationStateContext.Provider>
	);
};

export default NavigationProvider;
