import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../ducks/types';

import { API_URL, API_KEY, MAX_RESULTS } from './constants';
import { requestParams } from './types';

const getBooks = (searchQuery: requestParams) => {
	const { searchTerm, category, page, sort } = searchQuery;
	const startIndex = MAX_RESULTS * page;

	return axios.get(
		`${API_URL}?q=${searchTerm}+subject:${category}&maxResults=${MAX_RESULTS}&startIndex=${startIndex}&orderBy=${sort}&key=${API_KEY}`,
	);
};

export default {
	getBooks,
};
