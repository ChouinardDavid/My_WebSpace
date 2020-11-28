import React from 'react';
import TitleLabel from '../../titleLabel/titleLabel';
import SectionForm from '../sectionForm/sectionsForm';
import styles from './career.module.scss';
import TimeLine from './../../timeLine/timeline';

const Career = (props) => {
    const { labels, ...rest } = props;

    return (
        <SectionForm id={labels.id} {...rest}>
            <TitleLabel titleName={labels.title} />
            <TimeLine emplois={labels.emplois} />
        </SectionForm>
    );
};

export default Career;
