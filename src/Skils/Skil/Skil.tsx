import React from 'react';
import style from './Skil.module.css'

type PropsSkilType = {
    title:string
    description: string
}

function Skil(props: PropsSkilType) {
    return (
        <div className={style.skil}>
            <div className={style.icon}>

            </div>
            <h3>{props.title}</h3>
            <span className={style.description}>{props.description} </span>
        </div>
    );
}

export default Skil;