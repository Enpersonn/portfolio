import { usePathname } from 'next/navigation';
import { type Dispatch, createContext, useReducer } from 'react';
import NavigationReducer, { InitialNavigationState, type NavigationReducerAction } from './reducer';
import type { NavigationStateType } from './types';

export const NavigationStateContext = createContext<NavigationStateType>(InitialNavigationState);
export const NavigationDispatchContext = createContext<Dispatch<NavigationReducerAction>>(() => {});

const NavigationProvider = ({ children }: { children: React.ReactNode }) => {
	const pathname = usePathname();
	const [state, dispatch] = useReducer(NavigationReducer, {
		...InitialNavigationState,
		page: pathname,
	});

	return (
		<NavigationStateContext.Provider value={state}>
			<NavigationDispatchContext.Provider value={dispatch}>{children}</NavigationDispatchContext.Provider>
		</NavigationStateContext.Provider>
	);
};

export default NavigationProvider;
