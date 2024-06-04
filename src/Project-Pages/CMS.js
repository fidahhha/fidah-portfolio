import React, { useState, useEffect } from "react";
import "./Main.scss";

// Icons
import { FaAndroid, FaJava } from "react-icons/fa";

// Images & Videos
import background from "../Images/BG-Kawena.jpg";
import video from "../Images/FWRecording.mp4";

// Components
import Navigation from "../Components/Navigation";
function CMS() {

  useEffect(() => {
    document.title = "UoW CMS";
  }, []);

  return (
    <div className="Home">
      <header className="App-header">
        <Navigation />
        <div className="Hero">
          {/* <img src={background} alt="Background"></img> */}
          <div className="text-overlay">
            <h1>UOW CMS</h1>
            <p className="SubHeader">Content Management System for core subjects in the university.</p>
          </div>
        </div>

        <div className="projects-container">
          <div className="project">
            <h1>My Role</h1>
            <p>Developer + Designer</p>
          </div>
          <div className="project">
            <h1>Tools</h1>
            <div className="icon-wrapper">
              <div className="icon-container">
                <FaAndroid className="icon" size={20} />
                <span className="tag">Android</span>
              </div>
              <div className="icon-container">
                <FaJava className="icon" size={20} />
                <span className="tag">Java</span>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="column">
            <div className="DetailsContainer">
              <h2>Description</h2>
              <p>
                This project involves developing a comprehensive parking ticket
                management app designed to alleviate the challenges faced by
                individuals in managing their parking tickets and finding car
                parks. The app aims to provide a centralized, user-friendly
                platform for tracking and resolving parking tickets efficiently.
                Key features include:
              </p>

              <h2>Problem Statement</h2>
              <p>
                Busy professionals often struggle with managing parking tickets
                due to their demanding schedules. The absence of a centralized,
                user-friendly system leads to potential fines, stress, and
                inefficiency. Manual processes cause frustration and confusion,
                especially in disputing tickets and tracking payments,
                ultimately affecting productivity and peace of mind.
              </p>
              <h2>Solution</h2>
              <p>
                A comprehensive parking ticket management app can address these
                issues. Featuring a centralized dashboard, the app will help
                users track and manage tickets efficiently, reducing missed
                deadlines. Intuitive guidance for disputes, automated processes,
                and enhanced payment visibility will streamline tasks, reduce
                stress, and improve overall satisfaction, allowing users to
                focus on more important activities. Users will also be able to
                locate nearby parkings to efficiently manage their times.
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
