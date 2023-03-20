import React from 'react';
import Filters from '../Filters';
import Search from '../Search';

import styles from './styles.module.scss';

const Header = () => {
	return (
		<>
			<header className={styles.header}>
				<div className={styles.inner}>
					<h1 className={styles.title}>Search for books</h1>
					<Search />
					<Filters />
				</div>
			</header>
		</>
	);
};

export default Header;
