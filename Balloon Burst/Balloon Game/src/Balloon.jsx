import React, { useState, useEffect } from 'react';
import balloonImage from './assets/balloon.png';

const Balloon = ({ size, flying }) => {
  const [position, setPosition] = useState({ left: '81.7%', top: '512px' });
  const [isBurst, setIsBurst] = useState(false);

  useEffect(() => {
    if (flying && !isBurst) {
      const moveBalloon = setInterval(() => {
        setPosition({
          left: `${Math.random()  * 90 + 5}%`,
          top: `${Math.random() * 90 + 5}%`
        });
      }, 2000);
      return () => clearInterval(moveBalloon);
    }
  }, [flying, isBurst]);

  const handleBurst = () => {
    if (flying) {
      setIsBurst(true);
      console.log("bursted");

      setTimeout(() => {
        setPosition({ display: 'none' });
        
      }, 300); // Match the animation duration (0.3s)
    }
  };

  return (
    <img
      src={balloonImage}
      alt="Balloon"
      className={`absolute cursor-pointer transition-all duration-500 ease-in-out ${
        isBurst ? 'animate-burst' : ''
      }`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: position.left,
        top: position.top,
      }}
      onClick={handleBurst}
    />
  );
};

export default Balloon;