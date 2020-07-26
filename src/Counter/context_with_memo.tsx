import React, { ReactNode } from 'react';
import '../App.css';

/** CREATE CONTEXT */
type CountContextType = {
	count: number;
	setCount: React.Dispatch<React.SetStateAction<number>>;
};
const CountContext = React.createContext<CountContextType | undefined>(undefined);

/**CREATE PROVIDER */
type CountProviderType = {
	children: ReactNode;
};
const CountProvider = ({ children }: CountProviderType) => {
	const [count, setCount] = React.useState(0);
	// const value: CountContextType = React.useMemo(() => {
	// 	return { count, setCount };
	// }, [count]);

	const value = { count, setCount };

	return <CountContext.Provider value={value}>{children}</CountContext.Provider>;
};

/**CREATE CONTEXT CONSUMER */

const useCount = () => {
	const context = React.useContext(CountContext);
	if (context === undefined) {
		throw new Error('useCount must be used within CountContext Provider');
	}
	const { count, setCount }: CountContextType = context;
	const increment = () => setCount((count: number) => count + 1);
	return { count, increment };
};

//PROVIDER COMPONENT CHILDREN

const useRenderCounter = () => {
	const ref = React.useRef<any>();

	React.useEffect(() => {
		ref.current.textContent = Number(ref.current.textContent | 0) + 1;
	});

	return (
		<span
			style={{
				backgroundColor: '#ccc',
				borderRadius: 4,
				padding: '2px 4px',
				fontSize: '0.8rem',
				margin: '0 6px',
				display: 'inline-block',
			}}
			ref={ref}
		></span>
	);
};

const Counter = () => {
	const { increment } = useCount();
	const renderCount = useRenderCounter();
	return (
		<div style={{ border: '1px solid black', padding: 10 }}>
			{renderCount}
			<button onClick={increment}>Increment Count</button>
		</div>
	);
};

const MemoizedCounter = React.memo(Counter);

const CountDisplay = () => {
	const { count } = useCount();
	const renderCount = useRenderCounter();
	return (
		<div style={{ border: '1px solid black', padding: 10 }}>
			{renderCount}
			The current count is {count}
		</div>
	);
};

const MemoizedCountDisplay = React.memo(CountDisplay);

const App = () => {
	const [, forceUpdate] = React.useState();
	const renderCount = useRenderCounter();
	return (
		<div className="App" style={{ border: '1px solid black', padding: 10 }}>
			{renderCount}
			<button onClick={() => forceUpdate({})}>force render</button>
			<CountProvider>
				<MemoizedCountDisplay />
				<MemoizedCounter />
			</CountProvider>
		</div>
	);
};

export default App;
