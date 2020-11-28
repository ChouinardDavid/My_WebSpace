import React from 'react';
import styles from './header.module.scss';
import SectionForm from '../sectionForm/sectionsForm';
import TitleLabel from '../../titleLabel/titleLabel';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import PagesLinks from '../../pagesLinks/pagesLinks';
import { CSSTransition } from 'react-transition-group';

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('lg')]: {
            display: 'none',
        },
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        height: 200,
    },
    toolBar: {
        justifyContent: 'space-evenly',
    }
}));


const Header = (props) => {
    const { labels, pageLinkKeys, ...rest } = props;
    const classes = useStyles();

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <div id={labels.id} {...rest}>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className={classes.toolBar}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>

                    <div className={styles.titleDiv}>
                        {/* <Hidden xsDown implementation="css"> */}
                        <img className={styles.myImage} src='/photoPerso.png' />
                        {/* </Hidden> */}
                        <TitleLabel className={styles.headerTitle} titleName={labels.title} >
                            {/* className={styles.headerTitle} dangerouslySetInnerHTML={{ __html: labels.title }}> */}
                        </TitleLabel>
                    </div>

                </Toolbar>
            </AppBar>
            <PagesLinks pageLinkKeys={pageLinkKeys} mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
        </div>
    );
};

export default Header;


