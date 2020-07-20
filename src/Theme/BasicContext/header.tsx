import React from 'react';
import useTheme from './useTheme';

const Header = () => {
	const theme = useTheme();
	return (
		<div
			style={{
				backgroundColor: theme,
				margin: '20px auto',
				textAlign: 'center',
				padding: '10px',
				width: '50%',
				fontSize: '20px',
			}}
		>
			Header
		</div>
	);
};

export default Header;
