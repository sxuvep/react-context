import React from 'react';
import { ThemeContext } from './themeProvider';

const useTheme = () => {
	const context = React.useContext(ThemeContext);
	if (context === undefined) {
		throw new Error('useTheme must be used within ThemeProvider');
	}
	return context;
};

export default useTheme;
