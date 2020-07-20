import React from 'react';

const defaultTheme = 'white';
const ThemeContext = React.createContext<string | undefined>(undefined);

//component which has access to the context object
const Header = () => {
	const context = React.useContext(ThemeContext);
	return <div> Header color is {context}</div>;
};

// component outside the context provider
const NavBar = () => {
	const context = React.useContext(ThemeContext);
	return <div> I dont have access to the context {context}</div>;
};

const App = () => {
	return (
		<>
			<ThemeContext.Provider value={defaultTheme}>
				<Header />
			</ThemeContext.Provider>
			<NavBar />
		</>
	);
};

export default App;
