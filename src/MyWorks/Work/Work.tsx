import React from 'react';
import style from './Work.module.css'
import {Link} from "react-router-dom";


type PropsWorkType = {
    key: string
    id: string
    title: string
    percentCompleted: string
    description: string
    linkProgect: string
    lingGitHub: string
}

function Work(props: any) {

    return (
        <div className={style.WorkBlock}>
            <div className={style.workImg}>
                <Link className={style.textStyle} to="/project" >
                    Посмотреть
                </Link>






            </div>

            <h2 className={style.workText}>{props.title}</h2>
            <p className={style.workAbout}>{props.description}</p>
        </div>
    );
}

export default Work;