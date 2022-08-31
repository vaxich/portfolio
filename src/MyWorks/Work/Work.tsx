import React from 'react';
import style from './Work.module.css'
import {Link, useParams} from "react-router-dom";
import background from "../../common/photo/counter3.png";


function Work(props: any) {

    console.log(props.urlImg)


     return (
        <div className={style.WorkBlock} style={{ backgroundImage: `url(${props.urlImg})` }}>


            <h2 className={style.workText}>{props.title}</h2>
            <div className={style.workImg} >

                <Link className={style.textStyle} to={`/project/${props.slug}`} >
                    <button className={style.WorkButton}> Посмотреть</button>

                </Link>
            </div>

        </div>
    );
}

export default Work;