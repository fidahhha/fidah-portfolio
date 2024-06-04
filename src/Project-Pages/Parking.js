import React, { useEffect } from "react";
import "./Main.scss";
import "typeface-inter";

// Icons
import { FaGithub, FaFigma, FaAndroid, FaMicrosoft } from "react-icons/fa";

// Images
import background from "../Images/BG-Kawena.jpg";
import parking from "../Images/parkingprototype2.png";

// Components
import Navigation from "../Components/Navigation";

function Home() {
  useEffect(() => {
    document.title = "Parking App";
  }, []);

  return (
    <div className="Home">
      <header className="App-header">
        <Navigation />
        <div className="Hero">
          {/* <img src={background} alt="Background"></img> */}
          <div className="text-overlay">
            <h1>Ticket Ease</h1>
            <p className="SubHeader">Parking app to manage tickets and find parking.</p>
          </div>
        </div>

        <div className="projects-container">
          <div class="project">
            <h1>Timeline</h1>
            <p>May 15 2024 - 15 Nov 2024</p>
          </div>
          <div className="project">
            <h1>My Role</h1>
            <p>UX/UI Designer</p>
          </div>
          <div className="project">
            <h1>Tools</h1>
            <div className="icon-wrapper">
              <div className="icon-container">
                <FaFigma className="icon" size={20} />
                <span className="tag">Figma</span>
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
            <img src={parking} className="ParkingImg"></img>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
