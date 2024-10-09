import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link, NavLink, useLocation } from 'react-router-dom';

interface NavbarProps {
  setIsBorderActive: React.Dispatch<React.SetStateAction<boolean>>;
  setIsBurgerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setBurgerActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function BurgerNavbar({ setIsBorderActive, setIsBurgerOpen, setBurgerActive }: NavbarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const getButtonStyle = (path: string) => {
    return location.pathname === path ? { color: '#ff8400', fontSize: 40 } : {};
  };
  
  return (
    <div style={{position: 'absolute'}}>
      <ul style={{ padding: 0, margin: 0 }}>
        <li style={{display: 'flex', alignItems: 'center'}}>
          <h1
            onClick={() => {
              setIsBorderActive(true);
              setIsBurgerOpen(false);
              setBurgerActive(false)
              setTimeout(() => {
                navigate('/');
              }, 500);
            }}

            style={getButtonStyle('/')}
          >
            01 About
          </h1>

        </li>
        <li style={{display: 'flex', alignItems: 'center'}}>
          <h1
            onClick={() => {
              setIsBorderActive(true);
              setIsBurgerOpen(false)
              setBurgerActive(false)

              setTimeout(() => {
                navigate('contact');
              }, 500);
            }}

            style={getButtonStyle('/contact')}
          >
            02 Contact
          </h1>

        </li>
      </ul>
    </div>
  )
}
