import React from 'react';
import style from './skils.module.css'
import styleContainer from '../common/styles/container.module.css'
import {mySkills} from "../App";
import Skill from "./Skil/Skill";

function Skills(props:any) {
    return (
        <div className={style.skilsBlock}>
            <div className={ ` ${styleContainer.container} ${style.skilsContainer}`   }>
                <h2  className={style.title}>I have tried many different technologies and am always open to new ones. Here are the ones I have experience with:</h2>
                <div className={style.skils}>
                    {
                        mySkills.map((skill) => {

                            return  (
                                <Skill  //отрисовываем компоненту Skill
                                    key={skill.id}
                                    id={skill.id}
                                    title={skill.title}
                                    skillAvatar={skill.skillAvatar}
                                    percentCompleted={skill.percentCompleted}


                                />
                            )
                        })
                    }


                </div>
            </div>

        </div>
    );
}

export default Skills;
