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
                        <h3> <span className={style.creativ}>Creative </span> <span className={style.job}>Developer</span> </h3>
                        <p className={style.text}>My name is David Parker. I am a graphic designer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional a graphic designer, I have acquired the skills and knowledge.</p>
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
