import React, { FC } from 'react';

import styles from './styles.module.scss';

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
	label?: string;
};

const Select = ({ label, children, name, onChange }: SelectProps) => (
	<label className={styles.label}>
		{label}
		<select className={styles.select} onChange={onChange} name={name}>
			{children}
		</select>
	</label>
);

export default Select;
