import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Main.css";
import "typeface-inter";
import {
  FaLinkedinIn,
  FaEnvelope,
  FaBars,
  FaGithub,
  FaFigma,
  FaCss3,
  FaReact,
} from "react-icons/fa";
import KawenaPrototype from "./Images/KPrototype.png";
import LaptopMockup from "./LaptopMockup";
function Home() {
  // Declare variables
  const location = useLocation();
  const splitLocation = location.pathname.split("/");
  const [isOpen, setIsOpen] = useState(false);
  const [showMenuIcon, setShowMenuIcon] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [enlargedImage, setEnlargedImage] = useState(null);

  // Method to allow user to zoom into image
  const openImage = (imageSrc) => {
    // Setting the image we want enlarged
    setEnlargedImage(imageSrc);
  };

  // When called allows user to close image when clicked on again
  const closeImage = () => {
    // Closing the image we want enlarged
    setEnlargedImage(null);
  };

  // Toggling the navigation for open or closed
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    if (window.innerWidth <= 800) {
      // Show hamburger menu is the screen is 800px or smaller
      setShowMenuIcon(true);
    } else {
      // Hide hamburger menu when the screen is larger than 800px
      setShowMenuIcon(false);
    }
  };

  // Method to change colour of navigation when scrolling
  const changeBackground = () => {
    // Check if the window scrolled is greater or equal to 50px
    if (window.scrollY >= 50) {
      // Allow background to show for navbar
      setScrolling(true);
    } else {
      // If less than 50px don't show the colour of the navbar
      setScrolling(false);
    }
  };

  // Add event listener for window resize and scroll for navigation
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  useEffect(() => {
    document.title = "Kawena Designs";
  }, []);

  return (
    <div className="Home">
      <header className="App-header">
        <nav className={scrolling ? "navbar activestate" : "navbar"}>
          <ul className="navbar">
            {showMenuIcon && (
              <FaBars className="menu-icon" onClick={toggleMenu} />
            )}
            {/* Highlight the link/menu item that is currently active */}
            {/* Split location to extract current path from URL */}
            <div className={`main-elements ${isOpen ? "open" : ""}`}>
              <li className={splitLocation[1] === "" ? "active" : ""}>
                <Link to="/">Welcome!</Link>
              </li>
              <li className={splitLocation[1] === "about" ? "active" : ""}>
                <Link to="/about">About Me</Link>
              </li>
              <li className={splitLocation[1] === "home" ? "active" : ""}>
                <Link to="/home">Projects</Link>
              </li>
              <li className={splitLocation[1] === "contact" ? "active" : ""}>
                <Link to="/contact">Contact</Link>
              </li>
            </div>
            <div className="home-page-element">
              <li>
                <Link to="/home">Fidah Ali</Link>
              </li>
            </div>

            <div className="Icontainer">
              <div className="icon-container">
                <a
                  href="https://www.linkedin.com/in/fidah-ali/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className="icon" size={20} />
                </a>
                <a
                  href="mailto:alifidah2902@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaEnvelope className="icon" size={20} />
                </a>
                <a
                  href="https://github.com/fidahhha"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="icons" size={25} />
                </a>
              </div>
            </div>
          </ul>
        </nav>

        <div className="Hero-Container">
          <h1>Kawena Designs'</h1>
          <h2>Small business website (Peronal Project)</h2>
          <h3>Figma ∙ Next.js ∙ CSS</h3>
          {/* Call method to allow enlargement of image */}
          <img
            src={KawenaPrototype}
            alt="KawenaPrototype"
            onClick={() => openImage(KawenaPrototype)}
          />
          {/* Call method to close enlargement of image */}
          {enlargedImage && (
            <div className="overlay" onClick={closeImage}>
              <img
                src={enlargedImage}
                alt="Enlarged Image"
                className="enlarged-image"
              />
            </div>
          )}
        </div>
        <div className="FContainer">
          <h2>Description</h2>
          <p>
            I have had the absolute honor of creating a website for my friends
            small fashion/jewellery business Kawena Designs! Kawena designs is
            at the heart of Oahu, Hawaii. It is much more than a brand it is a
            celebration of unique designs, exquisite jewellery, and captivating
            clothing. Bringing 70s inspired fashion and a manifestation of
            artistry and cultural celebration.
          </p>
          <h2>Problem Statement</h2>
          <p>
            Despite its unique designs and cultural celebration, Kawena Designs,
            a small fashion and jewelry business located in Oahu, Hawaii, faces
            limitations in reaching a wider audience beyond its local community.
            The absence of a robust online presence and reliance on social media
            for order processing hinder the brand's ability to expand its reach
            effectively. Without a dedicated digital platform, the business
            owner faces challenges in managing orders efficiently and providing
            a seamless customer experience, limiting the brand's growth
            potential and impact.
          </p>
          <h2>Solution</h2>
          <p>
            To overcome these challenges, the solution involves developing a
            visually appealing website for Kawena Designs, serving as a digital
            storefront and marketing platform. This website will showcase the
            brand's unique designs and cultural-inspired fashion, providing a
            seamless browsing experience for potential customers worldwide.
            Additionally, by incorporating e-commerce functionality, the website
            will enable customers to purchase products online securely. This
            comprehensive digital solution will empower Kawena Designs to expand
            its reach, attract a broader audience, and streamline order
            processing, enhancing the brand's growth and impact in the fashion
            and jewelry industry.
          </p>
        </div>

        <div class="Kprojects-container">
          <div class="Kproject">
            <h1>My Role</h1>
            <p>UI Designer + Front-end developer</p>
          </div>
          <div class="Kproject">
            <h1>Tools</h1>
            <div class="Kicon-wrapper">
              <div className="Kicon-container">
                <FaFigma className="icon" size={20} />
                <span className="tag">Figma</span>
              </div>
              <div className="Kicon-container">
                <FaCss3 className="icon" size={20} />
                <span className="tag">CSS3</span>
              </div>
              <div className="Kicon-container">
                <FaReact className="icon" size={20} />
                <span className="tag">Next.js</span>
              </div>
            </div>
          </div>
        </div>
        <LaptopMockup />
      </header>
    </div>
  );
}

export default Home;
