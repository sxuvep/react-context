import React from 'react';
import '../App.css';
import {
	useCountState,
	useCountDispatch,
	CountProvider,
} from './counter_reducer_context';

const Counter = () => {
	const { count } = useCountState();
	const dispatch = useCountDispatch();
	const increment = () => dispatch({ type: 'INCREMENT' });
	return <button onClick={increment}>{count}</button>;
};

const CounterDetails = () => {
	const { count } = useCountState();
	return <div>The current counter value is {count}</div>;
};

const App = () => {
	return (
		<div className="App">
			<CountProvider>
				<Counter />
				<CounterDetails />
			</CountProvider>
		</div>
	);
};

export default App;
