import React, { createContext, useReducer, FC, ReactNode, useContext } from 'react';

type State = { count: number };
type Action = { type: 'INCREMENT' } | { type: 'DECREMENT' };
type Dispatch = (action: Action) => void;
const CountStateContext = createContext<State | undefined>(undefined);
const CountDispatchContext = createContext<Dispatch | undefined>(undefined);

const reducer = (state: State, action: Action) => {
	switch (action.type) {
		case 'INCREMENT':
			return { count: state.count + 1 };
		case 'DECREMENT':
			return { count: state.count - 1 };
		default:
			return state;
	}
};

const CountProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, { count: 0 });

	return (
		<CountStateContext.Provider value={state}>
			<CountDispatchContext.Provider value={dispatch}>
				{children}
			</CountDispatchContext.Provider>
		</CountStateContext.Provider>
	);
};

const useCountState = () => {
	const stateContext = useContext(CountStateContext);
	if (stateContext === undefined) {
		throw new Error('useCountState must be used within CountProvider');
	}
	return stateContext;
};

const useCountDispatch = () => {
	const dispatchContext = useContext(CountDispatchContext);
	if (dispatchContext === undefined) {
		throw new Error('useCountDispatch must be used within CountProvider');
	}
	return dispatchContext;
};

export { CountProvider, useCountState, useCountDispatch };
