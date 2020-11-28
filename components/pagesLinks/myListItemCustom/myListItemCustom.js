import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import PersonIcon from '@material-ui/icons/Person';
import Link from 'next/link'
import styles from './myListItemCustom.module.scss';


const MyListItemCustom = (props) => {
    const { id, title, ...rest } = props

    return (
        <>
            <Divider />
            <Link href={'#' + id} passHref>
                <ListItem button>
                    <>
                        <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>
                        <ListItemText primary={title} />
                    </>
                </ListItem>
            </Link>


            {/* Une autre façon de faire les "links", mais en utilisant Material-UI plutôt que NextJS*/}
            {/* https://material-ui.com/guides/composition/#button */}
            {/* <Link href={'#' + id} passHref component={Link} href={'#' + id}>
                <ListItem button>
                    <>
                        <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>
                        <ListItemText primary={title} />
                    </>
                </ListItem>
            </Link> */}
        </>
    );
};

export default MyListItemCustom;
