import React from 'react';
import style from './OneProject.module.css'
import {Link, useParams} from "react-router-dom";
import {myWorksObject} from "../../App";
import styleContainer from "../../common/styles/container.module.css";


function OneProject(props: any) {
    const {slug} = useParams()

    const project = myWorksObject.find(projectData => projectData.slug === slug)
    if (project) return (

        <div className={styleContainer.container}>
            <div className={style.oneProjectBlock}>
                <h3 className={style.oneProjectTitle}>{project.title}</h3>
                <div className={style.oneProjectImg}>

                </div>
                <div className={style.oneProjectMiniBlock}>
                    <h2>Наименование проекта</h2>
                    <p className={style.oneProjectText}>{project.title}</p>
                </div>
                <div className={style.oneProjectMiniBlock}>
                    <h2>Процент выполнения</h2>
                    <p className={style.oneProjectText}>{project.percentCompleted}</p>
                </div>
                <div className={style.oneProjectMiniBlock}>
                    <h2>Описание</h2>
                    <p className={style.oneProjectText}>{project.description}</p>
                </div>
                <div className={style.oneProjectMiniBlock}>
                    <h2>Ссылка на проект</h2>
                    <a className={style.oneProjectText} href={project.linkProgect} target="_blank">открой меня</a>
                </div>
                <div className={style.oneProjectMiniBlock}>
                    <h2>Ссылка на репозиторий</h2>
                    <a className={style.oneProjectText} href={project.lingGitHub} target="_blank">открой меня</a>
                </div>

            </div>



        </div>
    );
    return <h1>not found</h1>
}

export default OneProject;