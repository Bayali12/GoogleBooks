import BooksService from '../services/books.service';

export const BOOK_ACTIONS = {
	START_LOADING: 'books/START_LOADING',
	FAILED_LOADING: 'books/FAILED_LOADING',
	SUCCESS_LOADING: 'books/SUCCESS_LOADING',
	SET_SEARCH_PARAMS: 'books/SET_SEARCH_PARAMS',
	GET_MORE_BOOKS_LOADING: 'books/GET_MORE_BOOKS',
	GET_MORE_BOOKS_SUCCESS: 'books/GET_MORE_BOOKS_SUCCESS',
};

const startLoadingBooks = () => ({
	type: BOOK_ACTIONS.START_LOADING,
});

const failedLoadingBooks = () => ({
	type: BOOK_ACTIONS.FAILED_LOADING,
});

const successLoadingBooks = (books) => {
	return {
		type: BOOK_ACTIONS.SUCCESS_LOADING,
		payload: { ...books },
	};
};

const setSearchParams = (searchParams) => {
	return {
		type: BOOK_ACTIONS.SET_SEARCH_PARAMS,
		payload: searchParams,
	};
};

const getMoreBooksLoading = () => ({
	type: BOOK_ACTIONS.GET_MORE_BOOKS_LOADING,
});

const getMoreBooksSuccess = (books) => {
	return {
		type: BOOK_ACTIONS.GET_MORE_BOOKS_SUCCESS,
		payload: { ...books },
	};
};

const loadBooksIfExist = (searchQuery) => (dispatch) => {
	dispatch(startLoadingBooks());

	return BooksService.getBooks(searchQuery).then(
		(response) => {
			dispatch(successLoadingBooks(response.data));
			return Promise.resolve();
		},
		(error) => {
			dispatch(failedLoadingBooks());

			return Promise.reject();
		},
	);
};

const getMoreBooksIfExist = (searchQuery) => (dispatch) => {
	dispatch(getMoreBooksLoading());

	const searchParams = { ...searchQuery, page: searchQuery.page + 1 };

	return BooksService.getBooks(searchParams).then(
		(response) => {
			dispatch(getMoreBooksSuccess(response.data));
			return Promise.resolve();
		},
		(error) => {
			dispatch(failedLoadingBooks());

			return Promise.reject();
		},
	);
};

export default {
	loadBooksIfExist,
	getMoreBooksIfExist,
	setSearchParams,
};
