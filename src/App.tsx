import React, { useState, useEffect } from 'react';

import Navbar from './comp/Navbar';
import Main from './comp/About/Main';
import MainContact from './comp/Contact/MainContact';
import './App.css';
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import FooterComp from './comp/FooterComp';
import NumberPage from './comp/NumberPage';
import BurgerNavbar from './comp/BurgerNavbar';
const App = () => {
  const [isBorderActive, setIsBorderActive] = useState<boolean>(false);
  const [burgerActive, setBurgerActive] = useState<boolean>(false);
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
        backgroundColor: burgerActive ? 'rgb(0, 3, 15)' : 'rgb(255, 240, 222)',
        transition: 'border 0.5s ease-in-out, background-color 0.5s ease-in-out',
      }}
    >
      <div
        style={{
          opacity: isBorderActive || burgerActive ? 0 : 1,
          transition: 'opacity 0.5s ease-in-out',
        }}
      >
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/contact' element={<MainContact />} />
        </Routes>
      </div>
      <Navbar setIsBorderActive={setIsBorderActive} setBurgerActive={setBurgerActive} burgerActive={burgerActive} />

      <NumberPage />
    </div>
  );
};

export default App;
