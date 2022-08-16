import React from 'react';
import style from './skils.module.css'
import styleContainer from '../common/styles/container.module.css'
import Skil from "./Skil/Skil";

function Skils() {
    return (
        <div className={style.skilsBlock}>
            <div className={ ` ${styleContainer.container} ${style.skilsContainer}`   }>
                <h2  className={style.title}>Skils</h2>
                <div className={style.skils}>
                    <Skil title={"JS"} description={"ut labore et dolore magna aliqua Ut enim"}/>
                    <Skil title={"CSS"} description={"ut labore et dolore magna aliqua Ut enim"}/>
                    <Skil title={"React"} description={"ut labore et dolore magna aliqua Ut enim"}/>

                </div>
            </div>

        </div>
    );
}

export default Skils;
