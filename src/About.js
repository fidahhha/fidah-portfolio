import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Main.css";
import "typeface-inter";
import { FaLinkedinIn } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaBars } from 'react-icons/fa';
function About() {
  const location = useLocation();
  const splitLocation = location.pathname.split("/");

  return (
    <div className="About">
      <header className="App-header">
        <nav>
          <ul className="navbar">
            <div className="main-elements">
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
      </header>
    </div>
  );
}

export default About;
