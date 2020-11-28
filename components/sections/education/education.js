import React from 'react';
import TitleLabel from '../../titleLabel/titleLabel';
import SectionForm from '../sectionForm/sectionsForm';
import { parcours_text } from '../../../labels/fr';
// import styles from '../../styles/formations.module.scss';

const Education = (props) => {
    const { labels, ...rest } = props;

    return (
        <SectionForm id={labels.id} {...rest}>


        </SectionForm>
    );
};

export default Education;