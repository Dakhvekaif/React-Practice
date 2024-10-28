import React from 'react';
import pumpImage from './assets/airpump.png'; // Example air pump image

const AirPump = ({ onPump }) => {
  return (
    <div
      className="absolute bottom-1 right-1 transform -translate-x-2 cursor-pointer "
      onClick={onPump}
    >
      <img src={pumpImage} alt="Air Pump" className=" w-80" />
    </div>
  );
};

export default AirPump;
