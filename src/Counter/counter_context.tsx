import React, { createContext, ReactNode, useState, useContext, FC } from 'react';
import '../App.css';

const CounterContext = createContext<[number, (t: number) => void] | undefined>(
	undefined
);

const CountProvider = ({ children }: { children: ReactNode }) => {
	const [count, setCount] = useState(0);
	const value: [number, (t: number) => void] = [count, setCount];
	return (
		<CounterContext.Provider value={value}>{children}</CounterContext.Provider>
	);
};

const useCount = () => {
	const context = useContext<any | undefined>(CounterContext);
	if (context === undefined) {
		throw new Error(`useCount must be used within CountProvider`);
	}
	return context;
};

const Counter = () => {
	const [count, setCount] = useCount();
	const increment = () => setCount((count: number) => count + 1);
	return <button onClick={increment}>{count}</button>;
};

const CounterDetails = () => {
	return <div>Counter Details</div>;
};

const CounterInfo = () => {
	const [count] = useCount();
	return <div> The current counter count is {count}</div>;
};

const App = () => {
	return (
		<div className="App">
			<CountProvider>
				<Counter />
				<CounterDetails />
				<CounterInfo />
			</CountProvider>
		</div>
	);
};

export default App;
