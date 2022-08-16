import React from 'react';
import style from './MyWorks.module.css'
import styleContainer from "../common/styles/container.module.css";
import Work from "./Work/Work";

function MyWorks() {
    return (
        <div className={style.myWorksBlock}>
            <div className={ ` ${styleContainer.container} ${style.worksContainer}`   }>
                <h3>My Works</h3>
                <div className={style.works}>
                    <Work nameProgect={"название проекта"} descriptionProgect={"краткое описание"}/>
                    <Work nameProgect={"название проекта"} descriptionProgect={"краткое описание"}/>
                    <Work nameProgect={"название проекта"} descriptionProgect={"краткое описание"}/>
                    <Work nameProgect={"название проекта"} descriptionProgect={"краткое описание"}/>
                    <Work nameProgect={"название проекта"} descriptionProgect={"краткое описание"}/>
                </div>

            </div>

        </div>
    );
}

export default MyWorks;
