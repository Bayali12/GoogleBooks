import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../../components/Loader';
import { RootState } from '~/src/ducks/types';
import { BookPreview } from '../../components/BookPreview';
import bookActions from '../../ducks/actions';
import styles from './styles.module.scss';
import { Link, useNavigate } from 'react-router-dom';

export const BooksList = () => {
	const { books, total, searchQuery, isLoading } = useSelector((state: RootState) => state);
	const dispatch = useDispatch();

	const handleMoreButton = () => {
		bookActions.getMoreBooksIfExist(searchQuery)(dispatch);
	};

	return (
		<>
			{!!total && <div className={styles.total}>Total: {total}</div>}
			<div className={styles.container}>
				{Object.values(books).map(({ id, volumeInfo }) => (
					<BookPreview
						id={id}
						key={id}
						title={volumeInfo.title}
						authors={volumeInfo.authors}
						categories={volumeInfo.categories}
						description={volumeInfo.description}
						imageLink={volumeInfo.imageLinks?.smallThumbnail}
					/>
				))}
			</div>
			{!!total && (
				<div className={styles.buttonWrapper}>
					<button className={styles.moreButton} onClick={handleMoreButton}>
						more
					</button>
				</div>
			)}
			{isLoading && (
				<div className={styles.loaderWrapper}>
					<Loader />
				</div>
			)}
		</>
	);
};
