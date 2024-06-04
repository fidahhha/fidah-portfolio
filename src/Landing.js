import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Global.scss";

// Icons
// import { FaGithub, FaAdobe } from "react-icons/fa";
import {SiNextdotjs, SiReact, SiCss3, SiHtml5, SiJavascript} from "react-icons/si";
import { FaArrowDown } from "react-icons/fa";
import Figma from "./Images/Figma.svg";
import SCSS from "./Images/scss.svg";
import AS from "./Images/AndroidStudio.png";
import PowerPoint from "./Images/powerpoint.svg";
import Github from "./Images/github.svg";
import Coursera from "./Images/coursera.svg"
import html from "./Images/html.svg"
import javascript from "./Images/javascript.svg"
import css from "./Images/css.svg"
import java from "./Images/java.svg"
// Images
import kawena from "./Images/KawenaPrototype.png";
import parking from "./Images/parkingprototype.png";
import firstwatch from "./Images/FirstWatchPrototype2.png";
import projectmanagement from "./Images/reactPrototype.png";
import CMS from "./Images/CMSPrototype.png";

// Components
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
        <Navigation />
        <div className="Home-Container">
          <h1>Hi! I'm Fidah</h1>
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

        <div className="Projects-Container" ref={projectsContainerRef}>
          {/* Kawena Designs' Project Container */}
          <div className="rectangle">
            <div className="description">
              <h2>E-Commerce Project</h2>
              <h1>Kawena Designs'</h1>
              <p>
                Polynesian culture and 70s inspired small business, based in
                Hawaii, USA.
              </p>
              <SiNextdotjs className="column-icon" />
              <img src={Figma} className="column-icon"></img>
              <img src={SCSS} className="column-icon"></img>
              <div>
                {" "}
                <Link to="/Kawena"><button>View Project</button></Link>
              </div>
            </div>
            <img src={kawena} alt="Kawena" />
          </div>

          {/* First Watch Project Container */}
          <div className="rectangle">
            <img src={firstwatch} alt="firstwatch" />
            <div className="description">
              <h2>Cybersecurity Alarms App (Client Based)</h2>
              <h1>First Watch</h1>
              <p>
                Focusing on delivering real-time alarm notifications and
                streamlined event management.
              </p>
              <img src={AS} className="column-icon"></img>
              <img src={java} className="column-icon"></img>
              <img src={Figma} className="column-icon"></img>
              <img src={PowerPoint} className="column-icon"></img>
              <img src={Github} className="column-icon"></img>
              <div>
                {" "}
                <Link to="/FirstWatch"><button>View Project</button></Link>
              </div>
            </div>
          </div>

          {/* Parking Application Project Container */}
          <div className="rectangle">
            <div className="description">
              <h2>Case Study</h2>
              <h1>Ticket Ease</h1>
              <p>
                Parking app to easily find parking and pay or dispute existing
                tickets.
              </p>
              <img src={Coursera} className="column-icon"></img>
              <img src={Figma} className="column-icon"></img>
              <div>
                {" "}
                <Link to="/Parking"><button>View Project</button></Link>
              </div>
            </div>
            <img src={parking} alt="parking" />
          </div>

          {/* Project Management Application Project Container */}
          <div className="rectangle">
            <img src={projectmanagement} alt="projectmanagement" />
            <div className="description">
              <h2>Project Management Application</h2>
              <h1>University of Waikato</h1>
              <p>
                React application to view, add, delete and sort all projects.
              </p>
              <SiReact className="column-icon" />
              <img src={css} className="column-icon"></img>
              <img src={html} className="column-icon"></img>
              <img src={javascript} className="column-icon"></img>
              <div>
                {" "}
                <Link to="/React"><button>View Project</button></Link>
              </div>
            </div>
          </div>

          {/* CMS Project Container */}
          <div className="rectangle">
            <div className="description">
              <h2>Content Management System (CMS)</h2>
              <h1>University of Waikato</h1>
              <p>
                Responsive android based application to access all course
                subjects.
              </p>
              <img src={AS} className="column-icon"></img>
              <img src={java} className="column-icon"></img>
              <div>
                {" "}
                <Link to="/CMS"><button>View Project</button></Link>
              </div>
            </div>
            <img src={CMS} alt="CMS" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
