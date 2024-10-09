import React, { useState, useRef } from 'react';

interface CarouselItem {
    image: string;
    name: string;
    position: string;
    linkedin: string;
    telegram: string;
    eMail: string;
    skype: string;
}

const items: CarouselItem[] = [
    {
        image: 'https://i.ibb.co/z7kNPg1/customer.jpg',
        name: 'John Smith',
        position: 'Team Lead',
        linkedin: '#',
        telegram: '#',
        eMail: '#',
        skype: '#'
    },
    {
        image: 'https://i.ibb.co/8KGzHBm/customer2.jpg',
        name: 'Other Developer',
        position: 'Prod worker',
        linkedin: '#',
        telegram: '#',
        eMail: '#',
        skype: '#'
    },
];

export default function TeamSection() {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
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

            carouselRef.current.style.transform = `translateX(${translateValue}px)`;
        }
    };

    const handleTouchEnd = () => {
        handleMouseUp();
    };

    return (
        <section style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '50px 0  50px 40px', flexWrap: 'wrap' }}>
            <div style={{ maxWidth: 400 }}>
                <h1 style={{ margin: 0 }}>The team</h1>
                <p style={{ margin: 0 }}>
                    Meet the guys and gals who make it all happen. As a team, we’re extremely confident — but individually, we’re humble, respectful, and aggressively focused on results.
                </p>
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
                style={{ overflow: 'hidden', maxWidth: 400, cursor: 'grab' }}
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
                        alignItems: 'center',
                    }}
                >
                    {items.map((item, index) => (
                        <div key={index} style={{ width: '100%', flexShrink: 0, padding: '0 10px' }}>
                            <img
                                width='400px' // Можна прибрати, якщо ви задаєте ширину через CSS
                                src={item.image}
                                alt="customer"
                                style={{
                                    width: '100%',
                                    maxHeight: '500px', // Встановіть фіксовану висоту
                                    pointerEvents: 'none',
                                    objectFit: 'cover', // Щоб зображення не спотворювалося
                                    transition: 'transform 0.5s ease',
                                    transform: `scale(${currentIndex === index ? 1 : 0.9})`
                                }}
                            />
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
                                <div>
                                    <h4 style={{ margin: 0 }}>{item.name}</h4>
                                    <h4 style={{ margin: 0 }}>{item.position}</h4>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', paddingRight: 20 }}>
                                    <a href={item.linkedin}>Linkedin</a>
                                    <a href={item.eMail}>E-mail</a>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', paddingRight: 20 }}>
                                    <a href={item.telegram}>Telegram</a>
                                    <a href={item.skype}>Skype</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
