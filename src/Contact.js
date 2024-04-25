import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Main.css";
import "typeface-inter";
import { FaLinkedinIn, FaEnvelope, FaBars, FaGithub } from "react-icons/fa";

function Home() {
  const location = useLocation();
  const splitLocation = location.pathname.split("/");
  const [isOpen, setIsOpen] = useState(false);
  const [showMenuIcon, setShowMenuIcon] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    if (window.innerWidth <= 800) {
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

  useEffect(() => {
    document.title = "Contact";
  }, []);

  return (
    <div className="Home">
      {showMenuIcon && <FaBars className="menu-icon" onClick={toggleMenu} />}
      <header className="App-header">
        <nav>
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
              <a
                href="https://github.com/fidahhha"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="icons" size={25} />
              </a>
            </div>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Home;
