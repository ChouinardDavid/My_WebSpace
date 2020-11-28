import React from 'react';
import styles from './pagesLinks.module.scss';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import MyListItemCustom from './myListItemCustom/myListItemCustom';
import Hidden from '@material-ui/core/Hidden';
import { SocialIcon } from 'react-social-icons';
import { Toolbar } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
    drawer: {
        [theme.breakpoints.up('lg')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
        marginTop: 150,
    },
    toolbar: theme.mixins.toolbar,
}));


const PagesLinks = (props) => {
    /*window,*/
    const { mobileOpen, handleDrawerToggle, pageLinkKeys, ...rest } = props;
    const classes = useStyles();

    // https://material-ui.com/components/drawers/#responsive-drawer
    // const container = window !== undefined ? () => window().document.body : undefined;


    const drawer = (
        <>
            <Toolbar />
            <div className={classes.drawerContainer}>
                {/* <div className={classes.toolbar} />  Permet d'ajouter un espace à droite du "drawer"*/}
                <List>
                    {pageLinkKeys.map(pageLinkKey => {
                        return <MyListItemCustom
                            key={pageLinkKey.id}
                            id={pageLinkKey.id}
                            title={pageLinkKey.link || pageLinkKey.title} />
                    })}
                    <Divider />

                </List>
                <div className={styles.socialIcons}>
                    <SocialIcon className={styles.icon} url='https://www.linkedin.com/in/david-chouinard/' />
                    <SocialIcon className={styles.icon} url='https://github.com/ChouinardDavid' />
                </div>
            </div>
        </>
    )

    return (
        <nav className={classes.drawer} {...rest}>
            <Hidden lgUp implementation="css">
                <Drawer
                    // container={container}
                    variant="temporary"
                    anchor="left"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    transitionDuration={300}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    {drawer}
                </Drawer>
            </Hidden>

            <Hidden mdDown implementation="css">
                <Drawer
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    open
                >
                    {drawer}
                </Drawer>
            </Hidden>
        </nav>
    );
};

export default PagesLinks;
