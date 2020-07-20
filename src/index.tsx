import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Theme/BasicContext/app';
//import App from './Theme/simpleContext';
//import App from './Counter/counter_reducer';
//import App from './Counter/counter';
//import App from './Counter/counter_context';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
