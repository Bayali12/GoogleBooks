import React from 'react';

import spinner from './src/assets/spinner.svg';
import styles from './styles.module.scss';

export const Loader = () => {
	return (
		<div className={styles.spinnerWrapper}>
			<div className={styles.spinnerIcon} />
		</div>
	);
};
