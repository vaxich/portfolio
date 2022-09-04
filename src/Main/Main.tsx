import React from 'react';
import style from './Main.module.css'
import styleContainer from '../common/styles/container.module.css'
import {Link} from "react-router-dom";

function Main() {
    return (
        <div className={styleContainer.container}>
            <div className={style.mainBlock}>
                <div >
                    <p className={style.mainText}>Hello , </p>
                    <h3 className={style.mainText}>I`m  <span className={style.mainSpanText}>PAVEL DEDELYUK</span></h3>
                    <h3> <span className={style.creativ}>novice  </span> <span className={style.job}>Developer</span> </h3>
                    <Link className={style.textStyle} to="/contact">
                        <a className={style.mainButton} href="">Download CV</a>
                    </Link>



                </div>

            </div>



        </div>
    );
}

export default Main;
