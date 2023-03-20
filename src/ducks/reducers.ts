import { BOOK_ACTIONS } from './actions';
import { RootState } from './types';

const initialState: RootState = {
	isLoading: false,
	books: [],
	searchQuery: { category: '', page: 0, sort: 'relevance' },
	total: 0,
};

const bookReducers = (state: RootState = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case BOOK_ACTIONS.START_LOADING:
			return { ...state, isLoading: true };

		case BOOK_ACTIONS.SUCCESS_LOADING:
			return {
				...state,
				isLoading: false,
				books: payload.items,
				total: payload.totalItems,
			};

		case BOOK_ACTIONS.FAILED_LOADING:
			return { ...state, isLoading: false };

		case BOOK_ACTIONS.SET_SEARCH_PARAMS: {
			return {
				...state,
				searchQuery: { ...state.searchQuery, ...payload },
			};
		}

		case BOOK_ACTIONS.GET_MORE_BOOKS_LOADING: {
			return {
				...state,
			};
		}

		case BOOK_ACTIONS.GET_MORE_BOOKS_SUCCESS: {
			return {
				...state,
				books: [...state.books, ...payload.items],
				searchQuery: { ...state.searchQuery, page: state.searchQuery.page + 1 },
			};
		}

		default:
			return state;
	}
};

export default bookReducers;
