import React from 'react';
import styles from '../styles/app.module.scss';

const TitleLabel = (props) => {
	var titleName = props.titleName;
	return <h1 className={styles.titleName}>{titleName}</h1>;
};

export default TitleLabel;
