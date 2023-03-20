import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import bookReducers from './reducers';

const composeEnhancers = composeWithDevTools({
	name: 'BooksApp',
});

const store = createStore(bookReducers, composeEnhancers(applyMiddleware()));

export default store;
