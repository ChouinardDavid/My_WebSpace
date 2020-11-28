import React from 'react';
import TitleLabel from '../../titleLabel/titleLabel';
import SectionForm from '../sectionForm/sectionsForm';
import styles from './skills.module.scss';
import DisplaySkill from './displaySkills/displaySkills';
import Paper from '@material-ui/core/Paper';

const Skills = (props) => {
    const { labels, ...rest } = props;

    return (
        <SectionForm id={labels.id} className={styles.skills}>
            <TitleLabel titleName={labels.title} />
            <div className={styles.skillsGroups}>
                {labels.sections.map((section) => {
                    return (
                        <Paper key={section.id} elevation={3} className={styles.group}>
                            <h4>{section.title}</h4>
                            <DisplaySkill skills={section.children} />
                        </Paper>
                    );
                })}
            </div>
        </SectionForm>
    );
};

export default Skills;
