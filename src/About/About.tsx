import React from 'react';
import style from './About.module.css'
import styleContainer from "../common/styles/container.module.css";
import Nav from "../Nav/Nav";

function About() {
    return (
        <div >
            <div className={styleContainer.container}>
                <div className={style.aboutContainer}>
                    <div className={style.aboutPhoto}>

                    </div>
                    <div className={style.AboutRight}>
                        <h3 className={style.aboutText}>PAVEL <span className={style.aboutSpanText}>DEDELYUK</span></h3>
                        <h3> <span className={style.creativ}>novice </span> <span className={style.job}>Developer</span> </h3>
                        <p className={style.text}>
                            My name is Pavel Dedelyuk. I am a novice developer. I am passionate about JavaScript and React development. I acquired skills and knowledge in IT-INCUBATOR. I am currently studying here. Here you can see my projects. they will be constantly updated.</p>
                        <div>
                            <a className={style.aboutButton} href="">Learn More</a>
                        </div>
                    </div>
                </div>

            </div>



        </div>
    );
}

export default About;
