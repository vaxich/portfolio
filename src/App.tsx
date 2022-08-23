import React from 'react';

import './App.css';
import './BackGround.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skils from "./Skils/Skils";
import About from "./About/About";
import {Route, Routes} from "react-router-dom";
import Contact from "./Contact/Contact";
import {MyWorks} from "./MyWorks/MyWorks";

import OneProject from "./MyWorks/OneProject/OneProject";

// const obj ={
//     ['1']: [
//         { id: '1', title: "HTML&CSS", percentCompleted: '70' },
//         { id: '2', title: "JS", percentCompleted: '90' },
//
//     ]
// }


const myWorksObject = [
    {
        id:"1",
        title:"Сочиальная сеть",
        percentCompleted: "70%",
        description: "bla-bla-bla",
        linkProgect: "http",
        lingGitHub:"http bla-bla"
    },
    {
        id: "2",
        title:"Счётчик версия № 3",
        percentCompleted: "10%",
        description: "bla-bla-bla",
        linkProgect: "http",
        lingGitHub:"http bla-bla"
    }
]

function App() {
    return (
        <div className="App">
            <Header/>

            <div id='stars'/>
            <div id='stars2'/>
            <div id='stars3'/>
            <div id='title'>
            </div>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/skils" element={<Skils/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/projects" element={<MyWorks state={myWorksObject}/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/project" element={<OneProject/>}/>

            </Routes>
        {/*<Skils/>*/}

        </div>
    );
}

export default App;
