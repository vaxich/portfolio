import React from 'react';
import style from './Main.module.css'
import styleContainer from '../common/styles/container.module.css'
import {Link} from "react-router-dom";

function Main() {
    return (
        <div className={styleContainer.container}>
            <div className={style.mainBlock}>
                <div >
                    <h3 className={style.mainText}>PAVEL <span className={style.mainSpanText}>DEDELYUK</span></h3>
                    <h3> <span className={style.creativ}>Creative </span> <span className={style.job}>Developer</span> </h3>
                    <Link className={style.textStyle} to="/contact">
                        <a className={style.mainButton} href="">Get in Touch</a>
                    </Link>



                </div>

            </div>



        </div>
    );
}

export default Main;
