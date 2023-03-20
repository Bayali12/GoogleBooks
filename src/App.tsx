import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import { BookInfo } from './pages/BookInfo';
import { BooksList } from './pages/BooksList';

const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<BooksList />} />
				<Route path="book/:id" element={<BookInfo />} />
			</Routes>
		</>
	);
};

export default App;
