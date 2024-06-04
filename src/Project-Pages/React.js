import React, { useState, useEffect } from "react";
import "./Main.scss";

// Icons
import { FaReact, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
// Images & Videos
import background from "../Images/BG-Kawena.jpg";
import video from "../Images/FWRecording.mp4";

// Components
import Navigation from "../Components/Navigation";
function CMS() {
  useEffect(() => {
    document.title = "React Application";
  }, []);

  return (
    <div className="Home">
      <header className="App-header">
        <Navigation />
        <div className="Hero">
          {/* <img src={background} alt="Background"></img> */}
          <div className="text-overlay">
            <h1>Project Management System</h1>
            <p className="SubHeader">React application that allows users to manage their projects.</p>
          </div>
        </div>

        <div className="projects-container">
        <div class="project">
            <h1>Timeline</h1>
            <p>25 May 2023 - 09 Jun 2023</p>
          </div>
          <div className="project">
            <h1>My Role</h1>
            <p>Developer + Designer</p>
          </div>
          <div className="project">
            <h1>Tools</h1>
            <div className="icon-wrapper">
              <div className="icon-container">
                <FaReact className="icon" size={20} />
                <span className="tag">React.js</span>
              </div>
              <div className="icon-container">
                <FaCss3 className="icon" size={20} />
                <span className="tag">CSS</span>
              </div>
              <div className="icon-container">
                <FaHtml5 className="icon" size={20} />
                <span className="tag">HTML</span>
              </div>
              <div className="icon-container">
                <SiJavascript className="icon" size={20} />
                <span className="tag">JavaScript</span>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="column">
            <div className="DetailsContainer">
              <h2>Description</h2>
              <p>
                Create a project management application using React, HTML, CSS
                and JavaScript. The application should allow users to manage
                their projects, including viewing, adding, deleting, and sorting
                projects.
              </p>

              <h2>Project Approach</h2>
              <p>
                <ul>
                  <li>
                    <b>Understand Requirements:</b> Review the assignment brief
                    to understand the functional and non-functional
                    requirements.
                  </li>
                  <br></br>
                  <li>
                    <b>Define Features:</b> List all the features that the
                    application must have, including project listing, addition,
                    deletion, and sorting.
                  </li>
                  <br></br>
                  <li>
                    <b>Design the User Interface:</b> Plan a basic UI design
                    that includes forms for adding projects, project list
                    display, and sorting options.
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className="column">
            {/* <img src={parking} className="ParkingImg"></img> */}
          </div>
        </div>
      </header>
    </div>
  );
}

export default CMS;
