import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import gif from '../gif/VZvx.gif';

export default function NumberPage() {
  const location = useLocation();
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    if (location.pathname === '/') {
      setCurrentIndex(0); 
    } else if (location.pathname === '/contact') {
      setCurrentIndex(1);
    }
  }, [location]);

  return (
    <div style={{
      position: 'absolute',
      bottom: 0,
      right: 0,
      textAlign: 'right',
      paddingBottom: 40,
      zIndex: 1000
    }}>
      <div style={{ 
        overflow: 'hidden', 
        height: '250px', 
        width: '250px', 
        backgroundImage: `url(${gif})`, // Встановлюємо GIF як фон
        backgroundSize: 'cover', // Заповнюємо контейнер фоном
        backgroundPosition: 'center', // Центруємо фон
        display: 'flex', // Використовуємо flexbox
        justifyContent: 'center', // Центруємо по горизонталі
        alignItems: 'center', 
      }}>
        <div
          className="carousel"
          style={{
            transition: 'transform 0.5s ease',
            transform: `translateY(-${currentIndex * 100}%)`, // Змінюємо на 100% для правильного переміщення
            display: 'flex', // Використовуємо flexbox для центрування заголовків
            flexDirection: 'column', // Розміщуємо заголовки в колонку
            height: '100%', // Займаємо всю висоту контейнера
          }}
        >
          <h1 style={{ fontSize: 250, color: 'rgb(255, 240, 222)', margin: 0, height: '250px' }}>1</h1>
          <h1 style={{ fontSize: 250, color: 'rgb(255, 240, 222)', margin: 0, height: '250px' }}>2</h1>
        </div>
      </div>
    </div>
  );
}
