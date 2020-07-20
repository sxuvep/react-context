import React, { ReactNode, FC } from 'react';

const defaultTheme = 'white';
const ThemeContext = React.createContext<string | undefined>(undefined);

type Props = {
	children: ReactNode;
};
const ThemeProvider: FC<Props> = ({ children }) => {
	const [theme, setTheme] = React.useState(defaultTheme);

	React.useEffect(() => {
		//usually gets the theme from API or localStorage
		//hardcoding for now
		setTheme('orange');
	}, []);

	return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export { ThemeContext, ThemeProvider };
