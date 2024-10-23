import { useContext } from 'react';
import { NavigationDispatchContext, NavigationStateContext } from '../providers/Navigation/Navigation.provider';

const useNavigation = () => {
	const context = useContext(NavigationStateContext);
	const dispatch = useContext(NavigationDispatchContext);

	return { state: context, dispatch };
};

export default useNavigation;
