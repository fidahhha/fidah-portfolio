import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Main.css";
import "typeface-inter";
import { FaLinkedinIn, FaEnvelope, FaBars, FaGithub } from "react-icons/fa";
import FirstWatchPrototype from "./Images/FirstWatchPrototype.png";

function Home() {
  const location = useLocation();
  const splitLocation = location.pathname.split("/");
  const [isOpen, setIsOpen] = useState(false);
  const [showMenuIcon, setShowMenuIcon] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    if (window.innerWidth <= 800) {
      setShowMenuIcon(true);
    } else {
      setShowMenuIcon(false);
      setIsOpen(false); // Close the menu when screen size is above 800px
    }
  };

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  // Add event listener for window resize and scroll
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
            <h3>Figma ∙  Next.js ∙  CSS</h3>
          <img src={FirstWatchPrototype} alt="FirstWatchPrototype" />
        </div>
      </header>
    </div>
  );
}

export default Home;
