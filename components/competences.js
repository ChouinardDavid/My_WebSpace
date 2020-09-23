import React from 'react';
import TitleLabel from './titleLabel';

const Competences = (props) => {
	return (
		<div id='competences'>
			<TitleLabel titleName='Compétences' />
			<div>
				<div>
					{/* <div className={`${styles.cell} ${styles.competenceDev}`}> */}
					<h3>Développeur</h3>
					<div>
						<ul>
							<li>Développement d’application Web selon les principes de développement «SOLID»</li>
							<li>Développement d’API «REST»</li>
							<li>Corriger les anomalies dans les fonctionnalités existantes</li>
							<li>Connaissance du parton architectural Modèle-Vue-Contrôleur (MVC)</li>
							<li>
								Langages de programmation
								<ul>
									<li>C#</li>
									<li>VB.NET</li>
									<li>Javascript/Typescript</li>
									<li>HTML/CSS</li>
								</ul>
							</li>
							<li>
								Plateformes (Frameworks)
								<ul>
									<li>.NET</li>
									<li>.NET Core</li>
									<li>React</li>
									<li>JQuery</li>
								</ul>
							</li>
							<li>Utilisation du gestionnaire de code source GIT</li>
							<li>Élaboration de rapport SSRS</li>
							<li>
								Gérer la compilation, la graduation et le déploiement d’application sous les différents paliers environnementaux à l’aide d’Azure
								DevOps
							</li>
							<li>Conception et utilisation d’une base de données relationnelle SQL Server</li>
						</ul>
					</div>
				</div>

				{/* <div className={`${styles.cell} ${styles.competenceAna}`}> */}
				<div>
					<h3>Analyste</h3>
					<ul>
						<li>Concevoir l’analyse organique avant d’ajouter une nouvelle fonctionnalité</li>
						<li>Respecter les spécifications fonctionnelles établies dans la documentation</li>
						<li>Discuter avec les analystes fonctionnelles pour clarifier les besoins des utilisateurs</li>
					</ul>
				</div>

				{/* <div className={`${styles.cell} ${styles.competencePer}`}> */}
				<div>
					<h3>Personnel</h3>
					<ul>
						<li>Travailler dans une équipe «Scrum» selon les principes de la méthodologie Agile</li>
						<li>Contribuer au processus d’amélioration continue afin de corriger et prévenir les erreurs</li>
						<li>Langues parlées et écrites : français et anglais</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Competences;
