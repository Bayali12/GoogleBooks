import React from 'react';
import { useDispatch } from 'react-redux';
import Select from '../Select';
import { CATEGORIES, SORT_FIELDS } from './contants';
import bookActions from '../../ducks/actions';

import styles from './styles.module.scss';

const useActions = () => {
	const dispatch = useDispatch();

	return {
		setSearchParams: (payload) => dispatch(bookActions.setSearchParams(payload)),
	};
};

const Filters = () => {
	const actions = useActions();

	const handleOnChange = (e) => {
		actions.setSearchParams({ [e.target.name]: e.target.value === 'all' ? '' : e.target.value });
	};

	return (
		<div className={styles.filters}>
			<Select label="Categories" name="category" onChange={handleOnChange}>
				{CATEGORIES.map((category, index) => (
					<option key={index} value={category}>
						{category}
					</option>
				))}
			</Select>
			<Select label="Sorting by" name="sort" onChange={handleOnChange}>
				{SORT_FIELDS.map((field, index) => (
					<option key={index} value={field}>
						{field}
					</option>
				))}
			</Select>
		</div>
	);
};

export default Filters;
