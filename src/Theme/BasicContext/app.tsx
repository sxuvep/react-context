import React from 'react';
import { ThemeProvider } from './themeProvider';
import Header from './header';

const App = () => {
	return (
		<ThemeProvider>
			<Header />
		</ThemeProvider>
	);
};
export default App;
