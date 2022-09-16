import React, {useEffect, useRef, useState} from 'react';
import './App.css';
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
import backgroundSmoothie from "./common/photo/Smoothie.png";
import backgroundHelFly from "./common/photo/HelFly.png";
import backgroundNewsman from "./common/photo/newsman.png";

import html5 from "./common/icon/html-5.png"
import css3 from "./common/icon/css.png"
import js from "./common/icon/js.png"
import typeScript from "./common/icon/typescript.png"
import react from "./common/icon/react.png"
import redux from "./common/icon/redux.png"
import git from "./common/icon/git.png"
import unitTest from "./common/icon/unit-testing.png"
import nodeJs from "./common/icon/node-js.png"



export const myWorksObject = [
    {
        id:"1",
        title:"HELFLY",
        slug: 'helfly',
        percentCompleted: "100%",
        description: "Вёрстка страницы. Сделана на GULP и SCSS",
        linkProgect: "https://vaxich.github.io/HELYFLY/dist/",
        lingGitHub:"https://github.com/vaxich/HELYFLY",
        urlImg:backgroundHelFly
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
        urlImg:backgroundSmoothie

    },
    {
        id: "4",
        title:"Newsman",
        slug: 'newsman',
        percentCompleted: "100%",
        description: "Моё первое SPA. На github.io почему то не получает данные с API. пробовал newsapi.org и https://mediastack.com. Локально рабоатет",
        linkProgect: "https://vaxich.github.io/newsman/",
        lingGitHub:"https://github.com/vaxich/newsman",
        urlImg:backgroundNewsman

    }
]

export const mySkills = [
    {
        id:"1",
        title:"HTML",
        percentCompleted: "70%",
        skillAvatar:html5

    },
    {
        id:"2",
        title:"CSS",
        percentCompleted: "70%",
        skillAvatar:css3

    },
    {
        id:"3",
        title:"JavaScript",
        percentCompleted: "70%",
        skillAvatar:js

    },
    {
        id:"4",
        title:"REACT",
        percentCompleted: "70%",
        skillAvatar:react

    },
    {
        id:"5",
        title:"TypeScript",
        percentCompleted: "70%",
        skillAvatar:typeScript

    },
    {
        id:"6",
        title:"Redux",
        percentCompleted: "70%",
        skillAvatar:redux

    },
    {
        id:"7",
        title:"Git",
        percentCompleted: "70%",
        skillAvatar:git

    },
    {
        id:"8",
        title:"Unit testing",
        percentCompleted: "70%",
        skillAvatar:unitTest

    },
    {
        id:"9",
        title:"Node Js",
        percentCompleted: "70%",
        skillAvatar:nodeJs

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
