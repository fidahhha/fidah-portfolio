import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Project-Pages/Main.scss";
import "typeface-inter";
import { FaLinkedinIn, FaEnvelope, FaBars, FaGithub } from "react-icons/fa";
import Navigation from "./Components/Navigation";
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
        <Navigation></Navigation>
      </header>
    </div>
  );
}

export default Home;
