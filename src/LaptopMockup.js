import React, { useRef } from 'react';
import './Main.css';
import prototype from "./Images/laptop-mockup.png"
import wireframe from "./Images/KHome.png"

const LaptopMockup = () => {
  const laptopRef = useRef(null);

  // Function to handle scroll event
  const handleScroll = () => {
    // You can add any specific scroll handling logic here if needed
  };

  return (
    <div className="laptop-container" ref={laptopRef}>
      <img src={prototype} alt="Laptop Frame" className="laptop-frame" />
      <div className="wireframe-container" onScroll={handleScroll}>
        <img src={wireframe} alt="Wireframe 1" className="wireframe" />
      </div>
    </div>
  );
};

export default LaptopMockup;
