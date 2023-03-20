import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '~/src/ducks/types';
import bookActions from '../../ducks/actions';

import styles from './styles.module.scss';

const Search = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const searchParams = useSelector((state: RootState) => state.searchQuery);

	const handleOnChange = (e) => {
		dispatch(bookActions.setSearchParams({ searchTerm: e.target.value }));
	};

	const onSubmit = (e) => {
		e.preventDefault();
		bookActions.loadBooksIfExist(searchParams)(dispatch);
		navigate('/', { replace: true });
	};

	return (
		<div className={styles.search}>
			<form className={styles.searchForm} onSubmit={onSubmit}>
				<input className={styles.searchInput} onChange={handleOnChange} type="text" required />
				<button className={styles.searchButton}>Search</button>
			</form>
		</div>
	);
};

export default Search;
