import React, { useState, FC } from 'react';
import '../App.css';

interface CounterProps {
	count: number;
	increment: () => void;
}

const Counter: FC<CounterProps> = ({ count, increment }) => {
	return <button onClick={increment}>{count}</button>;
};

const CounterDetails: FC<{ count: number }> = ({ count }) => {
	return <div> The current counter count is {count}</div>;
};

function App() {
	const [count, setCount] = useState<number>(0);
	return (
		<div className="App">
			<Counter count={count} increment={() => setCount(count + 1)} />
			<CounterDetails count={count} />
		</div>
	);
}

export default App;
