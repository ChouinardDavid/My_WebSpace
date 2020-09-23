import React from 'react';
import styles from '../styles/header.module.scss';
import { SocialIcon } from 'react-social-icons';

const Header = (props) => {
	return (
		<div id='header' className={styles.header}>
			<div className={styles.titleDiv}>
				<img className={styles.myImage} src='/photoPerso.png' />

				<h1 className={styles.headerTitle}>
					David Chouinard-Lavoie
					<br />
					-&gt; mon CV en site web &lt;-
				</h1>
			</div>

			<hr />
			<div className={styles.socialIcons}>
				<SocialIcon className={styles.icon} url='https://www.linkedin.com/in/david-chouinard/' />
				<SocialIcon className={styles.icon} url='https://github.com/ChouinardDavid' />
			</div>
		</div>
	);
};

export default Header;
