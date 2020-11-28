import React from 'react';

const DisplaySkill = (props) => {
    const skills = props.skills

    return (
        <ul>
            {skills.map((skill, index) => {
                return (
                    <li key={index}>
                        {skill.title || skill}
                        {skill.children && <DisplaySkill skills={skill.children} />}
                    </li>
                );
            }
            )}
        </ul>
    )
};

export default DisplaySkill;
