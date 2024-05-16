import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Global.scss";
import "typeface-inter";
import { FaLinkedinIn, FaEnvelope, FaBars, FaGithub } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import parking from "./Images/parking.jpg";
import kawena from "./Images/kawena.jpg";
import firstwatch from "./Images/firstwatch.jpg";
import projectmanagement from "./Images/projectmanagement.jpg";
import cms from "./Images/cms.jpg";
import Navigation from "./Components/Navigation";
function Home() {
  const location = useLocation();
  const projectsContainerRef = useRef(null);
  
  // Function that allows user to click arrow to go down to projects
  const scrollToProjects = (e) => {
    e.preventDefault();

    //  Get the position of the projects container
    const projectsContainerPosition =
      projectsContainerRef.current.getBoundingClientRect();

    // Scroll to the projects container but offset it to get exact position
    const offset = 200;
    window.scrollTo({
      top: projectsContainerPosition.top - offset,
      // Scrolling animation effect
      behavior: "smooth",
    });
  };

  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div className="Home">
      <header className="App-header">
      <Navigation/>
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
