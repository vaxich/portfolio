import React, {useEffect, useRef, useState} from 'react';

import './App.css';
//import './BackGround.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skils from "./Skils/Skills";
import About from "./About/About";
import {Route, Routes} from "react-router-dom";
import Contact from "./Contact/Contact";
import {MyWorks} from "./MyWorks/MyWorks";

import OneProject from "./MyWorks/OneProject/OneProject";

// @ts-ignore (no type declarations for vantajs)
import NET from 'vanta/dist/vanta.net.min'

import backgroundCounter3 from "./common/photo/counter3.png";
import Smoothie from "./common/photo/Smoothie.png";

import html5 from "./common/icon/html-5.png"
import css3 from "./common/icon/css.png"
import js from "./common/icon/js.png"
import react from "./common/icon/react.png"



export const myWorksObject = [
    {
        id:"1",
        title:"Социальная сеть",
        slug: 'socialnaya-set',
        percentCompleted: "70%",
        description: "bla-bla-bla",
        linkProgect: "http",
        lingGitHub:"http bla-bla",
        urlImg:""
    },
    {
        id: "2",
        title:"Счётчик версия № 3",
        slug: 'counter3',
        percentCompleted: "100%",
        description: "функционал у счетчика такой-же как и в первой версии, но работает с использованием REDUX",
        linkProgect: "https://vaxich.github.io/counter-Wednesday/",
        lingGitHub:"https://github.com/vaxich/counter-Wednesday",
        urlImg:backgroundCounter3

    },
    {
        id: "3",
        title:"Smoothie",
        slug: 'smoothie',
        percentCompleted: "100%",
        description: "Вёрстка страницы. Сделана на GULP и SCSS",
        linkProgect: "https://vaxich.github.io/Smoothie/dist/",
        lingGitHub:"https://github.com/vaxich/Smoothie",
        urlImg:Smoothie

    }
]

export const mySkills = [
    {
        id:"1",
        title:"HTML",
        percentCompleted: "70%",
        description: "bla-bla-bla",
        skillAvatar:html5

    },
    {
        id:"2",
        title:"CSS",
        percentCompleted: "70%",
        description: "bla-bla-bla",
        skillAvatar:css3

    },
    {
        id:"3",
        title:"JS",
        percentCompleted: "70%",
        description: "bla-bla-bla",
        skillAvatar:js

    },
    {
        id:"4",
        title:"REACT",
        percentCompleted: "70%",
        description: "bla-bla-bla",
        skillAvatar:react

    }
]

function App() {

    const [vantaEffect, setVantaEffect] = useState<any>(0)
    const myRef = useRef(null)
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                NET({
                    el: myRef.current,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    scale: 1.00,
                    scaleMobile: 1.00,
                    color: 0x0028fc,
                    backgroundColor: 0x0,
                    maxDistance: 18.00,
                    spacing: 16.00
                })
            )
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])

    return (
        <div ref={myRef} id="intro" className="App">
            <Header/>

            {/*<div id='stars'/>*/}
            {/*<div id='stars2'/>*/}
            {/*<div id='stars3'/>*/}
            {/*<div id='title'>*/}
            {/*</div>*/}
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/skils" element={<Skils stateSkills={mySkills}/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/projects" element={<MyWorks state={myWorksObject}/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/project/:slug" element={<OneProject/>}/>

            </Routes>
        {/*<Skils/>*/}

        </div>
    );
}

export default App;
