import React from 'react';
import style from './Nav.module.css'
import {Link} from "react-router-dom";


function Nav() {
    return (
        <div className={style.nav}>
                <Link className={style.textStyle} to="/">Главная</Link>
                <Link className={style.textStyle} to="/skils">Скилы</Link>
                <Link className={style.textStyle} to="/about">Обо мне</Link>
                <Link className={style.textStyle} to="/projects">Проекты</Link>
                <Link className={style.textStyle} to="/contact">Контакты</Link>
            {/*<a className={style.textStyle} href="">Главная</a>*/}
            {/*<a className={style.textStyle} href="">Скилы</a>*/}
            {/*<a className={style.textStyle} href="">Проекты</a>*/}
            {/*<a className={style.textStyle} href="">Контакты</a>*/}

        </div>
    );
}

export default Nav;
