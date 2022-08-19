import React from 'react';
import style from './Nav.module.css'

function Nav() {
    return (
        <div className={style.nav}>
            <a className={style.textStyle} href="">Главная</a>
            <a className={style.textStyle} href="">Скилы</a>
            <a className={style.textStyle} href="">Проекты</a>
            <a className={style.textStyle} href="">Контакты</a>

        </div>
    );
}

export default Nav;
