import React, { useState, useEffect } from 'react';

import Navbar from './comp/Navbar';
import Main from './comp/About/Main';
import MainContact from './comp/Contact/MainContact';
import './App.css';
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import FooterComp from './comp/FooterComp';
import NumberPage from './comp/NumberPage';

const App = () => {
  const [isBorderActive, setIsBorderActive] = useState<boolean>(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (isBorderActive) {
      setTimeout(() => {
        setIsBorderActive(false);
      }, 1000);
    }
  }, [isBorderActive]);
  useEffect(() => {

    navigate('/');
  }, []);
  return (
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
      <NumberPage />
    </div>
  );
};

export default App;
