import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import './Carousel.css';

interface CarouselItem {
  title: string;
  description: string;
  image: string;
}

const items: CarouselItem[] = [
  {
    title: 'Meet The PetProd',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam odit minima tenetur quibusdam distinctio doloribus ipsam, sed pariatur voluptatibus magni nesciunt obcaecati similique esse vitae, itaque error, aut doloremque quia.',
    image: 'https://i.ibb.co/99S7NWp/main-city.jpg',
  },
  {
    title: 'Another Title',
    description: 'Another description here...',
    image: 'https://i.ibb.co/99S7NWp/main-city.jpg',
  },
  {
    title: 'Meet The PetProd',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam odit minima tenetur quibusdam distinctio doloribus ipsam, sed pariatur voluptatibus magni nesciunt obcaecati similique esse vitae, itaque error, aut doloremque quia.',
    image: 'https://i.ibb.co/99S7NWp/main-city.jpg',
  },
  {
    title: 'Meet The PetProd',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam odit minima tenetur quibusdam distinctio doloribus ipsam, sed pariatur voluptatibus magni nesciunt obcaecati similique esse vitae, itaque error, aut doloremque quia.',
    image: 'https://i.ibb.co/99S7NWp/main-city.jpg',
  },
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    trackMouse: true,
  });

  return (
    <div className="carousel-wrapper">
      <div className="carousel-container" {...handlers}>
        <section
          className="carousel"
          style={{
            transform: `translateX(-${currentIndex * (100 / 3)}%)`,
            transition: 'transform 0.3s ease',
          }}
        >
          {items.map((item, index) => (
            <div className="carousel-item" key={index}>
              <div style={{ width: '80%' }}>
                <h2 style={{ backgroundColor: 'black', color: 'white', fontSize: 20 }}>
                  {item.title}
                </h2>
                <div>
                  <p>{item.description}</p>
                </div>
              </div>
              <img style={{ maxWidth: '100%', minWidth: 200, pointerEvents: 'none' }} src={item.image} alt="City view" />
            </div>
          ))}
        </section>
      </div>
      <div className="carousel-controls">
        <button onClick={handlePrev} className="carousel-control carousel-control-prev">Prev</button>
        <span>{currentIndex + 1}/{items.length}</span>
        <button onClick={handleNext} className="carousel-control carousel-control-next">Next</button>
      </div>
    </div>
  );
};

export default Carousel;
