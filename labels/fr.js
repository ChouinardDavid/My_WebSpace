
import { domaines } from './domaines';


// export const home_text = {

// }

export const header_text = {
    id: 'header',
    title: "David Chouinard-Lavoie",
    addLink: false,
}

export const presentation_text = {
    id: 'presentation',
    title: 'Présentation',
    description: `
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of
        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of
        Lorem Ipsum
    `
}

export const skills_text = {
    id: 'competences',
    title: 'Compétences',
    sections:
        [
            {
                id: 'developpeur',
                title: 'Développeur',
                children:
                    [
                        'Développement d’application Web selon les principes de développement «SOLID»',
                        'Développement d’API «REST»',
                        'Corriger les anomalies dans les fonctionnalités existantes',
                        'Connaissance du parton architectural Modèle-Vue-Contrôleur (MVC)',

                        {
                            id: 'langages',
                            title: 'Langages de programmation',
                            children: [
                                'C#',
                                'VB.NET',
                                'Javascript/Typescript',
                                'HTML/CSS'
                            ]
                        },
                        {
                            id: 'plateformes',
                            title: 'Plateformes (Frameworks)',
                            children: [
                                '.NET',
                                '.NET Core',
                                'React',
                                'JQuery'
                            ]
                        },

                        'Utilisation du gestionnaire de code source GIT',
                        'Élaboration de rapport SSRS',
                        'Gérer la compilation, la graduation et le déploiement d’application sous les différents paliers environnementaux à l’aide d’Azure DevOps',
                        'Conception et utilisation d’une base de données relationnelle SQL Server'
                    ]
            },
            {
                id: 'analyste',
                title: 'Analyste',
                children:
                    [
                        'Concevoir l’analyse organique avant d’ajouter une nouvelle fonctionnalité',
                        'Respecter les spécifications fonctionnelles établies dans la documentation',
                        'Discuter avec les analystes fonctionnelles pour clarifier les besoins des utilisateurs'
                    ]
            },
            {
                id: 'personnel',
                title: 'Personnel',
                children:
                    [
                        'Travailler dans une équipe «Scrum» selon les principes de la méthodologie Agile',
                        'Contribuer au processus d’amélioration continue afin de corriger et prévenir les erreurs',
                        'Langues parlées et écrites : français et anglais'
                    ]
            }
        ]
}

export const parcours_text = {
    id: 'parcours',
    title: 'Parcours de Carrière',
    emplois:
        [
            {
                domaine: domaines.info,
                employeur: 'CHU de Québec, Québec',
                poste: 'Développeur',
                dateDebut: '2019',
                dateFin: 'auj.',
                description: [
                    ' Participer au développement de l’application web «Cristal-Net»',
                    'Travailler dans une équipe agile pour concevoir des nouvelles fonctionnalités',
                    "Contribuer aux discussions sur l'architecture émergente dans nos projets"
                ]
            },
            {
                domaine: domaines.info,
                employeur: 'Industrielle Alliance, Québec',
                poste: 'Développeur',
                dateDebut: '2018',
                dateFin: '2019',
                description: [
                    'Améliorer et entretenir les applications corporatives du département de la compatibilité',
                    "Exercer le rôle de «Release manager» pour assurer l'intégration continue",
                    'Assurer un support de premier niveau aux utilisateurs dans un environnement «DevOps»'
                ]
            },
            {
                domaine: domaines.bio,
                employeur: 'GSK, Québec',
                poste: 'Technicien de production',
                dateDebut: '2014',
                dateFin: '2017',
                description: [
                    'Opérer les systèmes de remplissage de vaccin en salle blanche',
                    'Participer au projet de validation des nouvelles lignes de remplissage',
                    'Former les nouveaux employés aux multiples procédures opératoires normalisées',
                    'Effectuer le suivi environnemental dans les zones de production'
                ]
            },
            {
                domaine: domaines.bio,
                employeur: 'BD Diagnostics, Québec',
                poste: 'Technicien au contrôle de la qualité',
                dateDebut: '2014',
                description: [
                    'Effectuer le contrôle de la qualité sur les composantes du produit',
                    'Préparer le rapport d’analyse pour l’assurance qualité',
                    'Assurer le suivi des tests de stabilité des produits commerciaux'
                ]
            },
            {
                domaine: domaines.bio,
                employeur: 'Feldan',
                poste: 'Technicien de laboratoire',
                dateDebut: '2012',
                dateFin: '2014',
                description: [
                    'Participer aux activités de production et aux projets de recherche et développement',
                    'Opérer les différents équipements du laboratoire de biologie moléculaire',
                    'Assurer l‘approvisionnement du laboratoire en matières premières',
                    'Procéder à l’envoi des commandes aux clients et assurer un suivi',
                    'Améliorer le processus de livraison des commandes en écrivant des procédures opératoires',
                    'normalisées. Cela a permis de diminuer les erreurs de manutention'
                ],
            },
        ]
}


export const education_text = {
    id: 'education',
    title: "Éducation"
}
