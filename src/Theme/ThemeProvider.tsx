import React from 'react';

const defaultTheme = 'white';
const ThemeContext = React.createContext<string | undefined>(defaultTheme);

const Header = () => {
	const context = React.useContext(ThemeContext);
	return <div> Header color is {context}</div>;
};
const App = () => {
	return (
		<ThemeContext.Provider value={defaultTheme}>
			<Header />
		</ThemeContext.Provider>
	);
};

export default App;
