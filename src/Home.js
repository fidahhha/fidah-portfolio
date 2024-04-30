import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Main.css";
import "typeface-inter";
import { FaLinkedinIn, FaEnvelope, FaBars, FaGithub } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import parking from "./Images/parking.jpg";
import kawena from "./Images/kawena.jpg";
import firstwatch from "./Images/firstwatch.jpg";
import projectmanagement from "./Images/projectmanagement.jpg";
import cms from "./Images/cms.jpg";

function Home() {
  const location = useLocation();
  const splitLocation = location.pathname.split("/");
  const [isOpen, setIsOpen] = useState(false);
  const [showMenuIcon, setShowMenuIcon] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const projectsContainerRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    if (window.innerWidth <= 800) {
      setShowMenuIcon(true);
    } else {
      setShowMenuIcon(false);
      setIsOpen(false); 
    }
  };

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const scrollToProjects = (e) => {
    e.preventDefault(); 
  
   
    const projectsContainerPosition = projectsContainerRef.current.getBoundingClientRect();
    
 
    const offset = 200;
    window.scrollTo({
      top: projectsContainerPosition.top - offset,
      behavior: "smooth",
    });
  };
  
  

  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div className="Home">
      <header className="App-header">
        <nav className={scrolling ? "navbar activestate" : "navbar"}>
          <ul className="navbar">
            {showMenuIcon && (
              <FaBars className="menu-icon" onClick={toggleMenu} />
            )}
            <div className="home-page-element">
              <li>
                <Link to="/home">Fidah Ali</Link>
              </li>
            </div>
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
        <div className="Home-Container">
          <h1>Welcome!</h1>
          <h2>
            <span
              style={{
                display: "inline-block",
                animation: "spin 2s linear infinite",
              }}
            >
              &#127800;
            </span>{" "}
            Scroll down for my projects{" "}
            <span
              style={{
                display: "inline-block",
                animation: "spin 2s linear infinite",
              }}
            >
              &#127800;
            </span>
          </h2>
          <p>
            Here, you'll find a blend of personal passion projects and
            university assignments that showcase my dedication to creativity,
            problem-solving, and continuous learning. Each project reflects my
            commitment to exploring new ideas and pushing boundaries in design.
            Feel free to explore and get in touch!
          </p>
          <FaArrowDown className="arrow" size={20} onClick={scrollToProjects} />
        </div>

        <div className="Pcontainer">
          <div className="projects-container" ref={projectsContainerRef}>
            <div className="project">
              <img src={kawena} alt="Kawena" />
              <Link to="/kawena">
                <div className="overlay">Kawena Designs</div>
              </Link>
            </div>
            <div className="project">
              <img src={firstwatch} alt="FirstWatch" />
              <Link to="/firstwatch">
                <div className="overlay">Cybersecurity Alarms App</div>
              </Link>
            </div>
            <div className="project">
              <img src={parking} alt="ParkingApp" />
              <Link to="/parking">
                <div className="overlay">Parking App</div>
              </Link>
            </div>
            <div className="project">
              <img src={cms} alt="UoWCMS" />
              <Link to="/cms">
                <div className="overlay">Content Management System</div>
              </Link>
            </div>
            <div className="project">
              <img src={projectmanagement} alt="React" />
              <Link to="/react">
                <div className="overlay">Project Management Application</div>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
