import React, { useEffect, useRef, useState } from 'react';
import './Navbar.css';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

interface NavbarProps {
    setIsBorderActive: React.Dispatch<React.SetStateAction<boolean>>;
}

function Navbar({ setIsBorderActive }: NavbarProps) {
    const [isInverted, setIsInverted] = useState(false);
    const navbarRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    const location = useLocation(); // Отримуємо поточний маршрут

    // Функція для отримання кольору кнопки в залежності від маршруту
    const getButtonStyle = (path: string) => {
        return location.pathname === path ? { color: '#233bf7'} : {};
    };

    return (
        <div
            ref={navbarRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                mixBlendMode: 'difference',
                color: 'white',
              }}
        >
            <div style={{
                display: 'flex',
                alignItems: 'center',
                padding: '20px 65px',
                justifyContent: 'space-between',
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: 150, width: '100%' }}>
                   
                   <h1 
                        onClick={() => {
                            setIsBorderActive(true);
                            setTimeout(() => {
                                navigate('/');
                            }, 500);
                        }} 
                        className="navButton"
                        style={getButtonStyle('/')}
                   >
                       About
                   </h1>
                   
                   <h1 
                        onClick={() => {
                            setIsBorderActive(true);
                            setTimeout(() => {
                                navigate('contact');
                            }, 500);
                        }} 
                        className="navButton"
                        style={getButtonStyle('/contact')}
                   >
                       Contact
                   </h1>
                 
                   {/* <h1 
                        onClick={() => {
                            setIsBorderActive(true);
                            setTimeout(() => {
                                navigate('login');
                            }, 500);
                        }} 
                        className="navButton"
                        style={getButtonStyle('/login')}
                   >
                       Login
                   </h1> */}
              
                </div>

                <div onClick={() => setIsBorderActive(true)}>
                    <h1>LOGO</h1>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
