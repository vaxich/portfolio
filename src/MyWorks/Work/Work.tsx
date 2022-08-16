import React from 'react';
import style from './Work.module.css'


type PropsWorkType = {
    nameProgect:string
    descriptionProgect:string
}

function Work(props: PropsWorkType) {
    return (
        <div className={style.WorkBlock}>
            <div className={style.workImg}>
                <a href="">посмотреть</a>
            </div>
            <h2>{props.nameProgect}</h2>
            <p>{props.descriptionProgect}</p>

        </div>
    );
}

export default Work;