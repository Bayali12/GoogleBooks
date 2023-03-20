import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './styles.module.scss';

export const BookPreview = (props) => {
	const navigate = useNavigate();

	const handleBookPreviewClick = () => {
		navigate(`/book/${props.id}`);
	};

	return (
		<div className={styles.card}>
			<div className={styles.imageWrapper}>
				<img src={props.imageLink} className={styles.image} alt="Book Image" />
			</div>
			<div className={styles.aboutBook}>
				<div className={styles.category}>{props.categories}</div>
				<div className={styles.title} onClick={handleBookPreviewClick}>
					{props.title}
				</div>
				<div className={styles.authors}>{props.authors}</div>
			</div>
		</div>
	);
};
