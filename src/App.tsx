import React, { useState, useEffect } from 'react';

import Navbar from './comp/Navbar';
import Main from './comp/About/Main';
import MainContact from './comp/Contact/MainContact';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FooterComp from './comp/FooterComp';
import NumberPage from './comp/NumberPage';

const App = () => {
  const [isBorderActive, setIsBorderActive] = useState<boolean>(false);

  useEffect(() => {
    if (isBorderActive) {
      setTimeout(() => {
        setIsBorderActive(false);
      }, 1000);
    }
  }, [isBorderActive]);

  return (
    <Router>
    <div
      className="border-wrapper"
      style={{
        border: isBorderActive ? '25px solid rgb(255, 240, 222)' : '25px solid rgb(0, 3, 15)',
        transition: 'border 0.5s ease-in-out',
      }}
    >
      
      <div
        style={{
          opacity: isBorderActive ? 0 : 1,
          transition: 'opacity 0.5s ease-in-out',
        }}
      >
        
        <Routes>
          <Route path='/' element={<Main />} />

          <Route path='/contact' element={<MainContact />} />

        </Routes>
    


      </div>
      <Navbar setIsBorderActive={setIsBorderActive} />
      <NumberPage/>
    </div>
    </Router>
  );
};


export default App;
