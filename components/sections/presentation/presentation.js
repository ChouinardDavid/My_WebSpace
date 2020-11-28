import React from 'react';
import styles from './presentation.module.scss';
import SectionForm from '../sectionForm/sectionsForm';
import TitleLabel from '../../titleLabel/titleLabel';
import Paper from '@material-ui/core/Paper';

const Presentation = (props) => {
    const { labels, ...rest } = props;
    return (
        <SectionForm id={labels.id} {...rest}>
            <TitleLabel titleName={labels.title} />
            <Paper elevation={3} className={styles.presentation}>
                <p> {labels.description} </p>
            </Paper>
        </SectionForm>
    );
};

export default Presentation;
