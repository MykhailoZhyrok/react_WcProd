import React, { useState, useRef } from 'react';

interface CarouselItem {
  image: string;
}

export default function MeetSection() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const items: CarouselItem[] = [
    { image: 'https://i.ibb.co/0VkV2mx/personal-3.jpg' },
    { image: 'https://i.ibb.co/R4GBZ3z/personal.jpg' },

  ];

  const carouselRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef<boolean>(false);
  const startX = useRef<number>(0);
  const currentTranslate = useRef<number>(0);
  const prevTranslate = useRef<number>(0);
  const animationRef = useRef<number | null>(null);

  const nextSlide = () => {
    if (currentIndex !== items.length - 1) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      if(carouselRef.current){
        console.log(carouselRef.current.style.transform)
       }
    }

  };

  const prevSlide = () => {
    if (currentIndex !== 0) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
      
     if(carouselRef.current){
      console.log(carouselRef.current.style.transform)
     }
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
    prevTranslate.current = currentTranslate.current;


    if (carouselRef.current) {

      carouselRef.current.style.transition = 'none';
    }

    cancelAnimationFrame(animationRef.current!);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current && carouselRef.current) {
      const carouselWidth = carouselRef.current.offsetWidth;
      const moveDistance = e.clientX - startX.current;

      currentTranslate.current = prevTranslate.current + moveDistance;
      console.log(moveDistance)
      
      const translateValue = -currentIndex * carouselWidth + currentTranslate.current;


      carouselRef.current.style.transform = `translateX(${translateValue}px)`;
    }
  };

  const handleMouseUp = () => {
    if (isDragging.current) {
      isDragging.current = false;

      const moveBy = currentTranslate.current - prevTranslate.current;
      const threshold = 100;

      if (moveBy < -threshold) {
        nextSlide();
      } else if (moveBy > threshold) {
        prevSlide();
      }

      if (carouselRef.current) {
        carouselRef.current.style.transition = 'transform 0.5s ease';
        carouselRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
      }

      currentTranslate.current = -currentIndex * 100;
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    startX.current = e.touches[0].clientX;
    prevTranslate.current = currentTranslate.current;
    if (carouselRef.current) {
      carouselRef.current.style.transition = 'none';
    }
    cancelAnimationFrame(animationRef.current!);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging.current && carouselRef.current) {
      const carouselWidth = carouselRef.current.offsetWidth;

      const moveDistance = e.touches[0].clientX - startX.current;
      currentTranslate.current = prevTranslate.current + moveDistance;
      const translateValue = -currentIndex * carouselWidth + currentTranslate.current;
      console.log(translateValue)
      carouselRef.current.style.transform = `translateX(${translateValue}px)`;
    }
  };

  const handleTouchEnd = () => {
    handleMouseUp();
  };

  return (
    <section style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingLeft: 40, paddingBottom: 40, flexWrap: 'wrap' }}>
      <div style={{ flex: 1, paddingRight: 40,  }}>
        <h2 style={{ backgroundColor: 'black', color: 'white', fontSize: 24, padding: '10px 20px' }}>Meet The Prod</h2>
        <div style={{minWidth: 210}}>
          <p style={{ fontSize: 16, lineHeight: '1.5' }}>
            The Prod are energetic, experienced, and not afraid to give you a straight answer. We move fast, but we never rush... and we stay focused on results above all else – something you’ll see proof of from the moment you start working with us.
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: 20 }}>
          <i onClick={prevSlide}>
            <svg style={{ transform: 'rotate(180deg)', width: '26px', height: '26px', padding: 5 }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 8">
              <path d="M9.865 3.35H0v1.299h9.865L8.605 8 17 4 8.605 0z" fill={currentIndex === 0 ? "#bdbdbd" : "#0A0A15"} fillRule="evenodd"></path>
            </svg>
          </i>
          <p style={{ margin: '0 10px', textAlign: 'center' }}>{currentIndex + 1}/{items.length}</p>
          <i onClick={nextSlide}>
            <svg style={{ width: '26px', height: '26px', padding: 5 }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 8">
              <path d="M9.865 3.35H0v1.299h9.865L8.605 8 17 4 8.605 0z" fill={currentIndex === items.length - 1 ? "#bdbdbd" : "#0A0A15"} fillRule="evenodd"></path>
            </svg>
          </i>
        </div>
      </div>
      <div
        style={{ overflow: 'hidden', maxWidth: 600, maxHeight: 500, minWidth: 240, cursor: 'grab' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          ref={carouselRef}
          className="carousel"
          style={{
            display: 'flex',
            transition: 'transform 0.5s ease',
            transform: `translateX(-${currentIndex * 100}%)`,
            alignItems: 'center'
          }}
        >
          {items.map((item, index) => (
            <img
              key={index}
              style={{ width: '100%', height: '100%', pointerEvents: 'none', objectFit: 'cover', transition: 'transform 0.5s ease', transform: `scale(${currentIndex === index ? 1 : 0.9})` }}
              src={item.image}
              alt={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
