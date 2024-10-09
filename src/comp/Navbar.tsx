import React, { useRef, useState } from 'react';
import './Navbar.css';
import { useLocation, useNavigate } from 'react-router-dom';
import BurgerNavbar from './BurgerNavbar';

interface NavbarProps {
    setIsBorderActive: React.Dispatch<React.SetStateAction<boolean>>;
    setBurgerActive: React.Dispatch<React.SetStateAction<boolean>>;
    burgerActive: boolean
}

function Navbar({ setIsBorderActive, setBurgerActive, burgerActive }: NavbarProps) {
    const navbarRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    const location = useLocation();
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);

    const getButtonStyle = (path: string) => {
        return location.pathname === path ? { color: '#233bf7' } : {};
    };

    return (
        <div ref={navbarRef} className='navbarCont'>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                padding: '20px 65px',
                justifyContent: 'space-between',
            }}>
                <div className='mobMenu'>
                    <div className={`burgerCont ${isBurgerOpen ? 'open' : ''}`} onClick={() => {
                        setBurgerActive(!burgerActive)
                        setIsBurgerOpen(!isBurgerOpen)
                    }}>
                        <div className='xCont' style={{opacity: isBurgerOpen? 1 : 0,
                            transition: 'opacity 0.2s ease-in-out',
                        }}>
                        <div className="burger-line"></div>
                            <div className="burger-line"></div>
                            <div className="burger-line"></div></div>
                        {isBurgerOpen ? '' : <h5 style={{ margin: 0, textAlign: 'center' }}>Menu</h5>}
                    </div>
                    <div>
                        {isBurgerOpen && (
                            <BurgerNavbar setIsBorderActive={setIsBorderActive} setIsBurgerOpen={setIsBurgerOpen} setBurgerActive={setBurgerActive} />

                        )}
                    </div>
                </div>

                <div className='navButton'>
                    <h1
                        onClick={() => {
                            setIsBorderActive(true);
                            if(burgerActive){
                                setBurgerActive(false);
                                setIsBurgerOpen(false);
                            }
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
                            if(burgerActive){
                                setBurgerActive(false);
                                setIsBurgerOpen(false);

                            }
                            setTimeout(() => {
                                navigate('contact');
                            }, 500);
                        }}
                        className="navButton"
                        style={getButtonStyle('/contact')}
                    >
                        Contact
                    </h1>
                </div>

                <div onClick={() => setIsBorderActive(true)}>
                    <h1>LOGO</h1>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
