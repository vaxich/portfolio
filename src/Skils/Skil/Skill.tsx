import React from 'react';
import style from './Skil.module.css'

type PropsSkillType = {
    id: string,
    title:string,
    percentCompleted: string,
    description: string,
    skillAvatar:string
}

function Skill(props: PropsSkillType) {
    return (
        <div className={style.skil}>
            <div className={style.icon} style={{ backgroundImage: `url(${props.skillAvatar})` }}>

            </div>
            <h3>{props.title}</h3>
            <span className={style.description}>{props.description} </span>
        </div>
    );
}

export default Skill;