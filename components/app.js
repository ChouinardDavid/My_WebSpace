import React from 'react';
import TitleLabel from './titleLabel';
import Header from './header';
import { Container } from 'reactstrap';
import styles from '../styles/app.module.scss';
import Presentation from './presentation';
import Competences from './competences';

function App() {
	return (
		<div id='App'>
			<Container fluid className={styles.appContainer}>
				<Header />
				<Presentation />
				<Competences />
				<div id='carriere' className={styles.line}>
					<TitleLabel titleName='Parcours de carrière' />
				</div>

				<div id='formations' className={styles.line}>
					<TitleLabel titleName='Formations' />
				</div>

				<div id='realisations' className={styles.line}>
					<TitleLabel titleName='Réalisations' />
				</div>
			</Container>
		</div>
	);
}

export default App;
