import React from 'react';
import style from './Footer.module.css'
import styleContainer from '../common/styles/container.module.css'


function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={styleContainer.container  }>
                <div className={style.footerMain}>
                    <h3>Pavel Dedelyuk</h3>
                    <div className={style.footerSocial}>
                        <div className={style.footerImg}></div>
                        <div className={style.footerImg}></div>
                        <div className={style.footerImg}></div>
                        <div className={style.footerImg}></div>
                    </div>
                    <span>© 2022  All Rights Reserved.</span>
                </div>


            </div>



        </div>
    );
}

export default Footer;
