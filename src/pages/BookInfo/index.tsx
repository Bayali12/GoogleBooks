import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState } from '~/src/ducks/types';

import styles from './styles.module.scss';

export const BookInfo = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const book = useSelector((state: RootState) => state.books.find((book) => book.id === id));

	useEffect(() => {
		if (!book) {
			navigate('/', { replace: true });
		}
	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.imageWrapper}>
				<img className={styles.image} src={book?.volumeInfo.imageLinks?.thumbnail} alt="" />
			</div>
			<div className={styles.bookInfo}>
				<p className={styles.category}>{book?.volumeInfo.categories}</p>
				<h1>{book?.volumeInfo.title}</h1>
				<p>{book?.volumeInfo.authors}</p>
				<p>{book?.volumeInfo.description}</p>
			</div>
		</div>
	);
};
