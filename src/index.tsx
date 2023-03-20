import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import { Provider } from 'react-redux';
import store from './ducks/store';

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>,
	document.getElementById('root'),
);
