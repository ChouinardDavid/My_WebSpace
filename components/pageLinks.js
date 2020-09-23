import React from 'react';
import SectionForm from './helpers/sectionsForm';

const PageLinks = (props) => {
	return (
		<SectionForm id='links'>
			<ul>
				<li>
					<a href='#presentation'>Présentation</a>
				</li>
				<li>
					<a href='#competences'>Compétences</a>
				</li>
				<li>
					<a href='#carriere'>Parcours de carrière</a>
				</li>
				<li>
					<a href='#formations'>Formations</a>
				</li>
				<li>
					<a href='#realisations'>Réalisations</a>
				</li>
			</ul>
		</SectionForm>
	);
};

export default PageLinks;
