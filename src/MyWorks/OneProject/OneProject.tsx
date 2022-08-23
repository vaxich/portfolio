import React from 'react';
import style from './OneProject.module.css'
import {Link} from "react-router-dom";




function OneProject(props: any) {

    return (
        <div className={style.block}>
            {/*<span className={style.text}>{props.state.title}</span>*/}
            {/*<span className={style.text}>{props.percentCompleted}</span>*/}
            <span className={style.text}>6666</span>

        </div>
    );
}

export default OneProject;