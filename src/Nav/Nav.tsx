import React from 'react';
import style from './Nav.module.css'
import {Link} from "react-router-dom";


function Nav() {
    return (
        <div className={style.nav}>
                <Link className={style.textStyle} to="/">Main</Link>
                <Link className={style.textStyle} to="/skils">Skills</Link>
                <Link className={style.textStyle} to="/about">About me</Link>
                <Link className={style.textStyle} to="/projects">Projects</Link>
                <Link className={style.textStyle} to="/contact">Contacts</Link>
            {/*<a className={style.textStyle} href="">Главная</a>*/}
            {/*<a className={style.textStyle} href="">Скилы</a>*/}
            {/*<a className={style.textStyle} href="">Проекты</a>*/}
            {/*<a className={style.textStyle} href="">Контакты</a>*/}

        </div>
    );
}

export default Nav;
