import styles from '../styles/app.module.scss';
import TitleLabel from '../components/titleLabel/titleLabel';
import Header from '../components/sections/header/header';
import Presentation from '../components/sections/presentation/presentation';
import Skills from '../components/sections/skills/skills';
import Career from '../components/sections/carrer/career';
import Education from '../components/sections/education/education';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import * as labels from '../labels/fr';

const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        marginTop: 150,
    },
    toolbar: theme.mixins.toolbar,
}));


export default function Home() {
    const classes = useStyles();

    const pageLinkKeys = Object.entries(labels)
        .filter(([key, value]) => value.addLink === undefined || value.addLink)
        .map(([key, value]) => {
            return {
                id: value.id,
                link: value.link,
                title: value.title
            }
        })


    return (
        <Container id='App' disableGutters>
            <div className={styles.containerFlex} >

                <Header labels={labels.header_text} pageLinkKeys={pageLinkKeys} />

                <main className={classes.content}>
                    {/* <div className={classes.toolbar} />  Permet d'ajouter un espace pour déscendre le text sous l'entête - voir la prop css classes.content.marginTop*/}
                    <Presentation labels={labels.presentation_text} />
                    <Skills labels={labels.skills_text} />
                    <Career labels={labels.parcours_text} />
                    <Education labels={labels.education_text} />

                    <div id='formations'>
                        <TitleLabel titleName='Formations' />
                    </div>

                    <div id='realisations'>
                        <TitleLabel titleName='Réalisations' />
                    </div>
                </main>
            </div>
        </Container>
    );
}
