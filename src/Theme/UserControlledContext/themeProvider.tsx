import React, { ReactNode, useState, useMemo } from 'react';

type ContextType = {
	theme: string;
	setTheme: (value: string) => void;
};
const ThemeContext = React.createContext<ContextType | undefined>(undefined);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [theme, setTheme] = useState('white');
	const value = { theme, setTheme };
	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export { ThemeContext, ThemeProvider };
