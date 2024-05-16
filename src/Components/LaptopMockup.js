import React from 'react';
import './LaptopMockup.scss';
import prototype from "../Images/laptop-mockup.png";
import wireframe from "../Images/KHome.png";
import wireframe1 from "../Images/KAbout.png";
import wireframe2 from "../Images/KLogin.png";
import wireframe3 from "../Images/KCart.png";
import wireframe4 from "../Images/KContact.png";
import wireframe5 from "../Images/KFAQ.png";
import wireframe6 from "../Images/KReturns.png";
import wireframe7 from "../Images/KSelectedItem.png";
import wireframe8 from "../Images/KShipping.png";
import wireframe9 from "../Images/KShop.png";
import wireframe10 from "../Images/KWishlist.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const LaptopMockup = () => {
  // Array to hold the number of screens
  const screens = Array.from({ length: 11 });

  // Array of wireframe images
  const wireframes = [
    wireframe,
    wireframe1,
    wireframe2,
    wireframe9,
    wireframe7,
    wireframe10,
    wireframe3,
    wireframe8,
    wireframe4,
    wireframe5,
    wireframe6,
  ];

  // Function to handle scroll event
  const handleScroll = () => {};

  return (
    <Carousel>
        {/* Iterating over the wireframes array */}
      {wireframes.map((image, index) => (
        <div key={index}>
          <div className="laptop-container">
            <img src={prototype} alt="Laptop Frame" className="laptop-frame" />
            <div className="wireframe-container" onScroll={handleScroll}>
                {/* Allows index to start at 1 rather than 0 */}
              <img src={image} alt={`Wireframe ${index + 1}`} className="wireframe" />
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default LaptopMockup;
