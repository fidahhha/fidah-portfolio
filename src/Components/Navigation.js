import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.scss";
import "typeface-inter";
import { FaLinkedinIn, FaEnvelope, FaBars, FaGithub } from "react-icons/fa";

function Navigation() {
  // Declare variables
  const location = useLocation();
  const splitLocation = location.pathname.split("/");
  const [isOpen, setIsOpen] = useState(false);
  const [showMenuIcon, setShowMenuIcon] = useState(false);
  const [scrolling, setScrolling] = useState(false);

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
    <nav className={scrolling ? "navbar activestate" : "navbar"}>
      <ul className="navbar">
        {showMenuIcon && <FaBars className="menu-icon" onClick={toggleMenu} />}
        {/* Highlight the link/menu item that is currently active */}
        {/* Split location to extract current path from URL */}
        <div className={`main-elements ${isOpen ? "open" : ""}`}>
          <li className={splitLocation[1] === "" ? "active" : ""}>
            <Link to="/">Welcome!</Link>
          </li>
          <li className={splitLocation[1] === "about" ? "active" : ""}>
            <Link to="/about">About Me</Link>
          </li>
          <li className={splitLocation[1] === "landing" ? "active" : ""}>
            <Link to="/">Projects</Link>
          </li>
          <li className={splitLocation[1] === "contact" ? "active" : ""}>
            <Link to="/contact">Contact</Link>
          </li>
        </div>
        <div className="home-page-element">
          <li>
            <Link to="/">Fidah Ali</Link>
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
              <FaGithub className="icon" size={25} />
            </a>
          </div>
        </div>
      </ul>
    </nav>
  );
}

export default Navigation;
