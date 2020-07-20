import React, { useState, FC, ReactNode } from 'react';
import '../App.css';

interface CounterProps {
	count: number;
	increment: () => void;
	children: ReactNode;
}

const Counter: FC<CounterProps> = ({ count, increment, children }) => {
	return (
		<>
			<button onClick={increment}>{count}</button>
			{children}
		</>
	);
};

const CounterDetails: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<>
			<div>Counter Details</div>
			{children}
		</>
	);
};

const CounterInfo: FC<{ count: number }> = ({ count }) => {
	return <div> The current counter count is {count}</div>;
};
function App() {
	const [count, setCount] = useState<number>(0);
	const incrementCount = () => setCount((prevCount) => prevCount + 1);
	return (
		<div className="App">
			<Counter count={count} increment={incrementCount}>
				<CounterDetails>
					<CounterInfo count={count} />
				</CounterDetails>
			</Counter>
		</div>
	);
}

export default App;
