import React, { useState, useEffect } from 'react';
import background from './assets/backgroundImage.png';
import Balloon from './Balloon';
import AirPump from './AirPump';


const App = () => {
  const [balloonSize, setBalloonSize] = useState(50);
  const [isFlying, setIsFlying] = useState(false);

  const handlePump = () => {
    if (!isFlying) {
      setBalloonSize(prevSize => prevSize + 10);
    }
  };

  useEffect(() => {
    if (balloonSize > 100) {
      setIsFlying(true);
    }
  }, [balloonSize]);

  return (
    <div className="relative w-screen h-screen  from-blue-300 to-white overflow-hidden  ">
      <img className='w-full h-full' src={background} alt="" />
      <Balloon size={balloonSize} flying={isFlying} />
      <AirPump onPump={handlePump} />
    </div>
  );
};

export default App;
