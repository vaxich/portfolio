import React from 'react';

import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skils from "./Skils/Skils";
import MyWorks from "./MyWorks/MyWorks";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Skils/>
      <MyWorks/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
