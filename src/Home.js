import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Main.css";
import "typeface-inter";
import { FaLinkedinIn, FaEnvelope, FaBars } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import parking from "./Images/parking.jpg";

function Home() {
  const location = useLocation();
  const splitLocation = location.pathname.split("/");
  const [isOpen, setIsOpen] = useState(false);
  const [showMenuIcon, setShowMenuIcon] = useState(false);
  const projectsContainerRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    if (window.innerWidth <= 600) {
      setShowMenuIcon(true);
    } else {
      setShowMenuIcon(false);
      setIsOpen(false); // Close the menu when screen size is above 600px
    }
  };

  // Add event listener for window resize
  useEffect(() => {
    handleResize(); // Call the function on component mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  const scrollToProjects = () => {
    projectsContainerRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="Home">
      <header className="App-header">
        <nav>
          {showMenuIcon && (
            <FaBars className="menu-icon" onClick={toggleMenu} />
          )}
          <ul className="navbar">
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
            </div>
          </ul>
        </nav>

        <div className="Home-Container">
          <h1>Welcome!</h1>
          <p>Scroll down to see my projects</p>
          <FaArrowDown className="arrow" size={20} onClick={scrollToProjects} />
        </div>

        <div className="projects-container" ref={projectsContainerRef}>
          <div>One</div>
          <div>Two</div>
          <div>Three</div>
          <div>Four</div>
          <div>Five</div>
          <div>Six</div>
        </div>
      </header>
    </div>
  );
}

export default Home;
